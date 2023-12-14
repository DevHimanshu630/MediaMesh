import React from 'react'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'

function Cart() {
    return (
        <div className='w-full bg-[#fef8fb] md:flex  md:h-96'>
            <div className='lg:w-[50%]  h-full flex sm:pl-12 xl:pl-0 items-center justify-center'>
                <img height={"100px"} width={"350px"} src="https://www.pickcel.com/assets/img/home/soc-logo.webp" alt="" />
            </div>
            <div className='md:w-[50%]  p-5  justify-start h-full flex items-center'>
                <div className='md:w-[70%]  flex flex-col gap-4'>
                    <p className='2xl:text-4xl xl:text-2xl  text-xl text-center md:text-start font-normal'>System security aligned with your enterprise standards</p>
                    <p className='2xl:text-xl font-thin text-justify'>We take the safety & confidentiality of your business seriously. Pickcel is one of the top-tier <span className=' font-bold '>SOC-2-certified </span>digital signage solution providers.</p>
                    <p className='text-xl flex gap-2 justify-center md:justify-start items-center'>Schedule My Demo <FaRegArrowAltCircleRight className="text-[red] cursor-pointer" />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Cart
