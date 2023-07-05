import Image from "next/image";
import logo from "public/logo.webp";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

import Hamburger from "../ui/Hamburger";

const Header = () => {
  return (
    <header>
      <div className=" flex justify-between items-center m-4 px-2 md:px-16">
        <div className="md:hidden">
          <Hamburger />
        </div>
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <ul className="hidden md:flex gap-x-10 font-bold">
          <li className="text-sm lg:text-lg">
            <Link href="category/Female">Female</Link>
          </li>
          <li className="text-sm lg:text-lg">
            <Link href="category/Male">Male</Link>
          </li>
          <li className="text-sm lg:text-lg">
            <Link href="category/Kids">Kids</Link>
          </li>
          <li className="text-sm lg:text-lg">
            <Link href="category/Sports">Sports</Link>
          </li>
          <li className="text-sm lg:text-lg">
            <Link href="/allproducts">All Products</Link>
          </li>
        </ul>
        <div
          className="bg-gray-300 rounded-full h-10 w-10
        flex justify-center items-center"
        >
          <ShoppingCart />
        </div>
      </div>
    </header>
  );
};

export default Header;
