import React from "react";
import Navbar from "../Components/Navbar";
import cartimg from "../images/cart.jpeg";
import RetailBussiness from "../Components/RetailBussiness";
import leftimg from "../images/client.png";
import ndtv from "../images/NDTV (1).svg";
import Footer from "../Components/Footer";

function Dooh() {
  const h = {
    heading: "60+ Digital Signage Content Apps ",
    subheading: "for hospitals and clinics",
  };
  const data = {
    item1: {
      imageUrl: cartimg,
      heading: "Branding & Promotions",
      paragraph:
        "Promote medical services, hospital facilities, specialty, faculty, and membership plans. Notify visitors of upcoming events, welfare drives, free check-ups, certifications & awards.",
    },
    item2: {
      imageUrl: cartimg,
      heading: "Digital Information Boards",
      paragraph:
        "Display doctor availability, formalities of patient admissions, phone extensions, or availability of ICU beds. Interactive displays can allow downloading & printing of information.",
    },
    item3: {
      imageUrl: cartimg,
      heading: "Waiting Room Infotainment",
      paragraph:
        "Engage anxious patients with health tips, medical news, yoga charts, positive patient reviews, inspiring patient recovery stories & more. Show general entertainment, weather, news.",
    },
    item4: {
      imageUrl: cartimg,
      heading: "Enhance Patient Experience",
      paragraph:
        "Make the hospital ambiance less intimidating. Show soothing visuals on video walls or 4K screens. Reduce patient ‘Nosocomephobia’ (fear of hospitals) or depression with ASMR sounds.",
    },
    item5: {
      imageUrl: cartimg,
      heading: "Employee Internal Communication",
      paragraph:
        "Share internal staff messages meeting schedules, hospital guidelines, security protocols, changes in duty hours, local shutdown of particular hospital wings due to contamination or renovation, etc.",
    },
    item6: {
      imageUrl: cartimg,
      heading: "Play Emergency Messages",
      paragraph:
        "During fire or earthquake, the healthcare digital signage can show emergency exits & evacuation protocols. These screens can also alert doctors about on-site medical emergencies.",
    },
    item7: {
      imageUrl: cartimg,
      heading: "Digital Menu Boards",
      paragraph:
        "The Pickcel digital signage software comes with a host of free apps. One such app is the digital menu board software app. Display the daily food menu of your hospital cafeteria.",
    },
    item8: {
      imageUrl: cartimg,
      heading: "Wayfinding Maps",
      paragraph:
        "Allow patients to navigate your healthcare facility smoothly. Use interactive digital signage to show premise maps. Customizations can also enable visitors to scan a QR code & view maps on their mobile.",
    },
  };

  return (
    <>
      <div
        className="w-full  justify-center "
        style={{
          backgroundImage:
            'url("https://www.pickcel.com/assets/img/bg/industry-bg.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: 'center'
        }}
      >
        <Navbar />

        <div className="flex flex-wrap p-6 2xl:p-0 md:flex-nowrap w-full 2xl:mt-[5rem] mt-[2rem] 2xl:px-[100px] justify-around items-center">
          <div className="2xl:ml-[2rem]  2xl:w-auto">
            <h1 className="2xl:text-[48px] text-[32px] 2xl:leading-[50px] text-center md:text-start">
              Digital Signage for <br /> DOOH, Digital Out of <br /> Home
              Advertising
            </h1>
            <div className="md:flex md:flex-row flex flex-col  2xl:flex-wrap lg:flex-nowrap 2xl:gap-3 gap-2 mt-[2rem]">
              <div className="flex-col hover:font-semibold hover:text-black flex gap-1">
                <section>
                  <div
                    class="flex w-[200px] flex-wrap justify-center mx-auto md:mx-0  md:w-fit rounded-full "
                    style={{
                      background:
                        "linear-gradient(113deg, #fd0036 24.5%,  #ffa800)",
                    }}
                  >
                    <a
                      href="!"
                      class=" lg:px-8 px-3 md:py-3 py-3  text-white  block focus:outline-none  rounded-full text-[10px] md:text-sm text-center font-semibold  overflow-hidden"
                    >
                      Start Free Trial
                    </a>
                  </div>
                </section>
              </div>
              <a
                href="#"
                class="w-[200px] mx-auto md:mx-0 md:w-auto inline-flex items-center hover:text-[#ff5100] hover:border-[#ff5100] text-[11px] md:text-sm  justify-center h-fit px-3 py-2 lg:px-8 md:py-3 text-base font-medium text-center border text-black  rounded-full  bg-white "
              >
                Schedule My Demo
              </a>
            </div>
          </div>

          <div className="md:w-[50%]  lg:w-auto p-9 md:p-0">
            <img
              src="https://www.pickcel.com/assets/img/industries/dooh/banner.webp"
              width="552px"
              height="310px"
              alt=""
            />
          </div>
        </div>

        <section className="flex p-4 md:p-0 justify-center w-[100%] md:mt-[10rem] mt-[1rem]">
          <div className="flex  flex-wrap 2xl:w-[80%]  3xl:w-[100%] gap-12 2xl:gap-0  3xl:gap-6 2xl:ml-16 justify-evenly items-center  ">
            <div className="flex flex-col items-center 2xl:items-start">
              <div className=" 2xl:text-5xl text-[32px] text-center 2xl:text-left 2xl:leading-[50px] w-fit md:w-[250px]   2xl:w-[390px]">
                Benefits of DOOH Digital Signage
              </div>
              <div className="w-[50px] mt-[1rem] h-[5px] hidden xl:block rounded-full bg-red-500 "></div>
            </div>

            <div className="grid md:grid-cols-2   3xl:w-[50%] grid-cols-1  gap-6 overflow-y-scroll h-[80vh] ">
              {Object.entries(data).map(([key, value]) => (
                <div
                  key={key}
                  class="max-w-sm  bg-white border hover:shadow-md  border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700"
                >
                  <a href="#">
                    <img class="rounded-t-lg" src={value.imageUrl} alt="" />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {value.heading}
                      </h5>
                    </a>
                    <p class="mb-3 font-thin text-gray-700 dark:text-gray-400">
                      {value.paragraph}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="2xl:mt-[10rem] mt-[3rem]">
        <h1 className="2xl:text-[45px] text-[32px] text-center  2xl:leading-[50px] 2xl:p-5 md:p-0">
          Amplify the effect of dynamic visuals <br /> with Pickcel solutions
        </h1>
        <div className="flex flex-wrap md:flex-nowrap justify-center gap-[30px] mt-[1rem] 2xl:mt-[5rem] p-5">
          <div class="max-w-sm hover:shadow-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="https://www.pickcel.com/assets/img/industries/dooh/digital-product-catalogue.webp"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-thin text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class="inline-flex items-center text-black  py-2 text-md font-medium text-center  focus:ring-4 focus:outline-none"
              >
                Know more
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="max-w-sm hover:shadow-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="https://www.pickcel.com/assets/img/industries/dooh/social-wall.webp"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-thin text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class="inline-flex text-black items-center py-2 text-md font-medium text-center"
              >
                Know more
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <RetailBussiness
        heading={h.heading}
        subheading={h.subheading}
        leftImg1={leftimg}
        leftImg2={leftimg}
        leftImg3={leftimg}
        leftImg4={leftimg}
        rightImg={ndtv}
      />
      <Footer />
    </>
  );
}

export default Dooh;
