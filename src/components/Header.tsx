import { useState } from "react";
import img from "../assets/logo.png";
// import open from "../assets/open.png";

import Button from "./Button";
import { RiMenu4Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import MobileNav from "./MobileNav";

const Header = () => {
 const [showMobile, setShowMobile] =
  useState<boolean>(false);

 const navigate = useNavigate();
 return (
  <header className=" py-5 border-b border-slate-700 relative overflow-hidde">
   <div className="flex items-center justify-between max-w-[1100px] mx-auto max-sm:px-8">
    {/* logo */}
    <Link to="/">
     <img
      src={img}
      width={150}
      alt="logo"
      className="object-contain w-[120px] md:w-[150px] h-auto"
     />
    </Link>

    <nav className=" gap-x-28 items-center justify-end hidden md:flex relative z-[100]">
     <ul className="flex gap-9 items-center">
      <li className="navLinks">
       <Link to="/">Timeline</Link>{" "}
      </li>
      <li className="navLinks">
       <Link to="/">Overview</Link>
      </li>
      <li className="navLinks">
       <Link to="/">FAQs</Link>{" "}
      </li>
      <li className="navLinks">
       <Link to="/contact">Contact</Link>
      </li>
     </ul>

     <Button
      text="Register"
      handleClick={() => navigate("/register")}
     />
    </nav>

    {/*open mobile hamburger */}
    <RiMenu4Fill
     className="text-white cursor-pointer md:hidden relative"
     size={32}
     onClick={() => setShowMobile(true)}
    />
    {/* <img src={open} alt="open-icon"  className='text-white cursor-pointer md:hidden relative' onClick={() => setShowMobile(true)}/> */}
   </div>

   {/* mobile nav */}
   <MobileNav
    showMobile={showMobile}
    setShowMobile={setShowMobile}
   />
  </header>
 );
};

export default Header;
