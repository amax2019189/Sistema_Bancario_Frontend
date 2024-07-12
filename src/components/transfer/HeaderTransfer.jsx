import React from 'react'

function HeaderTransfer() {
    return (
        <div className='relative'>
            <div className="sticky isolate overflow-hidden bg-gray-900 py-24 sm:py-[9.6rem] mb-4">
                <img
                    src="https://images.unsplash.com/photo-1537724326059-2ea20251b9c8?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                />

                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Transeferencias</h2>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeaderTransfer