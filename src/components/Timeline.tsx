import { timelineData } from "../static/faqData";
import {  useRef } from "react";
import { motion, useScroll } from "framer-motion";


const LiIcon = ({ num }: { num: number }) => {
 return (
  <div className="absolute md:left-1/2 -left-7 max-sm:top-20 -translate-x-1/2 ml-[2px] md:w-[50px] md:h-[50px] rounded-full p-2 max-sm:pb-9 max-sm:mb-10 bg-primary">
   <div className="w-full h-full bg-bgGradient rounded-full flex items-center justify-center animate-pulse max-sm:w-[40px] max-sm:h-[40px]">
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

const TimelineDetails = ({
    headerText,
    date,
    smallText,
    id

}: Details) => {
 const liRef = useRef<HTMLLIElement | null>(null);
 return (
  <li
   className="w-full mx-auto flex flex-col justify-start md:justify-between max-sm:relative max-sm:-top-28 borde md:flex-row  md:items-center even:md:flex-row-reverse"
   ref={liRef}
  >
   <LiIcon num={id} />
   <motion.div
    initial={{ y: 50 }}
    whileInView={{ y: 0 }}
    transition={{ duration: 1.5, type: "spring" }}
    className="md:w-2/5"
   >
    <h3 className="capitalize font-semibold md:text-xl text-base text-tertiary">
                 { headerText }
    </h3>

    <span className="capitalize font-medium md:text-sm text-[.75rem]">
     {smallText}
    </span>

   
   </motion.div>

         <motion.div
             initial={{ y: 50 }}
    whileInView={{ y: 0 }}
    transition={{ duration: 0.5, type: "spring" }}
             className="md:w-2/5 capitalize font-semibold md:text-xl text-base text-tertiary"
         >{ date }</motion.div>
  </li>
 );
};

const Timeline = () => {
 const targetRef = useRef(null);
 const { scrollYProgress } = useScroll({
  target: targetRef,
  offset: ["start end", "center start"],
 });
 return (
  <div className="my-20 px-8 md:px-0 hidden md:block">
   <h2 className="text-[2.3rem] font-bold text-white leading-none text-center">
      Timeline
     </h2>
     <p className="text-base leading-6 md:max-w-[45%] lg:max-w-[30%] mx-auto text-center text-white mt-3 px-4">
     Here is the breakdown of the time we
 anticipate using for the upcoming event.
     </p>


   <div
    className="w-[80%] mx-auto relative mt-20"
    ref={targetRef}
   >
    <motion.div
     style={{ scaleY: scrollYProgress }}
     className="absolute md:left-1/2 left-3 top-0 md:-translate-x-1/2 md:-translate-y-1/2 w-[2px] h-full origin-top bg-tertiary transition-all duration-300"
    />
    <ul className="flex flex-col items-start gap-y-16 justify-between ml-10 md:ml-4 pt-28 ">
     {timelineData.map((dat: TimelineDetails, i: number) => (
      <TimelineDetails
       key={i}
       headerText={dat.headerText}
       id={i}
       date={dat.date}
       smallText={dat.smallText}
      
      />
     ))}
    </ul>
   </div>
  </div>
 );
};

export default Timeline;
