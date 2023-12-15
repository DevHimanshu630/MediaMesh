import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

function RetailBussiness() {
    return (
        <div className='w-[100%] flex flex-col py-12 items-center justify-center'>
            <div className='flex w-[74%] flex-col gap-10 pb-20'>
                <div className='flex flex-col gap-5 '>
                    <h5 className='text-5xl'>
                        60+ Digital signage content apps <br />for retail businesses
                    </h5>
                    <p className='text-lg'>
                        All Pickcel apps come free with the Pickcel digital signage software.
                        Try our software to<br /> unlock 60+ apps that make communication for your business easier!
                    </p>
                </div>
                <button className='border w-fit flex items-center justify-between gap-6 rounded-full px-6 text-black font-bold py-2 '>View All <FaArrowRight /></button>
            </div>
            <div className='flex w-[100%] items-center  justify-center '>
                <div className='bg-white w-[100%]  '>
                    <div className=" w-[100%]  items-center justify-center  max-w-7xl mx-auto flex flex-col md:flex-row  ">
                        <div className="w-[85%]  pb-16 flex gap-3 flex-col  ">
                            <div className='flex gap-3 p-2 cursor-pointer border border-gray-50 items-center shadow-md rounded-lg w-fit px-3'>
                                <div className='w-16 '>
                                    <img src="https://www.pickcel.com/assets/img/industries/retail/apps/icons/Facebook.svg" alt="" />
                                </div>
                                <div>
                                    <h5>Social Wall</h5>
                                    <p>Blend Twitter, Instagram & Facebook posts</p>
                                </div>
                            </div>
                            <div className='flex gap-3 cursor-pointer p-2 border border-gray-50 items-center hover:shadow-md rounded-lg w-fit px-3'>
                                <div className='w-16 '>
                                    <img src="https://www.pickcel.com/assets/img/industries/retail/apps/icons/Scroller.svg" alt="" />
                                </div>
                                <div>
                                    <h5>Social Wall</h5>
                                    <p>Blend Twitter, Instagram & Facebook posts</p>
                                </div>
                            </div>
                            <div className='flex gap-3 cursor-pointer p-2 border border-gray-50 items-center hover:shadow-md rounded-lg w-fit px-3'>
                                <div className='w-16 '>
                                    <img src="https://www.pickcel.com/assets/img/industries/retail/apps/icons/NDTV.svg" alt="" />
                                </div>
                                <div>
                                    <h5>Social Wall</h5>
                                    <p>Blend Twitter, Instagram & Facebook posts</p>
                                </div>
                            </div>
                            <div className='flex gap-3 cursor-pointer p-2 border border-gray-50 items-center hover:shadow-md rounded-lg w-fit px-3'>
                                <div className='w-16 '>
                                    <img src="https://www.pickcel.com/assets/img/industries/retail/apps/icons/Weather.svg" alt="" />
                                </div>
                                <div>
                                    <h5>Social Wall</h5>
                                    <p>Blend Twitter, Instagram & Facebook posts</p>
                                </div>
                            </div>
                        </div>




                        <div className='pb-10   relative w-[80%]  '>
                            <div className="flex -left-12 -top-10 relative z-10 border-black rounded-sm border-4 flex-col text-left  w-[90%]">
                                <img src="https://www.pickcel.com/assets/img/industries/retail/apps/Scroller.svg" alt="" />
                            </div>
                            <div className='w-[95%] z-0 absolute top-1'>
                                <img className=' object-cover' src="https://www.pickcel.com/assets/img/home/apps/screen-befrore.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RetailBussiness
