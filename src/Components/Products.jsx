import React from 'react'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'

function Products() {
    return (
        <div className='w-[100%] h-[60vh] flex justify-center items-center ' style={{
            backgroundImage: 'url("https://www.pickcel.com/assets/img/bg/over-view-bg.png")',
            backgroundSize: 'cover',  // Adjust the background size as needed
            backgroundPosition: 'center',
        }}>
            <div className='w-[40%]'>
                <img src="https://www.pickcel.com/assets/img/home/on-premise.webp" width="476px" height="370px" alt="" />
            </div>
            <div className='w-[35%]'>
                <h1 className='text-[40px]'>Advanced In-House Digital Signage</h1>
                <p className='text-[19px] mt-[20px]'>Our CMS, hosted in your private data center, offers superior security and speedy media uploads. It allows exceptional control across numerous screens and integrates seamlessly with your IT infrastructure, ensuring compliance and simplified access through SSO.</p>
                <div className='flex gap-[40px] items-center mt-[30px] hover:text-[red]'>
                    Schedule My Demo <FaRegArrowAltCircleRight className="text-[red]" />
                </div>
            </div>
        </div>
    )
}

export default Products
