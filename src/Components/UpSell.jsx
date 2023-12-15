import React from 'react'

function UpSell() {
    return (

        <>
            <div className='flex flex-col gap-5 py-20 items-center justify-center'>
                <div>
                    <p className='text-5xl text-center'>Upsell your products with <br /> pickcel retail solutions</p>
                </div>
                <hr class="my-4 w-[2.5%] rounded-full  font-extrabold  border-4 border-orange-500 sm:mx-auto dark:border-gray-700 " />
                <div className='flex  justify-center gap-5'>
                    <div class="max-w-sm hover:shadow-lg  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#" className=''>
                            <img class="rounded-t-lg" src="https://www.pickcel.com/assets/img/industries/retail/digital-discount-coupons.webp" alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Digital Discount Coupons</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Add QR codes to your digital signage screens  and let customers generate virtual coupons.</p>
                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-pink-600 via-red-600 to-orange-500 rounded-xl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                View Solution
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="max-w-sm hover:shadow-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="rounded-t-lg" src="https://www.pickcel.com/assets/img/industries/retail/digitalproduct-catalogue.webp" alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Digital Product Catalogue</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">With the Pickcel Product Catalogue app, design your own digital catalog and publish across your retail displays. </p>
                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-pink-600 via-red-600 to-orange-500 rounded-xl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                View Solution
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}

export default UpSell
