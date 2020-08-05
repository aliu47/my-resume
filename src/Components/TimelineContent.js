import React, { useEffect } from 'react'
import { useSpring, animated } from 'react-spring';
import {Summer2018,TeachingAssistant, Undergrad, Masters
} from './Semesters/index.js'

function TimelineContent() {
    let content = null
    const semesters = [<Masters />, <TeachingAssistant />,  <Summer2018 />, <Undergrad/>
    ];
    const fade = useSpring({
        from: {
            opacity: 0, transform: 'translateX(50%)',
        },
        to: {
            opacity: 1, transform: 'translateX(0%)'
        },

    })
    content = semesters.map((semester,key) =>
        <li data-aos="fade-left" className="mb-2" key={key}>
            <animated.div style={fade} >
                {semester}
            </animated.div>
        </li>
    )
   
    return (<div>
        <div>
            <div className="flex-1 ml-4 font-semibold">
                {/* <h1 className="text-3xl">Timeline of my work and university projects</h1> */}
            </div>
        </div>
        <div className="relative xl:w-4/5 s:p-3 my-8 ">
            <div className="border-r-2 border-teal-500 absolute h-full top-0 p-2"></div>
            <ul className="list-none m-0 p-0">
                {content}
            </ul>

        </div>
    </div>
    )
}
export default TimelineContent