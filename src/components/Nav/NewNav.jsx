import React, { useState, useEffect } from "react";
import UopLogo from "../../assets/uop.png";
import { TfiMenu, TfiClose } from "react-icons/tfi";
import { secNavData } from "./DataNav";
import { Link } from "react-router-dom";

const NewNav = () => {
    const [menuopen, setmenuopen] = useState(false);
    const [isTop, setIsTop] = useState(true);

    const togglemenu = () => {
        setmenuopen(!menuopen);
    };

    return (
        <div className="relative">
            {/* Navigation Bar */}
            <div className="xl:px-20 px-4 py-0 bg-white/40 backdrop-blur-lg border-b border-gray-200 shadow-md">
                <div className="flex justify-between items-center">
                    {/* Menu Toggle Button */}
                    <div className="mt-2 flex">
                        <div className="">
                            {menuopen ? (
                                <TfiClose className="xl:h-8 h-6 w-auto cursor-pointer" onClick={togglemenu} />
                            ) : (
                                <TfiMenu className="xl:h-8 h-6 w-auto cursor-pointer" onClick={togglemenu} />
                            )}
                        </div>

                        <div className="pl-4 flex">
                            {secNavData.map((data, index) => {
                                if ([1, 2, 4, 9, 11].includes(data.id)) {
                                    return (
                                        <a
                                            href={data.link}
                                            target="_blank"
                                            className="xl:block hidden"
                                            key={index}
                                        >
                                            <div className="mx-4">
                                                <p
                                                    className={`font-semibold duration-500 text-lg uppercase ${
                                                        isTop ? "text-white" : "text-[#560606]"
                                                    } hover:text-[#560606]`}
                                                >
                                                    {data.name}
                                                </p>
                                            </div>
                                        </a>
                                    );
                                }
                            })}
                        </div>
                    </div>

                    {/* University Logo */}
                    <div className="py-6">
                        <div className="flex">
                            <a href="/">
                                <img src={UopLogo} alt="UoP Logo" className="xl:h-16 h-12 w-auto" />
                            </a>
                            <div className="xl:mt-1 pl-4 md:block hidden">
                                <h1 className="xl:text-lg uppercase text-[#e8b910] font-semibold">
                                    University of Peradeniya
                                </h1>
                                <p className="xl:text-md md:text-sm text-[#560606]">
                                    International Students Programme
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewNav;
