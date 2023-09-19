
import img from "../assets/judge.png";

import colorStar from "../assets/colorStar.png";
import whiteStar from "../assets/whiteStar.png";
import Button from "./Button";



// type Props = {}

const Judging = () => {
  return (
    <section className=" md:pt-3 mt-16 relative border-b border-zinc-700 py-2 pb-10 md:pb-24">

        {/* first blur */}
    <div className="w-full md:w-[70rem] md:h-[40rem] h-[70vh] bg-no-repeat bg-contain bg-right bg-bgBlur absolute -left-[7rem] -top-[8rem] md:top-[6rem] md:-left-[30rem] mix-blend-hard-light opacity-[.8] "></div>

{/* second blur */}
<div className="w-full md:w-[70rem] md:h-[40rem] h-[70vh] bg-no-repeat bg-contain bg-right bg-bgBlur absolute left-[9rem] -bottom-[20%] md:top-[15rem] md:left-[50%] mix-blend-hard-light opacity-[.8] "></div>
<img src={whiteStar} alt="star-icon" className="absolute w-2 md:w-3  right-10 bottom-16 md:top-[15rem] md:left-[50%]"/>

          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center place-content-center gap-7 gap-y-7 max-w-[1100px] mx-auto relative ">
              {/* img */}
              <div className="md:h-auto max-sm:px-12 relative">
              <img src={img} alt="image" className="w-full h-full object-contain"/>
              {/* colored star */}
        <img src={colorStar} alt="star-icon" className="absolute w-3 left-12 top-[30%]"/>
        <img src={whiteStar} alt="star-icon" className="absolute w-2 md:w-3  left-[50%] top-[50%]"/>


        
   
        </div>


        {/* text */}
        <div className="md:text-left text-center flex flex-col md:items-start items-center max-sm:px-14 relative">
              <h2 className="text-[1.1rem] font-bold text-white leading-none md:text-[1.9rem]">Judging Criteria</h2>
              <h2 className="text-[1.1rem] font-bold text-tertiary leading-none md:text-[1.9rem] mt-2 md:mt-3">Key attributes</h2>

                  <div className="flex flex-col gap-y-4 mt-5 md:mt-6 max-sm:items-center">
                      <div className="">
                          <p className="text-white font-normal text-[.7rem] md:text-[.8rem] "><span className="text-[#ff26b9] font-bold text-[.8rem] md:text-[.9rem] ">Innovation and Creativity: </span> Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.</p>
                      </div>

                      <div className="">
                          <p className="text-white font-normal text-[.7rem] md:text-[.8rem] "><span className="text-[#ff26b9] font-bold text-[.8rem] md:text-[.9rem] ">Innovation and Creativity: </span> Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.</p>
                      </div>


                      <div className="">
                          <p className="text-white font-normal text-[.7rem] md:text-[.8rem] "><span className="text-[#ff26b9] font-bold text-[.8rem] md:text-[.9rem] ">Innovation and Creativity: </span> Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.</p>
                      </div>

                      <div className="">
                          <p className="text-white font-normal text-[.7rem] md:text-[.8rem] "><span className="text-[#ff26b9] font-bold text-[.8rem] md:text-[.9rem] ">Innovation and Creativity: </span> Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.</p>
                      </div>

                      <div className="mb-4">
                          <p className="text-white font-normal text-[.7rem] md:text-[.8rem] "><span className="text-[#ff26b9] font-bold text-[.8rem] md:text-[.9rem] ">Innovation and Creativity: </span> Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.</p>
                      </div>


                      {/* button */}
                      <Button text="Read More"/>
              </div>
        </div>
          </div>
    </section>
  )
}

export default Judging