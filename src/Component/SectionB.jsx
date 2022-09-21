import React from "react";

const SectionB = () => {
  const desktop = [
    {
      img: require("./image/image-deep-earth.jpg"),
      text1: " DEEP",
      text2: "EARTH",
    },
    {
      img: require("./image/image-night-arcade.jpg"),
      text1: " NIGHT",
      text2: "ARCADE",
    },
    {
      img: require("./image/image-soccer-team.jpg"),
      text1: " SOCCER",
      text2: "TEAM VR",
    },
    {
      img: require("./image/image-grid.jpg"),
      text1: " THE",
      text2: "GRID",
    },
    {
      img: require("./image/image-from-above.jpg"),
      text1: " FROM UP",
      text2: "ABOVE VR",
    },
    {
      img: require("./image/image-pocket-borealis.jpg"),
      text1: " POCKET",
      text2: "BOREALIS",
    },
    {
      img: require("./image/image-curiosity.jpg"),
      text1: " THE",
      text2: "CURIOSITY",
    },
    {
      img: require("./image/image-fisheye.jpg"),
      text1: " MAKE IT",
      text2: "FISHEYE",
    },
  ];
  const mobile = [
    {
      img: require("./mobile/image-deep-earth.jpg"),
      text1: " DEEP",
      text2: "EARTH",
    },
    {
      img: require("./mobile/image-night-arcade.jpg"),
      text1: " NIGHT",
      text2: "ARCADE",
    },
    {
      img: require("./mobile/image-soccer-team.jpg"),
      text1: " SOCCER",
      text2: "TEAM VR",
    },
    {
      img: require("./mobile/image-grid.jpg"),
      text1: " THE",
      text2: "GRID",
    },
    {
      img: require("./mobile/image-from-above.jpg"),
      text1: " FROM UP",
      text2: "ABOVE VR",
    },
    {
      img: require("./mobile/image-pocket-borealis.jpg"),
      text1: " POCKET",
      text2: "BOREALIS",
    },
    {
      img: require("./mobile/image-curiosity.jpg"),
      text1: " THE",
      text2: "CURIOSITY",
    },
    {
      img: require("./mobile/image-fisheye.jpg"),
      text1: " MAKE IT",
      text2: "FISHEYE",
    },
  ];

  return (
    <div className="lg:px-20 pb-20 px-10">
      <div className="flex items-center lg:justify-between justify-center font-thin pb-14">
        <h2 className="text-3xl  text-[#323030] lg:text-left text-center">
          OUR CREATIONS
        </h2>
        <button className="border-2 border-[#635d5d] py-1 px-7 text-sm lg:block hidden">
          SEE ALL
        </button>
      </div>
      <section className="lg:grid lg:grid-cols-4 gap-14 hidden ">
        {desktop.map((items, i) => (
          <div key={i}>
            <img src={items.img} alt="" />
            <span className="relative top-[-7rem] z-10 text-white text-2xl font-thin left-10 leading-6">
              <h2>{items.text1}</h2>
              <h2>{items.text2}</h2>
            </span>
          </div>
        ))}
      </section>
      <section className="lg:hidden flex flex-col items-center justify-center gap-4">
        {mobile.map((mobileItems, i) => (
          <div key={i}>
            <img src={mobileItems.img} alt="" />
            <span className="relative top-[-4rem] text-white text-xl font-thin z-10 left-5 leading-6">
              <h2>{mobileItems.text1}</h2>
              <h2>{mobileItems.text2}</h2>
            </span>
          </div>
        ))}
        <button className="border-2 border-[#635d5d] py-1 px-7 text-sm lg:hidden block">
          SEE ALL
        </button>
      </section>
    </div>
  );
};

export default SectionB;
