"use client";

import { Product } from "@/types/product";
import useCart from "@/store/cart";

export default function AddToCartButton({ product }: { product: Product }) {
  const cart = useCart();

  const addToCartHandler = () => {
    cart.addProduct(product);
  };

  return (
    <button
      onClick={addToCartHandler}
      className="rounded-xl border-4 border-primaryBlue p-2 px-4 font-bold text-primaryBlue"
    >
      Add to Cart
    </button>
  );
}
