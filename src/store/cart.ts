import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Product } from "@/types/product";
import toast from "react-hot-toast";

export interface CartStates {
  products: { item: Product; count: number }[];
  subtotal: number;
}

export interface CartActions {
  addProduct: (item: Product) => boolean;
  changeCount: (productId: string, count: number) => boolean;
  removeProduct: (productId: string) => boolean;
  removeAll: () => boolean;
}

const useCart = create(
  persist<CartStates & CartActions>(
    (set, get) => ({
      products: [],
      subtotal: 0,

      addProduct: (item: Product) => {
        if (item.countInStock <= 0) {
          toast.error("Out of Stock.");
          return false;
        }

        const existingProductIndex = get().products.findIndex(
          (product) => product.item.id === item.id,
        );

        if (existingProductIndex !== -1) {
          const updatedProducts = [...get().products];

          if (updatedProducts[existingProductIndex].count < item.countInStock) {
            updatedProducts[existingProductIndex].count += 1;
            set({
              products: updatedProducts,
              subtotal: get().subtotal + item.price,
            });
          } else {
            toast.error("Cannot add more, already at maximum stock.");
            return false;
          }
        } else {
          set({
            products: [...get().products, { item, count: 1 }],
            subtotal: get().subtotal + item.price,
          });
        }

        toast.success("Product added to the cart successfully.");
        return true;
      },

      changeCount: (productId: string, count: number) => {
        if (count < 1) {
          toast.error("Either remove the product or have atleast 1.");
          return false;
        }

        const existingProductIndex = get().products.findIndex(
          (product) => product.item.id === productId,
        );

        if (existingProductIndex === -1) return false;

        const updatedProducts = [...get().products];

        if (count > updatedProducts[existingProductIndex].item.countInStock) {
          toast.error("Cannot add more, already at maximum stock.");
          return false;
        }

        const currentCount = updatedProducts[existingProductIndex].count;
        const price = updatedProducts[existingProductIndex].item.price;

        updatedProducts[existingProductIndex].count = count;

        const countDifference = count - currentCount;

        set({
          products: updatedProducts,
          subtotal: get().subtotal + price * countDifference,
        });

        return true;
      },

      removeProduct: (productId: string) => {
        const updatedProducts = [];
        const currProducts = get().products;
        let priceOfProduct = 0;

        for (const product of currProducts) {
          if (product.item.id === productId) {
            priceOfProduct = product.item.price * product.count;
          } else {
            updatedProducts.push(product);
          }
        }

        set({
          products: updatedProducts,
          subtotal: get().subtotal - priceOfProduct,
        });
        toast.success("Product removed from the cart.");
        return true;
      },

      removeAll: () => {
        set({ products: [], subtotal: 0 });
        toast.success("All products removed.");
        return true;
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useCart;
