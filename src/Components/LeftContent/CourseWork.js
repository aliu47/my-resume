import React from 'react';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CourseWork() {

    const gradCourses = [ "Computer Forensics",  "Database Systems", "Advanced Mobile App Development", "Algorithm & Data Structure", "Computer Comm & Networks ","Intelligent Systems",
        "Knowledge Discovery in Databases", "Principles of Info Security and Privacy"]

    const courses = [ "Computer Vision", "Human-Centered Design","Database Design & Implementation", "Data Structures and Algorithms",
    "Mobile Application Development ", "Network Based App Development", "Operating Systems & Networking"
        , "Secure Programming & Penetration Testing",
        ];


    return (<div className="flex-1 my-3 justify-center xl:mr-8 xl:pl-10 mt-0 pb-6" data-aos="fade-right" >
        <h1 className=" font-semibold text-xl mb" >
            <span className="text-orange-400">
                <FontAwesomeIcon className="mr-3 ml-0 align-middle "
                    icon={faGraduationCap}
                    size='2x'
                />
            </span>
            <span className="align-bottom">CS Coursework</span>
        </h1>
        <div className="px-0 py-4" data-aos="fade-right">
        <h1 className=" font-semibold ml-3">Graduate</h1>
            {gradCourses.map((tag, key) =>
                <span key={key}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 mt-3 text-sm font-semibold text-gray-700 mr-2">
                    {tag}</span>
            )}
        </div>
        <div className="px-0 py-4" data-aos="fade-right">
        <h1 className=" font-semibold ml-3">Undergraduate</h1>
            {courses.map((tag, key) =>
                <span key={key}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 mt-3 text-sm font-semibold text-gray-700 mr-2">
                    {tag}</span>
            )}
        </div>
    </div>)
}
export default CourseWork