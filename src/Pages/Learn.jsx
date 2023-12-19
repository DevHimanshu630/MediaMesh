import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Learn() {
    const details = [
        {
            url:'https://www.pickcel.com/assets/img/learn/quickplay-schedule/quickplay--schedule.jpg',
            title:'Quickplay, Schedule & Default Publishing: Flexible Digital Signage Content Delivery Through Pickcel',
            para:'Content publishing via digital signage can be difficult due to several factors including lack of proper planning, distribution...'
        },
        {
            url:'https://www.pickcel.com/assets/img/learn/quickplay-schedule/quickplay--schedule.jpg',
            title:'Quickplay, Schedule & Default Publishing: Flexible Digital Signage Content Delivery Through Pickcel',
            para:'Content publishing via digital signage can be difficult due to several factors including lack of proper planning, distribution...'
        },
        
       
    ]
  return (
    <div>
            <Navbar/>
             <div className='ml-[15%] mt-[5rem]'>
                <h1 className='text-[48px] font-bold'>The Pickcel Learning Hub</h1>
                <p className='text-[18px] font-normal mt-5'>Master a skill or acquire one. Need tips and tricks? Sure! Get answers to your 'how to' <br /> questions or simply quench your curiosity!</p>
            </div>    


            <div className='w-full h-[80vh] flex justify-center mt-[10rem]'>
                <div className='w-[70%] flex justify-between gap-[20px]'>
                {details.map((details, index) => (
                            <div className="w-[50%]">
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
                                    <p className=" text-start text-[1.06rem] mt-4">{details.para}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>   
            <Footer/>

    </div>
  )
}

export default Learn