import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";

const PartnerLogos = () => {
 return (
  <div className="px-12 md:px-28 md:py-44 py-10 max-w-[1100px] w-full mx-auto border border-tertiary rounded-md">
   {/* #110B22 */}
   <div className="grid grid-cols-3 place-items-center place-content-center relative">
    {/* small ball
            <div className="absolute w-10 h-10 rounded-full lg:left-[30.9%] md:left-[29.6%] md:top-[40%] lg:top-[46%] md:bg-[#1b0b39] lg:bg-[#110B20] overflow-hidden"/> */}

    {/* 2 small ball */}
    <div className="absolute w-10 h-10 rounded-full lg:right-[30.9%] lg:top-[46%] md:right-[29.6%] md:top-[40%]  bg-[#110B22] overflow-hidden" />

    <div className="w-full h-full py-4  md:py-5 lg:px-20 md:px-16 sm:px-10 px-3 flex justify-center items-center border-r-[3px] border-b-[3px] border-tertiary relative">
     <img
      src={logo1}
      alt=""
      className="w-auto h-auto object-contain"
     />

     {/* small ball */}
     <div className="absolute w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full lg:-right-[8%] lg:top-[85%] md:-right-[12%] md:top-[76%] -right-[13%] top-[89%] bg-[#160b30] lg:bg-[#110B20] overflow-hidden z-20" />
    </div>

    <div className="w-full h-full py-4 md:py-5 sm:px-10 px-3 flex justify-center items-center border-r-[3px] border-b-[3px] border-tertiary relative">
     <img
      src={logo2}
      alt=""
      className="w-auto h-auto object-contain"
     />

     {/* small ball */}
     <div className="absolute w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full lg:-right-[8%] lg:top-[85%] md:-right-[12%] md:top-[76%] -right-[13%] top-[89%] bg-[#160b30] lg:bg-[#110B20] overflow-hidden z-20" />
    </div>
    <div className="w-full h-full py-4 md:py-5 lg:px-20 md:px-16 sm:px-10 px-3 flex justify-center items-center borde-r border-b-[3px] border-tertiary">
     <img
      src={logo3}
      alt=""
      className="w-auto h-auto object-contain"
     />
    </div>

    <div className="w-full h-full py-4 md:py-5 lg:px-20 md:px-16 sm:px-10 px-3 flex justify-center items-center border-r-[3px] border- border-tertiary">
     <img
      src={logo4}
      alt=""
      className="w-auto h-auto object-contain"
     />
    </div>
    <div className="w-full h-full py-4 md:py-5 sm:px-10 px-3 flex justify-center items-center border-r-[3px] border- border-tertiary">
     <img
      src={logo5}
      alt=""
      className="w-auto h-auto object-contain"
     />
    </div>
    <div className="w-full h-full py-4 md:py-5 sm:px-10 px-3 flex justify-center items-center borde-r border- border-tertiary">
     <img
      src={logo6}
      alt=""
      className="w-auto h-auto object-contain"
     />
    </div>
   </div>
  </div>
 );
};

export default PartnerLogos;
