import React, { useEffect } from "react";
import { Tabs } from "flowbite";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Tabcontent from "./Tabcontent";
import ClientCarousel from "../Components/ClientCarousel";

function DigitalSignage() {
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
        <div className="w-full mt-[6rem] flex justify-center">
          <div className="flex flex-col gap-[25px] w-[50%] justify-center">
            <h1 className="text-center text-[48px] ">
              Digital Signage Templates
            </h1>
            <p className="text-center font-thin text-[18px]">
              Templates to tantalize! Explore our range of signage templates
              meant for any and every industry. From captivating menu boards to
              engaging retail displays, corporate templates that talk to the
              team, and dynamic content for the healthcare and education
              sectors, our collection has it all.
            </p>
            <div class="flex flex-wrap justify-center  rounded-full  ">
              <section>
                <div class="flex flex-wrap justify-center   w-fit rounded-full  ">
                  <a
                    style={{ background: "linear-gradient(113deg, #fd0036 24.5%,  #ffa800)" }}
                    href="!"
                    class="button button--aylen md:px-5 md:py-3 py-3  hover:bg-white text-white  relative block focus:outline-none  rounded-full text-[10px] md:text-sm text-center font-semibold overflow-hidden"
                  >
                    Start Free Trial
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
        <Tabcontent />
      </div>

      <div className="w-full mt-[5rem]">
        <h1 className="text-center text-[43px]">
          Trusted by 5500+ customers globally
        </h1>
        <p className="text-center text-[18px] font-normal">
          Powering 100,000+ screens across 30+ countries
        </p>
      </div>
      <ClientCarousel />

      <div className="w-full flex justify-center ">
        <div className="flex items-center gap-[50px] w-[78%] h-[60vh]">
          <div className="w-1/2 p-5">
            <img
              width="552px"
              height="430px"
              src="https://www.pickcel.com/assets/img/templates/art-board.webp"
              alt=""
            />
          </div>

          <div className="flex flex-col gap-[15px] w-1/2  text-start p-5">
            <h1 className="text-[45px] leading-[50px] ">
              Quickly Edit Digital <br /> Signage Designs
            </h1>
            <p className="text-[18px]">Customise your Artboard</p>
            <div className="flex gap-[10px] justify-start ">
              <img
                src="https://www.pickcel.com/assets/img/templates/labels.webp"
                alt=""
                width="40px"
                height="54px"
              />
              <img
                src="https://www.pickcel.com/assets/img/templates/media.webp"
                alt=""
                width="40px"
                height="54px"
              />
              <img
                src="https://www.pickcel.com/assets/img/templates/shapes.webp"
                alt=""
                width="40px"
                height="54px"
              />
              <img
                src="https://www.pickcel.com/assets/img/templates/text.webp"
                alt=""
                width="40px"
                height="54px"
              />
            </div>

            <div className="flex gap-3 mt-[2rem]">
              <div className="flex-col hover:font-semibold hover:text-black flex gap-1">
                <section>
                  <div class="flex flex-wrap justify-center   w-fit rounded-full  ">
                    <a
                      style={{
                        background:
                          "linear-gradient(113deg, #fd0036 24.5%,  #ffa800)",
                      }}
                      href="!"
                      class="button button--aylen md:px-5 md:py-3.4 py-3  hover:bg-white text-white relative block focus:outline-none  rounded-full text-[10px] md:text-sm text-center font-semibold   overflow-hidden"
                    >
                      Create Now
                    </a>
                  </div>
                </section>
              </div>

              <a
                href="#"
                class="inline-flex items-center text-[11px] md:text-sm  justify-center h-fit px-3 py-2 md:px-5 md:py-3 text-base font-medium text-center rounded-full hover:text-[#ff5100] border-black text-black border hover:border-[#ff5100]"
              >
                Schedule My Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex  justify-around ">
        <h2 className=" 2xl:text-[40px] leading-[50px] text-[20px] ">
          Free Digital Signage Templates For <br /> Business Agility
        </h2>
        <div className="flex gap-2 hover:text-red-500 cursor-pointer md:gap-6 text-[20px] items-center justify-center">
          <p>Industries We Serve </p>{" "}
          <FaRegArrowAltCircleRight className="text-[red]" />
        </div>
      </div>

      <div className="w-full flex justify-center mt-[4rem]">
        <div className="w-[75%] flex gap-[50px]">
          <div className="w-[50%] p-2">
            <img
              src="https://www.pickcel.com/assets/img/templates/decathlon-retail-sports-digital-signage.png"
              alt=""
            />
          </div>

          <div className="w-[50%] p-3 flex flex-col gap-[10px]">
            <h1 className="text-[1.5rem]  font-medium">
              How Would Our Client, Decathlon, Optimise <br /> Their Business
              With Art-board Templates?
            </h1>
            <p className="text-[1rem]">
              200+ Decathlon stores run daily ads & promos on sleek HD screens
              using Pickcel's content management system. But a challenge
              remains: creating new content takes time. What if the retail giant
              could design, edit, and repurpose its posters & messages 10X
              faster? Well, now they can.
            </p>
            <p className="text-[1rem]">
              Price drop? Limited deals? Black Friday doorBusters? Our clients'
              business communications are now adaptable. With Just a few clicks.
            </p>
          </div>
        </div>
      </div>
      <div
        className="h-[30vh] mt-[4rem]  flex items-center justify-center  "
        style={{
          backgroundImage:
            'url("https://www.pickcel.com/assets/img/bg/full-cta-bg.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div>
          <h1 className="text-[45px]  text-center">
            Design Fast. With Digital Signage Templates
          </h1>
          <div className="flex gap-5 justify-center mt-5">
            <div className="flex-col hover:font-semibold hover:text-black flex gap-1">
              <section>
                <div class="flex flex-wrap justify-center   w-fit rounded-full  ">
                  <a
                    style={{
                      background:
                        "linear-gradient(113deg, #fd0036 24.5%,  #ffa800)",
                    }}
                    href="!"
                    class="button button--aylen md:px-10 md:py-3 py-3  hover:bg-white text-white relative block focus:outline-none  rounded-full text-[10px] md:text-sm text-center font-semibold   overflow-hidden"
                  >
                    Try Artboard Free
                  </a>
                </div>
              </section>
              <p className=" text-center text-gray-400 text-[10px]  ">
                No Credit Card Required
              </p>
            </div>
            <a
              href="#"
              class="inline-flex items-center text-[11px] md:text-sm  justify-center h-fit px-3 py-2 md:px-10 md:py-3 text-base font-medium text-center rounded-full hover:text-[#ff5100] border-black text-black border hover:border-[#ff5100]"
            >
              Schedule My Demo
            </a>
          </div>
        </div>
      </div>

      <div className="mt-[5rem]">
        <Footer />
      </div>
    </div>
  );
}

export default DigitalSignage;
