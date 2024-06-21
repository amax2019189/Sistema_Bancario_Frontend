import React from 'react'

function SectionA() {
    return (
        <div className=" ">
            {/* top container with tagline and backgroundImage  */}
            <div className="relative">
                {/* image section  */}
                <section
                    className="w-full h-[31vh] lg:h-[55vh] bg-cover bg-center brightness-50"
                    style={{ background: 'black' }}
                ></section>

                {/* tagline division  */}
                <div className="absolute top-1/2 left-[5%] md:left-[10%] -translate-y-1/2 text-white">
                    <h1 className="text-3xl md:text-5xl font-bold">Empieza tu camino</h1>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF3M82Gt4rPnVD0qIIkhTKp1w4gdDQ3jpy5A&s" alt=""
                        className='mt-12 mx-auto' />
                    <p className="text-sm md:text-lg mt-12">
                        The Ultimate Guide To Ace SDE Interviews.
                    </p>
                </div>
            </div>

        </div >
    );
}

export default SectionA