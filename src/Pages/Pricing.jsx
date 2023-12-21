
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Customer from '../Components/Customer'
import Cart from '../Components/Cart'
import ClientCarousel from '../Components/ClientCarousel'


function Pricing() {
    return (
        <>

            <Navbar />
            <div className='flex flex-col items-center justify-center gap-10 pt-8 md:pt-20 md:pb-10'>
                <div className='md:w-[70%] flex flex-col md:gap-7 gap-3 items-center justify-center  md:h-44'>
                    <h1 className='md:text-5xl'>Pick a plan that suits your business size</h1>
                    <div className='flex items-center  justify-center gap-4'>
                        <span class="ms-3 text-sm font-normal text-gray-900 dark:text-gray-300">Monthly</span>
                        <label class="relative flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" />
                            <div class="w-14 h-7 bg-gray-200 -z-10 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-[#ff5100]"></div>
                            <span class="ms-3 text-sm font-normal -z-10 text-gray-900 dark:text-gray-300">Annually</span>
                        </label>
                    </div>
                    <p className='md:text-3xl  font-medium  text-amber-700'>Save 10% <span className='font-thin'>on annual plan</span></p>
                </div>
                <div className='md:flex-row  w-full flex p-3 md:p-0 flex-col items-center justify-center gap-10 '>
                    <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <h5 class="mb-4 text-xl font-medium text dark:text-gray-400">Business</h5>
                        <hr className=' ' />
                        <div class="flex items-baseline py-3 text-gray-900 dark:text-white">
                            <span class="text-3xl font-semibold">$</span>
                            <span class="text-5xl font-extrabold tracking-tight">49</span>
                            <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                        </div>
                        <div className='flex-col py-2 pt-5  flex gap-1 hover:font-semibold'>
                            <a href="#" class="inline-flex items-center  border hover:border-[#ff5100] hover:text-[#ff5100] justify-center px-8 py-3 text-base font-medium text-center text-black rounded-full">
                                Try Free For 14 Days
                            </a>
                        </div>
                        <ul role="list" class="space-y-5 my-7">
                            <li class="flex items-center">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-200 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">All in our Professional plan +</span>
                            </li>
                            <li class="flex">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-200 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Live Zoom event streaming</span>
                            </li>
                            <li class="flex">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-200 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Access to premium apps</span>
                            </li>
                            <li class="flex  decoration-gray-500">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="text-base font-normal leading-tight text-gray-500 ms-3">Custom screen attributes</span>
                            </li>
                            <li class="flex  decoration-gray-500">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="text-base font-normal leading-tight text-gray-500 ms-3">API acccess & Zapier integration</span>
                            </li>
                            <li class="flex  decoration-gray-500">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="text-base font-normal leading-tight text-gray-500 ms-3">4K support</span>
                            </li>
                            <li class="flex  decoration-gray-500">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="text-base font-normal leading-tight text-gray-500 ms-3">Content sync</span>
                            </li>
                            <li class="flex  decoration-gray-500">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="text-base font-normal leading-tight text-gray-500 ms-3">Advanced playlists </span>
                            </li>
                            <li class="flex  decoration-gray-500">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="text-base font-normal leading-tight text-gray-500 ms-3">8 GB storage per screen</span>
                            </li>
                            <li class="flex  decoration-gray-500">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="text-base font-normal leading-tight text-gray-500 ms-3">On-call support</span>
                            </li>
                            <li class="flex  decoration-gray-500">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="text-base font-normal leading-tight text-gray-500 ms-3">Dedicated Relationship Manager</span>
                            </li>
                        </ul>
                        <button type="button" class="text-white bg-gradient-to-r from-[#fd0036] via-[#ff5100] to-[#ffa800] hover:shadow-lg hover:bg-[#ff5100]focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
                    </div>
                    <div class="w-full  max-w-sm p-4 bg-white  border border-[#ff5100] rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <h5 class="mb-4 text-xl font-medium text-[#ff5100] dark:text-gray-400">Most Popular</h5>
                        <hr className=' border-[#ff5100]' />
                        <div class="flex py-3 items-baseline text-gray-900 dark:text-white">
                            <span class="text-3xl font-semibold">$</span>
                            <span class="text-5xl font-extrabold tracking-tight">49</span>
                            <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                        </div>
                        <div className='flex-col py-2 pt-5  flex gap-1 hover:font-semibold'>
                            <a href="#" class="inline-flex items-center  border hover:border-[#ff5100] hover:text-[#ff5100] justify-center px-8 py-3 text-base font-medium text-center text-black rounded-full">
                                Try Free For 14 Days
                            </a>
                        </div>
                        <ul role="list" class="space-y-5 my-7">
                            <li class="flex items-center">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-200 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Self management of displays</span>
                            </li>
                            <li class="flex">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-200 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Media library management</span>
                            </li>
                            <li class="flex">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-200 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Supported on all media players- Android, Windows, Linux, Samsung, LG, etc</span>
                            </li>
                            <li class="flex  decoration-gray-500">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="text-base font-normal leading-tight text-gray-500 ms-3">Access to free media repositories</span>
                            </li>
                            <li class="flex  decoration-gray-500">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="text-base font-normal leading-tight text-gray-500 ms-3">In-built graphic design tool (Artboard)</span>
                            </li>
                            <li class="flex  decoration-gray-500">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="text-base font-normal leading-tight text-gray-500 ms-3">100+ templates</span>
                            </li>
                            <li class="flex  decoration-gray-500">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="text-base font-normal leading-tight text-gray-500 ms-3">60+ signage content apps & integrations</span>
                            </li>


                            <li class="flex  decoration-gray-500">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="text-base font-normal leading-tight text-gray-500 ms-3">Unlimited screen templates with multiple zones</span>
                            </li>
                            <li class="flex  decoration-gray-500">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="text-base font-normal leading-tight text-gray-500 ms-3">Composition and playlist</span>
                            </li>
                            <li class="flex  decoration-gray-500">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="text-base font-normal leading-tight text-gray-500 ms-3">Advanced content scheduling</span>
                            </li>
                            <li class="flex  decoration-gray-500">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="text-base font-normal leading-tight text-gray-500 ms-3">User audit logs</span>
                            </li>
                            <li class="flex  decoration-gray-500">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="text-base font-normal leading-tight text-gray-500 ms-3">Downloadable reports & proof of play</span>
                            </li>
                            <li class="flex  decoration-gray-500">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="text-base font-normal leading-tight text-gray-500 ms-3">User, role, group management</span>
                            </li>
                            <li class="flex  decoration-gray-500">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="text-base font-normal leading-tight text-gray-500 ms-3">3 GB storage per screen</span>
                            </li>
                            <li class="flex  decoration-gray-500">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="text-base font-normal leading-tight text-gray-500 ms-3">24X7 email & chat support</span>
                            </li>

                        </ul>
                        <button type="button" class="text-white bg-gradient-to-r from-[#fd0036] via-[#ff5100] to-[#ffa800] hover:shadow-lg hover:bg-[#ff5100]focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
                    </div>
                    <div class="w-full max-w-sm p-4  bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <h5 class="mb-4 text-xl font-medium text dark:text-[#ff5100]">Enterprise</h5>
                        <hr className=' ' />
                        <div class="flex py-3 items-baseline text-gray-900 dark:text-white">
                            <span class="text-3xl font-semibold">$</span>
                            <span class="text-5xl font-extrabold tracking-tight">49</span>
                            <span class="ms-1 text-xl font-normal text-gray-500 dark:text-blue-600">/month</span>
                        </div>
                        <div className='flex-col py-2 pt-5 flex gap-1 hover:font-semibold'>
                            <a href="#" class="inline-flex items-center  border hover:border-[#ff5100] hover:text-[#ff5100] justify-center px-8 py-3 text-base font-medium text-center text-black rounded-full">
                                Try Free For 14 Days
                            </a>
                        </div>
                        <ul role="list" class="space-y-5 my-7">
                            <li class="flex items-center">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-200 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Everything in Business, plus</span>
                            </li>
                            <li class="flex">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-200 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Dedicated / on-premise implementation </span>
                            </li>
                            <li class="flex">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-200 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Single Sign On (SSO) integration</span>
                            </li>
                            <li class="flex  decoration-gray-500">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="text-base font-normal leading-tight text-gray-500 ms-3">Custom content app development</span>
                            </li>
                            <li class="flex  decoration-gray-500">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="text-base font-normal leading-tight text-gray-500 ms-3">Custom integration with external/enterprise applications</span>
                            </li>
                            <li class="flex  decoration-gray-500">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="text-base font-normal leading-tight text-gray-500 ms-3">Custom signage player app to accommodate specific needs</span>
                            </li>
                            <li class="flex  decoration-gray-500">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="text-base font-normal leading-tight text-gray-500 ms-3">Custom Android launcher APK for remote device management</span>
                            </li>
                            <li class="flex  decoration-gray-500">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="text-base font-normal leading-tight text-gray-500 ms-3">Custom interactive touchscreen app development</span>
                            </li>
                            <li class="flex  decoration-gray-500">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="text-base font-normal leading-tight text-gray-500 ms-3">Unlimited storage</span>
                            </li>
                            <li class="flex  decoration-gray-500">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="text-base font-normal leading-tight text-gray-500 ms-3">Assistance in screen rollout</span>
                            </li>
                        </ul>
                        <button type="button" class="text-white bg-gradient-to-r from-[#fd0036] via-[#ff5100] to-[#ffa800] hover:shadow-lg hover:bg-[#ff5100]focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
                    </div>
                </div>
            </div>

            <ClientCarousel />
            <div className='w-full flex items-center py-5 justify-center'>

                <div style={{
                    background:
                        'linear-gradient(60deg, rgba(255, 255, 255, 1) 0%, rgba(207, 231, 255, 0.6) 10%, rgba(226, 229, 240, 0.6) 22.75%, rgba(251, 211, 234, 0.6) 56.9%, rgba(255, 245, 203, 0.6) 90%, rgba(255, 255, 255, 1) 100%)',
                }} className='w-[73%] border flex  flex-col py-16 gap-5 rounded-lg shadow-md  items-center justify-center '>
                    <div className='flex flex-col gap-3'>
                        <p className='text-center text-5xl'>Design Like a Pro, Manage Like a Boss.</p>
                        <p className='text-center text-xl font-thin'>Enjoy complete control over your industrial screens with Pickcel.</p>
                    </div>
                    <div className='flex gap-6'>
                        <div className='flex-col flex gap-1 hover:font-semibold'>
                            <section>
                                <div class="flex flex-wrap justify-center   w-fit rounded-full  ">
                                    <a
                                        style={{ background: "linear-gradient(113deg, #fd0036 24.5%,  #ffa800)" }}
                                        href="!"
                                        class="button button--aylen md:px-5 md:py-3 py-3  hover:bg-white text-white relative block focus:outline-none  rounded-full text-[10px] md:text-sm text-center font-semibold  tracking-widest overflow-hidden"
                                    >
                                        Schedule My Demo
                                    </a>
                                </div>
                            </section>
                            <p className=' text-center text-gray-400 text-[10px]'>No Credit Card Required</p>
                        </div>

                        <a href="#" class="inline-flex items-center hover:text-[#ff5100] hover:border-[#ff5100] justify-center h-fit px-8 py-3 text-base font-medium text-center text-black  rounded-full  border border-black hover:shadow-2xl bg-white focus:ring-4 focus:ring-black dark:focus:ring-black">
                            Contact Us
                        </a>
                    </div>
                </div>


            </div>
            <Customer />


            <Footer />
        </>

    )
}

export default Pricing
