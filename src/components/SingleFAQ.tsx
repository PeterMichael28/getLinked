import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

type SingleFaq = {
 toggleTab: (tab: number) => void;
 activeTab: number;
 num: number;
 question: string;
 answer: string;
};
export default function SingleFAQ({
 toggleTab,
 activeTab,
 num,
 answer,
 question,
}: SingleFaq) {
 return (
  <div className="border-b border-tertiary  ">
   <button
    className="flex items-center justify-between w-full"
    onClick={() => toggleTab(num)}
   >
    <span className="text-[.75rem] md:text-[.9rem]  text-white text-left">
     {question}
    </span>
    {activeTab === num ? (
     <BiMinus className="text-sm text-tertiary" />
    ) : (
     <BsPlus className="text-sm text-tertiary" />
    )}
   </button>
   {/* { activeTab === num && ( */}
   <div
    className={`mt-4 h-0 transition-all duration-500 ${
     activeTab === num &&
     "h-[130px] sm:h-[120px] md:h-[120px]"
    } overflow-hidden`}
   >
    <p className="text-[.65rem] md:text-[.8rem] text-white">
     {answer}
    </p>
   </div>
  </div>
 );
}
