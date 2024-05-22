import Image from "next/image";
import Link from "next/link";
import { Button } from "antd";
import heroImg from '@/assets/gaming.png'
const HeroHeading = () => {
  return (
    <div className="bg-gradient-to-r from-green-50/50 via-teal-50 to-green-50/50 flex relative z-20 items-center overflow-hidden">
      <div className="container flex py-16 px-[7%]">
        <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
          <span className="w-20 h-2 bg-gray-800 mb-12"></span>
          <h1 className="font-bebas-neue uppercase  sm:text-2xl md:text-3xl lg:text-4xl font-black flex flex-col leading-none  text-gray-800">
          Welcome to LapHub - 
            <span className="sm:text-xl md:text-2xl lg:text-3xl mt-3">Your One-Stop Laptop Shop</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-700 mt-5">
          Explore our exclusive collection of top-tier laptops tailored for every need. Whether you are a student, a professional, or a gamer, we have the perfect laptop for you
          </p>
          <div className="flex mt-8">
             <Link href='/about-us'>
              <Button type="default" className="bg-black text-white">Read More</Button>
             </Link>
          </div>
        </div>
        <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative lg:ms-[15%]">
          <Image
            src={heroImg} width={500} height={500} alt="hero image"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroHeading;
