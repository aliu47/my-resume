import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
function Masters() {
    return (
        <div className="">
            <div className="flex items-center mb-1 ">
                <div className="bg-teal-500 rounded-full h-8 w-8"></div>
                <div className="flex-1 ml-4 font-semibold lg:text-xl">Aug 2018 - May 2020: Master's Degree</div>
            </div>
            <div className="ml-12 ">
                <span className="p-1 flex font-semibold">
                    GPA:3.72/4.00</span>
                <span className="p-1 flex">
                    Concentration in Software/Systems/Networks and Security</span>


                <span className="p-1 flex font-semibold">
                    Note:</span>
                <span className="p-1 flex"> My university offered a program which allowed me to take several graduate courses during my senior year. This is why my
                Undergraduate degree time frame will overlap with my Master's degree.
            </span>
                <div data-aos="fade-left">
                    <span className="p-1 flex font-semibold"> Intelligent Systems: </span>
                    <span className="p-1 flex">8-puzzle problem - A* search (Java)
                            <a className="px-1 hover:text-teal-500"
                            href="https://github.com/aliu47/ITCS-6150-Project-1-Solving-8-puzzle-using-A-search-algorithm">
                            <FontAwesomeIcon
                                icon={faGithub}
                            /></a></span>
                    <span className="p-1 flex">N Queen problem - Hill Climbing Search (Java)
                          <a className="px-1 hover:text-teal-500"
                            href="https://github.com/aliu47/ITCS-6150-Project-2-Solving-N-queens-using-Hill-Climbing">
                            <FontAwesomeIcon
                                icon={faGithub}
                            /></a>
                    </span>
                </div>
                <div data-aos="fade-left">
                    <span className="p-1 flex font-semibold">
                        Computer Communication and Networks:</span>
                    <span className="p-1 flex">Chatroom application - Sockets (Java)
                            <a className="px-1 hover:text-teal-500"
                            href="https://github.com/aliu47/ITCS-6166-Project-1-Socket-Programming-Multi-user-Chat">
                            <FontAwesomeIcon
                                icon={faGithub}
                            /></a>
                    </span>
                </div>
                <div data-aos="fade-left">
                    <span className="p-1 flex font-semibold">
                        Advanced Mobile Application Development:</span>
                    <span className="p-1 flex">Ride America - Uber style chatroom and ride share app (Android)
            </span>
                    <span className="p-1 flex">Super Market Simulator - Using BLE we simulated a super market offering different products based on the nearest
                    BLE beacon (Android)
            </span>
                    <span className="p-1 flex">Watch List - Using TMDb and guidebox we created a media aggregation app that helps users keep track of what they can watch on different platforms. (Android)
            </span>
                </div>
            </div>
        </div>
    )
}

export default Masters