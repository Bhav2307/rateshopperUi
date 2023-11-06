import React from 'react'
import logo from './OtaLogo.svg'
const Box = () => {
    return (
    <>
    <div className='rounded-xl border border-solid w-52'>
     <div className='flex gap-3 justify-start p-5 '>
         <img src={logo}/>
          <div className='flex  flex-col justify-between gap-3 '>
              <p className='text-lg font-normal'>Agoda</p>
              <div className='flex justify-between items-center gap-3'>
                <p className='text-[#232D42] text-xl font-medium'>54</p>
                 <span className='flex items-center gap-1 mt-2'>
                    <p className='text-[#E05E34] text-sm font-bold'>1</p>
                    <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.64201 1.99478C0.349117 1.70189 0.349117 1.22702 0.64201 0.934125C0.934904 0.641231 1.40978 0.641231 1.70267 0.934125L0.64201 1.99478ZM8.99341 8.53552C8.99341 8.94974 8.65762 9.28552 8.24341 9.28552L1.49341 9.28552C1.07919 9.28552 0.743408 8.94974 0.743408 8.53552C0.743408 8.12131 1.07919 7.78552 1.49341 7.78552L7.49341 7.78552L7.49341 1.78552C7.49341 1.37131 7.82919 1.03552 8.24341 1.03552C8.65762 1.03552 8.99341 1.37131 8.99341 1.78552L8.99341 8.53552ZM1.70267 0.934125L8.77374 8.00519L7.71308 9.06585L0.64201 1.99478L1.70267 0.934125Z" fill="#E05E34"/>
                    </svg>

                 </span>
              </div>
          </div>
     </div>
     </div>
    </>
    );
  };


function Ranking({title}) {
  return (
   <div className='flex flex-col gap-6'>
       <div className='text-2xl font-medium break-words'>{title}</div>
      <div className='flex justify-between items-center gap-3'>
          <Box/>
          <Box/>
          <Box/>
          <Box/>
          <Box/>
          <Box/>
      
      </div>
   </div>
  )
}

export default Ranking