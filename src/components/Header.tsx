// import React from 'react'
import img from '../assets/logo.png'
import Button from './Button';


const Header = () => {
  return (
       
       <header className=' py-5 border-b border-slate-700 relative'>
       <div className='flex items-center justify-between max-w-[1100px] mx-auto'>
         
       {/* logo */}
       <img src={img} width={150} alt="logo" className='object-contain w-[150px] h-auto' />

       <nav className='flex gap-x-28 items-center justify-end'>
         <ul className='flex gap-9 items-center'>
           <li className='navLinks'>Timeline</li>
           <li className='navLinks'>Overview</li>
           <li className='navLinks'>FAQs</li>
           <li className='navLinks'>Contact</li>
         </ul>


       {/* <button>Register</button> */}
       <Button text='Register' />
       </nav>
       </div>

   </header>
  )
}

export default Header