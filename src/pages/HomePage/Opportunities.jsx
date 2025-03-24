import React from 'react'

const Opportunities = () => {
    const uopopportunities = [
        {
            id: 1,
            name: 'Higher Studies Opportunities',
            icon: 'https://inro.pdn.ac.lk/assets/images/higherstudies.jpg',
            desc: 'Higher studies opportunities (Masters/PhDs) at foreign institutes',
            link: 'https://inro.pdn.ac.lk/iprojects.php',
        },
        {
            id: 2,
            name: 'Scholarship Opportunities',
            icon: 'https://inro.pdn.ac.lk/assets/images/scholarships.jpg',
            desc: 'For staff/students seeking to further their education with financial support',
            link: 'https://inro.pdn.ac.lk/erasmusprojects.php',
        },
        {
            id: 3,
            name: 'Staff/ Student Exchange',
            icon: 'https://inro.pdn.ac.lk/assets/images/exchange.jpg',
            desc: 'Inbound/outbound staff and student exchange programs coordinated by InRO',
            link: 'https://www.jst.go.jp/global/english/kadai/h2205_srilanka.html',
        },
        {
            id: 4,
            name: 'Grant Opportunities',
            icon: 'https://inro.pdn.ac.lk/assets/images/grants.jpg',
            desc: 'Grants provided by InRO for events with international participants',
            link: 'https://inro.pdn.ac.lk/erasmusprojects.php',
        },
        {
            id: 5,
            name: 'Global Digital Platform',
            icon: 'https://inro.pdn.ac.lk/assets/images/glo_plat.png',
            desc: 'A digital platform to strengthen networking and connectivity',
            link: 'https://www.jst.go.jp/global/english/kadai/h2205_srilanka.html',
        },
    ]
    return (
        <div>
            <div className="xl:px-28 md:px-10 px-4 mb-16">
            <h1 className="mb-4 text-[#560606] uppercase font-semibold text-lg">Opportunities</h1>
                <div className="grid md:grid-cols-3 gap-6">
                    {
                        uopopportunities.map((opts, index) => {
                            return (
                                <div className="" key={index}>
                                    <div className="p-4">
                                        <img src={opts.icon} alt="" className='rounded-xl' />
                                    </div>
                                    <div className="mt-4">
                                        <h1 className="uppercase font-semibold text-xl text-[#560606]">{opts.name}</h1>
                                        <p className="pt-1 text-gray-500">{opts.desc}</p>
                                    </div>
                                    <div className="mt-2">
                                        <a href={opts.link}  target='_blank'>
                                            <button className='py-1 px-4 border border-[#560606] text-[#560606] duration-500 hover:bg-[#560606] hover:text-white'>
                                                Read More
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Opportunities