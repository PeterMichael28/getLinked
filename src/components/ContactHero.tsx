import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

import ContactForm from "./ContactForm";
import colorStar from "../assets/colorStar.png";
import whiteStar from "../assets/whiteStar.png";

const ContactHero = () => {
 return (
  <section className="overflow-hidden ">
   <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-5 place-items-star max-sm:pt-1 max-sm:pb-5 md:pt-28 md:pb-24 bordr sm:px-6 md:px-16 relative over h-fit">
    {/* colored star */}
    <img
     src={colorStar}
     alt="star-icon"
     className="absolute w-3 left-12 top-[10%]"
    />
    <img
     src={colorStar}
     alt="star-icon"
     className="absolute w-5 left-[40%] bottom-[20%]"
    />
    <img
     src={whiteStar}
     alt="star-icon"
     className="absolute w-4 right-9 top-16"
    />
    <img
     src={whiteStar}
     alt="star-icon"
     className="absolute w-5 right-12 bottom-10"
    />

    {/* first blur */}
    <div className="w-[40rem] md:w-[80rem] md:h-[40rem] h-[70vh] bg-no-repeat bg-contain bg-right bg-bgBlur absolute -left-[16rem] -top-[2rem] md:-top-[3rem] md:-left-[79%] mix-blend-hard-light opacity-[1] blur-xl"></div>

    {/* second blur */}
    <div className="w-full md:w-[80rem] md:h-[40rem] h-[70vh] bg-no-repeat bg-contain bg-right bg-bgBlur absolute left-[9rem] -bottom-[20%] md:top-[17rem] md:left-[15%] mix-blend-hard-light opacity-[1] blur-xl max-sm:hidden"></div>

    <div className="hidden md:flex justify-start items-start flex-col col-span-2">
     <h2 className="text-[1.3rem] font-bold text-tertiary leading-none md:text-[1.9rem] mt-3 md:mt-3">
      Get in touch
     </h2>

     <p className="text-[.75rem] md:text-sm max-sm:leading-6 text-white mt-3 md:mt-6">
      Contact <br /> Information
     </p>

     <p className="text-[.75rem] md:text-sm max-sm:leading-6 text-white mt-3 md:mt-6">
      27, Alara Street <br /> Yaba 100012 <br /> Lagos State
     </p>

     <p className="text-[.75rem] md:text-sm max-sm:leading-6 text-white mt-3 md:mt-6">
      Call Us: 07067981819
     </p>

     <p className="text-[.75rem] md:text-sm max-sm:leading-6 text-white mt-3 md:mt-6">
      we are open from Monday-Friday <br />
      08:00am - 05:00pm
     </p>

     <div className="flex justify-start items-start gap-y-2 flex-col mt-4">
      <span className="text-[.9rem] text-tertiary">
       Share on
      </span>
      <div className="text-white text-[1rem] flex justify-center items-center gap-x-3">
       <AiOutlineInstagram className="hover:scale-125 transition-all duration-300 cursor-pointer" />
       <RiTwitterXFill className="hover:scale-125 transition-all duration-300 cursor-pointer" />
       <FaFacebookF className="hover:scale-125 transition-all duration-300 cursor-pointer" />
       <FaLinkedinIn className="hover:scale-125 transition-all duration-300 cursor-pointer" />
      </div>
     </div>
    </div>

    {/* contact from */}
    <ContactForm />
   </div>
  </section>
 );
};

export default ContactHero;
