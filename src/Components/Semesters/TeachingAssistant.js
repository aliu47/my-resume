import React from 'react'

function TeachingAssistant() {
    return (
        <div className=""> 
                <div className="flex items-center mb-1 ">
                    <div className="bg-teal-500 rounded-full h-8 w-8"></div>
                    <div className="flex-1 ml-4 font-semibold lg:text-xl">Jan 2019 - May 2020: Teaching Assistant</div>
                </div>
                <div className="ml-12 ">
                <span className="p-1 flex font-semibold"> Secure programming and Pentration Testing: </span>
                <span className="p-1 flex">This course is taught at the graduate level</span>
                        <span className="p-1 flex">Implementation/mitigation of SQLi, XSS, CSRF</span>
                        <span className="p-1 flex">Created engaging lesson plans using Kali Linux</span>
                        <span className="p-1 flex">Tutored students and graded assignments</span>
                </div>
                </div>
            )
}

export default TeachingAssistant