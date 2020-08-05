import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function About() {
    return (<div className="lg:text-2xl lg:mx-32" data-aos="fade-up">
        <span className="text-teal-500">
            <FontAwesomeIcon
                icon={faUserCircle}
                size="4x"
            />
        </span>
        <h1 className="font-semibold text-4xl mb" >About Me</h1>
        <p className="pt-2">
            Hello! As the title implies I am Andrew Liu. I am a
            computer science graduate student at the
            University of North Carolina at Charlotte. I am always looking for new challenges (and employment)
            in the tech world. My primary passions lie in Android development, Java development, and Web development.
        </p>
    </div>)
}

export default About