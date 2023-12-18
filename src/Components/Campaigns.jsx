import React, { useState } from 'react';

function Campaigns() {


    return (
        <div style={{
            backgroundImage: 'url("https://www.pickcel.com/assets/img/bg/over-view-bg.png")',
            backgroundSize: 'cover',  // Adjust the background size as needed
            backgroundPosition: 'center',
        }} className='bg-white '>
            <div className="xl:py-24   items-center w-full px-8 max-w-7xl mx-auto flex flex-col md:flex-row  xl:gap-32">
                <div className="w-[80%] flex flex-col gap-16 ">
                    <div className='flex flex-col gap-5'>
                        <p className='text-5xl'>Build Better Campaigns With Retail Digital Signage Templates</p>
                        <p className=' font-thin text-xl'>Level up your marketing game with Pickcel Artboard— our built-in design tool that offers irresistible templates crafted exclusively for customer engagement and brand communications.</p>
                    </div>
                    <section>
                        <div class="flex flex-wrap justify-center   w-fit rounded-full  ">
                            <a
                                style={{
                                    background:
                                        "linear-gradient(113deg, #fd0036 24.5%,  #ffa800)",
                                }}
                                href="!"
                                class="button button--aylen md:px-8 md:py-3 py-3  hover:bg-white text-white relative block focus:outline-none  rounded-full text-[10px] md:text-sm text-center font-semibold  tracking-widest overflow-hidden"
                            >
                                View Templates
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