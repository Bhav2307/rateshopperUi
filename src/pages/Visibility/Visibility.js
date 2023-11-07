import React from 'react';
import Ranking from '../../component/ranking/Ranking'
import Fluctuation from '../../component/fluctuation/Fluctuation';
import TripleLineChart from '../../component/line/TripleLineChart';
import VisibilityTrends from '../../component/visibilityTrend/VisibilityTrends';


const Visibility = () => {
  return (
    <>
      <Ranking title={"Visiblity"} /> 
      <VisibilityTrends/>
      <TripleLineChart title={"fluctuation Trend"}/>

    </>
  )
}

export default Visibility;