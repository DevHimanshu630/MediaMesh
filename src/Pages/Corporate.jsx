import React from 'react'
import Navbar from '../Components/Navbar'
import cartimg from "../images/cart.jpeg"
import RetailBussiness from '../Components/RetailBussiness';
import leftimg from "../images/client.png"
import ndtv from "../images/NDTV (1).svg"
import Footer from '../Components/Footer';

function Corporate() {

    const data = {
        item1: { imageUrl: cartimg, heading: 'Lobby digital boards', paragraph: 'Welcome and greet guests at the front desk and reduce guest waiting time. Inform customers and visitors about facilities, gym & spa, restaurants, in-hotel services, seasonal discounts and offers.' },
        item2: { imageUrl: cartimg, heading: 'Provide local tourism details', paragraph: 'Make the customers aware of nearby places to visit, foods to try, weather & local news, cab services, popular activities or provide information brochure.' },
        item3: { imageUrl: cartimg, heading: 'Social wall and feeds', paragraph: 'Display customer endorsements from Facebook, Twitter & Instagram to create brand awareness and establish credibility on your digital signs. Learn more about social wall solution' },
        item4: { imageUrl: cartimg, heading: 'Internal communications', paragraph: 'Display staff meeting schedules. Keep employees aware of hotel etiquettes, show training videos, and important information in real time. Highlight the service schedules of VIP guests & much more.' },

    };
    const h = { heading: "60+ Digital Signage Content Apps ", subheading: "for Corporate Offices" }


    return (
        <>
            <div style={{
                backgroundImage:
                    'url("https://www.pickcel.com/assets/img/bg/industry-bg.png")',
            }}>
                <Navbar />
                <section className="w-[100%] py-24  flex items-center justify-center">
                    <div className='w-[70%] gap-10 flex flex-col justify-center items-center  '>
                        <div className='flex flex-col gap-14 items-center justify-center'>
                            <div className='w-[60%] text-center text-5xl'>
                                <span>Corporate Digital Signage</span>
                            </div>
                            <div className='w-[80%] font-thin text-center text-lg'>
                                <span >Corporate communication made effortless for visitors and employees alike. Engage and motivate your employees by using corporate digital signage solutions. Communicate important information, company updates, and company news through digital screens. Whether it is cloud-based or on-premise digital signage solution, Pickcel is the one-stop solution for all your corporate digital signage needs.</span>
                            </div>
                        </div>
                        <div className='flex gap-5 '>
                            <section>
                                <div class="flex flex-wrap justify-center   w-fit rounded-full  ">
                                    <a
                                        style={{
                                            background:
                                                "linear-gradient(113deg, #fd0036 24.5%,  #ffa800)",
                                        }}
                                        href="!"
                                        class="button button--aylen md:px-10 md:py-3 py-3  hover:bg-white text-white relative block focus:outline-none  rounded-full text-[10px] md:text-sm text-center font-semibold  overflow-hidden"
                                    >
                                        Start Free Trial
                                    </a>
                                </div>
                            </section>
                            <a href="#" class="inline-flex items-center text-[11px] md:text-sm  justify-center h-fit px-3 py-2 md:px-8 md:py-3 text-base font-medium text-center   rounded-full   border border-black text-black hover:border-[#ff5100] hover:text-[#ff5100] bg-white  ">
                                Schedule My Demo
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            <section className='flex py-16 justify-center items-center w-[100%]'>
                <div className="flex  w-[72%] gap-10 items-center justify-evenly  ">
                    <div className='flex flex-col gap-7'>
                        <div className=' text-[3.3rem] leading-tight '>Uses of digital <br />signage in the <br /> hospitality<br /> industry </div>
                        <div className="w-[50px] h-[5px] rounded-full bg-gradient-to-r from-pink-600 via-red-600 to-orange-500"></div>
                    </div>

                    <div className='grid grid-cols-2 pr-4 gap-6 overflow-y-scroll h-[80vh]'>
                        {Object.entries(data).map(([key, value]) => (
                            < div key={key} class="max-w-sm  bg-white border hover:shadow-md  border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img class="rounded-t-lg" src={value.imageUrl} alt="" />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{value.heading}</h5>
                                    </a>
                                    <p class="mb-3 font-thin text-gray-700 dark:text-gray-400">{value.paragraph}</p>

                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </section >


            <div style={{
                backgroundImage: 'url("https://www.pickcel.com/assets/img/bg/over-view-bg.png")',
                backgroundSize: 'cover',  // Adjust the background size as needed
                backgroundPosition: 'center',
            }} className="w-[100%] h-[60vh] flex py-10   opacity-[0.85] justify-around  items-center  mt-[20px]">
                <div className="w-[35%]  ml-[12%]">
                    <div>
                        <h1 className="text-[40px] leading-[50px] ">
                            On-premise solution for maximum control.
                        </h1>
                        <p className="text-[18px] font-thin mt-[30px]">
                            The on-premise solution enables organizations to self host Pickcel's digital signage content management system on the local server, ensuring maximum control & security.
                        </p>
                    </div>
                    <div className="flex gap-3 mt-[30px]">
                        <div className="flex-col hover:font-semibold hover:text-black flex gap-1">
                            <p className='my-3 text-xl text-[#ff5100]'>View On-premise solution</p>
                        </div>
                    </div>
                </div>
                <div className="w-[40%]   ">
                    <div className="rounded w-fit border-2 shadow-2xl ">
                        <img
                            className="  shadow-lg "
                            src="https://www.pickcel.com/assets/img/reseller-icon/cloud-on-premise.webp"
                            width="470px"
                            height="265px"
                            alt=""
                        />
                    </div>
                </div>
            </div>

            <div className="w-[100%] h-[50vh] flex   opacity-[0.85] justify-around  items-center  mt-[20px]">
                <div className="w-[34%]  ml-[13%]">
                    <div>
                        <h2 className="text-[48px] leading-[50px] ">
                            Don't reinvent the wheel. Use corporate digital signage templates instead
                        </h2>
                        <p className="text-[18px] font-thin mt-[30px]">
                            Speed up the content design process for your workplace digital signage screens. Customize tons of corporate communication templates from Pickcel’s built-in design tool Artboard.
                        </p>
                        <div className="flex gap-3 mt-[30px]">
                            <section>
                                <div class="flex flex-wrap justify-center   w-fit rounded-full  ">
                                    <a
                                        style={{
                                            background:
                                                "linear-gradient(113deg, #fd0036 24.5%,  #ffa800)",
                                        }}
                                        href="!"
                                        class="button button--aylen md:px-10 md:py-3 py-3  hover:bg-white text-white relative block focus:outline-none  rounded-full text-[10px] md:text-sm text-center font-semibold  tracking-widest overflow-hidden"
                                    >
                                        View Template
                                    </a>
                                </div>
                            </section>
                        </div>
                    </div>

                </div>
                <div className="w-[45%]   ">
                    <div className="rounded w-[550px]  border-2 shadow-2xl ">
                        <img
                            className="  shadow-lg "
                            src="https://www.pickcel.com/assets/img/industries/coroprate-template.webp"
                            alt=""
                        />
                    </div>
                </div>
            </div>

            <div className='pl-12'>

                <RetailBussiness
                    heading={h.heading}
                    subheading={h.subheading}
                    leftImg1={leftimg}
                    leftImg2={leftimg}
                    leftImg3={leftimg}
                    leftImg4={leftimg}
                    rightImg={ndtv}
                />
            </div>

            <section className="w-[100%] pb-20  flex items-center justify-center">
                <div className='w-[60%] gap-5 flex flex-col justify-center items-center  '>
                    <div className='w-[65%] p-0'>
                        <img src="https://www.pickcel.com/assets/img/industries/corporate/customer-success-story.webp" alt="" />
                    </div>
                    <div className='flex flex-col gap-7 items-center justify-center'>
                        <div className='w-[60%] text-center text-5xl'>
                            <span>Customer Success Story: Hindustan Unilever</span>
                        </div>
                        <div className='w-[72%] text-center font-thin text-xl'>
                            <span>How the HUL offices consolidated internal communication & employee engagement.</span>
                        </div>
                    </div>
                    <div className='flex gap-5 '>
                        <section>
                            <div class="flex flex-wrap justify-center   w-fit rounded-full  ">
                                <a
                                    style={{
                                        background:
                                            "linear-gradient(113deg, #fd0036 24.5%,  #ffa800)",
                                    }}
                                    href="!"
                                    class="button button--aylen md:px-10 md:py-3 py-3  hover:bg-white text-white relative block focus:outline-none  rounded-full text-[13px]  text-center font-semibold   overflow-hidden"
                                >
                                    Read All Case Studies
                                </a>
                            </div>
                        </section>
                        <a href="#" class="inline-flex items-center text-[11px] md:text-sm  border-black justify-center h-fit px-3 py-2 md:px-5 md:py-3 text-base font-medium text-center   rounded-full   border hover:border-[#ff5100] hover:text-[#ff5100] bg-white">
                            Read The Hindustan Unilever Story
                        </a>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Corporate
