import Product from "@/components/Product";
import { ProductType } from "@/types/product";
import Hero from "@/components/Hero/index";

export default async function Home() {
  const res = await fetch(`${process.env.URL}/api/products`);
  if (res.headers.get("Content-Type") !== "application/json") return;
  const products = await res.json();

  return (
    <main className="mx-auto px-4 md:px-12 lg:w-[1300px]">
      <Hero />

      <h1
        id="latest-products"
        className="pb-12 pt-6 text-center font-bold text-blackishBlue"
      >
        Latest Products
      </h1>
      <div className="grid gap-y-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product: ProductType) => {
          return <Product product={product} key={product._id} />;
        })}
      </div>
    </main>
  );
}
