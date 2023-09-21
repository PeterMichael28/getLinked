import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import Input from './Input'
import {useState} from 'react'
import Button from "./Button";


const ContactHero = () => {
    const [name, setName] = useState('')
  return (
      <section>
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-5 place-items-star max-sm:pt-12 max-sm:pb-5 md:py-28 bordr px-6 md:px-16">
              

              <div className="hidden md:flex justify-start items-start flex-col col-span-2">
              <h2 className="text-[1.3rem] font-bold text-tertiary leading-none md:text-[1.9rem] mt-3 md:mt-3">
      Get in touch
                  </h2>
                  
                  <p className="text-[.75rem] md:text-sm max-sm:leading-6 text-white mt-3 md:mt-6">
      Contact <br /> Information
     </p>

     <p className="text-[.75rem] md:text-sm max-sm:leading-6 text-white mt-3 md:mt-6">
      27, Alara Street <br /> Yaba 100012 <br /> Lagos State
     </p>

     <p className="text-[.75rem] md:text-sm max-sm:leading-6 text-white mt-3 md:mt-6">
      Call Us: 07067981819
     </p>

     <p className="text-[.75rem] md:text-sm max-sm:leading-6 text-white mt-3 md:mt-6">
      we are open from Monday-Friday <br />
      08:00am - 05:00pm
     </p>

     <p className="flex justify-start items-start gap-y-2 flex-col mt-4">
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
              </div>


              {/* contact from */}
              <div className="md:bg-[rgba(255,255,255,0.03)] rounded-xl md:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] px-14 py-8 col-span-3 md:ml-16">
                  
              <h2 className="text-[1.5rem] font-bold text-tertiary leading-non md:text-[1.5rem] mt-3 md:mt-3 leading-8 md:mb-8">
      Questions or need assistance? <br /> Let us know about it!
                  </h2>

                  <p className="text-[.75rem] md:text-sm max-sm:leading-6 text-white my-6 md:hidden">
                  Email us below to any question related 
to our event
     </p>

                  <form className='w-full flex flex-col gap-y-6 items-center justify-start'>
                  <Input value={name} setValue={setName} name='teamname' placeholder="Team's Name" classNames='md:hidden'/>
                  <Input value={name} setValue={setName} name='topic' placeholder="Topic" classNames='md:hidden'/>



                    <Input value={name} setValue={setName} name='name' placeholder='First Name' classNames='max-sm:hidden'/>

                    <Input value={name} setValue={setName} name='email' placeholder='Email' type='email' />

                    <Input value={name} setValue={setName} name='message' placeholder='Message' textarea={true}/>

                    <Button text='Submit' />

                {/* share on */}
                <p className="flex justify-start items-center gap-y-2 flex-col mt-2 md:hidden">
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
          </div>
    </section>
  )
}

export default ContactHero