import React from 'react'

function Customer() {
    return (
        <div className='hidden md:block  sm:py-24'>
            <div className='flex justify-center items-center  w-[100%] '
                style={{ backgroundImage: 'url("")' }}
            >
                <div className='flex items-center md:w-[90%] xl:w-[75%] '>
                    <div className='w-[50%] xl:ml-[25px]'>
                        <h1 className='xl:text-[40px] text-[20px]'>Customer Voices</h1>
                        <svg className='mt-9' width="98" height="71" viewBox="0 0 98 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.18654 69.2203C1.77357 62.4556 6.376 55.5113 13.9087 54.9781C19.6743 54.57 25.6257 57.917 29.9496 61.2264C30.6632 61.7725 36.3867 66.4595 32.6677 67.5611C25.8673 69.5754 20.8051 64.3499 19.1457 58.2323C16.6802 49.1426 20.0259 40.1828 26.8005 33.8151C35.2046 25.9159 49.6092 18.7922 60.8608 24.4604C66.1074 27.1035 68.6686 30.6907 70.1397 36.2341C71.3109 40.6471 71.9304 46.1702 68.2077 49.7657C62.081 55.6829 54.791 49.867 51.5977 44.0066C45.1271 32.1314 50.2442 15.6146 62.1813 9.38909C72.6518 3.92843 84.7383 2.07157 96.3874 1.34827" stroke="black" stroke-width="2" stroke-linecap="round"></path>
                        </svg>

                        <div className='w-full mt-8'>
                            <p className='2xl:text-[20px] font-thin text-justify'>We needed to have video running on android displays in <br /> different countries. So, we used the Pickcel software. I <br /> liked the report function that lets me see for how long the <br /> stores have the video running. And the support I received <br /> was world-class.</p>
                            <p className='mt-8'>Michael T</p>
                            <p>Co Founder</p>
                            <p>Electrical/Electronic Manufacturing</p>
                        </div>
                    </div>

                    <div className='xl:w-[38%] w-[30%]'>
                        <img className='relative left-[89%] top-[50px]' src="https://www.pickcel.com/assets/img/icons/shape_163.svg" alt="" />
                        <img className='' src="https://www.pickcel.com/assets/img/home/customer-img.webp" width="576px" height="331px" alt="" style={{ WebkitFilter: 'grayscale(100%)', filter: 'grayscale(100%)' }} />
                        <img className='relative left-[300px] bottom-[180px] ' src="https://www.pickcel.com/assets/img/home/smile-loading-animation.gif" width='80px' height="80px" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customer
