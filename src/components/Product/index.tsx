import Link from "next/link";
import Image from "next/image";
import products from "@/products";

type Product = {
  _id: string;
  name: string;
  image: string;
  category: string;
  price: number;
};

export default function Product({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product._id}`}
      className="border-cardWhite flex flex-col items-center rounded-md border-4 bg-transparent bg-clip-border p-4 sm:items-stretch"
    >
      <Image src={product.image} alt={product.name} width={350} height={350} />

      <div className="pt-4 text-left">
        <p className="text-sm text-gray-400">{product.category}</p>
        <h3 className="text-blackishBlue max-w-xs overflow-hidden overflow-ellipsis whitespace-nowrap py-2 font-bold">
          {product.name}
        </h3>
        <p className="text-sm font-bold text-blue-500">{product.price}</p>
      </div>
    </Link>
  );
}
