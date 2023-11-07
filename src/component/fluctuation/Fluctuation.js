import React from 'react'
import FluctuationChart from './FluctuationChart'
function Fluctuation({title}) {
  return (
    <div className=" rounded-xl bg-white  border  "style={{
      boxShadow: '0px 10px 30px rgba(17, 38, 146, 0.05)',
    }}>
    <div className="p-6 flex flex-col ">
      <div className="w-full h-auto flex justify-between items-center">
        <div className='flex gap-3 items-center'>

        <div className="text-black text-xl font-medium leading-5 break-words h-auto w-auto">
        {title}
        </div>
              
        
        </div>
      
    


        <div className='flex'>
        <p className="py-4 px-6 text-[#809FB8] text-sm font-normal break-words border border-[#D9E1E7] border-solid  rounded-tl-xl rounded-bl-xl">Today</p>
        <p className="py-4 px-6 text-[#17181A] text-sm font-normal break-words border border-[#D9E1E7] border-solid ">7 Todays</p>
        <p className="py-4 px-6 text-[#809FB8] text-sm font-normal break-words border border-[#D9E1E7] border-solid  ">30 Todays</p>

        <p className="py-4 px-6 text-[#809FB8] text-sm font-normal break-words border border-[#D9E1E7] border-solid  rounded-tr-xl rounded-br-xl">90 Days</p>

        </div>
      </div>

   

      
      
      <div className="flex  items-center justify-center w-full">  
          <FluctuationChart/>

      </div>
     
      <div className='flex ml-3 justify-center items-center gap-11 mt-6'>
                <div className='flex justify-center items-center gap-3'>
                    <div className='w-5 h-5 bg-[#43ED9B]  rounded-full '/>
                    <div className='text-[#424E61] text-base font-normal leading-3 break-words' >Rise </div>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <div className='w-5 h-5 bg-[#ED9543]  rounded-full'/>
                    <div className='text-[#424E61] text-base font-normal leading-3 break-words '>Fail</div>
                </div>
              
            </div>
    </div>
  </div>
  )
}

export default Fluctuation