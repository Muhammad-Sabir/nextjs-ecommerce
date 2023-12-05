"use client";
import useCart from "@/store/cart";
import { useState, useEffect } from "react";
import Loading from "./loading";
import CartItem from "@/components/CartItem/index";

export default function Cart() {
  const cart = useCart();
  const [mounted, setMounted] = useState(false);
  const [products, setProducts] = useState(cart.products);

  const removeHandler = (productId: string) => {
    const updatedProducts = [
      ...products.filter((p) => p.item.id !== productId),
    ];
    setProducts(updatedProducts);
    cart.removeProduct(productId);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Loading />;
  }

  return (
    <main className="relative mx-auto mt-8 px-4 md:px-12 lg:w-[1300px]">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="max-w-full justify-between px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {products.map((product) => {
            return (
              <CartItem
                key={product.item.id}
                product={product.item}
                count={product.count}
                removeHandler={removeHandler}
              />
            );
          })}
        </div>

        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:sticky md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">$129.99</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">$0.00</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">$134.98 USD</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            Check out
          </button>
        </div>
      </div>
    </main>
  );
}
