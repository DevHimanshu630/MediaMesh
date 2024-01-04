import React from 'react'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'

function Delivering() {
    return (
        <div style={{
            backgroundImage: 'url("")',
            backgroundSize: 'cover',  // Adjust the background size as needed
            backgroundPosition: 'center',
        }} className=''>
            <h1 className=' 2xl:text-[40px] pt-10 sm:pb-16 text-[30px] leading-10  justify-center text-center'>
                Delivering results with our digital <br /> signage solutions
            </h1>

            <div className='w-[100%] p-5 md:p-0 md:flex justify-center gap-[30px]  xl:gap-[140px] items-center ' >
                <div className='2xl:w-[30%] xl:w-[30%] md:w-[48%]'>
                    <img src="https://www.pickcel.com/assets/img/home/case-study/mercedez.webp" width="594px" height="341px" alt="" />
                </div>
                <div className='md:w-[30%] my-3 xl:mr-12 md:my-0'>
                    <h1 className='xl:text-[40px] text-[30px] '>Mercedes-Benz</h1>
                    <p className='text-[19px] text-justify md:text-start font-thin mt-[20px]'>Mercedes-Benz Ushers in New-age Corporate Communication with Digital Signage</p>
                    <div className='md:flex-row flex flex-col justify-center md:justify-start  items-center   md:gap-[40px]'>
                        <div className='flex gap-[10px] items-center mt-[10px] cursor-pointer hover:text-[red]'>
                            Schedule My Demo <FaRegArrowAltCircleRight className="text-[red]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Delivering
