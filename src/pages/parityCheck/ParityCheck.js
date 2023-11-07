import React from 'react'
import ParityComp from '../../component/header/ParityComp'
import Ranking from '../../component/ranking/Ranking'
import StackChart from '../../component/stack/StackChart'
import TripleLineChart from '../../component/line/TripleLineChart'




function ParityCheck() {
  return (
   <>
   <ParityComp/>
   
   <Ranking title={"Parity Check"}/>
   <StackChart title={"Rate Parity"}/>
    <TripleLineChart title={"Rate Parity Trend"}/>
   </>
  )
}

export default ParityCheck