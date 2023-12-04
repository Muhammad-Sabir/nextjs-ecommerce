import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Product } from "@/types/product";
import toast from "react-hot-toast";

export interface CartStates {
  products: { item: Product; count: number }[];
}

export interface CartActions {
  addProduct: (item: Product) => void;
  decreaseCount: (productId: string) => void;
  removeProduct: (productId: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStates & CartActions>(
    (set, get) => ({
      products: [],
      addProduct: (item: Product) => {
        const existingProductIndex = get().products.findIndex(
          (product) => product.item.id === item.id,
        );

        if (existingProductIndex !== -1) {
          const updatedProducts = [...get().products];
          updatedProducts[existingProductIndex].count += 1;
          set({ products: updatedProducts });
        } else {
          set({ products: [...get().products, { item, count: 1 }] });
        }

        toast.success("Product added to the cart successfully.");
      },
      decreaseCount: (productId: string) => {
        const existingProductIndex = get().products.findIndex(
          (product) => product.item.id === productId,
        );

        if (existingProductIndex !== -1) {
          const updatedProducts = [...get().products];
          updatedProducts[existingProductIndex].count = Math.max(
            1,
            updatedProducts[existingProductIndex].count - 1,
          );
          set({ products: updatedProducts });
        }
      },
      removeProduct: (productId: string) => {
        set({
          products: [...get().products.filter((p) => p.item.id !== productId)],
        });
        toast.success("Product removed from the cart.");
      },
      removeAll: () => {
        set({ products: [] });
        toast.success("All products removed.");
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useCart;
