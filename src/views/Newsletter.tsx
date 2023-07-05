import Link from "next/link";

const Newsletter = () => {
  return (
    <div className="flex justify-center mt-48">
      <div className="relative bg-white">
        <h1 className="text-[65px] md:text-8xl lg:text-[120px] text-gray-100 font-bold">Newsletter</h1>

        <div className="absolute top-0 left-[10px] md:left-[100px] text-center">
          <h1 className="text-2xl lg:text-3xl font-bold mb-4">Subscribe Our Newsletter</h1>
          <p className="text-sm lg:text-lg text-gray-500 mb-6">
            Get the latest information and promo offers directly
          </p>
          <div className="flex items-center">
            <input
              type="text"
              name="email"
              placeholder="Input email address"
              className="border-[1px] border-black text-xs lg:text-base pl-2 h-6 w-56"
            ></input>
            <button className="bg-gradient-to-br
         from-black to-gray-500 rounded-lg text-white font-bold px-4 py-2 lg:py-1 text-xs lg:text-base ml-2">
              <Link href="/allproducts">Get Started</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
