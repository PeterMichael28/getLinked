
import close from "../assets/close.png";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

type Props = {
    showMobile: boolean;
    setShowMobile: (b: boolean) => void
}

function MobileNav({showMobile, setShowMobile }: Props) {
    const navigate = useNavigate()
    return (
     <div
      className={`w-full h-[100vh] z-[900] bg-[#150E28] fixed top-0 ${
       showMobile ? "right-0" : "-right-full"
      } transition-all duration-500 px-10`}
     >
      {/*close mobile hamburger */}
      <img
       src={close}
       alt="open-icon"
       className="text-white cursor-pointer md:hidden absolute w-auto h-auto  top-10 right-9"
       onClick={() => setShowMobile(false)}
      />
   
      <nav className="flex-1 md:hidden block mt-32">
       <ul className="flex items-start justify-start flex-col gap-6 borde">
        <li className="mobileLink">
         <Link to="/">Timeline</Link>
        </li>
        <li className="mobileLink">
         <Link to="/">Overview</Link>
        </li>
        <li className="mobileLink">
         <Link to="/">FAQs</Link>
        </li>
        <li className="mobileLink">
         <Link to="/contact">Contact</Link>
        </li>
       </ul>
       <div className="self-center mt-9">
        {/* <button>Register</button> */}
        <Button
         text="Register"
         className="w-[10rem] h-[3.3rem]"
         handleClick={() => navigate('/register')}
        />
       </div>
      </nav>
     </div>
    );
   }
export default MobileNav