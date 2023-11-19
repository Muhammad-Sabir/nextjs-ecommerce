import Link from "next/link";

export default function Hero() {
  return (
    <div className="my-8 flex h-[50vh] flex-col items-center justify-center gap-4 rounded-xl bg-gradient-to-r from-blue-900 to-primaryBlue p-4 text-center text-bgWhite md:p-16 ">
      <h1 className="text-5xl font-bold">Elevating Your Shopping Experience</h1>
      <h2 className="text-2xl">
        Transforming Every Purchase into a Memorable Experience!
      </h2>

      <Link
        href="#latest-products"
        className="mt-12 rounded-lg bg-primaryBlue p-3 px-4 text-lg font-bold text-bgWhite"
      >
        Shop now
      </Link>
    </div>
  );
}
