import { useState } from "react";
import img from "../assets/register2.png";
import img2 from "../assets/walk.png";
import Input from "./Input";
import colorStar from "../assets/colorStar.png";
import whiteStar from "../assets/whiteStar.png";


const RegisterSection = () => {
 const [name, setName] = useState("");
 return (
  <section className="overflow-hidden ">
   <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-5 place-items-star max-sm:pt-1 max-sm:pb-5 md:pt-28 md:pb-24 bordr sm:px-6 md:px-6 relative over h-fit borde">
    {/* first blur */}
    <div className="w-[40rem] md:w-[80rem] md:h-[40rem] h-[70vh] bg-no-repeat bg-contain bg-right bg-bgBlur absolute -left-[16rem] -top-[2rem] md:top-[1rem] md:-left-[69%] mix-blend-hard-light opacity-[1] blur-xl"></div>

    {/* second blur */}
    <div className="w-full md:w-[80rem] md:h-[40rem] h-[70vh] bg-no-repeat bg-contain bg-right bg-bgBlur absolute left-[9rem] -bottom-[20%] md:top-[25rem] md:left-[15%] mix-blend-hard-light opacity-[1] blur-xl max-sm:hidden"></div>

      {/* colored star */}
      <img
      src={colorStar}
      alt="star-icon"
      className="absolute w-3 left-12 top-[10%] animate-pulse"
     />
      <img
      src={colorStar}
      alt="star-icon"
      className="absolute w-5 md:left-[40%] md:bottom-[20%] left-[40%] bottom-[10%] animate-pulse"
     />
    <img
      src={whiteStar}
      alt="star-icon"
      className="absolute w-4 right-9 top-16 animate-pulse"
             />
             <img
      src={whiteStar}
      alt="star-icon"
      className="absolute w-4 animate-pulse md:w-5 md:right-12 md:bottom-10 right-12 bottom-4"
     />

    {/* image */}
    <div className="w-full h-full borde col-span-2 max-sm:px-24 relative max-sm:pt-10">
    <h2 className="text-[1.2rem] font-bold text-tertiary mt-3 md:mt-3 leading-8  md:hidden absolute left-5 top-2">
      Register
     </h2>
     <img
      src={img}
      alt="register-image"
      className="w-full h-full"
     />
    </div>

    {/* form */}
    <div className="md:bg-[rgba(255,255,255,0.03)] rounded-xl md:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] px-10 md:px-14 py-8 md:ml-16 col-span-3">
     <h2 className="text-[1.5rem] font-bold text-tertiary leading-non md:text-[1.5rem] mt-3 md:mt-3 leading-8 md:mb-0 max-sm:hidden">
      Register
     </h2>

     <p className=" md:text-[.7rem] max-sm:leading-5 text-white my-3  flex items-end gap-x-2">
      <span className="borde">
       Be part of this movement
      </span>
      <div className="flex items-center gap-x-0 justify-center border-b border-tertiary pb-1 px-3">
       <img src={img2} alt="" className="" />
       <img src={img2} alt="" className="-ml-2" />
      </div>
     </p>

     <h3 className="text-[1.3rem] uppercase font-semibold text-white leading-non md:text-[1.5rem] mt-3 md:my-5 leading-8 md:mb-0">
      Create your account
     </h3>
     <form className="w-full flex flex-col gap-y-5 md:gap-y-6 items-center justify-start mt-8 relative z-40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
       <div>
        <label
         htmlFor="teamsName"
         className="text-[.8rem] text-white "
        >
         Team's Name
        </label>
        <Input
         value={name}
         setValue={setName}
         name="teamsName"
         placeholder="Enter the name of your group"
         classNames="placeholder:text-[rgba(255,255,255,0.25)] placeholder:text-[.65rem] py-1 mt-1"
        />
       </div>
       <div>
        <label
         htmlFor="phone"
         className="text-[.8rem] text-white "
        >
         Phone
        </label>
        <Input
         value={name}
         setValue={setName}
         name="phone"
         placeholder="Enter your phone number"
         type="tel"
         classNames="placeholder:text-[rgba(255,255,255,0.25)] placeholder:text-[.65rem] py-1 mt-1"
        />
       </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
       <div>
        <label
         htmlFor="email"
         className="text-[.8rem] text-white "
        >
         Email
        </label>
        <Input
         value={name}
         setValue={setName}
         name="email"
         type="email"
         placeholder="Enter your email address"
         classNames="placeholder:text-[rgba(255,255,255,0.25)] placeholder:text-[.65rem] py-1 mt-1"
        />
       </div>
       <div>
        <label
         htmlFor="topic"
         className="text-[.8rem] text-white "
        >
         Project Topic
        </label>
        <Input
         value={name}
         setValue={setName}
         name="topic"
         placeholder="What is your project topic"
         classNames="placeholder:text-[rgba(255,255,255,0.25)] placeholder:text-[.65rem] py-1 mt-1"
        />
       </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
       <div className="borde">
        <label
         htmlFor="category"
         className="text-[.8rem] text-white "
        >
         Category
        </label>
        <select
         name="category"
         id="category"
         className="rounded-[0.25rem] border border-white bg-[rgba(255,255,255,0.03)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25] placeholder:text-white placeholder:text-[.8rem] px-4 py-3 w-full outline-none text-[.75rem] mt-1"
        >
         <option value="">Select your category</option>
        </select>
       </div>
       <div>
        <label
         htmlFor="grpsize"
         className="text-[.8rem] text-white "
        >
         Group Size
        </label>
        <select
         name="grpsize"
         id="grpsize"
         className="rounded-[0.25rem] border border-white bg-[rgba(255,255,255,0.03)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25] placeholder:text-white placeholder:text-[.8rem] px-4 py-3 w-full outline-none text-[.75rem] mt-1"
        >
         <option value="" className="">
          Select your group size
         </option>
        </select>
       </div>
      </div>

      <p className="italic text-[.65rem] -mt-2 self-start text-tertiary">
       Please review your registration details before
       submitting
      </p>

      {/* agree to terms and conditions */}
      <div className="flex mb-2 items-center justify-start gap-x-2 self-start -mt-2">
       
       <label
        htmlFor="terms"
        className="text-[.65rem] text-white check"
       >
        
        I agree with the terms and conditions and the
        privacy policy
        <input type="checkbox" name="terms" id="terms" className="hidden"/>
        <span className="check-span"></span>
       </label>
      </div>

      {/* register button */}
      <div className="group w-full h-fit p-[1px] bg-bgGradient rounded-[0.25rem] overflow-hidden borde transition-all duration-500">
       <button
        type="button"
        className={`text-white font-[.9rem] font-normal h-[2.9rem] w-full rounded-[0.25rem] transition-all duration-500 flex items-center justify-center  relative before:z-20 z-0 group-hover:bg-primary `}
        //  onClick={handleClick}
       >
        <span className="relative z-50">Register</span>{" "}
       </button>
      </div>
     </form>
    </div>
   </div>
  </section>
 );
};

export default RegisterSection;
