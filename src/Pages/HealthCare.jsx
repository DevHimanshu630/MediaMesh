import React from 'react'
import Navbar from '../Components/Navbar'
import cartimg from "../images/cart.jpeg"
import RetailBussiness from '../Components/RetailBussiness';
import leftimg from "../images/client.png"
import ndtv from "../images/NDTV (1).svg"
import Footer from '../Components/Footer';
import "../Css/Home.css"

function HealthCare() {
    const h = { heading: "60+ Digital Signage Content Apps ", subheading: "for hospitals and clinics" }
    const data = {
        item1: { imageUrl: cartimg, heading: 'Branding & Promotions', paragraph: 'Promote medical services, hospital facilities, specialty, faculty, and membership plans. Notify visitors of upcoming events, welfare drives, free check-ups, certifications & awards.' },
        item2: { imageUrl: cartimg, heading: 'Digital Information Boards', paragraph: 'Display doctor availability, formalities of patient admissions, phone extensions, or availability of ICU beds. Interactive displays can allow downloading & printing of information.' },
        item3: { imageUrl: cartimg, heading: 'Waiting Room Infotainment', paragraph: 'Engage anxious patients with health tips, medical news, yoga charts, positive patient reviews, inspiring patient recovery stories & more. Show general entertainment, weather, news.' },
        item4: { imageUrl: cartimg, heading: 'Enhance Patient Experience', paragraph: 'Make the hospital ambiance less intimidating. Show soothing visuals on video walls or 4K screens. Reduce patient ‘Nosocomephobia’ (fear of hospitals) or depression with ASMR sounds.' },
        item5: { imageUrl: cartimg, heading: 'Employee Internal Communication', paragraph: 'Share internal staff messages meeting schedules, hospital guidelines, security protocols, changes in duty hours, local shutdown of particular hospital wings due to contamination or renovation, etc.' },
        item6: { imageUrl: cartimg, heading: 'Play Emergency Messages', paragraph: 'During fire or earthquake, the healthcare digital signage can show emergency exits & evacuation protocols. These screens can also alert doctors about on-site medical emergencies.' },
        item7: { imageUrl: cartimg, heading: 'Digital Menu Boards', paragraph: 'The Pickcel digital signage software comes with a host of free apps. One such app is the digital menu board software app. Display the daily food menu of your hospital cafeteria.' },
        item8: { imageUrl: cartimg, heading: 'Wayfinding Maps', paragraph: 'Allow patients to navigate your healthcare facility smoothly. Use interactive digital signage to show premise maps. Customizations can also enable visitors to scan a QR code & view maps on their mobile.' },

    };

    return (
        <>
            <div className="" style={{
                backgroundImage:
                    'url("https://www.pickcel.com/assets/img/bg/industry-bg.png")',
            }}>
                <Navbar />
                <div className="w-[100%] md:py-20 py-10 flex flex-col    justify-around  items-center  xl:mt-[20px]">
                    <div className='flex flex-wrap w-[85%] gap-10 md:gap-8 p-4 md:p-0  items-center justify-center '>
                        <div className="md:w-[40%] flex flex-col gap-5 md:gap-0    ">
                            <div>
                                <h1 className="2xl:text-6xl lg:text-4xl text-center text-3xl md:text-left ">
                                    Digital Signage for Healthcare
                                </h1>
                            </div>
                            <div className="flex gap-3 justify-center md:justify-start md:mt-[40px]">
                                <div className="flex-col hover:font-semibold hover:text-black flex gap-1">
                                    <section>
                                        <div class=" w-fit rounded-full  ">
                                            <a
                                                style={{
                                                    background:
                                                        "linear-gradient(113deg, #fd0036 24.5%,  #ffa800)",
                                                }}
                                                href="!"
                                                class=" xl:px-10 xl:py-3.5 py-3  px-8  text-white  block focus:outline-none  rounded-full text-[10px] xl:text-sm text-center font-semibold  overflow-hidden"
                                            >
                                                Start Free Trial
                                            </a>
                                        </div>
                                    </section>
                                </div>

                                <a
                                    href="#"
                                    class="inline-flex items-center md:text-md hover:border-[#ff5100] hover:text-[#ff5100]  h-fit px-3 py-2 md:px-5 md:py-3 text-[12px]  font-medium text-center  text-black  rounded-full bg-white  border border-black focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                                >
                                    Schedule My Demo
                                </a>
                            </div>
                        </div>
                        <div className="md:w-[45%] xl:w-[40%]  ">
                            <div className="rounded w-fit border-2 shadow-2xl shadow-black border-black ">
                                <img
                                    className=" xl:h-[315px]  xl:w-[550px] shadow-lg "
                                    src="https://www.pickcel.com/assets/img/industries/healthcare/banner.webp"

                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className='xl:w-[70%] w-[90%]  xl:pt-36 md:py-20 py-10 md:pb-12 md:text-xl font-thin'>
                        <p>Hospitals and medical centers operate within tight schedules and often with a very lean workforce. The <span className='text-red-600'>best digital signage software </span>for healthcare is one that saves time through convenient features like content scheduling, visitor management, and more. </p>
                        <p className='py-8'>The result: Accelerated service, improved patient satisfaction, and optimized use of manpower.</p>
                    </div>
                </div>
            </div>

            <section className='flex justify-center items-center p-4 xl:p-0  w-[100%]'>
                <div className="flex xl:flex-row  border flex-col xl:w-[72%] gap-6 items-center justify-evenly  ">
                    <div className=' xl:text-5xl md:text-3xl text-2xl text-center xl:hidden '>Improve the Patient Experience with Healthcare Digital Signage</div>
                    <div className=' lg:text-3xl border 2xl:text-5xl hidden xl:block'>Improve the <br /> Patient <br /> Experience with<br />  Healthcare <br /> Digital Signage</div>
                    <div className='grid md:grid-cols-2 md:pr-4 gap-6 overflow-y-scroll scrollbar-hide h-[80vh]'>
                        {Object.entries(data).map(([key, value]) => (
                            < div key={key} class="max-w-sm  bg-white border hover:shadow-md  border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img class="rounded-t-lg" src={value.imageUrl} alt="" />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                        <h5 class="mb-2 text-xl md:font-bold tracking-tight text-gray-900 dark:text-white">{value.heading}</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{value.paragraph}</p>

                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </section >

            <div style={{
                backgroundImage: 'url("")',
                backgroundSize: 'cover',  // Adjust the background size as needed
                backgroundPosition: 'center',
            }} className="w-[100%] md:h-[60vh]  flex flex-wrap py-10 p-4 md:p-0 gap-5 md:gap-0  justify-around  items-center  mt-[20px]">
                <div className='flex flex-wrap  justify-center lg:gap-20 2xl:gap-5'>
                    <div className="2xl:w-[40%] md:mr-4 xl:mr-0 lg:w-[35%]  p-4 md:p-0 ">
                        <div>
                            <h1 className="2xl:text-[48px] lg:text-[32px] text-center md:text-left text-2xl 2xl:leading-[50px] ">
                                Swift Healthcare Messaging With Digital Signage Templates
                            </h1>
                            <p className="2xl:text-[18px] text-center md:text-left mt-[30px]">
                                Discover an extensive collection of digital signboard templates housed within Pickcel’s built-in design tool Artboard. Just customize our pre-baked designs and start publishing engaging content on your hospital’s messaging displays.
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
                                            class="button button--aylen md:px-8 md:py-3.4 py-3 px-4  hover:bg-white text-white relative block focus:outline-none  rounded-full text-[10px] md:text-sm text-center font-semibold   overflow-hidden"
                                        >
                                            View Tempate
                                        </a>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className="2xl:w-[30%]   lg:w-[30%]  ">
                        <div className="rounded w-fit border-2 shadow-2xl ">
                            <img
                                className="  shadow-lg "
                                src="https://www.pickcel.com/assets/img/industries/healthcare-template.webp"
                                width="470px"
                                height="265px"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[100%] xl:h-[60vh] flex flex-wrap py-6 md:py-10 p-4 md:p-0   md:justify-around  items-center  mt-[20px]">
                <div className="flex 2xl:w-[72%] lg:w-[71%]  gap-2">
                    <div className='2xl:w-[53%] lg:w-[55%]'>
                        <h1 className="2xl:text-[48px] lg:text-[35px] text-2xl text-center md:text-left 2xl:leading-[50px] ">
                            Manage Appointments with the Pickcel Queue Management Solution
                        </h1>
                        <p className="2xl:text-[18px] mt-[30px]">
                            With queue management application, show real-time patient queue status on your healthcare digital signage screens. Allow visitors to generate soft tokens and track the live queue status on their mobile devices.
                        </p>
                        <p className='my-3 text-xl text-[#ff5100]'>Know More</p>
                    </div>

                    <div className="2xl:w-[40%] md:w-[35%]  ">
                        <div className="rounded  w-[100%]  border-2 shadow-2xl ">
                            <img
                                className=" w-[100%]  shadow-lg "
                                src="https://www.pickcel.com/assets/img/industries/healthcare/queue-management.webp"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>

            <RetailBussiness
                heading={h.heading}
                subheading={h.subheading}
                leftImg1={leftimg}
                leftImg2={leftimg}
                leftImg3={leftimg}
                leftImg4={leftimg}
                rightImg={ndtv}
            />
            <section className="w-[100%] pb-20  flex items-center justify-center">
                <div className='xl:w-[70%] gap-5 flex  flex-wrap flex-col  items-center  '>
                    <div className='md:w-[60%] p-0'>
                        <img src="https://www.pickcel.com/assets/img/industries/healthcare/manipal-hospital.webp" alt="" />
                    </div>
                    <div className='flex flex-col p-4 gap-7 items-center justify-center'>
                        <div className='xl:w-[60%] text-center text-xl md:text-5xl'>
                            <span>Customer Success Story: Manipal Hospitals</span>
                        </div>
                        <div className='xl:w-[60%] text-center font-thin md:text-xl'>
                            <span>Manipal Hospitals Improves Branding & Internal Communications with Pickcel's On-Premise Digital Signage for Healthcare</span>
                        </div>
                    </div>
                    <div className='flex md:gap-5 items-center justify-center gap-2 '>
                        <section>
                            <div class="flex flex-wrap justify-center   w-fit rounded-full  ">
                                <a
                                    style={{
                                        background:
                                            "linear-gradient(113deg, #fd0036 24.5%,  #ffa800)",
                                    }}
                                    href="/casestudies"
                                    class="button button--aylen md:px-14 md:py-3 py-3  hover:bg-white text-white relative block focus:outline-none  rounded-full text-[10px] px-3 md:text-[13px] text-center font-semibold  overflow-hidden"
                                >
                                    Read All Case Studies
                                </a>
                            </div>
                        </section>
                        <a href="#" class="inline-flex items-center text-[11px] md:text-sm  justify-center h-fit px-3 py-2 md:px-5 md:py-3  text-center   rounded-full  border hover:border-[#ff5100] border-black hover:text-[#ff5100]  bg-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Read The Manipal Hospitals Story
                        </a>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default HealthCare
