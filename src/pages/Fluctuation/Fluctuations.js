import React from 'react';
import Ranking from '../../component/ranking/Ranking'
import Fluctuation from '../../component/fluctuation/Fluctuation';
import TripleLineChart from '../../component/line/TripleLineChart';


const Reputation = () => {
  return (
    <>
      <Ranking title={"Fluctuations"} /> 
      <Fluctuation title={"Fluctuations Viewer"}/>
      <TripleLineChart title={"fluctuation Trend"}/>

    </>
  )
}

export default Reputation