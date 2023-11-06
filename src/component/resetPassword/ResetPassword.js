import React from 'react'
import gsl from '../utils/grapsl.svg'
import logo from '../utils/Logo.png'
import bglogo from '../utils/bglogo.png'
function ResetPassword() {
  return (
    <>
    <div className='grid grid-cols-2 w-screen h-screen'>
    <img src={bglogo} height={200} width={270} className='absolute opacity-10'/>
    <div className="flex justify-center items-center min-h-screen bg-white">
 <div className="flex flex-col items-center w-full">
   <img src={logo} height={114} width={429} alt="logo" />
   <div className="text-black text-4xl font-semibold break-words mt-4">
     Reset Password
   </div>
   <div className="text-black text-base mt-2">Password can only be reset by your admin
</div>

   <div className="flex flex-col mt-4 gap-4 w-1/2">
     <div className="flex flex-col gap-2">
       <label htmlFor="email" className="text-black text-base font-medium">
         Admin ?
       </label>
       <input
         placeholder='Enter Admin Access Code to Reset the account'
         id="email"
         type="email"
         className="w-full h-10  text-base rounded border border-solid border-[rgba(0, 0, 0, 0.15)] outline-none px-2 py-1"
         />
     </div>
    
   </div>

   <div className="flex flex-col mt-4 w-1/2 justify-center items-center">
 
     <button className="bg-[#3A57E8] w-1/2  rounded-md text-white text-base font-bold py-2 px-6 mt-4 items-center">
       Reset
     </button>
   
   </div>
 </div>
</div>

 


      <div style={{ backgroundImage: `url(${gsl})`, backgroundSize: 'cover' }}/>
   
    </div>
   </>
  )
}

export default ResetPassword