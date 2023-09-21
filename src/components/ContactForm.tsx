import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import Input from "./Input";
import Button from "./Button";


type Props = {
    name: string;
    setName: (val: string) => void
}


function ContactForm({name, setName}: Props) {
    return (
     <div className="md:bg-[rgba(255,255,255,0.03)] rounded-xl md:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] px-8 md:px-14 py-8 col-span-3 md:ml-16">
      <h2 className="text-[1.5rem] font-bold text-tertiary leading-non md:text-[1.5rem] mt-3 md:mt-3 leading-8 md:mb-8">
       Questions or need assistance? <br /> Let us know about
       it!
      </h2>
   
      <p className="text-[.75rem] md:text-sm max-sm:leading-5 text-white my-6 md:hidden max-sm:w-[75%]">
       Email us below to any question related to our event
      </p>
   
      <form className="w-full flex flex-col gap-y-4 md:gap-y-6 items-center justify-start">
       <Input
        value={name}
        setValue={setName}
        name="teamname"
        placeholder="Team's Name"
        classNames="md:hidden"
       />
       <Input
        value={name}
        setValue={setName}
        name="topic"
        placeholder="Topic"
        classNames="md:hidden"
       />
   
       <Input
        value={name}
        setValue={setName}
        name="name"
        placeholder="First Name"
        classNames="max-sm:hidden"
       />
   
       <Input
        value={name}
        setValue={setName}
        name="email"
        placeholder="Email"
        type="email"
       />
   
       <Input
        value={name}
        setValue={setName}
        name="message"
        placeholder="Message"
        textarea={true}
       />
   
       <div className="mt-4">
        <Button text="Submit" className="" />
       </div>
   
       {/* share on */}
       <p className="flex justify-start items-center gap-y-2 flex-col mt-6 md:hidden">
        <span className="text-[.9rem] text-tertiary">
         Share on
        </span>
        <div className="text-white text-[1rem] flex justify-center items-center gap-x-3">
         <AiOutlineInstagram className="hover:scale-125 transition-all duration-300 cursor-pointer" />
         <RiTwitterXFill className="hover:scale-125 transition-all duration-300 cursor-pointer" />
         <FaFacebookF className="hover:scale-125 transition-all duration-300 cursor-pointer" />
         <FaLinkedinIn className="hover:scale-125 transition-all duration-300 cursor-pointer" />
        </div>
       </p>
      </form>
     </div>
    );
   }
   

export default ContactForm