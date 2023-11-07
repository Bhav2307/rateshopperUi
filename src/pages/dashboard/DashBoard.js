import React from "react";
import HederStrip from "../../component/header/HederStrip";
import Ranking from "../../component/ranking/Ranking";
import TripleLineChart from "../../component/line/TripleLineChart";
import StackChart from "./../../component/stack/StackChart";

const DashBoard = () => {
  return (
    <>
      <HederStrip />
      <Ranking title={"Ranking"} /> 
      <TripleLineChart title={"Price Trend By Room Type"}/>
      <StackChart title={"Price Trend"} />
    </>
  );
};

export default DashBoard;
