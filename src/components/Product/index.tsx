import Link from "next/link";
import Image from "next/image";
import { IProduct } from "@/database/product.model";
import Rating from "../Rating/index";

export default function Product({ product }: { product: IProduct }) {
  return (
    <Link
      href={`/products/${product._id}`}
      className="block rounded-md border-4 border-cardWhite bg-white bg-clip-border p-4"
    >
      <div className="relative h-[200px]">
        <Image
          className="overflow-hidden object-cover"
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          // width={249}
          // height={198}
          // layout="responsive"
        />
      </div>

      <div className="pt-4">
        <p className="text-sm text-gray-400">{product.category}</p>
        <h3 className="max-w-xs truncate py-2 font-bold text-blackishBlue">
          {product.name}
        </h3>
        <Rating ratingVal={product.rating} numReviews={product.numReviews} />
        <p className="pt-2 text-sm font-bold text-blue-500">${product.price}</p>
      </div>
    </Link>
  );
}
