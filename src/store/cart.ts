import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { IProduct } from "@/database/product.model";

export interface CartStates {
  products: IProduct[];
}

export interface CartActions {
  addProduct: (product: IProduct) => void;
  removeProduct: (productId: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStates & CartActions>(
    (set, get) => ({
      products: [],
      addProduct: (product: IProduct) => {
        // const currentProducts = get().products;
        // const existingProducts = currentProducts.find(
        //   (p) => p.id === product.id,
        // );

        // if (existingProducts) {
        //   console.log("Product exists already!");
        // }

        set({ products: [...get().products, product] });
      },
      removeProduct: (productId: string) => {
        set({
          products: [...get().products.filter((p) => p.id !== productId)],
        });
      },
      removeAll: () => {},
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useCart;
