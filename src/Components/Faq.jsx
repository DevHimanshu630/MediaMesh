import React, { useState } from 'react';

function Faq() {
    const toggleFAQ = (button) => {
        const content = button.nextElementSibling;
        button.setAttribute("aria-expanded", button.getAttribute("aria-expanded") === "false" ? "true" : "false");
        content.style.maxHeight = button.getAttribute("aria-expanded") === "true" ? content.scrollHeight + "px" : "0";
    };

    return (
        <div className='bg-white'>
            <div className="py-24  w-full px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
                <ul className="basis-1/2">
                    <li>
                        <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left  md:text-lg border-base-content/10"
                            aria-expanded="false"
                            onClick={(e) => toggleFAQ(e.currentTarget)}>
                            <span className="flex-1 text-base-content">How secure is my insurance information?</span>
                            <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out false"></rect>
                                <rect y="7" width="16" height="2" rx="1" className="transform origin-center rotate-90 transition duration-200 ease-out false"></rect>
                            </svg>
                        </button>
                        <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style={{ transition: "max-height 0.3s ease-in-out 0s" }}>
                            <div className="pb-5 leading-relaxed">
                                <div className="space-y-2 leading-relaxed">We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential.</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                            aria-expanded="false"
                            onClick={(e) => toggleFAQ(e.currentTarget)}>
                            <span className="flex-1 text-base-content">How can I customize my insurance coverage?</span>
                            <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out false"></rect>
                                <rect y="7" width="16" height="2" rx="1" className="transform origin-center rotate-90 transition duration-200 ease-out false"></rect>
                            </svg>
                        </button>
                        <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style={{ transition: "max-height 0.3s ease-in-out 0s" }}>
                            <div className="pb-5 leading-relaxed">
                                <div className="space-y-2 leading-relaxed">Our insurance plans are customizable. You can tailor your coverage to meet your specific needs and budget.</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                            aria-expanded="false"
                            onClick={(e) => toggleFAQ(e.currentTarget)}>
                            <span className="flex-1 text-base-content">Is there a waiting period for insurance claims?</span>
                            <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out false"></rect>
                                <rect y="7" width="16" height="2" rx="1" className="transform origin-center rotate-90 transition duration-200 ease-out false"></rect>
                            </svg>
                        </button>
                        <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style={{ transition: "max-height 0.3s ease-in-out 0s" }}>
                            <div className="pb-5 leading-relaxed">
                                <div className="space-y-2 leading-relaxed">There may be a waiting period for certain insurance claims, depending on the policy terms and conditions. Please refer to your policy documents for details.</div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="flex flex-col text-left basis-1/2">
                    <img src="https://www.pickcel.com/assets/img/home/media-design-tool-set.webp" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Faq;
