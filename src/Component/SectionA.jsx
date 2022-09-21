import React from "react";
import picture from "./image/image-interactive.jpg";

const SectionA = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:p-20 px-8 pt-20 h-auto ">
      <div className="w-full lg:w-2/4  self-center lg:self-auto">
        <img src={picture} alt="" className="w-fit h-fit"/>
      </div>
      <div className="w-full lg:w-2/4 flex flex-col mx-auto">
        <span className="w-[8rem] h-[8rem] bg-[#c264cd] lg:block hidden "></span>
        <span className=" lg:pl-20  py-10 px-6 leading-6">
          <h2 className="text-[#323030] lg:text-5xl pb-4 text-4xl font-thin ">THE LEADER IN INTERACTIVE VR</h2>
          <p className="text-[#635d5d] font-semibold pb-10">
            Founded in 2011. Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that binds to their brand.
          </p>
        </span>
      </div>
    </div>
  );
};

export default SectionA;
