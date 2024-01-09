import React from 'react'

function Bottom() {
    return (
        <div style={{
            backgroundImage: 'url("https://www.pickcel.com/assets/img/bg/industry-bg.png")'
        }} className='w-full h-80 md:h-96  gap-6 my-8 flex flex-col items-center justify-center'>
            <div className='flex flex-col gap-2'>
                <p className='text-center text-lg md:text-4xl'>For Business-Driven Screens, Choose MediaMesh</p>
                <p className='text-center '>Looking for screens that enhance your business? MediaMesh is your answer.</p>
            </div>
            <div>
                <div className='flex md:gap-6 '>
                    <div className='flex-col flex gap-1 hover:font-semibold'>
                        <div class="flex flex-wrap pt-[2px] justify-center   w-fit rounded-full  ">
                            <a
                                style={{ background: "linear-gradient(113deg, #fd0036 24.5%,  #ffa800)" }}
                                href="!"
                                class="button button--aylen md:px-10 md:py-3.2 py-3 px-4  hover:bg-white text-white relative block focus:outline-none  rounded-full text-[10px] md:text-sm text-center font-semibold overflow-hidden"
                            >
                                Start Free Trial
                            </a>
                        </div>
                        <p className=' text-center text-gray-400 text-[10px]'>No Credit Card Required</p>
                    </div>

                    <a href="#" class="inline-flex items-center justify-center h-fit md:px-6  text-[10px] py-3 px-3 md:py-3 md:text-[14px] font-medium text-center border text-black  rounded-full  hover:text-[#ff5100] bg-white hover:border-[#ff5100]">
                        Schedule My Demo
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Bottom
