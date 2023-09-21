import { timelineData } from "../static/faqData";
import { useRef } from "react";
import { motion } from "framer-motion";

const LiIcon = ({ num }: { num: number }) => {
 return (
  <div className="absolute -left- -bottom-1   rounded-full p-1 pt-[6px] bg-primary text-sm">
   <div className="w-full h-full bg-bgGradient rounded-full flex items-center justify-center animate-pulse max-sm:w-[30px] max-sm:h-[30px]">
    {num + 1}
   </div>
  </div>
 );
};

type Details = {
 headerText: string;
 date: string;
 smallText: string;
 id: number;
};

type TimelineDetails = {
 headerText: string;
 date: string;
 smallText: string;
};

const MobileTimelineDetails = ({
 headerText,
 date,
 smallText,
 id,
}: Details) => {
 const liRef = useRef<HTMLLIElement | null>(null);
 return (
  <li
   className="w-full flex justify-start borde gap-3  items-s relative"
   ref={liRef}
  >
   <div className="flex flex-col min-h-full w-[9%] justify-center items-center borde">
    <motion.div
     //  style={{ scaleY: scrollYProgress }}
     className="h-full bg-tertiary transition-all duration-300 w-[2px]"
    />
    <LiIcon num={id} />
   </div>

   <div className="w-full flex-1 flex flex-col justify-start items-start gap-y-3">
    <motion.div
     initial={{ y: 50 }}
     whileInView={{ y: 0 }}
     transition={{ duration: 1.5, type: "spring" }}
     className="w-full"
    >
     <h3 className="capitalize font-semibold text-base text-tertiary">
      {headerText}
     </h3>

     <span className="capitalize font-normal text-[.8rem] ">
      {smallText}
     </span>
    </motion.div>

    <motion.div
     initial={{ y: 50 }}
     whileInView={{ y: 0 }}
     transition={{ duration: 0.5, type: "spring" }}
     className="capitalize font-medium text-[.9rem] text-tertiary w-full"
    >
     {date}
    </motion.div>
   </div>
  </li>
 );
};

const MobileTimeline = () => {
 return (
  <div className="my-20 px-5  md:hidden">
   <h2 className="text-[1.3rem] font-bold text-white leading-none text-center">
    Timeline
   </h2>
   <p className="text-[.75rem] max-sm:leading-5 text-center text-white mt-3 px-4">
    Here is the breakdown of the time we anticipate using
    for the upcoming event.
   </p>

   <div className=" mx-auto relative w-full mt-8">
    {/* <motion.div
    //  style={{ scaleY: scrollYProgress }}
     className="absolute md:left-1/2 left-3 top-0 md:-translate-x-1/2 md:-translate-y-1/2 w-[2px] h-full origin-top bg-tertiary transition-all duration-300"
    /> */}
    <ul className="flex flex-col items-start gap-y-10 justify-between mt-4">
     {timelineData.map(
      (dat: TimelineDetails, i: number) => (
       <MobileTimelineDetails
        key={i}
        headerText={dat.headerText}
        id={i}
        date={dat.date}
        smallText={dat.smallText}
       />
      )
     )}
    </ul>
   </div>
  </div>
 );
};

export default MobileTimeline;
