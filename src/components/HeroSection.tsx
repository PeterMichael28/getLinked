
import {useState} from 'react'
import img2 from "../assets/hero-img.png";
import redline from "../assets/red-line.png";
import fire from "../assets/fire.png";
import chain from "../assets/chain.png";
import bulb from "../assets/bulb.png";
import timer from "../assets/countdown.png";
import whiteStar from "../assets/whiteStar.png";
import graystar from "../assets/greyStar.png";
import Button from "./Button";



const HeroSection = () => {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


    // handling the ,ouse movement in this section
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // console.log(e.clientY )
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

 return (
  <section className=" relative  overflow-hidden " onMouseMove={handleMouseMove}>

    {/* cursor */}
    <div className='w-5 h-5 rounded-full bg-tertiary shadow-sm animate-pulse  absolute z-50 borde'  style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y - 90}px`,
        //   transition: 'left 0.3s ease, top 0.3s ease', // Adjust the duration as needed
        }}>

    </div>



   {/* bg undrlay */}
   {/* <img src={underlayImg} alt="underlay" className='absolute w-full h-full object-cover'/> */}
   <div className="bg-cover bg-center bg-no-repeat bg-blend-luminosity absolute w-full h-full bg-bgUnderlay opacity-50"></div>

   <div className="w-full max-w-[1100px] mx-auto relative py-5 ">
    {/* white star */}
    <img
     src={whiteStar}
     alt="white star"
     className="absolute md:left-10 md:top-10 top-[79px] left-[25%] w-[.7rem] md:w-[1rem]"
    />

    {/* gray stars */}
    <img
     src={graystar}
     alt="white star"
     className="absolute md:left-[55%] left-[83%] top-[70px] md:w-4 z-30 w-[.6rem] animate-pulse"
    />
    <img
     src={graystar}
     alt="white star"
     className="absolute md:left-[46%] left-[75%] md:bottom-[30%] md:w-3 w-2 bottom-[68%] z-30 animate-pulse"
    />

    {/* first blur */}
    <div className="w-full md:w-[70rem] md:h-[40rem] h-[70vh] bg-no-repeat bg-cover bg-right bg-bgBlur absolute -left-[3rem] top-0 md:-top-[7rem] md:-left-[5rem] mix-blend-hard-light opacity-[1] blur-xl"></div>

    {/* ignite */}
    <p className="md:text-[2rem] text-[1rem] italic font-bold w-full md:text-right relative text-center">
     <span>
      Igniting a Revolution in{" "}
      <span className="relative">
       HR Innovation{" "}
       <img
        src={redline}
        alt="red-line"
        className="absolute right-0 md:w-[16rem] object-contain md:top-10"
       />
      </span>
     </span>
    </p>

    <div className="grid w-full grid-cols-1 md:grid-cols-2 place-items-start pt-16 gap-y-10">
     {/* text */}
     <div className="flex md:items-start justify-center max-sm:text-center flex-col items-center">
      <div className="w-full md:w-[120%] ">
       <h1 className="font-bold flex items-center md:justify-start justify-center max-sm:text-center gap-1 text-[2rem] md:text-[4.5rem] leading-none font-clas relative max-sm:px-7">
        <span>
         getlinked{" "}
         <span className="relative">
          Tech{" "}
          <img
           src={bulb}
           alt=""
           className=" scale-[.5] md:scale-90 absolute md:-top-[47px] -top-[45px] right-0 md:right-7"
          />
         </span>
        </span>

        {/* bulb */}
       </h1>
       <h1 className="font-extrabold flex items-center  md:justify-start md:mt-2 justify-center max-sm:text-center text-[2rem] md:text-[4.5rem] leading-none font-clas w-full max-sm:-mt-3 relative z-10">
        <span>Hackathon</span>
        <span className="text-[#D434FE]">1.0</span>

        {/* chain */}
        <img
         src={chain}
         alt=""
         className="scale-[.5] md:scale-[.8] -ml-4 md:-ml-2"
        />

        {/* fire */}
        <img
         src={fire}
         alt=""
         className=" scale-[.5] md:scale-[.8] -ml-8 md:-ml-3 animate-pulse"
        />
       </h1>
      </div>

      <p className="md:text-[1.1rem] text-white md:w-[88%] mb-7 max-sm:text-center max-sm:-mt-3 max-sm:px-5">
       Participate in getlinked tech Hackathon 2023 stand a
       chance to win a Big prize
      </p>

      <Button text="Register" />

      {/* counter */}
      <div className="md:mt-10 mt-6 max-sm:mb-5">
       <img
        src={timer}
        alt=""
        className="md:w-[15rem] w-[14rem]"
       />
      </div>
     </div>

     {/* img */}
     <div className="w-full md:w-[650px] relative z-20">
      <img
       src={img2}
       alt=""
       className="w-full h-[500px] object-contain relative -top-[6rem] md:-top-11 md:-right-14 z-20 grey mix-blend-plus-lighter"
      />

      {/* first blur */}
      <div className="w-full md:w-[600px] h-full bg-no-repeat bg-cover bg-center bg-bgBlur absolute top-[9rem] left-[9rem] bg-blend-hard-light opacity-[.9] z-0 hidden md:block"></div>
     </div>
    </div>
   </div>
  </section>
 );
};

export default HeroSection;
