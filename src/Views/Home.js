import React from 'react'
import Info from '../Components/Info';
import TimelineContent from '../Components/TimelineContent';
import About from '../Components/About';
import LeftContent from '../Components/LeftContent/LeftContent';
import { animated, useSpring } from 'react-spring';
import ProjectsContent from '../Components/ProjectsContent';
import Contact from '../Components/Contact';

function Home() {
    const props = useSpring({ scroll: 0, from: { scroll: 100 } })

    return (
        <animated.div className="w-12/12" scrollTop={props.scroll}>
                <div className="text-center">
                    <div className="sm:mb-20 font-mono">
                        <Info />
                    </div>
                    <div className="lg:mx-64 lg:my-10 lg:mb-20">
                        <About />
                    </div>
                </div>
                <div className="xl:mx-40 grid lg:grid-cols-2 gap-0">
                    <LeftContent />
                    <TimelineContent />
                </div>
                <div className="lg:mx-40 lg:my-10 mb-20 text-center">
                    <ProjectsContent />
                </div>
                <div className="lg:mx-64 lg:my-10 lg:mb-20  text-center">
                    <Contact />
                </div>
        </animated.div>)
}

export default Home