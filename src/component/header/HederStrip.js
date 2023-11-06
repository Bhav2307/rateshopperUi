import React from "react";

import visible from "./Visible.svg";
import Reputation from "./Reputation.svg";
import ParityComp from "./ParityComp";

const VisibilityComp = () => {
  return (
    <>
      <div className="flex gap-6 ">
        <div className="mr-6">
          <svg
            className=""
            width="2"
            height="104"
            viewBox="0 0 2 104"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1.26445"
              y1="0.597701"
              x2="1.26444"
              y2="103.402"
              stroke="#F0F0F0"
              stroke-width="1.1954"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <img src={visible} />
        <div className="w-60">
          <div className="flex flex-col justify-between gap-3 ">
            <div className="text-xl font-normal text-[#333333]">Visibility</div>
            <div className="flex items-center justify-start gap-2">
              <div className="flex  gap-2">
                <p className="text-4xl  font-semibold break-words text-black">
                  16
                </p>
                <p className="text-base  font-semibold break-words text-black pb-1">
                  TH
                </p>
              </div>
              <div className="flex gap-2 justify-center items-center">
                <p className="text-[#E05E34] text-sm font-bold break-words">
                  1
                </p>
                <svg
                  width="8"
                  height="11"
                  viewBox="0 0 8 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Vector"
                    d="M3.31616 0.5C3.31616 0.223857 3.54002 0 3.81616 0C4.0923 0 4.31616 0.223857 4.31616 0.5H3.31616ZM4.16972 10.8536C3.97445 11.0488 3.65787 11.0488 3.46261 10.8536L0.280628 7.67157C0.085366 7.47631 0.085366 7.15973 0.280628 6.96447C0.47589 6.7692 0.792473 6.7692 0.987735 6.96447L3.81616 9.79289L6.64459 6.96447C6.83985 6.7692 7.15643 6.7692 7.3517 6.96447C7.54696 7.15973 7.54696 7.47631 7.3517 7.67157L4.16972 10.8536ZM4.31616 0.5L4.31616 10.5H3.31616L3.31616 0.5H4.31616Z"
                    fill="#E05E34"
                  />
                </svg>
              </div>
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

const ReputationComp = () => {
  return (
    <>
      <div className="flex gap-6 ">
        <div className="mr-6">
          <svg
            className=""
            width="2"
            height="104"
            viewBox="0 0 2 104"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1.26445"
              y1="0.597701"
              x2="1.26444"
              y2="103.402"
              stroke="#F0F0F0"
              stroke-width="1.1954"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <img src={Reputation} />
        <div className="w-60">
          <div className="flex flex-col justify-between gap-3 ">
            <div className="text-xl font-normal text-[#333333]">Reputation</div>
            <div className="flex items-center justify-start gap-2">
              <p className="text-4xl  font-semibold break-words text-black">
                4.8
              </p>

              <div className="flex gap-2 justify-center items-center">
                <p className="text-[#E05E34] text-sm font-bold break-words">
                  1
                </p>
                <svg
                  width="8"
                  height="11"
                  viewBox="0 0 8 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Vector"
                    d="M3.31616 0.5C3.31616 0.223857 3.54002 0 3.81616 0C4.0923 0 4.31616 0.223857 4.31616 0.5H3.31616ZM4.16972 10.8536C3.97445 11.0488 3.65787 11.0488 3.46261 10.8536L0.280628 7.67157C0.085366 7.47631 0.085366 7.15973 0.280628 6.96447C0.47589 6.7692 0.792473 6.7692 0.987735 6.96447L3.81616 9.79289L6.64459 6.96447C6.83985 6.7692 7.15643 6.7692 7.3517 6.96447C7.54696 7.15973 7.54696 7.47631 7.3517 7.67157L4.16972 10.8536ZM4.31616 0.5L4.31616 10.5H3.31616L3.31616 0.5H4.31616Z"
                    fill="#E05E34"
                  />
                </svg>
              </div>
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

function HederStrip() {
  return (
    <>
      <div className="flex justify-between gap-6 px-12 py-6">
        <ParityComp />

        <VisibilityComp />

        <ReputationComp />
      </div>
    </>
  );
}

export default HederStrip;
