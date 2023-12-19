import React from "react";
import Navbar from "../Components/Navbar";
import cartimg from "../images/cart.jpeg";
import RetailBussiness from "../Components/RetailBussiness";
import leftimg from "../images/client.png"
import ndtv from "../images/NDTV (1).svg"
function Dooh() {
    const h = { heading: "60+ Digital Signage Content Apps ", subheading: "for hospitals and clinics" }
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
    <div>
      <div
        className="w-full  justify-center "
        style={{
          backgroundImage:
            'url("https://www.pickcel.com/assets/img/bg/industry-bg.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Navbar />

        <div className="flex w-full mt-[5rem] px-[100px] justify-around items-center">
          <div className="ml-[2rem]">
            <h1 className="text-[48px] font-bold">
              Digital Signage for <br /> DOOH, Digital Out of <br /> Home
              Advertising
            </h1>
            <div className="flex gap-3 mt-[2rem]">
              <div className="flex-col hover:font-semibold hover:text-black flex gap-1">
                <section>
                  <div class="flex flex-wrap justify-center  w-fit rounded-full ">
                    <a
                      style={{
                        background:
                          "linear-gradient(113deg, #fd0036 24.5%,  #ffa800)",
                      }}
                      href="!"
                      class=" md:px-8 md:py-3 py-3  hover:bg-white text-white  block focus:outline-none  rounded-full text-[10px] md:text-sm text-center font-semibold  tracking-widest overflow-hidden"
                    >
                      Start Free Trial
                    </a>
                  </div>
                </section>
              </div>
              <a
                href="#"
                class="inline-flex items-center text-[11px] md:text-sm  justify-center h-fit px-3 py-2 md:px-8 md:py-3 text-base font-medium text-center border text-black  rounded-full hover:shadow-2xl bg-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Schedule My Demo
              </a>
            </div>
          </div>

          <div className="">
            <img
              src="https://www.pickcel.com/assets/img/industries/dooh/banner.webp"
              width="552px"
              height="310px"
              alt=""
            />
          </div>
        </div>

        <section className="flex justify-center w-[100%] mt-[10rem]">
          <div className="flex  w-[90%] gap-6 ml-16 justify-evenly  ">
            <div className=" text-5xl font-bold">
              Benefits of <br />
              DOOH Digital
              <br /> Signage
            </div>
            <div className="grid grid-cols-2 pr-4 gap-6 overflow-y-scroll h-[80vh]">
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
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {value.paragraph}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="mt-[10rem]">
        <h1 className="text-[45px] text-center font-bold">
          Amplify the effect of dynamic  visuals <br /> with Pickcel solutions
        </h1>

        <div className="flex justify-center gap-[30px] mt-[5rem]">
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
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
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
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
    </div>
  );
}

export default Dooh;
