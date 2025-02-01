import React from "react";
import './Project.css'
import line from "../../assets/Line.png";
import bg from "../../assets/Image (4).png";
import bg1 from "../../assets/Image (5).png";
import bg2 from "../../assets/Image (6).png";

const Project = () => {
    return (
        <div className="container project pb-60">
            <div className="flex mt-[70px]">
                <div className="flex gap-3 items-center text-2xl justify-center">
                    <img className='' src={line} alt="" />
                    <p className="font-medium">Projects we have done</p>
                </div>
            </div>
            <div className="flex justify-between pb-[40px]">
                <div className=" w-[50%] flex project__title items-start justify-center flex-col gap-6">
                    <h2 className="text-black text-[48px] font-medium">
                        We are Creating sustainable society, for everyone and forever.
                    </h2>
                </div>
            </div>
            <div className="flex project__box gap-24">
                <div className="flex project__card flex-col w-[340px] h-[400px]  items-center justify-center p-3">
                    <img className="absolute" src={bg} alt="" />
                    <div className="relative flex flex-col gap-10">
                        <h2 className="text-white text-3xl font-bold">
                            Mission 40K: Tree plantation
                        </h2>
                        <p className="text-white text-1xl font-light">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse varius enim in eros.
                        </p>
                        <button className="w-[132px] h-[51px] bg-[#FFFFFF] rounded-sm">
                            See more
                        </button>
                    </div>
                </div>
                <div className="flex project__card flex-col w-[340px] h-[400px]  items-center justify-center p-3">
                    <img className="absolute" src={bg1} alt="" />
                    <div className="relative flex flex-col gap-10">
                        <h2 className="text-white text-3xl font-bold">
                            Mission 40K: Tree plantation
                        </h2>
                        <p className="text-white text-1xl font-light">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse varius enim in eros.
                        </p>
                        <button className="w-[132px] h-[51px] bg-[#FFFFFF] rounded-sm">
                            See more
                        </button>
                    </div>
                </div>
                <div className="flex project__card flex-col w-[340px] h-[400px]  items-center justify-center p-3">
                    <img className="absolute" src={bg2} alt="" />
                    <div className="relative flex flex-col gap-10">
                        <h2 className="text-white text-3xl font-bold">
                            Mission 40K: Tree plantation
                        </h2>
                        <p className="text-white text-1xl font-light">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse varius enim in eros.
                        </p>
                        <button className="w-[132px] h-[51px] bg-[#FFFFFF] rounded-sm">
                            See mor6
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
