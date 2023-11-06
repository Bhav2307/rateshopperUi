import React from 'react'
import HederStrip from '../header/HederStrip'
import Header from '../header/Header'
import Ranking from '../ranking/Ranking'
import TripleLineChart from '../line/TripleLineChart'
import StackChart from '../stack/StackChart'




function MainComp() {
  return (
   <>
   <div className='p-6 flex flex-col gap-6  '>
    <Header/>
    <HederStrip/>
    <Ranking/>
    <TripleLineChart/>
    <StackChart/>
   </div>

   </>
  )
}

export default MainComp