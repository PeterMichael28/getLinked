import img from "../assets/partner.png";
import img2 from "../assets/partner-mobile.png";

import img3 from "../assets/price_overlay.png";

import colorStar from "../assets/colorStar.png";
import whiteStar from "../assets/whiteStar.png";

const Partners = () => {
 return (
  <section className="pt-12 md:pt-20 relative border-b border-zinc-700 py-2 pb-20 md:pb-24 overflow-hidde">
   {/* first blur */}
   <div className="w-full md:w-[70rem] md:h-[40rem] h-[70vh] bg-no-repeat bg-contain bg-right bg-bgBlur absolute -left-[10rem] -top-[12rem] md:-top-[3rem] md:-left-[31rem] mix-blend-hard-light md:opacity-[1] blur-xl"></div>

   {/* second blur */}
   <div className="w-full md:w-[70rem] md:h-[40rem] h-[70vh] bg-no-repeat bg-contain bg-right bg-bgBlur absolute left-[10rem] -bottom-[84%] md:top-[24rem] md:left-[37%] mix-blend-hard-light opacity-[1] blur-xl"></div>

   {/* overlay image */}
   <img
    src={img3}
    alt="star-icon"
    className="absolute w-full h-full top-0 left-0 opacity0 mix-blend-color-burn"
   />

   {/* text */}
   <div className="flex flex-col md:items-center md:justify-center items-center max-sm:px-2 relative text-center   borde max-w-[1200px] mx-auto">
    <div className=" text-center flex flex-col md:items-center md:justify-center items-center max-sm:px-14 relative">
     <h2 className="text-[1.3rem] font-bold text-white leading-none md:text-[1.9rem] ">
      Partners and Sponsors
     </h2>

     <p className="text-[.7rem] md:text-sm max-sm:leading-4 text-white mt-2 md:mt-4 md:max-w-[70%] mx-auto ">
      Getlinked Hackathon 1.0 is honored to have the
      following major companies as its partners and sponsors
     </p>
    </div>
   </div>

   {/* logos */}
   <div className=" -tertiary bg-[rgba(255, 255, 255, 0.01)] rounded-md max-w-[1100px] mx-auto mt-10 max-sm:px-5 px-9">
    <img
     src={img}
     alt=""
     className="w-full h-auto hidden md:block"
    />
    <img
     src={img2}
     alt=""
     className="w-full md:hidden h-auto"
    />
   </div>

   {/* colored star */}
   <img
    src={colorStar}
    alt="star-icon"
    className="absolute w-3 md:w-4 md:left-[20%] left-14 top-10 md:-top-[17%] animate-pulse"
   />
   <img
    src={whiteStar}
    alt="star-icon"
    className="absolute w-2 md:w-4 md:-right-[10%] right-14 md:-bottom-16 animate-pulse "
   />
  </section>
 );
};

export default Partners;
