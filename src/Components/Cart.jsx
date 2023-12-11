import React from 'react'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'

function Cart() {
    return (
        <div className='w-full bg-[#fef8fb] flex items-center justify-center h-96'>
            <div className='w-[40%]  h-full flex pl-40 items-center justify-center'>
                <img height={"100px"} width={"350px"} src="https://www.pickcel.com/assets/img/home/soc-logo.webp" alt="" />
            </div>
            <div className='w-[60%] pl-16  h-full flex items-center'>
                <div className='w-[70%] flex flex-col gap-4'>
                    <p className='text-5xl font-normal'>System security aligned with your enterprise standards</p>
                    <p className='text-xl font-thin'>We take the safety & confidentiality of your business seriously. Pickcel is one of the top-tier <span className=' font-bold '>SOC-2-certified </span>digital signage solution providers.</p>
                    <p className='text-xl flex gap-2  items-center'>Schedule My Demo <FaRegArrowAltCircleRight className="text-[red] cursor-pointer" />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Cart
