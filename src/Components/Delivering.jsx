import React from 'react'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'

function Delivering() {
    return (
        <div className=''>
            <h1 className=' 2xl:text-[40px] sm:pb-16 text-[30px] leading-10  justify-center text-center'>
                Delivering results with our digital <br /> signage solutions
            </h1>

            <div className='w-[100%] p-5 md:p-0 gap-[40px] md:flex justify-center items-center ' style={{
                backgroundImage: 'url("https://www.pickcel.com/assets/img/home/case-study/before-case-study.png")',
                backgroundSize: 'cover',  // Adjust the background size as needed
                backgroundPosition: 'center',
            }}>
                <div className='xl:w-[40%] md:w-[48%]'>
                    <img src="https://www.pickcel.com/assets/img/home/case-study/mercedez.webp" width="594px" height="341px" alt="" />
                </div>
                <div className='md:w-[35%] my-3 md:my-0'>
                    <h1 className='xl:text-[40px] text-[30px] text-center md:text-left'>Mercedes-Benz</h1>
                    <p className='text-[19px] text-justify md:text-start mt-[20px]'>Mercedes-Benz Ushers in New-age Corporate Communication with Digital Signage</p>
                    <div className='md:flex-row flex flex-col justify-center md:justify-start  items-center   md:gap-[40px]'>
                        <div className='flex gap-[10px] items-center mt-[30px] cursor-pointer hover:text-[red]'>
                            Schedule My Demo <FaRegArrowAltCircleRight className="text-[red]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Delivering
