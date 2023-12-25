import React, { useState } from 'react';

function Campaigns() {


    return (
        <div style={{
            backgroundImage: 'url("")',
            backgroundSize: 'cover',  // Adjust the background size as needed
            backgroundPosition: 'center',
        }} className='bg-white '>
            <div className="xl:py-24 gap-4   xl:w-[75%]  md:w-[75%] items-center  w-full lg:px-0  2xl:px-6   mx-auto flex flex-col md:flex-row  xl:gap-32">
                <div className="2xl:w-[82%] md:w-[70%] flex flex-col  md:gap-16 gap-5 ">
                    <div className='flex flex-col gap-5'>
                        <p className='md:text-5xl text-xl'>Build Better Campaigns With Retail Digital Signage Templates</p>
                        <p className=' font-thin text-xl'>Level up your marketing game with Pickcel Artboard— our built-in design tool that offers irresistible templates crafted exclusively for customer engagement and brand communications.</p>
                    </div>
                    <section className=' items-center'>
                        <div class="flex flex-wrap justify-center w-fit  rounded-full  ">
                            <a
                                style={{
                                    background:
                                        "linear-gradient(113deg, #fd0036 24.5%,  #ffa800)",
                                }}
                                href="!"
                                class="button button--aylen  md:px-8 md:py-3.4 py-3 px-3  hover:bg-white text-white relative block focus:outline-none  rounded-full text-[10px] md:text-sm text-center font-semibold   overflow-hidden"
                            >
                                View Tempate
                            </a>
                        </div>
                    </section>
                </div>
                <div className="flex flex-col text-left py-3 md:py-0 basis-1/2">
                    <img src="https://www.pickcel.com/assets/img/industries/retail-template.webp" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Campaigns;
