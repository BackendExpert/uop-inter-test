import React from 'react'
import UopLogo from '../../assets/uop.png'
import { MainNavData } from './DataNav'
import { FaSearch } from 'react-icons/fa'

const NewNav = () => {
    return (
        <div className='xl:px-20 px-4 py-0 bg-white text-white border-b border-gray-200 shadow-md'>
            <div className="flex justify-between">
                <div className=""></div>
                <div className="py-6">
                    <div className="xl:block hidden">
                        <div className="flex">
                            <a href="/">
                                <img src={UopLogo} alt="" className='xl:h-16 h-12 w-auto' />
                            </a>
                            <div className="mt-1 pl-4">
                                <h1 className="text-lg uppercase text-[#e8b910] font-semibold">University of Peradeniya</h1>
                                <p className="text-gray-500">International Students Programme</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewNav