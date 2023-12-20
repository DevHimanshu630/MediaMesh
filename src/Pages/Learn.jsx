import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Learn() {
    const details = [
        {
            url: 'https://www.pickcel.com/assets/img/learn/quickplay-schedule/quickplay--schedule.jpg',
            title: 'Quickplay, Schedule & Default Publishing: Flexible Digital Signage Content Delivery Through Pickcel',
            para: 'Content publishing via digital signage can be difficult due to several factors including lack of proper planning, distribution...'
        },
        {
            url: 'https://www.pickcel.com/assets/img/learn/quickplay-schedule/quickplay--schedule.jpg',
            title: 'Quickplay, Schedule & Default Publishing: Flexible Digital Signage Content Delivery Through Pickcel',
            para: 'Content publishing via digital signage can be difficult due to several factors including lack of proper planning, distribution...'
        },
        {
            url: 'https://www.pickcel.com/assets/img/learn/quickplay-schedule/quickplay--schedule.jpg',
            title: 'Quickplay, Schedule & Default Publishing: Flexible Digital Signage Content Delivery Through Pickcel',
            para: 'Content publishing via digital signage can be difficult due to several factors including lack of proper planning, distribution...'
        },
        {
            url: 'https://www.pickcel.com/assets/img/learn/quickplay-schedule/quickplay--schedule.jpg',
            title: 'Quickplay, Schedule & Default Publishing: Flexible Digital Signage Content Delivery Through Pickcel',
            para: 'Content publishing via digital signage can be difficult due to several factors including lack of proper planning, distribution...'
        },
        {
            url: 'https://www.pickcel.com/assets/img/learn/quickplay-schedule/quickplay--schedule.jpg',
            title: 'Quickplay, Schedule & Default Publishing: Flexible Digital Signage Content Delivery Through Pickcel',
            para: 'Content publishing via digital signage can be difficult due to several factors including lack of proper planning, distribution...'
        },
        {
            url: 'https://www.pickcel.com/assets/img/learn/quickplay-schedule/quickplay--schedule.jpg',
            title: 'Quickplay, Schedule & Default Publishing: Flexible Digital Signage Content Delivery Through Pickcel',
            para: 'Content publishing via digital signage can be difficult due to several factors including lack of proper planning, distribution...'
        },
        {
            url: 'https://www.pickcel.com/assets/img/learn/quickplay-schedule/quickplay--schedule.jpg',
            title: 'Quickplay, Schedule & Default Publishing: Flexible Digital Signage Content Delivery Through Pickcel',
            para: 'Content publishing via digital signage can be difficult due to several factors including lack of proper planning, distribution...'
        },
        {
            url: 'https://www.pickcel.com/assets/img/learn/quickplay-schedule/quickplay--schedule.jpg',
            title: 'Quickplay, Schedule & Default Publishing: Flexible Digital Signage Content Delivery Through Pickcel',
            para: 'Content publishing via digital signage can be difficult due to several factors including lack of proper planning, distribution...'
        },



    ]
    return (
        <div style={{
            backgroundImage:
              'url("https://www.pickcel.com/assets/img/bg/industry-bg.webp")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}>
            <Navbar />
            <div className='ml-[15%] mt-[5rem]'>
                <h1 className='text-[48px] font-bold'>The Pickcel Learning Hub</h1>
                <p className='text-[18px] font-thin  mt-5'>Master a skill or acquire one. Need tips and tricks? Sure! Get answers to your 'how to' <br /> questions or simply quench your curiosity!</p>
            </div>
            <div className='w-[100%] pb-20  mt-[5rem]'>
                <div className='w-[70%] gap-4 grid grid-cols-2 m-auto place-items-center place-content-around '>
                    {details.map((details, index) => (
                        <div className="w-[100%]  m-5">
                            <img
                                className="rounded-[1rem]"
                                alt="Image"
                                key={details?.id}
                                src={details?.url}
                                width="576px"
                                height="324px"
                            />

                            <div className="pt-5">
                                <h2 className="text-[1.375rem] text-black text-start font-bold">{details.title}</h2>
                                <p className=" text-start font-thin text-[1.06rem] mt-4">{details.para}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Learn