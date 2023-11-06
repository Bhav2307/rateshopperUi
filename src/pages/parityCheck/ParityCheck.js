import React from 'react'
import ParityComp from '../../component/header/ParityComp'
import Ranking from '../../component/ranking/Ranking'
import StackChart from '../../component/stack/StackChart'
import TripleLineChart from '../../component/line/TripleLineChart'

function ParityCheck() {
  return (
   <>
   <ParityComp/>
   <div className='mt-6'>
   <Ranking title={"Parity Check"}/>
   </div>
   <div className='mt-6'>
   <StackChart title={"Rate Parity"}/>
   </div>
   <div className='mt-6'>
    <TripleLineChart title={"Rate Parity Trend"}/>
   </div>

   </>
  )
}

export default ParityCheck