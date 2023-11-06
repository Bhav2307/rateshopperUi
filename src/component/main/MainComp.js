import React from 'react'
import HederStrip from '../header/HederStrip'
import Header from '../header/Header'
import Ranking from '../ranking/Ranking'
import TripleLineChart from '../line/TripleLineChart'
import StackChart from '../stack/StackChart'


const Am = ({children}) => {

    return (<>
    <h3> yuuytuybnjlmkh</h3>
    
    {children}
    </>
    )
}

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
<Am >
    <StackChart />
</Am>
   </>
  )
}

export default MainComp