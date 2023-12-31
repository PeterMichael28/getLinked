import img from "../assets/trophy.png";
import img2 from "../assets/Rewards.png";
import img3 from "../assets/price_overlay.png";

import colorStar from "../assets/colorStar.png";
import whiteStar from "../assets/whiteStar.png";

// type Props = {}

const Prize = () => {
 return (
  <section className=" pt-20 mt-4 md:mt-[1rem] relative  border-b border-zinc-700 py-2 pb-10 md:pb-24 w-full overflow-hidde">
   {/* first blur */}
   <div className="w-full md:w-[70rem] md:h-[40rem] h-[70vh] bg-no-repeat bg-contain bg-right bg-bgBlur absolute -left-[5rem] top-[2rem] md:top-[6rem] md:-left-[16rem] mix-blend-hard-light md:opacity-[1] blur-xl"></div>

   {/* second blur */}
   <div className="w-full md:w-[70rem] md:h-[40rem] h-[70vh] bg-no-repeat bg-contain bg-right bg-bgBlur absolute left-[9rem] -bottom-[25%] md:top-[20rem] md:left-[50%] mix-blend-hard-light opacity-[1] blur-xl  max-sm:hidden"></div>

   {/* overlay image */}
   <img
    src={img3}
    alt="star-icon"
    className="absolute w-full h-full top-0 left-0 opacity0 mix-blend-color-burn"
   />

   {/* text */}
   <div className="flex flex-col md:items-start md:justify-end items-center max-sm:px-2 relative   borde max-w-[1200px] mx-auto w-full overflow-hidden">
    <div className="md:text-left text-center flex flex-col md:items-start md:justify-end items-center max-sm:px-14 relative ml-auto">
     <h2 className="text-[1.3rem] font-bold text-white leading-none md:text-[1.9rem]">
      Prizes and
     </h2>
     <h2 className="text-[1.3rem] font-bold text-tertiary leading-none md:text-[1.9rem] mt-2 md:mt-3">
      Rewards
     </h2>
     <p className="text-[.7rem] md:text-sm max-sm:leading-6 text-white mt-3 md:mt-6 md:max-w-[70%]">
      Highlight of the prizes or rewards for winners and for
      participants.
     </p>
    </div>
   </div>

   <div className="grid grid-cols-1 md:grid-cols-5 place-items-center place-content-center md:gap-x-7 gap-y-5 max-w-[1200px] mx-auto relative max-md:px-4 borde max-sm:mt-7">
    {/* img */}
    <div className="md:h-auto max-sm:px-12 relative col-span-2 borde w-full ">
     <img
      src={img}
      alt="image"
      className="w-full h-full object-contain"
     />
     {/* colored star */}
     <img
      src={colorStar}
      alt="star-icon"
      className="absolute w-4 left-[50%] -top-[25%] animate-pulse"
     />
     <img
      src={whiteStar}
      alt="star-icon"
      className="absolute w-2 md:w-3  left-[70%] -bottom-16 animate-pulse"
     />
    </div>

    <div className="flex flex-col md:items-end md:justify-end col-span-3 md:py-6 md:pl-16 relative borde justify-center items-center max-sm:mt-8">
     <img
      src={img2}
      alt="image"
      className="w-full scale-90  h-full object-contain md:ml-9 borde"
     />
     {/* colored star */}
     <img
      src={whiteStar}
      alt="star-icon"
      className="absolute w-5 left-20 top-20 animate-pulse"
     />
     <img
      src={whiteStar}
      alt="star-icon"
      className="absolute w-2 md:w-3  right-6 top-24 animate-pulse"
     />
    </div>
   </div>
  </section>
 );
};

export default Prize;
