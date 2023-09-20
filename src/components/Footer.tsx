import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { PiPhoneCallFill } from "react-icons/pi";
import { HiLocationMarker } from "react-icons/hi";
import img from "../assets/logo.png";
import colorStar from "../assets/colorStar.png";
import whiteStar from "../assets/whiteStar.png";

const Footer = () => {
 return (
  <footer className="py-12 px-12  bg-[#100B20] ">
   <div className="flex items-center justify-center max-w-[1100px] mx-auto flex-col md:px-8 relative">
    {/* colored star */}
    <img
     src={colorStar}
     alt="star-icon"
     className="absolute w-2 left-[50%] bottom-10 animate-pulse"
    />
    <img
     src={whiteStar}
     alt="star-icon"
     className="absolute w-2 md:w-3  -left-[1%] top-10 animate-pulse"
    />
    <img
     src={whiteStar}
     alt="star-icon"
     className="absolute w-2 md:w-3  right-[4%] bottom-[20%] animate-pulse"
    />
    <img
     src={whiteStar}
     alt="star-icon"
     className="absolute w-2 md:w-2  right-[17%] top-10 animate-pulse"
    />

    <div className="flex justify-between items-star flex-col md:flex-row gap-y-10">
     <div className="flex items-start flex-col gap-y-4 w-full md:w-1/3">
      {/* logo */}
      <img
       src={img}
       width={150}
       alt="logo"
       className="object-contain w-[150px] h-auto"
      />
      <p className="text-[.67rem] text-white text-left leading-5">
       Getlinked Tech Hackathon is a technology innovation
       program established by a group of organizations with
       the aim of showcasing young and talented individuals
       in the field of technology
      </p>

      <p className="flex items-center justify-center gap-x-3 mt-auto text-sm max-sm:mt-8">
       Terms of Use{" "}
       <span className="w-[2px] h-[16px] bg-tertiary flex"></span>{" "}
       Privacy Policy
      </p>
     </div>

     {/* useful links */}
     <nav className="flex flex-col gap-y-3 justify-start items-start ">
      <p className="text-tertiary font-semibold text-sm">
       Useful Links
      </p>
      <ul className="flex flex-col items-start gap-y-3">
       <li className="text-[.7rem] text-white hover:scale-110 hover:bg-bgGradient hover:bg-clip-text hover:text-transparent cursor-pointer transition-all duration-300">
        Overview
       </li>
       <li className="text-[.7rem] text-white hover:scale-110 hover:bg-bgGradient hover:bg-clip-text hover:text-transparent cursor-pointer transition-all duration-300">
        Timeline
       </li>
       <li className="text-[.7rem] text-white hover:scale-110 hover:bg-bgGradient hover:bg-clip-text hover:text-transparent cursor-pointer transition-all duration-300">
        FAQ
       </li>
       <li className="text-[.7rem] text-white hover:scale-110 hover:bg-bgGradient hover:bg-clip-text hover:text-transparent cursor-pointer transition-all duration-300">
        Register
       </li>
       <li className="flex justify-center items-center gap-x-4">
        <span className="text-[.9rem] text-tertiary">
         Follow us
        </span>
        <div className="text-white text-[1.2rem] flex justify-center items-center gap-x-3">
         <AiOutlineInstagram className="hover:scale-125 transition-all duration-300 cursor-pointer" />
         <RiTwitterXFill className="hover:scale-125 transition-all duration-300 cursor-pointer" />
         <FaFacebookF className="hover:scale-125 transition-all duration-300 cursor-pointer" />
         <FaLinkedinIn className="hover:scale-125 transition-all duration-300 cursor-pointer" />
        </div>
       </li>
      </ul>
     </nav>

     {/* contact links */}
     <div className="flex flex-col gap-y-4 justify-start items-start">
      <p className="text-tertiary font-semibold text-sm">
       Contact Us
      </p>
      <ul className="flex flex-col items-start gap-y-3">
       <li className="text-[.7rem] text-white flex gap-x-3 items-start justify-s">
        <PiPhoneCallFill className="text-base" />
        +234 679 81819
       </li>
       <li className="text-[.7rem] text-white flex gap-x-3 items-start justify-cente">
        <HiLocationMarker className="text-base" />
        <div className="flex flex-col">
         <span>27,Alara Street</span>
         <span>Yaba 100012</span>
         <span>Lagos State</span>
        </div>
       </li>
      </ul>
     </div>
    </div>
    <div className="text-[.67rem] text-white text-center mt-16">
     All rights reserved. © getlinked Ltd.
    </div>
   </div>
  </footer>
 );
};

export default Footer;
