const proddetail = () => {
  return (
    <div className="mt-10">
      <div className="relative mb-2">
        <h1 className="text-8xl font-bold text-gray-100">Overview</h1>
        <p className="absolute top-11 left-0 font-bold text-lg">
          Product Information
        </p>
      </div>
      <div className="h-[1px] w-full bg-gray-400"></div>
      <div className="flex  text-gray-500 text-sm mt-10">
        <h2 className="font-bold flex-1">PRODUCT DETAILS</h2>
        <p className="flex-1 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia rem
          ratione explicabo soluta neque eos hic iure! Fuga quia doloribus
          architecto ipsam, debitis blanditiis ex cum harum itaque, quam
          incidunt?
        </p>
      </div>
      <div className="flex  text-gray-500 text-sm mt-10">
        <h2 className="font-bold flex-1">PRODUCT CARE</h2>
        <ul className="flex-1 list-disc font-bold pl-6">
            <li className="text-black">Hand wash using cold water</li>
            <li className="text-black">Do not use bleach</li>
            <li className="text-black">Hang to dry</li>
            <li className="text-black">Iron on low temperature</li>

        </ul>
      </div>
    </div>
  );
};

export default proddetail;
