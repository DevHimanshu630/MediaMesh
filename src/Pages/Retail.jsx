import React from "react";
import Navbar from "../Components/Navbar";
import ClientCarousel from "../Components/ClientCarousel";
import Campaigns from "../Components/Campaigns";
import UpSell from "../Components/UpSell";
import RetailBussiness from "../Components/RetailBussiness";
import Footer from "../Components/Footer";
import facebook from "../images/Facebook (1).svg"
import ndtv from "../images/NDTV (1).svg"


function Retail() {


    const h = { heading: "60+ Digital Signage Content Apps ", subheading: "for retail businesses" }

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

                <div className="w-[100%] md:h-[60vh] md:flex-row flex-col flex gap-10  md:gap-0 justify-around  items-center  mt-[20px]">
                    <div className="md:w-[40%]  p-4 md:p-0 xl:ml-20 2xl:ml-[12%]">
                        <div>
                            <h1 className="2xl:text-[48px] xl:text-[32px] leading-none  md:text-[28px] text-[32px] ">
                                Retail Digital Signage Solution
                            </h1>
                            <p className="xl:text-[18px] text-justify font-thin md:mt-[30px]">
                                Amp up your retail space with the power of digital signage.
                                Whether sprucing up a small boutique or amplifying a store
                                spanning across floors, content is indeed the showstopper. With
                                an array of solutions boosting business productivity, your
                                display strategy is about to upscale. Looking to get started?
                                Your free Pickcel guide is right here!
                            </p>
                        </div>
                        <div className="flex justify-center md:justify-start gap-3 mt-[30px]">
                            <div className="flex-col hover:font-semibold hover:text-black flex items-center justify-center gap-1">
                                <section>
                                    <div class="flex flex-wrap justify-center   w-fit rounded-full  ">
                                        <a
                                            style={{
                                                background:
                                                    "linear-gradient(113deg, #fd0036 24.5%,  #ffa800)",
                                            }}
                                            href="!"
                                            class="button button--aylen xl:px-8 xl:py-3.4 md:px-4 md:py-3.4  py-3 px-4  hover:bg-white text-white relative block focus:outline-none  rounded-full text-[10px] md:text-[12px] xl:text-sm text-center font-semibold   overflow-hidden"
                                        >
                                            Start Free Trial
                                        </a>
                                    </div>
                                </section>
                            </div>

                            <a
                                href="#"
                                class="inline-flex items-center text-[11px] xl:text-sm md:px-4 md:py-3.4  justify-center h-fit px-3 py-2 xl:px-5 xl:py-3 text-base font-medium text-center border border-black text-black  rounded-full  bg-white focus:ring-4 hover:text-[#ff5100] hover:border-[#ff5100]"
                            >
                                Schedule My Demo
                            </a>
                        </div>
                    </div>
                    <div className="md:w-[40%] p-4 md:p-0">
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

            <div className="md:mt-[5rem] mt-[2rem]">
                <h1 className="md:text-[40px] text-[26px] text-center ">
                    Retail Brands that Trust Us
                </h1>
                <ClientCarousel />
            </div>

            <div className="w-[100%]  items-center md:mt-[3rem]">
                <div className="xl:w-[40%] md:ml-[5%] xl:ml-[9%] 2xl:ml-[14%]">
                    <h1 className="2xl:text-[48px] xl:text-[40px] text-[20px] md:text-[25px] text-center md:text-left xl:leading-[52px]">
                        Uses of digital signage in <br /> the retail industry
                    </h1>
                    <div className="w-[70px] h-[4px] hidden md:block mt-1 rounded-full bg-orange-500"></div>
                </div>
                <div className="xl:mt-[5rem] mt-[2rem] w-[100%] flex text-center justify-center">
                    <div className="flex flex-wrap gap-[20px] xl:w-[85%]  2xl:w-[77%] justify-center text-center p-5 ">
                        {industryUses.map((details, index) => (
                            <div className="md:w-[31%]">
                                <img
                                    className=""
                                    alt="Image"
                                    key={details?.id}
                                    src={details?.url}
                                    width=""
                                    height="211px"
                                />

                                <div className="md:p-5 py-2">
                                    <h2 className="md:text-[20px] text-black text-center font-bold">{details.title}</h2>
                                    <p className=" md:text-center text-justify mt-4">{details.para}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Campaigns />
            <UpSell />

            <RetailBussiness
                heading={h.heading}
                subheading={h.subheading}
                leftImg1={facebook}
                leftImg2={facebook}
                leftImg3={facebook}
                leftImg4={facebook}
                rightImg={ndtv}
            />

            <Footer />
        </>
    );
}

export default Retail;
