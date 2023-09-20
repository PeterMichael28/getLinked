
import listcheck from "../assets/listcheck.png";
import colorStar from "../assets/colorStar.png";
import lockgrp from "../assets/lockGrp.png";
import Button from "./Button";


const Privacy = () => {
  return (
      <section className="max-w-[1100px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 max-sm:px-6 px-10 max-sm:pt-10 py-16 gap-x-16 gap-y-16 place-content-between md:pt-28 relative">
        
  
          
    {/* first blur */}
    <div className="w-full md:w-[70rem] md:h-[40rem] h-[70vh] bg-no-repeat bg-contain bg-right bg-bgBlur absolute -left-[9rem] top-[35%] md:top-[65%] md:-left-[58%] mix-blend-hard-light md:opacity-[1] blur-xl"></div>

        {/* text content */}
          <div className="w-full text-left max-sm:px-7">
              
              {/* header text */}
              <div className="md:text-left text-center flex flex-col md:items-start items-center max-sm:mt-7  relative">
              <h2 className="text-[1.3rem] font-bold text-white leading-none md:text-[1.9rem] tracking-tight">Privacy policy and</h2>
              <h2 className="text-[1.3rem] font-bold text-tertiary leading-none md:text-[1.9rem] mt-3 md:mt-1">Terms</h2>
                <span className="text-[.7rem] font-normal text-[rgba(255,255,255,0.6)] mt-4">Last updated on September 12, 2023</span>
              <p className="text-[.75rem] max-sm:leading-6 text-white mt-8 md:mt-10 md:max-w-[80%]">Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant</p>

{/* colored star */}
<img src={colorStar} alt="star-icon" className="absolute w-2 md:w-4 md:right-0 right-14 top-[4%] animate-pulse"/>
        </div>

        {/* blurry container */}
            <div className="w-full border border-tertiary rounded-md bg-[rgba(217,217,217,0.04)] px-6 py-10 md:p-16 mt-10 md:mt-16">
            <p className="md:text-[.7rem] text-[.75rem] text-white leading-[25px] md:leading-5 text-center md:text-left">At getlinked tech Hackathon 1.0, we value your privacy
and are committed to protecting your personal information.
This Privacy Policy outlines how we collect, use, disclose, 
and safeguard your data when you participate in our tech 
hackathon event. By participating in our event, you consent 
to the practices described in this policy.</p>

        <p className="text-[.7rem] font-bold text-tertiary mt-8">Licensing Policy</p>
        <p className="text-[.7rem] font-bold text-white mt-2">Here are terms of our Standard License:</p>
        <ul className="flex flex-col gap-y-5 items-start mt-7 text-[.7rem] mb-7">
            <li className="flex gap-x-3 items-start justify-start"> <img src={listcheck} alt="check icon" className="w-4 h-4 object-contain" /> The Standard License grants you a non-exclusive right to
navigate and register for our event</li>
<li className="flex gap-x-3"> <img src={listcheck} alt="check icon" className="w-4 h-4 object-contain" /> The Standard License grants you a non-exclusive right to
navigate and register for our event</li>
        </ul>

        <Button text="Read More" className="mx-auto scale-90" />
        </div>
        </div>


        {/* image */}
          <div className="max-sm:px-7">
              <img src={lockgrp} alt="" />
        </div>
    </section>
  )
}

export default Privacy