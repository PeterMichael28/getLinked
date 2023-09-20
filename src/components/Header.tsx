import {useState} from 'react'
import img from "../assets/logo.png";
import open from "../assets/open.png";
import close from "../assets/close.png";
import Button from "./Button";

import { Link } from 'react-router-dom';

const Header = () => {


  const [showMobile, setShowMobile] = useState<boolean>(false)

  // const [scrolling, setScrolling] = useState<boolean>(false);
  
  // const handleScroll = () => {
  //   if (window.scrollY > 100) {
  //     setScrolling(true);
  //   } else {
  //     setScrolling(false);
  //   }
  //   };


 return (
  <header className=" py-5 border-b border-slate-700 relative">
   <div className="flex items-center justify-between max-w-[1100px] mx-auto max-sm:px-5">
    {/* logo */}
    <img
     src={img}
     width={150}
     alt="logo"
     className="object-contain w-[150px] h-auto"
    />

    <nav className=" gap-x-28 items-center justify-end hidden md:flex">
     <ul className="flex gap-9 items-center">
      <li className="navLinks"><Link to='#timeline'>Timeline</Link> </li>
      <li className="navLinks">Overview</li>
      <li className="navLinks"><Link to='/'>FAQs</Link> </li>
      <li className="navLinks">Contact</li>
     </ul>

   
     <Button text="Register" />
    </nav>

     {/*open mobile hamburger */}

              <img src={open} alt="open-icon"  className='text-white cursor-pointer md:hidden relative' onClick={() => setShowMobile(true)}/>
   </div>


{/* mobile nav */}
   <div className={`w-full h-[100vh] z-[900] bg-[#150E28] fixed top-0 ${showMobile ? 'right-0' : '-right-full'} transition-all duration-500 px-10`}>
    {/*close mobile hamburger */}
   <img src={close} alt="open-icon"  className='text-white cursor-pointer md:hidden absolute  top-10 right-9' onClick={() => setShowMobile(false)}/>






        <nav className='flex-1 md:hidden block mt-32' >
                  <ul className='flex items-start justify-start flex-col gap-6 borde'>
      <li className="mobileLink">Timeline</li>
      <li className="mobileLink">Overview</li>
      <li className="mobileLink">FAQs</li>
      <li className="mobileLink">Contact</li>
                  </ul>
                  <div className='self-center mt-9'>
                     {/* <button>Register</button> */}
     <Button text="Register" className='w-[10rem] h-[3.3rem]'/>
                  </div>
              </nav>

             
        </div>
        
  </header>
 );
};

export default Header;
