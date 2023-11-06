import React from 'react';
import Ranking from '../../component/ranking/Ranking'
import Fluctuation from '../../component/fluctuation/Fluctuation';
import TripleLineChart from '../../component/line/TripleLineChart';


const Visibility = () => {
  return (
    <>
      <Ranking title={"Visiblity"} /> 
      <TripleLineChart title={"Visibility Trend"}/>
      <TripleLineChart title={"fluctuation Trend"}/>

    </>
  )
}

export default Visibility;