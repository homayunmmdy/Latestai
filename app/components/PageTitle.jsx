import React from 'react'

const PageTitle = ({ titr, title , background }) => {
    return (
        <>
            <div className="hero bg-center	bg-cover h-3/4" style={{ backgroundImage: `url(${background})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content py-12	sm:py-36">
                    <div className="max-w-7xl">
                        <div className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 mb-2 text-2xl brightness-[90%]">
                            {titr}
                        </div>
                        <h2 className='text-white text-4xl font-light  sm:text-5xl md:text-7xl tracking-wide  sm:leading-loose text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque corrupti similique doloribus iste nulla blanditiis.</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageTitle