"use client";

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

const Hamburger = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <section>
      <div
        className="md:hidden z-30 relative"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {toggle ? <GiHamburgerMenu /> : <RxCross2 className="absolute text-white text-4xl"/>}
      </div>

      {!toggle ? (
        <div className="md:hidden flex justify-center items-center text-center bg-black/80 w-2/3  h-screen absolute top-0 left-0 z-20">
          <ul className="gap-x-10 gap-y-4">
            <li className="text-4xl text-white">
              <Link href="/category/Female" target="_top">
                Female
              </Link>
            </li>
            <li className="text-4xl text-white">
              <Link href="/category/Male" target="_top">
                Male
              </Link>
            </li>
            <li className="text-4xl text-white">
              <Link href="/category/Kids" target="_top">
                Kids
              </Link>
            </li>
            <li className="text-4xl text-white">
              <Link href="/category/Sports" target="_top">
                Sports
              </Link>
            </li>
            <li className="text-4xl text-white">
              <Link href="/allproducts" target="_top">
                All Products
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </section>
  );
};

export default Hamburger;
