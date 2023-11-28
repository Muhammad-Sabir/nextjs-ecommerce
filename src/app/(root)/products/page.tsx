import Product from "@/components/Product";
import { IProduct } from "@/database/product.model";
import Hero from "@/components/Hero/index";
import { getProducts } from "@/lib/actions/product.action";

export default async function Products() {
  const products = await getProducts();

  if (!products) {
    console.log(products);
    return <></>;
  }

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
        {products.map((product: IProduct) => {
          return <Product product={product} key={product._id} />;
        })}
      </div>
    </main>
  );
}
