import React, { useEffect } from "react";
import { Tabs } from "flowbite";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Tabcontent from "./Tabcontent";
import ClientCarousel from "../Components/ClientCarousel";
import NewTab from "../Components/NewTab";

function CaseStudies() {
    return (
        <div>
            <div
                className=""
                style={{
                    backgroundImage:
                        'url("https://www.pickcel.com/assets/img/bg/industry-bg.webp")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <Navbar />
                <div className="w-full mt-[6rem] pb-20 flex justify-center">
                    <div className="flex flex-col gap-[25px] w-[50%] justify-center">
                        <h1 className="text-center text-[48px] ">
                            Case Studies
                        </h1>
                        <p className="text-center font-thin text-[19px]">
                            Explore our clients’ success stories and discover our potential in accelerating <br />your organization’s growth. And choose Pickcel digital signage solutions to <br /> create your own success story.
                        </p>
                        <div class="flex flex-wrap justify-center  rounded-full  ">
                            <section>
                                <div class="flex flex-wrap justify-center   w-fit rounded-full  ">
                                    <a
                                        style={{ background: "linear-gradient(113deg, #fd0036 24.5%,  #ffa800)" }}
                                        href="!"
                                        class="button button--aylen md:px-5 md:py-3 py-3  hover:bg-white text-white  relative block focus:outline-none  rounded-full text-[10px] md:text-sm text-center font-semibold  tracking-widest overflow-hidden"
                                    >
                                        Start Free Trial
                                    </a>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <NewTab />
            </div>

          
            <div className="mt-[5rem]">
                <Footer />
            </div>
        </div>
    )
}

export default CaseStudies
