import React from 'react'

const InterProjects = () => {
    const interpro = [
        {
            id: 1,
            name: 'Projects at UoP',
            icon: 'https://inro.pdn.ac.lk/assets/images/international_projects.jpg',
            desc: 'International projects in which University of Peradeniya has become a partner',
            link: 'https://inro.pdn.ac.lk/iprojects.php',
        },
        {
            id: 2,
            name: 'EU Projects',
            icon: 'https://inro.pdn.ac.lk/assets/images/eu.jpg',
            desc: 'The EU programme of cooperation supported for University of Peradeniya',
            link: 'https://inro.pdn.ac.lk/erasmusprojects.php',
        },
        {
            id: 3,
            name: 'SATREPS',
            icon: 'https://inro.pdn.ac.lk/assets/images/SATREPS.jpg',
            desc: 'SATREPS is a JST and JICA program for research projects targeting global issues and involving partnerships',
            link: 'https://www.jst.go.jp/global/english/kadai/h2205_srilanka.html',
        },
    ]
    return (
        <div>
            <div className="xl:px-28 md:px-10 px-4 mb-16">
            <h1 className="mb-4 text-[#560606] uppercase font-semibold text-lg">International Projects</h1>
                <div className="grid md:grid-cols-3 gap-6">
                    {
                        interpro.map((project, index) => {
                            return (
                                <div className="" key={index}>
                                    <div className="p-4">
                                        <img src={project.icon} alt="" className='rounded-xl' />
                                    </div>
                                    <div className="mt-4">
                                        <h1 className="uppercase font-semibold text-xl text-[#560606]">{project.name}</h1>
                                        <p className="pt-1 text-gray-500">{project.desc}</p>
                                    </div>
                                    <div className="mt-2">
                                        <a href={project.link} target='_blank'>
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

export default InterProjects