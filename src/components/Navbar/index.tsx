import Image from "next/image";
import Link from "next/link";
import logo from "$/logo.png";
import { RiShoppingCart2Line } from "react-icons/ri";

const links = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-5 text-blackishBlue">
      <Link className="flex items-center" href="/">
        <Image src={logo} alt="Img" width={35} height={35} />
        <h1 className="text-xl font-bold md:flex">ShopCart</h1>
      </Link>

      <ul className="hidden items-center gap-8 text-xl font-bold text-primaryBlue md:flex">
        {links.map((link) => {
          return (
            <li key={link.name}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          );
        })}
      </ul>

      <div className="flex gap-4">
        <Link
          className="hidden items-center rounded-md bg-blackishBlue px-3 py-1 font-semibold text-bgWhite md:flex md:gap-2"
          href="/cart"
        >
          <p className="hidden text-lg md:flex">Cart</p>
          <RiShoppingCart2Line className="text-xl" />
        </Link>
      </div>
    </nav>
  );
}
