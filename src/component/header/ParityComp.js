import React from "react";
import Parity from "./Parity.svg";
import Right from "./Right.svg";
import Warning from "./Warning.svg";

const ParityComp = () => {
  return (
    <>
      <div className="flex gap-6 ">
        <img src={Parity} />
        <div className="w-60">
          <div className="flex flex-col justify-between ">
            <div className="text-xl font-normal text-[#333333] break-words">
              {" "}
              Parity
            </div>
            <div className="flex items-center justify-between gap-2 ">
              <img src={Right} className="py-5" />
              <img src={Warning} className="py-5" />
              <img src={Right} className="py-5" />
              <img src={Right} className="py-5" />
              <img src={Warning} className="py-5" />
              <img src={Right} className="py-5" />
              <img src={Right} className="py-5" />
            </div>
            <div className="text-[#E05E34] text-sm font-medium">
              View Reports
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParityComp;
