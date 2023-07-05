import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import heroImage from "public/heroImg.webp";
import herologo1 from "public/herologo1.webp";
import herologo2 from "public/herologo2.webp";
import herologo3 from "public/herologo3.webp";
import herologo4 from "public/herologo4.webp";

const Hero = () => {
  return (
    <section className="mt-16 py-4 flex flex-col md:flex-row gap-y-16 md:gap-x-32 justify-center md:justify-evenly items-center">
      <div className="md:w-1/4">
        <Badge
          className="bg-mygrey text-blue-600 font-bold 
        rounded-md py-2 px-4 mb-4"
        >
          Sale 70%
        </Badge>
        <h1 className="scroll-m-20 text-4xl font-bold lg:text-5xl">
          An Industrial Take on Streetwear
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-2">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <Button
          className="mt-8 py-6 bg-gradient-to-br
         from-black to-gray-500 leading-[14px]"
        >
          <ShoppingCart className="mr-4 h-4 w-4" /> Start <br />
          Shopping
        </Button>
        <div className="flex mt-8 gap-x-6">
          <Image src={herologo1} alt="herologo1" />
          <Image src={herologo2} alt="herologo2" />
          <Image src={herologo3} alt="herologo3" />
          <Image src={herologo4} alt="herologo4" />
        </div>
      </div>

      <div className="relative md:justify-normal md:flex-none md:shrink-0">
        <div className="md:w-[410px] md:h-[410px] w-80 h-80 rounded-full bg-orange-100">
        <div className="flex items-center justify-center h-full">
      <div className="md:w-[600px] md:h-[450px] w-96 h-96 relative">
        <div className="absolute inset-0 -left-2 flex md:left-6 w-[350px]">
          {/* flex in line above is causing the image to stretch */}
          <Image src={heroImage} alt="heroImage" width={550} />
        </div>
        </div>
        </div>
        </div>  
      </div>

{/* <div className="relative flex justify-center md:justify-normal md:flex-none">
  <div className="md:w-[410px] md:h-[410px] w-80 h-80 rounded-full bg-orange-100">
    <div className="flex items-center justify-center h-full">
      <div className="md:w-[420px] md:h-[420px] w-96 h-96 relative">
        <div className="absolute inset-0 left-10 flex items-center justify-center">
          <Image src={heroImage} alt="heroImage" width={550} />
        </div>
      </div>
    </div>
  </div>
</div> */}

{/* <div className="relative flex justify-center md:justify-normal md:flex-none">
  <div className="md:w-[410px] md:h-[410px] w-80 h-80 rounded-full bg-orange-100">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="md:w-[410px] md:h-[410px] w-80 h-80 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src={heroImage} alt="heroImage" width={500} />
        </div>
      </div>
    </div>
  </div>
</div> */}



    </section>
  );
};

export default Hero;
