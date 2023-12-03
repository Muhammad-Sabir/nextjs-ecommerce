import Image from "next/image";
import Link from "next/link";
import Rating from "@/components/Rating";
import { getProductById } from "@/lib/actions/product.action";
import AddToCartButton from "@/components/AddToCartButton";

export default async function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const product = await JSON.parse(
    JSON.stringify(await getProductById(params)),
  );

  if (!product) {
    return (
      <main className="mx-auto flex min-h-[50vh] items-center justify-center px-4 md:px-12 lg:w-[1300px]">
        <h1 className="text-center font-bold text-red-700">
          Product not found
        </h1>
      </main>
    );
  }

  return (
    <main className="mx-auto mt-8 px-4 md:px-12 lg:w-[1300px]">
      <Link
        className="rounded-sm bg-primaryBlue px-4 py-2 text-lg font-bold text-bgWhite"
        href="/products"
      >
        Back
      </Link>

      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Image
          src={product.image}
          alt={product.name}
          width={380}
          height={302}
          className="rounded-xl"
        />

        <div className="flex flex-col">
          <p className="text-lg font-semibold text-gray-400">
            {product.category}
          </p>

          <h1 className="text-2xl font-bold">{product.name}</h1>

          <p className="my-3 mb-auto pb-2 text-sm">
            <span className="block text-base font-bold">Description: </span>{" "}
            {product.description}
          </p>

          <Rating ratingVal={product.rating} numReviews={product.numReviews} />

          <h3 className="pt-2 text-sm font-bold text-blue-500">
            <span className="text-blackishBlue">Price: </span>${product.price}
          </h3>
        </div>

        <div className="flex flex-col justify-between rounded-xl border border-gray-300 bg-white p-8 sm:col-span-full lg:col-span-1">
          <h2 className="flex justify-around pt-2 text-base font-bold text-blue-500">
            <span className="text-lg  text-blackishBlue">Price: </span>$
            {product.price}
          </h2>

          <div className="mx-4 my-2 border-b border-gray-300"></div>

          <h2 className="flex justify-around pt-2 text-base font-bold text-blue-500">
            <span className="text-lg text-blackishBlue">Status: </span>
            {product.countInStock > 0 ? (
              <p className="text-green-600">In Stock</p>
            ) : (
              <p className="text-red-600">Out of Stock</p>
            )}
          </h2>

          <div className="mx-4 my-2 border-b border-gray-300"></div>

          <AddToCartButton product={product} />
        </div>
      </div>
    </main>
  );
}
