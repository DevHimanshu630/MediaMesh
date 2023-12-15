import React from "react";
import Navbar from "../Components/Navbar";
import Slider from "./Slider";
import Footer from "../Components/Footer";

function About() {
  const teamDatails = [
    {
      id: 1,
      url: "https://www.pickcel.com/assets/img/about/team/basu.jpg",
      name: "Basudev Saha",
      Designation: "Founder and CTO",
    },
    {
      id: 2,
      url: "https://www.pickcel.com/assets/img/about/team/basu.jpg",
      name: "Basudev Saha",
      Designation: "Founder and CTO",
    },
    {
      id: 3,
      url: "https://www.pickcel.com/assets/img/about/team/basu.jpg",
      name: "Basudev Saha",
      Designation: "Founder and CTO",
    },
    {
      id: 4,
      url: "https://www.pickcel.com/assets/img/about/team/basu.jpg",
      name: "Basudev Saha",
      Designation: "Founder and CTO",
    },
    {
      id: 5,
      url: "https://www.pickcel.com/assets/img/about/team/basu.jpg",
      name: "Basudev Saha",
      Designation: "Founder and CTO",
    },
    {
      id: 1,
      url: "https://www.pickcel.com/assets/img/about/team/basu.jpg",
      name: "Basudev Saha",
      Designation: "Founder and CTO",
    },
    {
      id: 2,
      url: "https://www.pickcel.com/assets/img/about/team/basu.jpg",
      name: "Basudev Saha",
      Designation: "Founder and CTO",
    },
    {
      id: 3,
      url: "https://www.pickcel.com/assets/img/about/team/basu.jpg",
      name: "Basudev Saha",
      Designation: "Founder and CTO",
    },
    {
      id: 4,
      url: "https://www.pickcel.com/assets/img/about/team/basu.jpg",
      name: "Basudev Saha",
      Designation: "Founder and CTO",
    },
    {
      id: 5,
      url: "https://www.pickcel.com/assets/img/about/team/basu.jpg",
      name: "Basudev Saha",
      Designation: "Founder and CTO",
    },
    {
      id: 1,
      url: "https://www.pickcel.com/assets/img/about/team/basu.jpg",
      name: "Basudev Saha",
      Designation: "Founder and CTO",
    },
    {
      id: 2,
      url: "https://www.pickcel.com/assets/img/about/team/basu.jpg",
      name: "Basudev Saha",
      Designation: "Founder and CTO",
    },
    {
      id: 3,
      url: "https://www.pickcel.com/assets/img/about/team/basu.jpg",
      name: "Basudev Saha",
      Designation: "Founder and CTO",
    },
    {
      id: 4,
      url: "https://www.pickcel.com/assets/img/about/team/basu.jpg",
      name: "Basudev Saha",
      Designation: "Founder and CTO",
    },
    {
      id: 5,
      url: "https://www.pickcel.com/assets/img/about/team/basu.jpg",
      name: "Basudev Saha",
      Designation: "Founder and CTO",
    },
    {
      id: 1,
      url: "https://www.pickcel.com/assets/img/about/team/basu.jpg",
      name: "Basudev Saha",
      Designation: "Founder and CTO",
    },
    {
      id: 2,
      url: "https://www.pickcel.com/assets/img/about/team/basu.jpg",
      name: "Basudev Saha",
      Designation: "Founder and CTO",
    },
    {
      id: 3,
      url: "https://www.pickcel.com/assets/img/about/team/basu.jpg",
      name: "Basudev Saha",
      Designation: "Founder and CTO",
    },
    {
      id: 4,
      url: "https://www.pickcel.com/assets/img/about/team/basu.jpg",
      name: "Basudev Saha",
      Designation: "Founder and CTO",
    },
    {
      id: 5,
      url: "https://www.pickcel.com/assets/img/about/team/basu.jpg",
      name: "Basudev Saha",
      Designation: "Founder and CTO",
    },
    {
      id: 1,
      url: "https://www.pickcel.com/assets/img/about/team/basu.jpg",
      name: "Basudev Saha",
      Designation: "Founder and CTO",
    },
    {
      id: 2,
      url: "https://www.pickcel.com/assets/img/about/team/basu.jpg",
      name: "Basudev Saha",
      Designation: "Founder and CTO",
    },
    {
      id: 3,
      url: "https://www.pickcel.com/assets/img/about/team/basu.jpg",
      name: "Basudev Saha",
      Designation: "Founder and CTO",
    },
    {
      id: 4,
      url: "https://www.pickcel.com/assets/img/about/team/basu.jpg",
      name: "Basudev Saha",
      Designation: "Founder and CTO",
    },
    {
      id: 5,
      url: "https://www.pickcel.com/assets/img/about/team/basu.jpg",
      name: "Basudev Saha",
      Designation: "Founder and CTO",
    },
    {
      id: 1,
      url: "https://www.pickcel.com/assets/img/about/team/basu.jpg",
      name: "Basudev Saha",
      Designation: "Founder and CTO",
    },
    {
      id: 2,
      url: "https://www.pickcel.com/assets/img/about/team/basu.jpg",
      name: "Basudev Saha",
      Designation: "Founder and CTO",
    },
    {
      id: 3,
      url: "https://www.pickcel.com/assets/img/about/team/basu.jpg",
      name: "Basudev Saha",
      Designation: "Founder and CTO",
    },
    {
      id: 4,
      url: "https://www.pickcel.com/assets/img/about/team/basu.jpg",
      name: "Basudev Saha",
      Designation: "Founder and CTO",
    },
    {
      id: 5,
      url: "https://www.pickcel.com/assets/img/about/team/basu.jpg",
      name: "Basudev Saha",
      Designation: "Founder and CTO",
    },
  ];
  return (
    <>
      <div >
        <div style={{ backgroundImage: 'url("https://www.pickcel.com/assets/img/bg/industry-bg.webp")' }}>
          <Navbar />
          <div
            style={{ maxWidth: "calc(100% - 160px)" }}
            className="flex h-[40vh] ml-[14.5%] mx-[80px] text-[48px] mt-[100px]"

          >
            <p className="font-bold">
              We are engineering change in a <br /> world that is getting
              tech-savvy by <br /> the second.
            </p>
          </div>
          <Slider />
        </div>
        <div className="w-[100%] flex  items-center mt-[7rem]">
          <div className="w-[50%] p-[3rem] ">
            <h2 className=" text-[2rem] text-right ">
              Transforming the Way Brands Communicate, One Screen at a Time.
            </h2>
            <p className="text-right text-black mt-8 text-[18px]">
              You work hard, your marketers lose sleep over growth stats and
              your sales executives are hooked to the phone— all so your
              customers know you’re there. At Pickcel, we are committed to
              deliver your business the attention it deserves.
            </p>
          </div>
          <div className="w-[50%]">
            <img
              src="https://www.pickcel.com/assets/img/about/way-brand.webp"
              alt=""
            />
          </div>
        </div>

        <div className="w-[100%] flex  items-center ">
          <div className="w-[50%]">
            <img
              src="https://www.pickcel.com/assets/img/about/beyond-business.webp"
              alt=""
            />
          </div>
          <div className="w-[50%] p-[2rem] ">
            <h2 className=" text-[2.1rem]  ">
              Beyond Business: We Are Spearheading Change.
            </h2>
            <p className=" text-black text-[18px] mt-8">
              You work hard, your marketers lose sleep over growth stats and
              your sales executives are hooked to the phone— all so your
              customers know you’re there. At Pickcel, we are committed to
              deliver your business the attention it deserves.
            </p>
          </div>
        </div>

        <div className="w-[100%] h-[70vh]  ">
          <div className="mt-[70px] ml-[15.5%]">
            <h1 className="text-[45px]">The Impact We Bring</h1>
            <p className="text-[18px]">
              We are creating a smarter, more productive world.
            </p>
          </div>

          <div className="flex  justify-center mt-[70px]">
            <div className="flex gap-[20px]">
              <img
                src="https://www.pickcel.com/assets/img/about/impact/smart-city.webp"
                width="576px"
                height="220px"
                alt=""
              />
              <img
                src="https://www.pickcel.com/assets/img/about/impact/refining-experiences.webp"
                width="576px"
                height="220px"
                alt=""
              />
            </div>
          </div>
          <div className="flex  justify-center mt-[40px]">
            <div className="flex gap-[20px]">
              <img
                src="https://www.pickcel.com/assets/img/about/impact/internal-communication.webp"
                width="576px"
                height="220px"
                alt=""
              />
              <img
                src="https://www.pickcel.com/assets/img/about/impact/retail-stores.webp"
                width="576px"
                height="220px"
                alt=""
              />
            </div>
          </div>
        </div>

        <h1 className="text-[45px] text-center">Meet The Humans of MediaMesh</h1>
        <div className="w-[100%]   flex flex-wrap  justify-center">
          <div className="w-[80%] mt-[100px] flex flex-wrap gap-[50px] justify-center">
            {teamDatails.map((details, index) => (
              <div className="flex gap-[20px] items-center">
                <img
                  className=""
                  alt="Image"
                  key={details?.id}
                  src={details?.url}
                  width="64px"
                  height="64px"
                />

                <div>
                  <h2 className="text-[1rem]">{details.name}</h2>
                  <p className="text-[1rem]">{details.Designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-[70px]"></div>
      <Footer />
    </>
  );
}

export default About;
