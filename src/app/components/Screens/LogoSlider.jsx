"use client"
import Image from "next/image";
import { useEffect } from "react";
import "./LogoSlider.css"
import Logo1 from "../../../../public/logo1.png";
import Logo2 from "../../../../public/logo4.png";
import Logo3 from "../../../../public/logo2.png";
import Logo4 from "../../../../public/logo5.png";
import Logo5 from "../../../../public/logo6.png";
import Logo6 from "../../../../public/logo7.png";


const LogoSlider = () => {
  return (
    <div className="logo-slider hidden sm:block lg:mt-16 xl:mt-16 xl:mb-4">
      <h2 className=" mb-6 md:text-5xl lg:text-4xl text-xl font-bold text-center">Our Digital Partners</h2>
      <div className="marquee">
        <div className="marquee-content">
          <Image src={Logo1} alt="logo1" className="mr-6 md:h-[81px] h-[51px]" />
          <Image src={Logo2} alt="logo2" className="md:h-[81px] h-[51px] mx-6" />
          <Image src={Logo3} alt="logo3" className="md:h-[81px] h-[51px] mx-6" />
          <Image src={Logo4} alt="logo4" className="md:h-[81px] h-[51px] mx-6" />
          <Image src={Logo5} alt="logo5" className="md:h-[81px] h-[51px] mx-6" />
          <Image src={Logo6} alt="logo6" className="md:h-[81px] h-[51px] mx-6" />
          {/* Duplicate the logos for continuous effect */}
          <Image src={Logo1} alt="logo1" className="md:h-[81px] h-[51px] mx-6" />
          <Image src={Logo2} alt="logo2" className="md:h-[81px] h-[51px] mx-6" />
          <Image src={Logo3} alt="logo3" className="md:h-[81px] h-[51px] mx-6" />
          <Image src={Logo4} alt="logo4" className="md:h-[81px] h-[51px] mx-6" />
          <Image src={Logo5} alt="logo5" className="md:h-[81px] h-[51px] mx-6" />
          <Image src={Logo6} alt="logo6" className="md:h-[81px] h-[51px] mx-6" />
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
