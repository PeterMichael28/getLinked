import { timelineData } from "../static/faqData";
import {  useRef } from "react";
import { motion, useScroll } from "framer-motion";


// interface ChildProps {
//     liRef: RefObject<HTMLLIElement>;
//   }
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

const ExperienceDetails = ({
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

const LineTest = () => {
 const targetRef = useRef(null);
 const { scrollYProgress } = useScroll({
  target: targetRef,
  offset: ["start end", "center start"],
 });
 return (
  <div className="my-60 px-8 md:px-0">
   <h2 className="font-bold text-8xl w-full text-center my-16">
    Experience
   </h2>

   <div
    className="md:w-[75%] mx-auto relative w-full"
    ref={targetRef}
   >
    <motion.div
     style={{ scaleY: scrollYProgress }}
     className="absolute md:left-1/2 left-3 top-0 md:-translate-x-1/2 md:-translate-y-1/2 w-[2px] h-full origin-top bg-tertiary transition-all duration-300"
    />
    <ul className="flex flex-col items-start gap-y-16 justify-between ml-10 md:ml-4 pt-28 ">
     {timelineData.map((dat, i) => (
      <ExperienceDetails
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

export default LineTest;
