import React from 'react'
import { MdWork } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import { FaTrophy } from "react-icons/fa";
import Hdr1 from '../../assets/Hdr1.jpg'
import CountUp from 'react-countup';

const DataThree = () => {
    const itemdata = [
        {
            id: 1,
            name: 'Ongoing MoUs',
            icon: MdWork,
            value: 51,
        },
        {
            id: 2,
            name: 'Processing MoUs',
            icon: IoIosTime,
            value: 18,
        },
        {
            id: 3,
            name: 'Collaborative countries',
            icon: FaTrophy,
            value: 37,
        }
    ]
    return (
        <div className='relative bg-cover bg-center py-20 my-10' style={{ backgroundImage: `url(${Hdr1})` }}>
            <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
            <div className="relative text-white z-20 xl:px-28 md:px-10 px-4 my-16">
                <center>
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                        {
                            itemdata.map((item, index) => {
                                return (
                                    <div className="" key={index}>
                                        <div className="">
                                            <item.icon className='h-20 w-auto' />
                                        </div>
                                        <h1 className="text-4xl mt-4"><CountUp end={item.value} duration={2}/></h1>
                                        <p className="pt-2 text-2xl font-semibold">{item.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </center>
            </div>
        </div>

    )
}

export default DataThree