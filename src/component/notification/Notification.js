import React from "react";
import NotificationLogo from './Notification.svg'

function Notification() {
  return (
    <div
      className="border rounded-tl-xl flex flex-col gap-2 w-[492px] h-[930px] "
      style={{
        boxShadow: "10px 24px 54px rgba(0, 0, 0, 0.06)",
      }}
    >
      <div className="py-5 px-5 gap-5 flex justify-start items-center mt-5">
        <div>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Button">
              <rect
                x="0.5"
                y="0.5"
                width="39"
                height="39"
                rx="7.5"
                fill="#E6ECF5"
              />
              <path
                id="Vector 515"
                d="M23.5 13L16.5 20L23.5 27"
                stroke="#272E37"
                stroke-width="1.4"
                stroke-linecap="round"
              />
              <rect
                x="0.5"
                y="0.5"
                width="39"
                height="39"
                rx="7.5"
                stroke="#9D9D9D"
              />
            </g>
          </svg>
        </div>
        <div className="text-[#2C2F30] text-xl font-semibold break-words">
          Notifications & Alerts
        </div>
      </div>
    
     
        <div className="grid grid-cols-2 px-5 gap-1">
            <div className="grid grid-cols-2 p-3 gap-1  rounded-lg border border-solid border-[#E6ECF5]" style={{
  boxShadow: "-4px 4px 16px rgba(0, 0, 0, 0.06)",
}}>
              <div className="text-[#3A4352] text-sm break-words font-medium text-right">Parity</div>
              <div className="bg-[#FF0000] rounded-full w-5 h-5 flex justify-center items-center  ">
        <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Field text">
<path id="Vector" d="M10.0703 6.39941V7.24316H5.78125V6.51807L7.86426 4.24609C8.09277 3.98828 8.27295 3.76562 8.40479 3.57812C8.53662 3.39062 8.62891 3.22217 8.68164 3.07275C8.7373 2.92041 8.76514 2.77246 8.76514 2.62891C8.76514 2.42676 8.72705 2.24951 8.65088 2.09717C8.57764 1.94189 8.46924 1.82031 8.32568 1.73242C8.18213 1.6416 8.00781 1.59619 7.80273 1.59619C7.56543 1.59619 7.36621 1.64746 7.20508 1.75C7.04395 1.85254 6.92236 1.99463 6.84033 2.17627C6.7583 2.35498 6.71729 2.56006 6.71729 2.7915H5.6582C5.6582 2.41943 5.74316 2.07959 5.91309 1.77197C6.08301 1.46143 6.3291 1.21533 6.65137 1.03369C6.97363 0.849121 7.36182 0.756836 7.81592 0.756836C8.24365 0.756836 8.60693 0.828613 8.90576 0.972168C9.20459 1.11572 9.43164 1.31934 9.58691 1.58301C9.74512 1.84668 9.82422 2.15869 9.82422 2.51904C9.82422 2.71826 9.79199 2.91602 9.72754 3.1123C9.66309 3.30859 9.5708 3.50488 9.45068 3.70117C9.3335 3.89453 9.19434 4.08936 9.0332 4.28564C8.87207 4.479 8.69482 4.67529 8.50146 4.87451L7.11719 6.39941H10.0703Z" fill="white"/>
<path id="Vector_2" d="M3.55762 0.822754V7.24316H2.49854V2.07959L0.929688 2.61133V1.73682L3.43018 0.822754H3.55762Z" fill="white"/>
</g>
</svg>


</div>
            </div>
            <div className="grid grid-cols-2">
            <div className=" p-3 gap-1 flex justify-center">
              <div className="text-[#5E687F] text-sm break-words font-medium ">Visibility</div>
              <div className="bg-[#FF0000] rounded-full w-5 h-5 flex justify-center items-center  ">
        <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Field text">
<path id="Vector" d="M10.0703 6.39941V7.24316H5.78125V6.51807L7.86426 4.24609C8.09277 3.98828 8.27295 3.76562 8.40479 3.57812C8.53662 3.39062 8.62891 3.22217 8.68164 3.07275C8.7373 2.92041 8.76514 2.77246 8.76514 2.62891C8.76514 2.42676 8.72705 2.24951 8.65088 2.09717C8.57764 1.94189 8.46924 1.82031 8.32568 1.73242C8.18213 1.6416 8.00781 1.59619 7.80273 1.59619C7.56543 1.59619 7.36621 1.64746 7.20508 1.75C7.04395 1.85254 6.92236 1.99463 6.84033 2.17627C6.7583 2.35498 6.71729 2.56006 6.71729 2.7915H5.6582C5.6582 2.41943 5.74316 2.07959 5.91309 1.77197C6.08301 1.46143 6.3291 1.21533 6.65137 1.03369C6.97363 0.849121 7.36182 0.756836 7.81592 0.756836C8.24365 0.756836 8.60693 0.828613 8.90576 0.972168C9.20459 1.11572 9.43164 1.31934 9.58691 1.58301C9.74512 1.84668 9.82422 2.15869 9.82422 2.51904C9.82422 2.71826 9.79199 2.91602 9.72754 3.1123C9.66309 3.30859 9.5708 3.50488 9.45068 3.70117C9.3335 3.89453 9.19434 4.08936 9.0332 4.28564C8.87207 4.479 8.69482 4.67529 8.50146 4.87451L7.11719 6.39941H10.0703Z" fill="white"/>
<path id="Vector_2" d="M3.55762 0.822754V7.24316H2.49854V2.07959L0.929688 2.61133V1.73682L3.43018 0.822754H3.55762Z" fill="white"/>
</g>
</svg>


</div>
            </div>
            <div className="flex justify-start p-3 gap-1">
              <div className="text-[#5E687F] text-sm break-words font-medium  ">Reputation</div>
              <div className="bg-[#5E687F] rounded-full w-5 h-5 flex justify-center items-center  ">
        <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Field text">
<path id="Vector" d="M10.0703 6.39941V7.24316H5.78125V6.51807L7.86426 4.24609C8.09277 3.98828 8.27295 3.76562 8.40479 3.57812C8.53662 3.39062 8.62891 3.22217 8.68164 3.07275C8.7373 2.92041 8.76514 2.77246 8.76514 2.62891C8.76514 2.42676 8.72705 2.24951 8.65088 2.09717C8.57764 1.94189 8.46924 1.82031 8.32568 1.73242C8.18213 1.6416 8.00781 1.59619 7.80273 1.59619C7.56543 1.59619 7.36621 1.64746 7.20508 1.75C7.04395 1.85254 6.92236 1.99463 6.84033 2.17627C6.7583 2.35498 6.71729 2.56006 6.71729 2.7915H5.6582C5.6582 2.41943 5.74316 2.07959 5.91309 1.77197C6.08301 1.46143 6.3291 1.21533 6.65137 1.03369C6.97363 0.849121 7.36182 0.756836 7.81592 0.756836C8.24365 0.756836 8.60693 0.828613 8.90576 0.972168C9.20459 1.11572 9.43164 1.31934 9.58691 1.58301C9.74512 1.84668 9.82422 2.15869 9.82422 2.51904C9.82422 2.71826 9.79199 2.91602 9.72754 3.1123C9.66309 3.30859 9.5708 3.50488 9.45068 3.70117C9.3335 3.89453 9.19434 4.08936 9.0332 4.28564C8.87207 4.479 8.69482 4.67529 8.50146 4.87451L7.11719 6.39941H10.0703Z" fill="white"/>
<path id="Vector_2" d="M3.55762 0.822754V7.24316H2.49854V2.07959L0.929688 2.61133V1.73682L3.43018 0.822754H3.55762Z" fill="white"/>
</g>
</svg>


</div>
            </div>
            </div>
        </div>


        <div className="p-5 w-full">
              <div className="p-[6px] flex gap-3 w-full">
                  <img  src={NotificationLogo}/>
                  <div className="flex flex-col justify-center  gap-1 w-full ">
                      <div className="flex gap-3  justify-between">
                           <div className="text-[#141719] text-base font-medium break-words ">Visibility Needs attention</div>
                           <div className="text-[#141719] text-sm font-normal break-words">3 Hrs Ago</div>
                      </div>
                      <div className="text-[#6F7C8E] text-sm font-normal break-words w-full">Your Visibility has gone down by 2 place</div>
                  </div>
              </div>
        </div>
      </div>
    
  );
}

export default Notification;



