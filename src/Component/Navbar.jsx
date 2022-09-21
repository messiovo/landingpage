import React, {useState} from "react";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const mobileHandler =() => {
    setIsMobile(!isMobile)
  }
  
  return (
    <>
      <nav className="w-full flex items-center justify-between lg:px-20 pt-8 px-4 z-30">
        <span>
        <h1 className="font-bold text-white lg:text-2xl text-xl">loopstudios</h1>
        </span>
        <ul className={`${!isMobile ? `scale-y-0` : `scale-y-100 `} lg:scale-y-100 z-20 flex lg:flex-row flex-col font-semibold text-white  lg:text-lg lg:relative lg:top-0  lg:w-fit w-full fixed top-20 align-middle lg:gap-12 justify-evenly text-center transition-transform duration-700 ease-in lg:h-auto h-screen lg:inset-auto lg:bg-transparent bg-[#c264cd]  inset-0 lg:py-0 py-6 lg:overflow-y-hidden overflow-y-visible`} onBlur={()=> {setIsMobile(false)}} tabIndex={30}>
          <li onClick={() => {setIsMobile (false)}}>
            About
          </li>
          <li onClick={() => {setIsMobile (false)}}>
            Careers
          </li>
          <li onClick={() => {setIsMobile (false)}}>
          Events
          </li>
          <li onClick={() => {setIsMobile (false)}}>
          Products
          </li>
          <li onClick={() => {setIsMobile (false)}}>
            Support
          </li>
        </ul>
        <div className="w-8 cursor-pointer lg:hidden" onClick={mobileHandler}>
          <span className="w-full h-1 bg-white block "></span>
          <span className="w-full h-1 bg-white block mt-1.5 "></span>
          <span className="w-full h-1 bg-white block mt-1.5   "></span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
