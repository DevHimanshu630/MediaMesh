import React, { useEffect } from "react";
import { Tabs } from "flowbite";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function Empowering() {
  useEffect(() => {
    const tabElements = [
      {
        id: "profile",
        triggerEl: document.querySelector("#profile-tab-example"),
        targetEl: document.querySelector("#profile-example"),
      },
      {
        id: "dashboard",
        triggerEl: document.querySelector("#dashboard-tab-example"),
        targetEl: document.querySelector("#dashboard-example"),
      },
      {
        id: "settings",
        triggerEl: document.querySelector("#settings-tab-example"),
        targetEl: document.querySelector("#settings-example"),
      },
      {
        id: "contacts",
        triggerEl: document.querySelector("#contacts-tab-example"),
        targetEl: document.querySelector("#contacts-example"),
      },
    ];

    const options = {
      defaultTabId: "settings",
      activeClasses:
        "text-[#ff5100] hover:text-[#ff5100] dark:text-[#ff5100] hover:text-[#ff5100] border-[#ff5100] dark:border-[#ff5100]",
      inactiveClasses:
        "text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",
      onShow: () => {
        console.log("tab is shown");
      },
    };

    const instanceOptions = {
      id: "tabs-example",
      override: true,
    };

    const tabsElement = document.getElementById("tabs-example");
    const tabs = new Tabs(tabsElement, tabElements, options, instanceOptions);
    tabs.show("dashboard");

    tabs.getTab("contacts");
    tabs.getActiveTab();
  }, []);

  return (
    <div className="w-[100%]  md:pt-24  bg-[#fffafa]">
      <div className="md:flex  justify-center 2xl:gap-[26%] xl:gap-[48%] ">
        <h2 className=" 2xl:text-[40px] text-[20px] text-center">Empowering Industry Growth</h2>
        <div className="flex gap-2 md:gap-3 hover:text-red-500 cursor-pointer text-[20px] items-center justify-center">
          <p>Industries We Serve </p>{" "}
          <FaRegArrowAltCircleRight className="text-[red]" />
        </div>
      </div>

      <div className="text-center   w-[100%] sm:p-6 p-0 md:mt-[40px]">
        <div className="flex justify-center md:mb-4   border-gray-200 dark:border-gray-700">
          <ul
            className="md:flex  flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400"
            id="tabs-example"
            role="tablist"
          >
            <li className="me-2" role="presentation">
              <button
                className="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                id="profile-tab-example"
                type="button"
                role="tab"
                aria-controls="profile-example"
                aria-selected="false"
              >
                Corporate
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                id="dashboard-tab-example"
                type="button"
                role="tab"
                aria-controls="dashboard-example"
                aria-selected="false"
              >
                Restaurant
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                id="settings-tab-example"
                type="button"
                role="tab"
                aria-controls="settings-example"
                aria-selected="false"
              >
                Hospitality
              </button>
            </li>
            <li role="presentation">
              <button
                className="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                id="contacts-tab-example"
                type="button"
                role="tab"
                aria-controls="contacts-example"
                aria-selected="false"
              >
                Manufacturing
              </button>
            </li>
          </ul>
        </div>
        <div id="tabContentExample ">
          <div
            className="hidden 2xl:w-[100%]    p-10 md:p-0"
            id="profile-example"
            role="tabpanel"
            aria-labelledby="profile-tab-example"
          >
            <div className="md:flex-row flex  flex-col justify-center gap-[40px] md:mt-[50px]">
              <div
                className="shadow "
                style={{
                  backgroundColor: "black",
                  boxShadow:
                    " 0 4px 6px -1px rgba(255, 0, 0, 0.1), 0 2px 4px -1px rgba(255, 0, 0, 0.06);",
                }}
              >
                <img
                  src="https://www.pickcel.com/assets/img/home/industry/corporate-2.webp"
                  width="355px"
                  height="202px"
                  alt=""
                  className="border"
                />
              </div>
              <div
                className="shadow "
                style={{
                  backgroundColor: "black",
                  boxShadow:
                    " 0 4px 6px -1px rgba(255, 0, 0, 0.1), 0 2px 4px -1px rgba(255, 0, 0, 0.06);",
                }}
              >
                <img
                  src="https://www.pickcel.com/assets/img/home/industry/corporate-1.webp"
                  width="355px"
                  height="202px"
                  alt=""
                  className="border"
                />
              </div>
              <div
                className="shadow "
                style={{
                  backgroundColor: "black",
                  boxShadow:
                    " 0 4px 6px -1px rgba(255, 0, 0, 0.1), 0 2px 4px -1px rgba(255, 0, 0, 0.06);",
                }}
              >
                <img
                  src="https://www.pickcel.com/assets/img/home/industry/corporate-3.webp"
                  width="355px"
                  height="202px"
                  alt=""
                  className="border"
                />
              </div>
            </div>

          </div>
          <div
            className="hidden w-[100%] p-10 md:p-0"
            id="dashboard-example"
            role="tabpanel"
            aria-labelledby="dashboard-tab-example"
          >
            <div className="md:flex-row flex flex-col  justify-center gap-[40px] md:mt-[50px]">
              <div
                className="shadow "
                style={{
                  backgroundColor: "black",
                  boxShadow:
                    " 0 4px 6px -1px rgba(255, 0, 0, 0.1), 0 2px 4px -1px rgba(255, 0, 0, 0.06);",
                }}
              >
                <img
                  src="https://www.pickcel.com/assets/img/home/industry/restaurant-2.webp"
                  width="355px"
                  height="202px"
                  alt=""
                  className="border"
                />
              </div>
              <div
                className="shadow "
                style={{
                  backgroundColor: "black",
                  boxShadow:
                    " 0 4px 6px -1px rgba(255, 0, 0, 0.1), 0 2px 4px -1px rgba(255, 0, 0, 0.06);",
                }}
              >
                <img
                  src="https://www.pickcel.com/assets/img/home/industry/restaurant-3.webp"
                  width="355px"
                  height="202px"
                  alt=""
                  className="border"
                />
              </div>
              <div
                className="shadow "
                style={{
                  backgroundColor: "black",
                  boxShadow:
                    " 0 4px 6px -1px rgba(255, 0, 0, 0.1), 0 2px 4px -1px rgba(255, 0, 0, 0.06);",
                }}
              >
                <img
                  src="https://www.pickcel.com/assets/img/home/industry/restaurant-1.webp"
                  width="355px"
                  height="202px"
                  alt=""
                  className="border"
                />
              </div>
            </div>
          </div>
          <div
            className="hidden w-[100%] p-10 md:p-0"
            id="settings-example"
            role="tabpanel"
            aria-labelledby="settings-tab-example"
          >
            <div className="md:flex-row flex flex-col justify-center gap-[40px] md:mt-[50px]">
              <div
                className="shadow "
                style={{
                  backgroundColor: "black",
                  boxShadow:
                    " 0 4px 6px -1px rgba(255, 0, 0, 0.1), 0 2px 4px -1px rgba(255, 0, 0, 0.06);",
                }}
              >
                <img
                  src="https://www.pickcel.com/assets/img/home/industry/hospitality-1.webp"
                  width="355px"
                  height="202px"
                  alt=""
                  className="border"
                />
              </div>
              <div
                className="shadow "
                style={{
                  backgroundColor: "black",
                  boxShadow:
                    " 0 4px 6px -1px rgba(255, 0, 0, 0.1), 0 2px 4px -1px rgba(255, 0, 0, 0.06);",
                }}
              >
                <img
                  src="https://www.pickcel.com/assets/img/home/industry/hospitality-2.webp"
                  width="355px"
                  height="202px"
                  alt=""
                  className="border"
                />
              </div>
              <div
                className="shadow "
                style={{
                  backgroundColor: "black",
                  boxShadow:
                    " 0 4px 6px -1px rgba(255, 0, 0, 0.1), 0 2px 4px -1px rgba(255, 0, 0, 0.06);",
                }}
              >
                <img
                  src="https://www.pickcel.com/assets/img/home/industry/hospitality-3.webp"
                  width="355px"
                  height="202px"
                  alt=""
                  className="border"
                />
              </div>
            </div>
          </div>
          <div
            className="hidden w-[100%] p-10 md:p-0"
            id="contacts-example"
            role="tabpanel"
            aria-labelledby="contacts-tab-example"
          >
            <div className="md:flex-row flex flex-col justify-center gap-[40px] md:mt-[50px]">
              <div
                className="shadow "
                style={{
                  backgroundColor: "black",
                  boxShadow:
                    " 0 4px 6px -1px rgba(255, 0, 0, 0.1), 0 2px 4px -1px rgba(255, 0, 0, 0.06);",
                }}
              >
                <img
                  src="https://www.pickcel.com/assets/img/home/industry/hospitality-3.webp"
                  width="355px"
                  height="202px"
                  alt=""
                  className="border"
                />
              </div>
              <div
                className="shadow "
                style={{
                  backgroundColor: "black",
                  boxShadow:
                    " 0 4px 6px -1px rgba(255, 0, 0, 0.1), 0 2px 4px -1px rgba(255, 0, 0, 0.06);",
                }}
              >
                <img
                  src="https://www.pickcel.com/assets/img/home/industry/manufacturing-2.webp"
                  width="355px"
                  height="202px"
                  alt=""
                  className="border"
                />
              </div>
              <div
                className="shadow "
                style={{
                  backgroundColor: "black",
                  boxShadow:
                    " 0 4px 6px -1px rgba(255, 0, 0, 0.1), 0 2px 4px -1px rgba(255, 0, 0, 0.06);",
                }}
              >
                <img
                  src="https://www.pickcel.com/assets/img/home/industry/manufacturing-3.webp"
                  width="355px"
                  height="202px"
                  alt=""
                  className="border"
                />
              </div>
            </div>
          </div>
        </div>


        <div className="flex  mt-4   sm:py-6 gap-3 items-center justify-center md:gap-[10px]  ">
          <h2 className="md:text-[20px] flex justify-center hover:text-[red]  cursor-pointer ">
            Why use digital signage in offices
          </h2>
          <FaRegArrowAltCircleRight className="text-[red]" />
        </div>
      </div>

    </div>
  );
}

export default Empowering;
