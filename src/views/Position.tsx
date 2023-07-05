import React from "react";
import Image from "next/image";
import hoodie from "public/hoodie.webp";
import Link from "next/link";
import AddtoCart from "@/components/ui/AddtoCart";

const Position = () => {
  return (
    <div>
      <div className="flex justify-center text-end md:justify-end ">
        <span className="text-3xl md:text-4xl font-bold mt-32 w-full md:w-96">
          Unique and Authentic Vintage Designer Jewellary
        </span>
      </div>
      <div className=" flex flex-col md:flex-row items-center justify-center md:justify-center gap-x-8 md:-mt-4">
        {/* left div */}
        <div className=" bg-white p-2 relative flex-1">
          <h1 className="md:pr-2 text-[72px] md:text-[80px] text-gray-100 font-bold text-center md:text-start">
            Different from others
          </h1>
          <div className="absolute top-10 left-0">
            <div className="flex gap-x-10 ml-2 pt-2 md:pt-0">
              <div>
                <h1 className="font-semibold mb-2 text-sm md:text-base">
                  Using Good Quality Materials
                </h1>
                <p className="text-gray-500 text-xs md:text-sm">
                  Lorem ipsem dolor sit amt, consectetur adipiscing elit
                </p>
              </div>
              <div>
                <h1 className="font-semibold mb-2 text-sm md:text-base">
                  100% Handmade Products
                </h1>
                <p className="text-gray-500 text-xs md:text-sm">
                  Lorem ipsem dolor sit amt, consectetur adipiscing elit
                </p>
              </div>
            </div>

            <div className="flex md:mt-16 mt-12 ml-2 gap-x-10">
              <div>
                <h1 className="font-semibold mb-2 text-sm md:text-base">
                  Modern Fashion Design
                </h1>
                <p className="text-gray-500 text-xs md:text-sm">
                  Lorem ipsem dolor sit amt, consectetur adipiscing elit
                </p>
              </div>
              <div>
                <h1 className="font-semibold mb-2 text-sm md:text-base">
                  Discount for Bulk Orders
                </h1>
                <p className="text-gray-500 text-xs md:text-sm">
                  Lorem ipsem dolor sit amt, consectetur adipiscing elit
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Center div */}
        <div className="flex-1 md:flex-[2] ">
          <Image src={hoodie} alt="Sweatshirt" />
        </div>
        {/*right div*/}
        <div className="flex-1 text-center">
          <p className="text-xs md:text-sm text-gray-500 mt-4 md:mt-0">
            This piece is ethically crafted in our small family-owned workshop
            in Peru with unmatched attention to detail and care. The Natural
            color is the actual natural color of the fiber, undyed and 100%
            traceable.
          </p>
          <button
            className="bg-gradient-to-br
         from-black to-gray-500 text-white font-bold px-2 py-2 text-xs mt-2 rounded-lg"
          >
            <Link href="/allproducts">See all Products</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Position;
