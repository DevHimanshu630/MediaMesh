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

      <div style={{ backgroundImage: 'url("https://www.pickcel.com/assets/img/bg/industry-bg.webp")' }}>
        <Navbar />
        <div className="flex 2xl:ml-[14.5%] xl:mx-[80px]  mt-[50px] xl:mt-[70px]">
          <p className="xl:leading-[50px] p-4 text-2xl xl:text-5xl  ">
            We are engineering change in a  world that is getting tech-savvy by the second.
          </p>
        </div>
        <Slider />
      </div>
      <div className="w-[100%]  flex flex-col md:flex-row  items-center mt-[7rem]">
        <div className="xl:w-[50%] p-[3rem] ">
          <h2 className=" text-[2rem] text-right ">
            Transforming the Way Brands Communicate, One Screen at a Time.
          </h2>
          <p className="text-right font-thin text-black mt-8 text-[18px]">
            You work hard, your marketers lose sleep over growth stats and
            your sales executives are hooked to the phone— all so your
            customers know you’re there. At Pickcel, we are committed to
            deliver your business the attention it deserves.
          </p>
        </div>
        <div className="xl:w-[50%] p-3 md:p-0">
          <img
            src="https://www.pickcel.com/assets/img/about/way-brand.webp"
            alt=""
          />
        </div>
      </div>

      <div className="w-[100%] flex   flex-col md:flex-row  items-center ">
        <div className="xl:w-[50%] p-3 md:p-0">
          <img
            src="https://www.pickcel.com/assets/img/about/beyond-business.webp"
            alt=""
          />
        </div>
        <div className="xl:w-[50%] p-[2rem] ">
          <h2 className=" text-[2.1rem]  ">
            Beyond Business: We Are Spearheading Change.
          </h2>
          <p className=" text-black font-thin text-[18px] mt-8">
            You work hard, your marketers lose sleep over growth stats and
            your sales executives are hooked to the phone— all so your
            customers know you’re there. At Pickcel, we are committed to
            deliver your business the attention it deserves.
          </p>
        </div>
      </div>

      <div className="w-[100%] ">
        <div className="mt-[70px] p-2 2xl:ml-[15.5%]">
          <h2 className="md:text-[45px] text-2xl text-center xl:text-left ">The Impact We Bring</h2>
          <p className="text-3xl xl:text-[18px] mt-2 xl:mt-0 text-center xl:text-left  font-thin">
            We are creating a smarter, more productive world.
          </p>
        </div>

        <div className="flex justify-center p-3 md:p-0 mt-[70px]">
          <div className="flex flex-col xl:flex-row gap-[20px]">
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
        <div className="flex  p-3 md:p-0 justify-center mt-[40px]">
          <div className="flex flex-col xl:flex-row  gap-[20px]">
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


      <div className="w-[100%] md:mt-[6rem] mt-[3rem]   flex flex-wrap  justify-center">
      <h2 className="md:text-[45px] text-[1.4rem] text-center">Meet The Humans of MediaMesh</h2>
        <div className="xl:w-[80%] mt-7 md:mt-[4rem] xl:mt-[100px] flex flex-wrap gap-[50px] justify-center">
          {teamDatails.map((details, index) => (
            <div className="flex md:gap-[20px] gap-[30px] w-[100%] pl-9 md:w-auto md:pl-0  items-center">
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
      <div className="mt-[70px]"></div>
      <Footer />
    </>
  );
}

export default About;
