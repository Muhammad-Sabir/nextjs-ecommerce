"use client";

import Image from "next/image";
import useCart from "@/store/cart";
import { Product } from "@/types/product";
import { useState } from "react";

interface CartItemProps {
  product: Product;
  count: number;
  removeHandler: (productId: string) => void;
}

export default function CartItem({
  product,
  count,
  removeHandler,
}: CartItemProps) {
  const cart = useCart();
  const [total, setTotal] = useState(product.price * count);
  const [currentCount, setCurrentCount] = useState(count);

  const increaseCountHandler = () => {
    if (currentCount <= product.countInStock) {
      if (cart.changeCount(product.id, currentCount + 1)) {
        setTotal(product.price * (currentCount + 1));
        setCurrentCount(currentCount + 1);
      }
    }
  };

  const decreaseCountHandler = () => {
    if (cart.changeCount(product.id, currentCount - 1)) {
      setTotal(product.price * (currentCount - 1));
      setCurrentCount(currentCount - 1);
    }
  };

  return (
    <div className="mb-6 justify-between rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <Image
        src={product.image}
        alt="image"
        className="w-full rounded-lg sm:w-40"
        width={40}
        height={40}
        sizes="40vw"
      />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">{product.name}</h2>
        </div>
        <div className="mt-4 flex justify-between sm:mt-0 sm:block sm:space-x-6 sm:space-y-6">
          <div className="flex items-center border-gray-100">
            <span
              onClick={decreaseCountHandler}
              className="cursor-pointer rounded-l bg-gray-100 px-3.5 py-1 duration-100 hover:bg-primaryBlue hover:text-blue-50"
            >
              {" "}
              -{" "}
            </span>
            <input
              className="h-8 w-8 appearance-none border bg-white text-center text-xs outline-none"
              type="number"
              value={currentCount}
              min="1"
            />
            <span
              onClick={increaseCountHandler}
              className="cursor-pointer rounded-r bg-gray-100 px-3 py-1 duration-100 hover:bg-primaryBlue hover:text-blue-50"
            >
              {" "}
              +{" "}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div>
              <p className="text-sm">
                <span className="font-bold">Price: </span>
                {product.price.toFixed(2)} $
              </p>
              <p className="text-sm">
                <span className="font-bold">Total: </span>
                {total.toFixed(2)} $
              </p>
            </div>
            <svg
              onClick={() => removeHandler(product.id)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
