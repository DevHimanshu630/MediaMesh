import React from 'react'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'

function Cart() {
    return (
        <div className='w-full bg-[#fef8fb] md:flex  md:h-96'>
            <div className='md:w-[40%]  h-full flex md:pl-40 items-center justify-center'>
                <img height={"100px"} width={"350px"} src="https://www.pickcel.com/assets/img/home/soc-logo.webp" alt="" />
            </div>
            <div className='md:w-[60%]  p-5 md:p-0 md:pl-16 justify-center h-full flex items-center'>
                <div className='md:w-[70%]  flex flex-col gap-4'>
                    <p className='md:text-5xl text-center md:text-start font-normal'>System security aligned with your enterprise standards</p>
                    <p className='md:text-xl font-thin text-justify'>We take the safety & confidentiality of your business seriously. Pickcel is one of the top-tier <span className=' font-bold '>SOC-2-certified </span>digital signage solution providers.</p>
                    <p className='text-xl flex gap-2 justify-center md:justify-start items-center'>Schedule My Demo <FaRegArrowAltCircleRight className="text-[red] cursor-pointer" />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Cart
