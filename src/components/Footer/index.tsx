import Link from "next/link";
import { RiLinkedinBoxFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="mt-16 w-screen bg-blackishBlue p-8 text-bgWhite lg:px-40">
      <h1 className="font-bold">ShopCart</h1>
      <p className="mt-2 text-justify">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
        temporibus nam soluta aspernatur, neque ut omnis aut unde, dolor facilis
        asperiores eius. Dolor sit amet consectetur adipisicing elit. Ullam id,
        harum aliquam dolorum ex magni voluptas vitae, possimus deserunt
        praesentium saepe esse. Facere, assumenda distinctio nemo voluptatum
        dolorum a dicta.
      </p>

      <div className="mx-20 my-12 border-b border-gray-500"></div>

      <div className="flex justify-between text-lg">
        <h3>
          Built by{" "}
          <Link
            href="https://www.linkedin.com/in/muhammad-sabir07/"
            className="font-bold italic underline"
          >
            Muhammad Sabir
          </Link>
        </h3>

        <Link href="https://www.linkedin.com/in/muhammad-sabir07/">
          <RiLinkedinBoxFill className="text-2xl" />
        </Link>
      </div>
    </footer>
  );
}
