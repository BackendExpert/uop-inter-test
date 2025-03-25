import React from 'react'
import { secNavData } from '../../components/Nav/DataNav'
import { FaArrowRightLong } from "react-icons/fa6";

const MenuFulldata = () => {
    return (
        <div className="xl:px-28 md:px-10 px-4 mb-16 my-24">
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
                {
                    secNavData.map((data, index) => {
                        if (data.id === 3 || data.id === 5 || data.id === 6 || data.id === 7 || data.id === 8 || data.id === 10) {
                            return (
                                <div className="" key={index}>
                                    <img src={data.img} alt="" className='h-64 rounded-b-[50px] rounded-tl-[50px] w-full' />

                                    <div className="mt-2">
                                        <h1 className="text-center uppercase font-semibold text-xl text-[#560606]">{data.name}</h1>
                                    </div>

                                    {
                                        data.submenu.map((subdata, subindex) => {
                                            return (
                                                <div className="" key={subindex}>
                                                    <a href={subdata.link} target='_blank' className='cursor-pointer'>
                                                        <div className="flex mt-4 text-gray-500">
                                                            <div className="mt-2"><FaArrowRightLong /></div>
                                                            <h1 className="duration-500 hover:pl-2 hover:text-[#560606] text-xl ml-2">{subdata.name}</h1>
                                                        </div>
                                                    </a>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            )
                        }

                    })
                }
            </div>
        </div>
    )
}

export default MenuFulldata