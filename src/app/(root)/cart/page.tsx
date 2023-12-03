"use client";
import useCart from "@/store/cart";

export default function Cart() {
  const products = useCart.getState().products;

  return (
    <main className="mx-auto mt-8 px-4 md:px-12 lg:w-[1300px]">
      <h1>Cart</h1>
      {products.map((product) => (
        <p key={product.name}>{product.name}</p>
      ))}
    </main>
  );
}
