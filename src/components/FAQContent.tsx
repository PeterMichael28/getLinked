import { useState } from "react";
import {faqData} from '../static/faqData'
import SingleFAQ from "./SingleFAQ";
import img from "../assets/faq.png";


type FaqType = {
    id: number,
    question: string;
    answer: string
}
const FAQContent = () => {
    const [activeTab, setActiveTab] = useState(0);
  
    const toggleTab = (tab: number) => {
      if (activeTab === tab) {
        setActiveTab(0);
      } else {
        setActiveTab(tab);
      }
    };
  
    return (
     <section className=" md:mt-7 relative border-b border-zinc-700 py-14 pb-10 ">

      <div className="grid grid-cols-1 md:grid-cols-7 place-items-center place-content-center gap-12 gap-y-7 max-w-[1100px] mx-auto relative ">
     
  

      <div className="md:text-left text-center flex flex-col md:items-start items-center max-sm:px-10 relative md:pl-9 md:col-span-3">
              <h2 className="text-[1.3rem] font-bold text-white leading-none md:text-[1.9rem]">Frequently Ask</h2>
              <h2 className="text-[1.3rem] font-bold text-tertiary leading-none md:text-[1.9rem] mt-3 md:mt-3">Question</h2>
              <p className="text-[.75rem] md:text-sm max-sm:leading-6 text-white mt-2 md:mt-6">We got answers to the questions that you might
want to ask about getlinked Hackathon 1.0</p>

        <div className="flex items-center justify-center flex-col gap-y-8 mt-8">
         
          {
            faqData.map((faq: FaqType) => (
                <SingleFAQ toggleTab={(tab: number) => toggleTab(tab) } activeTab={ activeTab } num={ faq.id } key={ faq.id } question={ faq.question } answer={ faq.answer } /> 
            ))
          }
  
        </div>
      </div>

      <div className="px-4 relative md:col-span-4">
       <img
        src={img}
        alt="image"
        className="w-full h-full object-contain"
       />
      </div>
      </div>
      </section>
    );
  };

  export default FAQContent