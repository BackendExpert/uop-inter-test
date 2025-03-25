import React from 'react';
import { secNavData } from '../../components/Nav/DataNav';
import { FaArrowRightLong } from 'react-icons/fa6';

const MenuFulldata = () => {
    const filteredData = secNavData.filter(data => [3, 4, 5, 6, 7, 8].includes(data.id));

    return (
        <div className="xl:px-28 md:px-10 px-4 mb-16 my-24">
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
                {filteredData.map((data) => (
                    <div key={data.id}>
                        <img src={data.img} alt={data.name} className="h-40 rounded-b-[50px] rounded-tl-[50px] w-full" />
                        <h1 className="text-center uppercase font-semibold text-xl text-[#560606] mt-2">{data.name}</h1>

                        {/* Ensure submenu exists before trying to map */}
                        {data.submenu?.length > 0 && (
                            <div>
                                {data.submenu.map((subdata) => (
                                    <a key={subdata.link} href={subdata.link} target="_blank" rel="noopener noreferrer" className="block mt-4 text-gray-500">
                                        <div className="flex items-center duration-500 hover:pl-2 hover:text-[#560606]">
                                            <FaArrowRightLong className="mt-1" />
                                            <h1 className="text-xl ml-2">{subdata.name}</h1>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MenuFulldata;
