import img from "../assets/introImage.png";
import arrow from "../assets/arrow.png";
import colorStar from "../assets/colorStar.png";

const Introduction = () => {



  return (
    <section className="-mt-[165px] md:-mt-[85px] relative border-y border-zinc-700 py-10 max-sm:border-t-0">

          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center place-content-center gap-4 gap-y-7 max-w-[1100px] mx-auto md:mt-7 relative">
              
          <div className="md:h-[400px] px-12 relative">
              <img src={img} alt="image" className="w-full h-full object-contain"/>
              {/* colored star */}
        <img src={colorStar} alt="star-icon" className="absolute w-3 left-12 top-[30%]"/>


        
        {/* arrow icon */}
        <img src={arrow} alt="star-icon" className="absolute w-7 md:w-12 left-[45%] md:left-[86%] -bottom-7"/>
        </div>

        {/* text */}

          <div className="md:text-left text-center flex flex-col md:items-start items-center max-sm:mt-7 max-sm:px-10 relative">
              <h2 className="text-[1.1rem] font-bold text-white leading-none md:text-[1.9rem]">Introduction to getlinked</h2>
              <h2 className="text-[1.1rem] font-bold text-tertiary leading-none md:text-[1.9rem] mt-2 md:mt-3">tech Hackathon 1.0</h2>
              <p className="text-[.75rem] md:text-sm max-sm:leading-6 text-white mt-2 md:mt-6">Our tech hackathon is a melting pot of visionaries, and its purpose is as
clear as day: to shape the future. Whether you're a coding genius, a 
design maverick, or a concept wizard, you'll have the chance to transform 
your ideas into reality. Solving real-world problems, pushing the boundaries
of technology, and creating solutions that can change the world,
that's what we're all about!</p>

{/* colored star */}
<img src={colorStar} alt="star-icon" className="absolute w-2 md:w-4 md:right-20 right-14 top-[10%]"/>
        </div>



        
        </div>
        


    </section>
  )
}

export default Introduction