import React from 'react'

function SectionA() {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='mt-[-10%]'>
                <path fill="#111827" fill-opacity="1" d="M0,224L60,229.3C120,235,240,245,360,240C480,235,600,213,720,208C840,203,960,213,1080,197.3C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
            <section className="text-gray-400 bg-gray-900 body-font mt-[-1rem]">

                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col">
                        <div className="h-1 bg-gray-800 rounded overflow-hidden">
                            <div className="w-24 h-full bg-indigo-500"></div>
                        </div>
                        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                            <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">
                                Nuestros servicios
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://cdn.kambista.com/wp-content/uploads/2023/01/cover-blog-Que-son-las-divisas-y-para-que-sirven-e1674862614414.jpg" />
                            </div>
                            <h2 className="text-xl font-medium title-font text-white mt-5">Divisas</h2>

                        </div>
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://www.bbva.com/wp-content/uploads/2019/11/transferencias2.jpg" />
                            </div>
                            <h2 className="text-xl font-medium title-font text-white mt-5">Transferencias</h2>

                        </div>
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://cdn-3.expansion.mx/dims4/default/5ae5fb0/2147483647/strip/true/crop/1218x861+0+0/resize/1800x1272!/format/webp/quality/80/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F03%2F49%2F09eb099f47d996deb18fc3bf29f9%2Fistock-1364208507.jpg" />
                            </div>
                            <h2 className="text-xl font-medium title-font text-white mt-5">Estados de cuenta</h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SectionA