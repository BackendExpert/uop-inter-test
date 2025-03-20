import React, { useState } from "react";
import UopLogo from "../../assets/uop.png";
import { TfiMenu, TfiClose } from "react-icons/tfi";
import { secNavData } from "./DataNav";
import { Link } from "react-router-dom";

const NewNav = () => {
    const [menuopen, setmenuopen] = useState(false);

    const togglemenu = () => {
        setmenuopen(!menuopen);
    };

    return (
        <div className="relative">
            {/* Navigation Bar */}
            <div className="xl:px-20 px-4 py-0 bg-transparent border-b border-gray-200 shadow-md">
                <div className="flex justify-between items-center">
                    {/* Menu Toggle Button */}
                    <div className="mt-2">
                        {menuopen ? (
                            <TfiClose className="xl:h-8 h-6 w-auto cursor-pointer" onClick={togglemenu} />
                        ) : (
                            <TfiMenu className="xl:h-8 h-6 w-auto cursor-pointer" onClick={togglemenu} />
                        )}
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
                                <p className="xl:text-md md:text-sm text-gray-500">International Students Programme</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar Menu (Scrollable) */}
            <div
                className={`fixed top-0 left-0 h-screen md:w-96 w-84 bg-white shadow-lg transform ${menuopen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out z-50 overflow-y-auto max-h-screen`}
            >
                <div className="p-6">
                    {/* Close Button */}
                    <button className="mb-4" onClick={togglemenu}>
                        <TfiClose className="h-8 w-8" />
                    </button>

                    {/* Sidebar Logo */}
                    <div className="mb-4">
                        <div className="flex items-center">
                            <a href="/">
                                <img src={UopLogo} alt="UoP Logo" className="h-10 w-auto" />
                            </a>
                            <div className="pl-4 ">
                                <h1 className="md:text-lg text-xs uppercase text-[#e8b910] font-semibold">
                                    University of Peradeniya
                                </h1>
                                <p className="md:text-sm text-xs text-gray-500">International Students Programme</p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Content */}
                    <div className="text-gray-700">
                        <div className="">
                            {
                                secNavData.map((data, index) => {
                                    return (
                                        <div className="" key={index}>
                                            {
                                                data.link ? 
                                                    <div className="my-4">
                                                        <a href={data.link} className="duration-500 hover:text-[#e8b910] hover:pl-2 text-[#560606] font-semibold">
                                                            {data.name}
                                                        </a>
                                                    </div>
                                                :
                                                    <div className="">
                                                        <div className="text-[#560606] font-semibold">{data.name}</div>
                                                        {
                                                            data.submenu.map((submenudata, submenuindex) => {
                                                                return (
                                                                    <div className="ml-4 my-2" key={submenuindex}>
                                                                        <a href={submenudata.link} className="duration-500 hover:text-[#e8b910] hover:pl-2">
                                                                            {submenudata.name}
                                                                        </a>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Overlay (Click to Close Menu) */}
            {menuopen && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
                    onClick={togglemenu}
                ></div>
            )}
        </div>
    );
};

export default NewNav;
