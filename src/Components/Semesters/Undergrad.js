import React from 'react'

function Undergrad() {
    return (
        <div className="">
            <div className="flex items-center mb-1 ">
                <div className="bg-teal-500 rounded-full h-8 w-8"></div>
                <div className="flex-1 ml-4 font-semibold lg:text-xl">Aug 2015 - May 2019: Undergrad Degree</div>
            </div>
            <div className="ml-12 ">
                <span className="p-1 flex font-semibold"> GPA:3.65/4.00 </span>
                <span className="p-1 flex">Concentration in Web and Mobile Application development</span>
                <div data-aos="fade-left">

                    <span className="p-1 flex font-semibold"> Web Development: </span>
                    <span className="p-1 flex "> CSS Hero - Website that would teach users how to use CSS (Jquery)</span>
                    <span className="p-1 flex">Caupona Adventures - Website that allowed users to rate and review restaurants (Ruby on Rails)</span>
                    <span className="p-1 flex">Crypto Currency Excange - Website that allowed users to sell and buy crypto currencies using play money (Meteor)</span>
                    <span className="p-1 flex">Whats2Eat - Website that allowed users to view and rate recipes based on what ingredients the user had (Angular)</span>
                </div>
                <div data-aos="fade-left">
                <span className="p-1 flex font-semibold"> Other Projects: </span>
                <span className="p-1 flex"> Program that used KNN to recognize objects (MATLAB)</span>
                <span className="p-1 flex"> Program that would detect eyes on an image (MATLAB) </span>
                <span className="p-1 flex"> Mobile Chatroom (Android/Firebase) </span>
                <span className="p-1 flex"> Mobile Trip Planer (Android/Firebase/GooglePlaces) </span>

                <span className="p-1 flex"> Blackjack with GUI (Python/Tkinter) </span>



                </div>


            </div>
        </div>
    )
}

export default Undergrad