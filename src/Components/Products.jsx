import React from 'react'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'

function Products() {
    return (
        <div className='w-[100%] py-0 sm:py-20 md:flex md:gap-10 sm:gap-0 justify-center items-center ' style={{
            backgroundImage: 'url("")',
            backgroundSize: 'cover',  // Adjust the background size as needed
            backgroundPosition: 'center',
        }}>
            <div className='xl:w-[38%]'>
                <img src="https://www.pickcel.com/assets/img/home/on-premise.webp" width="476px" height="370px" alt="" />
            </div>
            <div className='md:w-[35%] '>
                <h1 className=' sm:text-[30px] 2xl:text-[40px] leading-10 md:text-start text-center '>Advanced In-House Digital Signage</h1>
                <p className='2xl:text-[19px] mt-[30px] text-justify p-5 font-thin md:p-0'>Our CMS, hosted in your private data center, offers superior security and speedy media uploads. It allows exceptional control across numerous screens and integrates seamlessly with your IT infrastructure, ensuring compliance and simplified access through SSO.</p>
                <div className='flex  md:justify-start justify-center gap-2 hover:cursor-pointer md:gap-[10px] items-center text-center my-[10px] md:mt-[10px] hover:text-[red]'>
                    Schedule My Demo <FaRegArrowAltCircleRight className="text-[red]" />
                </div>
            </div>
        </div>
    )
}

export default Products
