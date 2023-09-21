import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import Input from "./Input";
import Button from "./Button";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import img from "../assets/congratulation.png";
import { backendurl } from "../static/data";
import axios from "axios";




function ContactForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [error, setError] = useState(false);




    // setting and clearing error message
    useEffect( () => {
        
          const clearError =  setTimeout(() => {
                setError(false);
              }, 5000);
        

        return () => clearTimeout(clearError)
    }, [error])

   
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await axios.post(`${backendurl}/contact-form`, ({
                first_name: name,
        email: email,
        phone_number: phone,
        message: message
            }))
            console.log('Data sent successfully:', response.data);
           
            // Clear the form after successful submission
             // Set loading state to false when the request is complete
             setLoading(false)
             setOpenModal(true)
 
             // clear form field
             setName('')
 setEmail('')
 setPhone('')
 setMessage('')
              
          } catch (error) {
               // Handle errors, such as network issues or server errors
            // Set loading state to false when an error occurs
            setLoading(false)
            setError( true );
           
            console.error('Error submitting data:', error);
          }
     
    }


    return (
     <div className="md:bg-[rgba(255,255,255,0.03)] rounded-xl md:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] px-8 md:px-14 py-8 col-span-3 md:ml-16">
      <h2 className="text-[1.5rem] font-bold text-tertiary leading-non md:text-[1.5rem] mt-3 md:mt-3 leading-8 md:mb-8">
       Questions or need assistance? <br /> Let us know about
       it!
      </h2>
   
      <p className="text-[.75rem] md:text-sm max-sm:leading-5 text-white my-6 md:hidden max-sm:w-[75%]">
       Email us below to any question related to our event
      </p>

      <form className="w-full flex flex-col gap-y-4 md:gap-y-6 items-center justify-start relative z-40" onSubmit={handleSubmit}>
       <Input
        value={name}
        setValue={setName}
        name="first_name"
        placeholder="your first name"
        classNames=""
        required
       />
       <Input
        value={email}
        setValue={setEmail}
        name="email"
        placeholder="your email"
        classNames=""
        required
       />
   
       <Input
        value={phone}
        setValue={setPhone}
        name="phone_number"
        placeholder="your phone number"
        type="tel"
        required
        // classNames="max-sm:hidden"
       />
  
       <Input
        value={message}
        setValue={setMessage}
        name="message"
        placeholder="Message"
        textarea={true}
        required
       />

                    { error && <p className="-mb-3 mt-3 text-red-500 text-[.7rem]">Error sending message, try again later!!!</p>}
       <div className={`${error ? 'mt-0' : 'mt-4'}`}>
        <Button text={loading ? "Submitting..." : "Submit"} className="" type='submit'/>
       </div>
   
       {/* share on */}
       <div className="flex justify-start items-center gap-y-2 flex-col mt-6 md:hidden">
        <span className="text-[.9rem] text-tertiary">
         Share on
        </span>
        <div className="text-white text-[1rem] flex justify-center items-center gap-x-3">
         <AiOutlineInstagram className="hover:scale-125 transition-all duration-300 cursor-pointer" />
         <RiTwitterXFill className="hover:scale-125 transition-all duration-300 cursor-pointer" />
         <FaFacebookF className="hover:scale-125 transition-all duration-300 cursor-pointer" />
         <FaLinkedinIn className="hover:scale-125 transition-all duration-300 cursor-pointer" />
        </div>
       </div>
      </form>
            <Modal active={ openModal } setActive={ setOpenModal } children={
                <div className="flex justify-center items-center text-center flex-col text-white gap-y-3">
     <img
      src={img}
      alt=""
      className="object-contain max-w-[250px] h-auto w-full"
     />
     <div className="flex justify-center items-center text-center flex-col gap-y-2">
      <p className="text-[1.4rem] md:text-[1.6rem] font-semibold leading-none">
       Congratulations
      </p>
      <p className="text-[1.4rem] md:text-[1.6rem] font-semibold leading-none">
       Message Sent Successfully
      </p>

      <p className="text-[.67rem] md:text-[.75rem] mt-2">
       Thank you for reaching out to us <br /> we will get back to you as soon as possible
      </p>
     </div>

     {/* back button */}
     <div className="group w-full h-fit p-[1px] bg-bgGradient rounded-[0.25rem] overflow-hidden borde transition-all duration-500 mt-5">
      <button
       type="button"
       className={`text-white font-[.9rem] font-normal h-[2.9rem] w-full rounded-[0.25rem] transition-all duration-500 flex items-center justify-center  relative before:z-20 z-0 group-hover:bg-primary `}
        onClick={() => setOpenModal(false)}
      >
       <span className="relative z-50">Back</span>{" "}
      </button>
     </div>
                </div>
            } />
     </div>
    );
   }
   

export default ContactForm