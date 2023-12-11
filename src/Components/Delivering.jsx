import React from 'react'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'

function Delivering() {
    return (
        <div className=''>
            <h1 className=' text-[40px] flex justify-center text-center'>
                Delivering results with our digital <br /> signage solutions
            </h1>

            <div className='w-[100%] h-[60vh] gap-[40px] flex justify-center items-center ' style={{
                backgroundImage: 'url("https://www.pickcel.com/assets/img/home/case-study/before-case-study.png")',
                backgroundSize: 'cover',  // Adjust the background size as needed
                backgroundPosition: 'center',
            }}>
                <div className='w-[40%]'>
                    <img src="https://www.pickcel.com/assets/img/home/case-study/mercedez.webp" width="594px" height="341px" alt="" />
                </div>
                <div className='w-[35%]'>
                    <h1 className='text-[40px]'>Mercedes-Benz</h1>
                    <p className='text-[19px] mt-[20px]'>Mercedes-Benz Ushers in New-age Corporate Communication with Digital Signage</p>
                    <div className='flex gap-[40px]'>
                        <div className='flex gap-[10px] items-center mt-[30px] cursor-pointer hover:text-[red]'>
                            Schedule My Demo <FaRegArrowAltCircleRight className="text-[red]" />
                        </div>
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
