import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Services() {
  const Details = [
    {
      imgUrl:
        "https://www.pickcel.com/assets/img/service/expert-consultation.svg",
      heading: "Expert Consultation",
      subheading:
        "Not sure where to begin? Build your digital signage strategy with us.",
      para:
        "While some brands in the market charge for expert advice, the Pickcel consultations are complimentary. In these sessions (available on request), our technical team advises and answers all client questions starting from suitable signage solutions to the best hardware devices. We will sit with you and help develop your concept from scratch.",
      btncontent: "Let's Discuss",
    },
    {
      imgUrl:
        "https://www.pickcel.com/assets/img/service/integrations-customizations.svg",
      heading: "Integrations & Customizations",
      subheading: "Tailored solutions bring better results.",
      para:
        "We support various forms of integration with external data sources for customer engagement, automation, and custom business flow. Such integrations are done on a need basis as customization projects.",
      btncontent: "Let's Discuss",
    },
  ];
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
        <h1 className="text-center text-[48px] mt-[5rem]">
          Digital Signage Services
        </h1>

        <div className="w-full  flex justify-center mt-[3rem] md:mt-[5rem]">
          <div className="lg:w-[90%] md:w-full md:flex  flex-wrap lg:flex lg:flex-nowrap items-center justify-around ">
            <div className="2xl:w-1/2 md:w-full flex gap-5 2xl:ml-[11%] md:ml-[3%] flex-col justify-center ">
              {Details.map((details, index) => (
                <div className="flex">
                  <div className="p-5 md:p-0">
                    <img
                      className=""
                      alt="Image"
                      key={details?.id}
                      src={details?.imgUrl}
                      width="60px"
                    />
                    <h1 className="text-[2rem] mt-[1rem]">
                      {details.heading}
                    </h1>
                    <h3 className="text-[1.25rem] mt-[0.5rem] font-bold">
                      {details.subheading}
                    </h3>
                    <p className="text-[1rem] mt-[0.5rem] font-thin ">{details.para}</p>
                    <button className="px-7 p-1 border font-semibold rounded-[20px] mt-[1rem]">
                      {details.btncontent}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="md:w-1/2 md:p-0 w-full p-5  flex justify-center">
              <img
                src="https://www.pickcel.com/assets/img/service/driven-by-you.webp"
                width="476px"
                height="563px"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-[5rem]">
        <div className="w-full lg:h-[80vh] h-auto lg:flex lg:flex-nowrap md:flex md:flex-wrap ">
          <div className=" w-[100%] h-fit relative -left-[20%] ">
            <img
              src="https://www.pickcel.com/assets/img/service/a-class-part.webp"
              width="1036px"
              height="844px"
              alt=""
            />
          </div>

          <div className="flex gap-5 p-5  relative lg:-left-[15%] lg:w-[60%] flex-col justify-start ">
            {Details.map((details, index) => (
              <div className="flex">
                <div>
                  <img
                    className=""
                    alt="Image"
                    key={details?.id}
                    src={details?.imgUrl}
                    width="60px"
                  />
                  <h1 className="text-[2rem] mt-[1rem]">{details.heading}</h1>
                  <h3 className="text-[1.25rem] mt-[0.5rem] font-bold">
                    {details.subheading}
                  </h3>
                  <p className="text-[1rem] mt-[0.5rem]  font-thin">{details.para}</p>
                  <button className="px-7 p-1 border font-semibold rounded-[20px] mt-[1rem]">
                    {details.btncontent}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex lg:flex-nowrap md:flex md:flex-wrap md:justify-center md:mt-[5rem]">
        <div className="lg:w-[90%] lg:flex lg:flex-nowrap md:flex md:flex-wrap items-center lg:justify-around md:ml-[3%]">
          <div className="lg:w-1/2  w-[100%] flex gap-5 2xl:ml-[11%] flex-col justify-center ">
            <div className="flex">
              <div className="w-full p-5 md:p-0">
                <img
                  className=""
                  alt="Image"
                  src="https://www.pickcel.com/assets/img/service/managed-service.svg"
                  width="60px"
                />
                <h1 className="text-[2rem] mt-[1rem] font-bold">
                  Digital Signage Managed Services
                </h1>
                <h3 className="text-[1.125rem] mt-[0.7rem] font-bold">
                  Focus on your core competencies; let us take care of the
                  rest.
                </h3>
                <h3 className="text-[1.125rem] mt-[0.5rem] font-bold">
                  Managed digital signage network:
                </h3>
                <p className="text-[1rem] font-thin mt-[0.2rem] ">
                  The Pickcel team will proactively monitor the health of your
                  signage <br /> network, coordinate with your field team for
                  upkeeps & maintenance.
                </p>
                <h3 className="text-[1.125rem] mt-[0.5rem] font-bold">
                  Managed content services:
                </h3>
                <p className="text-[1rem] font-thin mt-[0.2rem] ">
                  Outsource your content management to our team. You decide
                  what to <br /> publish & when to publish. And we ensure the
                  timely distribution of <br />
                  content on your screens.
                </p>
                <p className="text-[red] font-thin text-[1rem] mt-[10px]">
                  Learn how Pickcel manages the content for Amazon Easy
                  through Zapier <br /> integration.
                </p>
                <h3 className="text-[1.125rem] mt-[0.5rem] font-bold">
                  Reporting and dashboard:
                </h3>
                <p className="text-[1rem] font-thin mt-[0.2rem] ">
                  Stay up to speed on how Pickcel manages your digital signage
                  network <br /> with regular management reports on uptime and
                  utilization.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full p-5 md:p-0 flex justify-center">
            <img
              src="https://www.pickcel.com/assets/img/service/beyond-limit.webp"
              width="476px"
              height="563px"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="mt-[10%] w-full p-3 md:p-0 mx-auto">
        <img className="mx-auto" src="https://www.pickcel.com/assets/img/service/creative-service.svg" width='60px' alt="" />
        <h1 className="text-center text-[2rem]  mt-4">Digital Signage Creative Service</h1>
        <h2 className="text-center text-[1.125rem font-extrabold mt-4">Don't have a creative team? Don't need one.</h2>
        <p className="text-center text-[1.125rem] font-thin mt-4">Content creation for your digital screens is a monumental job. We support organizations<br /> with  professional creative services like media design, copywriting for digital ads, and video creation.</p>
      </div>
      <div className="w-full  mt-[3rem]">
        <img src="https://www.pickcel.com/assets/img/service/creative.webp" alt="" />
      </div>
      <div className="mt-9">

      </div>
      <Footer />
    </div>
  );
}

export default Services;
