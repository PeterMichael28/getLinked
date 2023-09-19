import img from "../assets/rules.png";

import colorStar from "../assets/colorStar.png";
import whiteStar from "../assets/whiteStar.png";

const Rules = () => {
 return (
  <section className=" md:mt-7 relative border-b border-zinc-700 py-2 pb-10 ">

    {/* first blur */}
    <div className="w-full md:w-[70rem] md:h-[40rem] h-[70vh] bg-no-repeat bg-contain bg-right bg-bgBlur absolute -left-[7rem] -top-[8rem] md:-top-[7rem] md:-left-[19rem] mix-blend-hard-light opacity-[.8] "></div>

    {/* second blur */}
    <div className="w-full md:w-[70rem] md:h-[40rem] h-[70vh] bg-no-repeat bg-contain bg-right bg-bgBlur absolute left-[9rem] top-[30%] md:top-[7rem] md:left-[50%] mix-blend-hard-light opacity-[] "></div>



   <div className="grid grid-cols-1 md:grid-cols-2 place-items-center place-content-center gap-7 gap-y-7 max-w-[1100px] mx-auto relative ">
    <div className="px-4 relative md:hidden">
     <img
      src={img}
      alt="image"
      className="w-full h-full object-contain"
     />
    </div>

    {/* text */}

    <div className="md:text-left text-center flex flex-col md:items-start items-center max-sm:mt-0 max-sm:px-10 relative md:ml-16">
     <h2 className="text-[1.1rem] font-bold text-white leading-none md:text-[1.9rem]">
      Rules and
     </h2>
     <h2 className="text-[1.1rem] font-bold text-tertiary leading-none md:text-[1.9rem] mt-2 md:mt-3">
      Guidelines
     </h2>
     <p className="text-[.75rem] md:text-sm max-sm:leading-6 text-white mt-2 md:mt-6">
      Our tech hackathon is a melting pot of visionaries,
      and its purpose is as clear as day: to shape the
      future. Whether you're a coding genius, a design
      maverick, or a concept wizard, you'll have the chance
      to transform your ideas into reality. Solving
      real-world problems, pushing the boundaries of
      technology, and creating solutions that can change the
      world, that's what we're all about!
     </p>

     {/* colored star */}
     <img
      src={colorStar}
      alt="star-icon"
      className="absolute w-2 md:w-4 md:left-[50%] right-14 -top-[40%] md:-top-[17%]"
     />
     <img
      src={whiteStar}
      alt="star-icon"
      className="absolute w-2 md:w-4 md:-right-[10%] right-14 md:-bottom-16"
     />
    </div>

    <div className="relative hidden md:block">
     <img
      src={img}
      alt="image"
      className="w-full h-full object-contain"
     />
     {/* colored star */}
     {/* <img src={colorStar} alt="star-icon" className="absolute w-3 left-12 top-[30%]"/> */}
    </div>
   </div>
  </section>
 );
};

export default Rules;
