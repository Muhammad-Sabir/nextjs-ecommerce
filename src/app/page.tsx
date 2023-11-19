import products from "@/products";
import Product from "@/components/Product";
import Hero from "../components/Hero/index";

export default function Home() {
  return (
    <main className="mx-auto px-4 md:px-12 lg:w-[1300px]">
      <Hero />

      <h1
        id="latest-products"
        className="ml-auto pb-12 pt-6 text-center font-bold text-blackishBlue"
      >
        Latest Products
      </h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => {
          return <Product product={product} key={product._id} />;
        })}
      </div>
    </main>
  );
}
