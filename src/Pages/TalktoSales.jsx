import React from "react";
import Navbar from "../Components/Navbar";
import ClientCarousel from "../Components/ClientCarousel";
import Customer from "../Components/Customer";
import Footer from "../Components/Footer";
import ContactFrom from "../Components/ContactFrom";

function TalktoSales() {
  return (
    <div className="">
      <div
        className="w-full "
        style={{
          backgroundImage:
            'url("https://www.pickcel.com/assets/img/bg/contact-bg.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: 'center'
        }}
      >
        <Navbar />
        <div className="md:w-1/2 md:ml-[7%] lg:ml-[15%] p-5 md:p-0  mt-[2rem] md:mt-[5rem]">
          <h2 className="text-[2.5rem] text-center">Get In Touch</h2>
          <div className="flex flex-wrap lg:flex-nowrap gap-5 mt-[3rem] ">
            <div className='flex items-center gap-3 card-box lg:w-1/2 bg-white p-4 border-2 border-gray-300 rounded-lg  cursor-pointer shadow-md"'>
              <div
                className="flex items-center justify-center w-[60px] h-[60px]"
                style={{
                  background:
                    "linear-gradient(45deg, #CFE7FF, #E2E5F0, #FBD3EA, #FFF5CB, #7895CE)",
                  borderRadius: "50%",
                }}
              >
                <img
                  className="items-center"
                  src="https://www.pickcel.com/assets/img/icons/schedule-demo.svg"
                  alt=""
                />
              </div>
              <div className="">
                <h1 className="text-[1rem]">Schedule demo</h1>
                <p className="text-[14px]">
                  Free consultation & product tour by our experts.
                </p>
              </div>
            </div>

            <div className='flex items-center gap-3 card-box lg:w-1/2 bg-white p-4 border-2 border-gray-300 rounded-lg  cursor-pointer shadow-md"'>
              <div
                className="flex items-center justify-center w-[60px] h-[60px]"
                style={{
                  background:
                    "linear-gradient(45deg, #CFE7FF, #E2E5F0, #FBD3EA, #FFF5CB, #7895CE)",
                  borderRadius: "50%",
                }}
              >
                <img
                  className="items-center"
                  src="https://www.pickcel.com/assets/img/icons/drop-message.png"
                  alt=""

                />
              </div>
              <div className="">
                <h1 className="text-[1rem]">Drop us a message</h1>
                <p className="text-[14px]">
                  Discuss pricing, partnerships, customizations & more.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5">
          <h1 className="lg:text-[40px] md:text-[30px] w-full text-center md:mt-[4rem]">Trusted by 5500+ customers globally</h1>
        </div>
      </div>

      <ClientCarousel />
      <ContactFrom />
      <Customer />
      <Footer />
    </div>
  );
}

export default TalktoSales;
