import Image from "next/image";
import Link from "next/link";
import { TfiMenu } from "react-icons/tfi";
import { RiShoppingCart2Line } from "react-icons/ri";

import logo from "$/logo.png";

const links = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  return (
    <nav className="text-blackishBlue flex items-center justify-between py-5">
      <Link className="flex items-center" href="/">
        <Image src={logo} alt="Img" width={35} height={35} />
        <h1 className="hidden text-xl font-bold md:flex">ShopCart</h1>
      </Link>

      <ul className="text-primary hidden items-center gap-8 text-xl font-bold md:flex">
        {links.map((link) => {
          return (
            <li key={link.name}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          );
        })}
      </ul>

      <Link className="hidden items-center md:flex" href="/cart">
        <RiShoppingCart2Line className="text-3xl" />
        <p className="bg-blackishBlue text-bgWhite text-md hidden rounded-full px-3 py-1 md:flex">
          6
        </p>
      </Link>

      <Link className="text-primary text-4xl md:hidden" href="/login">
        <TfiMenu />
      </Link>
    </nav>
  );
}
