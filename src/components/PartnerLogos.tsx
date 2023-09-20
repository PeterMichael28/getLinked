import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";


const PartnerLogos = () => {
  return (
      <div className="px-12 md:px-28 md:py-24 py-10 max-w-[1100px] w-full mx-auto border border-tertiary rounded-md">
          <div className="grid grid-cols-3 place-items-center place-content-center">
              <div className="w-full h-full py-2 md:py-5 md:px-20 px-3 flex justify-center items-center border-r border-b border-tertiary">
                  <img src={logo1} alt="" className="w-auto h-auto object-contain"/>
            </div>
              
            <div className="w-full h-full py-2 md:py-5 md:px-10 px-3 flex justify-center items-center border-r border-b border-tertiary">
                  <img src={logo2} alt="" className="w-auto h-auto object-contain"/>
            </div>
            <div className="w-full h-full py-2 md:py-5 md:px-20 px-3 flex justify-center items-center borde-r border-b border-tertiary">
                  <img src={logo3} alt="" className="w-auto h-auto object-contain"/>
            </div>

            <div className="w-full h-full py-2 md:py-5 md:px-20 px-3 flex justify-center items-center border-r border- border-tertiary">
                  <img src={logo4} alt="" className="w-auto h-auto object-contain"/>
            </div>
            <div className="w-full h-full py-2 md:py-5 md:px-10 px-3 flex justify-center items-center border-r border- border-tertiary">
                  <img src={logo5} alt="" className="w-auto h-auto object-contain"/>
            </div>
            <div className="w-full h-full py-2 md:py-5 md:px-10 px-3 flex justify-center items-center borde-r border- border-tertiary">
                  <img src={logo6} alt="" className="w-auto h-auto object-contain"/>
            </div>
          </div>    
    </div>
  )
}

export default PartnerLogos