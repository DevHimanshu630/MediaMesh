import React from 'react'
import Navbar from '../Components/Navbar'
import cartimg from "../images/cart.jpeg"
import RetailBussiness from '../Components/RetailBussiness';
import leftimg from "../images/client.png"
import ndtv from "../images/NDTV (1).svg"
import Footer from '../Components/Footer';

function GovernmentAndNgo() {


    const data = {
        item1: { imageUrl: cartimg, heading: 'Swift public outreach', paragraph: 'Keep your visitors informed with announcements and updates through your digital signage screens. Deploy interactive information kiosks for personalized information browsing.' },
        item2: { imageUrl: cartimg, heading: 'Real-time information boards', paragraph: 'Show live news, visitor queue information, important news, and much more with your non-profit and government digital signage screens at scale.' },
        item3: { imageUrl: cartimg, heading: 'Better employee engagement', paragraph: 'Speed up your internal communication with a digital solution. Back-end offices can use digital signage to show meeting schedules, digital bulletins, etc.' },
        item4: { imageUrl: cartimg, heading: 'Fast emergency alerts', paragraph: 'Quickly alarm people by showing emergency alerts on your digital signage screens to ensure swift evacuation of buildings and offices. Guide people to safety.' },
        item5: { imageUrl: cartimg, heading: 'Way-finding Maps', paragraph: 'Provide easy navigation of the premises to the employees and visitors with a way-finding map. Direct the visitors to the concerning departments, show restricted areas & more.' },
        item6: { imageUrl: cartimg, heading: 'Waiting room infotainment', paragraph: 'Engage waiting visitors with relevant information, recent news, government initiatives, non-profit initiatives and much more. Show general entertainment, weather, news.' },

    };
    const h = { heading: "60+ Digital Signage Content Apps ", subheading: "for government and non-profits" }



    return (
        <>
            <div style={{
                backgroundImage:
                    'url("https://www.pickcel.com/assets/img/bg/industry-bg.png")',
            }}>
                <Navbar />
                <section className="w-[100%] py-28  flex items-center justify-center">
                    <div className='w-[70%] gap-10 flex flex-col justify-center items-center  '>
                        <div className='flex flex-col gap-14 items-center justify-center'>
                            <div className='w-[60%] text-center text-5xl'>
                                <span>Digital Signage for Government and Non-profits</span>
                            </div>
                            <div className='w-[80%] text-center font-thin text-xl'>
                                <span>Seamless communication is vital for government and non-profit organizations. That's why transitioning to digital communication is the way forward. Pickcel offers a comprehensive solution for all your non-profit and government digital signage needs</span>
                            </div>
                        </div>
                        <div className='flex gap-5 pt-5'>
                            <section>
                                <div class="flex flex-wrap justify-center   w-fit rounded-full  ">
                                    <a
                                        style={{
                                            background:
                                                "linear-gradient(113deg, #fd0036 24.5%,  #ffa800)",
                                        }}
                                        href="!"
                                        class=" md:px-10 md:py-3 py-3  hover:bg-white text-white block focus:outline-none  rounded-full text-[10px] md:text-sm text-center font-semibold  tracking-widest overflow-hidden"
                                    >
                                        Start Free Trial
                                    </a>
                                </div>
                            </section>
                            <a href="#" class="inline-flex items-center text-[11px] md:text-sm  shadow-lg justify-center h-fit px-3 py-2 md:px-8 md:py-3 text-base font-medium text-center   rounded-full  hover:shadow-2xl border border-black text-black hover:shadow-orange-300 bg-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                Schedule My Demo
                            </a>
                        </div>
                    </div>
                </section>
            </div>
            <section className='flex py-20 justify-center items-center w-[100%]'>
                <div className="flex  w-[72%] gap-10 items-center justify-evenly  ">
                    <div className='flex flex-col gap-7'>
                        <div className=' text-[3.3rem] leading-tight '>Day-to-day<br />communication<br /> made faster</div>
                        <div className="w-[50px] h-[5px] rounded-full bg-gradient-to-r from-pink-600 via-red-600 to-orange-500"></div>
                    </div>

                    <div className='grid grid-cols-2 pr-4 gap-6 h-[80vh] overflow-y-scroll '>
                        {Object.entries(data).map(([key, value]) => (
                            < div key={key} class="max-w-sm   border hover:shadow-md  border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
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

            <div className="w-[100%] h-[50vh] flex   opacity-[0.85] justify-around  items-center  mt-[20px]">
                <div className="w-[35%]  ml-[13%]">
                    <div>
                        <h1 className="text-[48px] leading-[50px] font-bold">
                            On-premise solution for maximum control.
                        </h1>
                        <p className="text-[18px] font-thin mt-[30px]">
                            The on-premise solution enables organizations to self host Pickcel's digital signage content management system on the local server, ensuring maximum control & security.
                        </p>
                        <p className='my-3 text-xl text-[#ff5100]'>View On-premise solution</p>
                    </div>

                </div>
                <div className="w-[45%]   ">
                    <div className="rounded w-[550px]">
                        <img
                            className=""
                            src="https://www.pickcel.com/assets/img/reseller-icon/cloud-on-premise.webp"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div style={{
                backgroundImage: 'url("https://www.pickcel.com/assets/img/bg/over-view-bg.png")',
                backgroundSize: 'cover',  // Adjust the background size as needed
                backgroundPosition: 'center',
            }} className="w-[100%] h-[70vh] flex py-10   opacity-[0.85] justify-around  items-center  mt-[20px]">
                <div className="w-[35%]  ml-[12%]">
                    <div>
                        <h1 className="text-[40px] leading-[50px] font-bold">
                            Queue management solution with Pickcel
                        </h1>
                        <p className="text-[18px] mt-[30px] font-thin">
                            With queue management application, show real-time visitor queue information on your non-profit and government digital signage screens. Allow visitors to generate soft tokens and track the live queue status on their mobile devices.
                        </p>
                    </div>
                    <div className="flex gap-3 mt-[30px]">
                        <div className="flex-col hover:font-semibold hover:text-black flex gap-1">
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
                <div className="w-[40%]   ">
                    <div className="rounded w-fit border-2 shadow-2xl ">
                        <img
                            className="  shadow-lg "
                            src="https://www.pickcel.com/assets/img/industries/government/queue-management-solution.webp"
                            width="470px"
                            height="265px"
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
            <Footer />

        </>
    )
}

export default GovernmentAndNgo