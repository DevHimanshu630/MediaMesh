import React from "react";
import Navbar from "../Components/Navbar";
import ClientCarousel from "../Components/ClientCarousel";
import Campaigns from "../Components/Campaigns";
import UpSell from "../Components/UpSell";
import RetailBussiness from "../Components/RetailBussiness";
import Footer from "../Components/Footer";
import ContactFrom from "../Components/ContactFrom";

function Retail() {
    const industryUses = [
        {
            id: "1",
            url:
                "https://www.pickcel.com/assets/img/industries/retail/play-in-store.webp",
            title: "Play in-store entertainment",
            para:
                "Show the latest music video chartbusters, movie trailers and news headlines to make the shopping experience more wholesome.",
        },
        {
            id: "2",
            url:
                "https://www.pickcel.com/assets/img/industries/retail/social-media-feed.webp",
            title: "Show social media feeds",
            para:
                "Reinforce customer loyalty by streaming live feeds from Facebook, Twitter, Instagram. Show online reviews from influencers & retweets to build hype.",
        },
        {
            id: "3",
            url:
                "https://www.pickcel.com/assets/img/industries/retail/customer-countdown.png",
            title: "Countdown to new launches",
            para:
                "What better way to get all store visitors and passersby eyes on you? A digital countdown to your Spring Summer collection! Add a launch special discount code on screen, scanning which users can get instant benefits on their purchases",
        },
        {
            id: "4",
            url:
                "https://www.pickcel.com/assets/img/industries/retail/show-internal-news.webp",
            title: "Show internal news & stats",
            para:
                "Keep your staff updated with company mandates, guidelines, & policy changes. Introduce new recruits. Show holidays, meeting schedules, etc.",
        },
        {
            id: "5",
            url:
                "https://www.pickcel.com/assets/img/industries/retail/promotions-campaigns.webp",
            title: "Run promotions & ad campaigns",
            para:
                "Highlight special offers, discounts, free product trials, coupons, loyalty programs, etc. Play advertisements that get shoppers excited.",
        },
        {
            id: "6",
            url:
                "https://www.pickcel.com/assets/img/industries/retail/emergency-message.webp",
            title: "Real-time emergency announcements",
            para:
                "Efficiently communicate urgent information with Pickcel's Quickly feature. This advanced functionality swiftly broadcasts real-time emergency messages, overriding standard content on selected screens for prompt alerts.",
        },

    ];
    return (
        <>
            <div
                className=""
                style={{
                    backgroundImage:
                        'url("https://www.pickcel.com/assets/img/bg/industry-bg.png")',
                }}
            >
                <Navbar />

                <div className="w-[100%] h-[60vh] flex   opacity-[0.85] justify-around  items-center  mt-[20px]">
                    <div className="w-[40%]  ml-[12%]">
                        <div>
                            <h1 className="text-[48px] font-bold">
                                Retail Digital Signage Solution
                            </h1>
                            <p className="text-[18px] mt-[30px]">
                                Amp up your retail space with the power of digital signage.
                                Whether sprucing up a small boutique or amplifying a store
                                spanning across floors, content is indeed the showstopper. With
                                an array of solutions boosting business productivity, your
                                display strategy is about to upscale. Looking to get started?
                                Your free Pickcel guide is right here!
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
                                            class="button button--aylen md:px-5 md:py-3 py-3  hover:bg-white text-white relative block focus:outline-none  rounded-full text-[10px] md:text-sm text-center font-semibold  tracking-widest overflow-hidden"
                                        >
                                            Start Free Trial
                                        </a>
                                    </div>
                                </section>
                            </div>

                            <a
                                href="#"
                                class="inline-flex items-center text-[11px] md:text-sm  justify-center h-fit px-3 py-2 md:px-5 md:py-3 text-base font-medium text-center border text-black  rounded-full hover:shadow-2xl bg-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                            >
                                Schedule My Demo
                            </a>
                        </div>
                    </div>
                    <div className="w-[40%] ">
                        <div className="rounded w-fit border-2 shadow-2xl shadow-black border-black ">
                            <img
                                className="  shadow-lg "
                                src="https://www.pickcel.com/assets/img/industries/retail/reatil-bannervideo.gif"
                                width="470px"
                                height="265px"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-[5rem]">
                <h1 className="text-[40px] font-bold text-center ">
                    Retail Brands that Trust Us
                </h1>
                <ClientCarousel />
            </div>

            <div className="w-[100%]  items-center mt-[3rem]">
                <div className="w-[40%]  ml-[12%]">
                    <h1 className="text-[48px] font-bold">
                        Uses of digital signage in <br /> the retail industry
                    </h1>
                    <div className="w-[70px] h-[5px] rounded-full bg-gradient-to-r from-pink-600 via-red-600 to-orange-500"></div>
                </div>
                <div className="mt-[5rem] w-[100%] flex text-center justify-center">
                    <div className="flex flex-wrap gap-[20px]  w-[80%] justify-center text-center p-5 ">
                        {industryUses.map((details, index) => (
                            <div className="w-[31%]">
                                <img
                                    className=""
                                    alt="Image"
                                    key={details?.id}
                                    src={details?.url}
                                    width=""
                                    height="211px"
                                />

                                <div className="p-5">
                                    <h2 className="text-[20px] text-black text-center font-bold">{details.title}</h2>
                                    <p className=" text-center mt-4">{details.para}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Campaigns />
            <UpSell />
            <RetailBussiness />
            <ContactFrom />
            <Footer />
        </>
    );
}

export default Retail;
