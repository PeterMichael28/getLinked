import { useState, useEffect } from "react";
import Input from "./Input";
import { backendurl } from "../static/data";
import Modal from "./Modal";
import img from "../assets/congratulation.png";
import { BiChevronDown } from "react-icons/bi";
import axios from "axios";


function RegisterForm() {
 const [team_name, setTeam_name] = useState("");
 const [email, setEmail] = useState("");
 const [phone, setPhone] = useState("");
 const [group_size, setGroup_size] = useState("");
 const [project_topic, setProject_topic] = useState("");
 const [privacy, setPrivacy] = useState(false);
 const [category, setCategory] = useState("");
 const [loading, setLoading] = useState(false);
 const [openModal, setOpenModal] = useState(false);
 const [error, setError] = useState(false);
 const [fetchedCategories, setFetchedCategories] = useState(
  []
 );

 // fetch categories
 useEffect(() => {
  // Function to fetch categories
 

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${backendurl}/categories-list`); // Replace with your API endpoint
      setFetchedCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };


  // Call the fetchCategories function when the component mounts
  fetchCategories();
 }, []);

 // setting and clearing error message
 useEffect(() => {
  const clearError = setTimeout(() => {
   setError(false);
  }, 5000);

  return () => clearTimeout(clearError);
 }, [error]);


 const handleSubmit = async (e: {
  preventDefault: () => void;
 }) => {
  e.preventDefault();
  setLoading(true);
  
    try {
      const response = await axios.post(`${backendurl}/registration`, ({
        team_name,
        email,
        phone_number: phone,
        group_size: +group_size,
        project_topic,
        category,
        privacy_poclicy_accepted: privacy,
       }))
      console.log('Data sent successfully:', response.data);
      setLoading(false);
      setOpenModal(true);
      // Clear the form after successful submission
       // clear form field
    setTeam_name("");
    setEmail("");
    setPhone("");
    setGroup_size("");
    setProject_topic("");
    setPrivacy(false);
        setCategory( "" );
        
    } catch (error) {
        setLoading(false);
        setError(true);
      console.error('Error submitting data:', error);
    }


 };

 return (
  <>
   <form
    className="w-full flex flex-col gap-y-5 md:gap-y-6 items-center justify-start mt-8 relative z-40"
    onSubmit={handleSubmit}
   >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
     <div>
      <label
       htmlFor="teamsName"
       className="text-[.8rem] text-white "
      >
       Team's Name
      </label>
      <Input
       value={team_name}
       setValue={setTeam_name}
       required
       name="teamsName"
       placeholder="Enter the name of your group"
       classNames="placeholder:text-[rgba(255,255,255,0.25)] placeholder:text-[.65rem] py-2 mt-1"
      />
     </div>
     <div>
      <label
       htmlFor="phone"
       className="text-[.8rem] text-white "
      >
       Phone
      </label>
      <Input
       value={phone}
       setValue={setPhone}
       required
       name="phone"
       placeholder="Enter your phone number"
       type="tel"
       classNames="placeholder:text-[rgba(255,255,255,0.25)] placeholder:text-[.65rem] py-2 mt-1"
      />
     </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
     <div>
      <label
       htmlFor="email"
       className="text-[.8rem] text-white "
      >
       Email
      </label>
      <Input
       value={email}
       setValue={setEmail}
       required
       name="email"
       type="email"
       placeholder="Enter your email address"
       classNames="placeholder:text-[rgba(255,255,255,0.25)] placeholder:text-[.65rem] py-2 mt-1"
      />
     </div>
     <div>
      <label
       htmlFor="topic"
       className="text-[.8rem] text-white "
      >
       Project Topic
      </label>
      <Input
       value={project_topic}
       setValue={setProject_topic}
       required
       name="topic"
       placeholder="What is your project topic"
       classNames="placeholder:text-[rgba(255,255,255,0.25)] placeholder:text-[.65rem] py-2 mt-1"
      />
     </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
     <div className="borde relative">
        <BiChevronDown className='absolute right-2 top-[54%] text-white text-xl'/>
      <label
       htmlFor="category"
       className="text-[.8rem] text-white "
      >
       Category
      </label>
      <select
       name="category"
       id="category"
        required
       value={category}
       onChange={(e) => setCategory(e.target.value)}
       className="rounded-[0.25rem] border border-white bg-[rgba(255,255,255,0.03)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25] placeholder:text-white placeholder:text-[.8rem] px-4 py-3 w-full outline-none text-[.75rem] mt-1 appearance-none relative"

      >
        
       <option value="" className="text-white bg-primary">
        Select your category
       </option>
       {fetchedCategories.map(
        (dat: { id: number; name: string }) => (
         <option
          value={dat?.id}
          key={dat?.id}
          className="text-white bg-primary py-3 text-sm"
         >
          {dat?.name}
         </option>
        )
       )}
      </select>
     </div>
     <div className="relative">
     <BiChevronDown className='absolute right-2 top-[54%] text-white text-xl'/>
      <label
       htmlFor="grpsize"
       className="text-[.8rem] text-white "
      >
       Group Size
      </label>
      <select
       name="grpsize"
       id="grpsize"
       value={group_size}
       onChange={(e) => setGroup_size(e.target.value)}
        required
       className="rounded-[0.25rem] border border-white bg-[rgba(255,255,255,0.03)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25] placeholder:text-white placeholder:text-[.8rem] px-4 py-3 w-full outline-none text-[.75rem] mt-1 appearance-none"
      >
       <option value="" className="text-white bg-primary">
        Select your group size
       </option>
       <option value="1" className="text-white bg-primary">
        1
       </option>
       <option value="2" className="text-white bg-primary">
        2
       </option>
       <option value="3" className="text-white bg-primary">
        3
       </option>
       <option value="4" className="text-white bg-primary">
        4
       </option>
       <option value="5" className="text-white bg-primary">
        5+
       </option>
      </select>
     </div>
    </div>

    <p className="italic text-[.65rem] md:text-[.7rem] -mt-2 self-start text-tertiary">
     Please review your registration details before
     submitting
    </p>

    {/* agree to terms and conditions */}
    <div className="flex mb-2 items-center justify-start gap-x-2 self-start -mt-2">
     <label
      htmlFor="terms"
      className="text-[.65rem] text-white check"
     >
      I agree with the terms and conditions and the privacy
      policy
      <input
       type="checkbox"
       name="terms"
       id="terms"
       className="hidden"
       required
       checked={privacy}
       onChange={(e) => setPrivacy(e.target.checked)}
      />
      <span className="check-span"></span>
     </label>
    </div>

    {/* register button */}
    {error && (
     <p className=" text-red-500 text-[.7rem]">
      Error registering account, try again later!!!
     </p>
    )}
    <div className="group w-full h-fit p-[1px] bg-bgGradient rounded-[0.25rem] overflow-hidden borde transition-all duration-500">
     <button
      type="submit"
      className={`text-white font-[.9rem] font-normal h-[2.9rem] w-full rounded-[0.25rem] transition-all duration-500 flex items-center justify-center  relative before:z-20 z-0 group-hover:bg-primary `} //  onClick={handleClick}
     >
      <span className="relative z-50">
      {loading ? "Registering..." : "Register"}{" "}
      </span>{" "}
     </button>
    </div>
   </form>

   <Modal
    active={openModal}

    children={
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
        you have successfully registered!
       </p>

       <p className="text-[.67rem] md:text-[.75rem] mt-2">
        Yes, it was easy and you did it! <br /> check your
        mail box for next step
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
    }
   />
  </>
 );
}

export default RegisterForm;
