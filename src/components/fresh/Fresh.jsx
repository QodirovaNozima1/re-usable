import React from "react";
import bg from "../../assets/BG.png";

const Fresh = () => {
  return (
    <div
      className=" fresh flex container flex-col  justify-center items-center"
      style={{
        width: "100%",
        height:"384px",
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "center",
      }}
    >
      <div className="flex flex-col w-[60%]  items-center gap-9">
        <h2 className="text-5xl font-bold text-white">You can contribute to make the environment greener!</h2>
        <div className="flex gap-10">
          <button className="w-[200px] h-[51px] text-white bg-[#70C174] rounded-md font-medium hover:drop-shadow-xl">
            Learn more
          </button>
          <button className="w-[148px] h-[51px]  bg-[white] rounded-md font-medium hover:drop-shadow-xl">
          Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fresh;
