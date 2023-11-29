import Image from "next/image";
import Link from "next/link";
import { RiShoppingCart2Line } from "react-icons/ri";

import logo from "$/logo.png";

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
        <Link className="hidden items-center md:flex" href="/cart">
          <RiShoppingCart2Line className="text-3xl" />
          <p className="hidden rounded-full bg-blackishBlue px-2 py-1 text-sm text-bgWhite md:flex">
            6
          </p>
        </Link>
      </div>
    </nav>
  );
}
