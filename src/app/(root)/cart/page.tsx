"use client";
import useCart from "@/store/cart";
import { useState, useEffect } from "react";
import Loading from "./loading";

export default function Cart() {
  const [mounted, setMounted] = useState(false);

  const products = useCart.getState().products;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Loading />;
  }

  return (
    <main className="mx-auto mt-8 px-4 md:px-12 lg:w-[1300px]">
      <h1>Cart</h1>
      {products.map((product) => (
        <p key={product.item.id}>{product.item.name}</p>
      ))}
    </main>
  );
}
