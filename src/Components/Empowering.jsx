import React from 'react'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'

function Empowering() {
    return (
        <div className="w-[100%] pt-32  h-[80vh] bg-[#fffafa]">
            <div className="flex  justify-around">
                <h2 className=" text-[40px]">Empowering Industry Growth</h2>
                <div className="flex gap-6 items-center">
                    <p>Industries We Serve </p>{" "}
                    <FaRegArrowAltCircleRight className="text-[red]" />
                </div>
            </div>

            <div className="flex  justify-center">
                <div class="mb-4 mt-[60px] border-b text-black border-gray-200 dark:border-gray-700">
                    <ul
                        class="flex flex-wrap -mb-px text-sm font-medium text-center"
                        id="default-tab"
                        data-tabs-toggle="#default-tab-content"
                        role="tablist"
                    >
                        <li class="me-2" role="presentation">
                            <button
                                class="inline-block p-4 border-b-2 rounded-t-lg"
                                id="profile-tab"
                                data-tabs-target="#profile"
                                type="button"
                                role="tab"
                                aria-controls="profile"
                                aria-selected="false"
                            >
                                Profile
                            </button>
                        </li>
                        <li class="me-2" role="presentation">
                            <button
                                class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                id="dashboard-tab"
                                data-tabs-target="#dashboard"
                                type="button"
                                role="tab"
                                aria-controls="dashboard"
                                aria-selected="false"
                            >
                                Restaurant
                            </button>
                        </li>
                        <li class="me-2" role="presentation">
                            <button
                                class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                id="settings-tab"
                                data-tabs-target="#settings"
                                type="button"
                                role="tab"
                                aria-controls="settings"
                                aria-selected="false"
                            >
                                Retail
                            </button>
                        </li>
                        <li role="presentation">
                            <button
                                class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                id="contacts-tab"
                                data-tabs-target="#contacts"
                                type="button"
                                role="tab"
                                aria-controls="contacts"
                                aria-selected="false"
                            >
                                Hospitality
                            </button>
                        </li>
                        <li role="presentation">
                            <button
                                class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                id="contacts-tab"
                                data-tabs-target="#contacts"
                                type="button"
                                role="tab"
                                aria-controls="contacts"
                                aria-selected="false"
                            >
                                Healthcare
                            </button>
                        </li>
                        <li role="presentation">
                            <button
                                class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                id="contacts-tab"
                                data-tabs-target="#contacts"
                                type="button"
                                role="tab"
                                aria-controls="contacts"
                                aria-selected="false"
                            >
                                Manufacturing
                            </button>
                        </li>
                        <li role="presentation">
                            <button
                                class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                id="contacts-tab"
                                data-tabs-target="#contacts"
                                type="button"
                                role="tab"
                                aria-controls="contacts"
                                aria-selected="false"
                            >
                                Finance
                            </button>
                        </li>
                    </ul>
                </div>

{/* from here navigation code correction */}

                <div id="default-tab-content">
            <div
              class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <p class="text-sm text-gray-500 dark:text-gray-400">
                This is some placeholder content the{" "}
                <strong class="font-medium text-gray-800 dark:text-white">
                  Profile tab's associated content
                </strong>
                . Clicking another tab will toggle the visibility of this one for
                the next. The tab JavaScript swaps classes to control the content
                visibility and styling.
              </p>
            </div>
            <div
              class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="dashboard"
              role="tabpanel"
              aria-labelledby="dashboard-tab"
            >
              <p class="text-sm text-gray-500 dark:text-gray-400">
                This is some placeholder content the{" "}
                <strong class="font-medium text-gray-800 dark:text-white">
                  Dashboard tab's associated content
                </strong>
                . Clicking another tab will toggle the visibility of this one for
                the next. The tab JavaScript swaps classes to control the content
                visibility and styling.
              </p>
            </div>
            <div
              class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="settings"
              role="tabpanel"
              aria-labelledby="settings-tab"
            >
              <p class="text-sm text-gray-500 dark:text-gray-400">
                This is some placeholder content the{" "}
                <strong class="font-medium text-gray-800 dark:text-white">
                  Settings tab's associated content
                </strong>
                . Clicking another tab will toggle the visibility of this one for
                the next. The tab JavaScript swaps classes to control the content
                visibility and styling.
              </p>
            </div>
            <div
              class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="contacts"
              role="tabpanel"
              aria-labelledby="contacts-tab"
            >
              <p class="text-sm text-gray-500 dark:text-gray-400">
                This is some placeholder content the{" "}
                <strong class="font-medium text-gray-800 dark:text-white">
                  Contacts tab's associated content
                </strong>
                . Clicking another tab will toggle the visibility of this one for
                the next. The tab JavaScript swaps classes to control the content
                visibility and styling.
              </p>
            </div>
          </div>


          {/* end of navigation code  */}

                <div>

                </div>
            </div>

            <div className=" w-[100%]">
                <div className="flex justify-center gap-[40px] mt-[50px]">
                    <div className="shadow " style={{ backgroundColor: "black", boxShadow: " 0 4px 6px -1px rgba(255, 0, 0, 0.1), 0 2px 4px -1px rgba(255, 0, 0, 0.06);" }}>
                        <img src="https://www.pickcel.com/assets/img/home/industry/corporate-2.webp" width='355px' height='202px' alt="" className="border" />
                    </div>
                    <div className="shadow " style={{ backgroundColor: "black", boxShadow: " 0 4px 6px -1px rgba(255, 0, 0, 0.1), 0 2px 4px -1px rgba(255, 0, 0, 0.06);" }}>
                        <img src="https://www.pickcel.com/assets/img/home/industry/corporate-1.webp" width='355px' height='202px' alt="" className="border" />
                    </div>
                    <div className="shadow " style={{ backgroundColor: "black", boxShadow: " 0 4px 6px -1px rgba(255, 0, 0, 0.1), 0 2px 4px -1px rgba(255, 0, 0, 0.06);" }}>
                        <img src="https://www.pickcel.com/assets/img/home/industry/corporate-3.webp" width='355px' height='202px' alt="" className="border" />
                    </div>
                </div>
                <div className="flex h-56 items-center justify-center gap-[40px]  ">
                    <h2 className="text-[20px] flex justify-center hover:text-[red]  cursor-pointer ">Why use digital signage in offices</h2><FaRegArrowAltCircleRight className="text-[red]" />
                </div>
            </div>
        </div>

    )
}

export default Empowering
