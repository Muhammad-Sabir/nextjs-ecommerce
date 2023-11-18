import products from "@/products";
import Product from "@/components/Product";

export default function Home() {
  return (
    <main>
      <h1 className="text-blackishBlue pb-12 pt-6 font-bold">
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
