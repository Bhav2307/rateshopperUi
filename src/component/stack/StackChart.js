import React from 'react'
import StackedBarChart from './Chart'

function StackChart() {
  return (
    <div className="w-full h-full rounded-2xl bg-white  border ">
    <div className="p-6 flex flex-col ">
      <div className="w-full h-auto flex justify-between items-center">
        <div className='flex gap-3 items-center'>

        <div className="text-black text-xl font-medium leading-5 break-words h-auto w-auto">
        Price Trend 
        </div>
              
        
        </div>
      
    


        <div className='flex'>
        <p className="py-4 px-6 text-[#809FB8] text-sm font-normal break-words border border-[#D9E1E7] border-solid  rounded-tl-xl rounded-bl-xl">Today</p>
        <p className="py-4 px-6 text-[#17181A] text-sm font-normal break-words border border-[#D9E1E7] border-solid ">7 Todays</p>
        <p className="py-4 px-6 text-[#809FB8] text-sm font-normal break-words border border-[#D9E1E7] border-solid  ">30 Todays</p>

        <p className="py-4 px-6 text-[#809FB8] text-sm font-normal break-words border border-[#D9E1E7] border-solid  rounded-tr-xl rounded-br-xl">90 Days</p>

        </div>
      </div>

      <div  className="py-3 flex items-center ">
           

         
            
      </div> 

      
      
      <div className="flex  items-center justify-center w-full">  
          <StackedBarChart/>
      </div>
     
      <div className='flex ml-3 justify-center items-center gap-6 mt-3'>
                <div className='flex justify-center items-center gap-3'>
                    <div className='w-2 h-2 bg-[#43ED9B] py-[2px] rounded-full '/>
                    <div className='text-[#424E61] text-xs font-normal leading-3 break-words py-1'>Room Type 1</div>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <div className='w-2 h-2 bg-[#5956FF] py-[2px] rounded-full'/>
                    <div className='text-[#424E61] text-xs font-normal leading-3 break-words py-1'>Headline</div>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <div className='w-2 h-2 bg-[#FF5693] py-[2px] rounded-full'/>
                    <div className='text-[#424E61] text-xs font-normal leading-3 break-words py-1'>Headline</div>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <div className='w-2 h-2 bg-[#ED9543] py-[2px] rounded-full'/>
                    <div className='text-[#424E61] text-xs font-normal leading-3 break-words py-1'>Headline</div>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <div className='w-2 h-2 bg-[#D543ED] py-[2px] rounded-full'/>
                    <div className='text-[#424E61] text-xs font-normal leading-3 break-words py-1'>Headline</div>
                </div>
            </div>
    </div>
  </div>
  )
}

export default StackChart