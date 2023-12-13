import React from 'react'

function Bottom() {
    return (
        <div style={{
            background:
                'linear-gradient(60deg, rgba(255, 255, 255, 1) 10%, rgba(207, 231, 255, 0.6) 10%, rgba(226, 229, 240, 0.6) 22.75%, rgba(251, 211, 234, 0.6) 56.9%, rgba(255, 245, 203, 0.6) 90%, rgba(255, 255, 255, 1) 100%)',
        }} className='w-full  h-96 gap-6 my-8 flex flex-col items-center justify-center'>
            <div className='flex flex-col gap-2'>
                <p className='text-center text-4xl'>For Business-Driven Screens, Choose MediaMesh</p>
                <p className='text-center'>Looking for screens that enhance your business? MediaMesh is your answer.</p>
            </div>
            <div>
                <div className='flex gap-6'>
                    <div className='flex-col flex gap-1 hover:font-semibold'>
                        <a href="#" class="inline-flex items-center hover:shadow-2xl  shadow-[#ff5100] justify-center px-10 py-3 text-base font-medium text-center text-white bg-gradient-to-r from-[#fd0036] via-[#ff5100] to-[#ffa800] dark:focus:ring-[#ff5100]  rounded-full">
                            Start Free Trial
                        </a>
                        <p className=' text-center text-gray-400 text-[10px]'>No Credit Card Required</p>
                    </div>

                    <a href="#" class="inline-flex items-center justify-center h-fit px-8 py-3 text-base font-medium text-center border text-black  rounded-full  hover:text-[#ff5100] bg-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Schedule My Demo
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Bottom
