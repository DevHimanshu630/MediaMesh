import React from 'react'

function ContactFrom() {
    return (

        <div class="flex items-center justify-center md:p-12 p-5">
            <div class="mx-auto w-full border rounded-lg shadow-md p-5 px-8 max-w-[750px]">
                <h5 className='md:text-5xl text-[2rem] py-5'>Contact Us</h5>
                <p className='text-xl pb-3'>Questions, feedback, quotations— We are here to talk.</p>
                <form action="" method="POST">
                    <div className='md:flex flex-wrap md:flex-nowrap w-full gap-3 items-center md:justify-evenly '>
                        <div class="mb-5 md:w-1/2">
                            <label
                                for="name"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Full Name"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div class="mb-5 md:w-1/2">
                            <label
                                for="email"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="example@domain.com"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                    </div>

                    <div className='md:flex flex-wrap md:flex-nowrap w-full gap-3 items-center md:justify-evenly '>
                        <div class="mb-5 md:w-1/2">
                            <label
                                for="email"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Phone
                            </label>
                            <input
                                type="phone"
                                name="number"
                                id="number"
                                placeholder="Enter your phone number"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div class="mb-5 md:w-1/2">
                            <label
                                for="subject"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Company
                            </label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                placeholder="Enter your company name"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                    </div>
                    <div class="mb-5">
                        <label
                            for="message"
                            class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Description
                        </label>
                        <textarea
                            rows="4"
                            name="message"
                            id="message"
                            placeholder="Type your message"
                            class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        ></textarea>
                    </div>


                    <div>
                        <button
                            style={{
                                background:
                                    "linear-gradient(113deg, #fd0036 24.5%,  #ffa800)",
                            }}
                            class="hover:shadow-form rounded-md py-3 px-8 text-base font-semibold text-white outline-none"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactFrom
