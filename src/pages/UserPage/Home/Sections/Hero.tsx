import heroImage from "../../../../assets/User-Side/hero-image.png";

const Hero = () => {
  return (
    <div className="flex justify-between">
      <div className="w-[50%] flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold flex gap-2 text-6xl">
            <span className="text-blue-600">MN</span>HARDWARES
          </h1>
          <p className="text-lg text-gray-500 w-sm">
            Quality products for your home and projects. Built with trust and
            durability.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-4 rounded font-semibold border">
            Shop Products
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-4 font-semibold rounded">
            Explore Colors
          </button>
        </div>
      </div>
      <div className="w-[50%] flex justify-center items-center">
        <img src={heroImage} alt="photo" />
      </div>
    </div>
  );
};

export default Hero;
