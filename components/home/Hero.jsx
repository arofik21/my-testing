import React from "react";
import Link from "next/link";
import { Poppins, Passion_One, Inter } from "next/font/google";

const fontPoppins = Poppins({ subsets: ["latin"], weight: "400" });
const fontPassionOne = Passion_One({ subsets: ["latin"], weight: "400" });
const fontInter = Inter({ subsets: ["latin"], weight: "300" });

const Hero = () => {
  return (
    <div className="py-[200px] bg-[url('/hero.svg')] bg-right bg-no-repeat">
      <div className="container mx-auto px-4 xl:px-0">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-10 xl:col-span-7">
            <div
              className={`text-white text-[24px] bg-gradient-to-r from-red-500 to-blue-500 
                max-w-max rounded-sm py-2 px-[30px] ${fontPoppins.className} mb-[30px]`}
            >
              Welcome to WEBDEVIndo
            </div>
            <h1
              className={`text-white text-[50px] md:text-[60px] leading-[45px] 
                md:leading-[65px] xl:text-[80 px] ${fontPassionOne.className} mb-7`}
            >
              Profesional WordPress And FrontEnd Developer
            </h1>
            <Link
              href="/contact"
              className={`text-white px-[32px] py-[11px] bg-blue-700 rounded-md ${fontInter.className}`}
            >
              Hire me
            </Link>
          </div>
        </div>
      </div>{" "}
      {/* Closing div added here */}
    </div>
  );
};

export default Hero;
