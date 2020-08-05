import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faEnvelope, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contact() {
    return (<div className="lg:text-2xl lg:mx-32 mb-32" data-aos="zoom-in">
        <span className="text-teal-500">
            <FontAwesomeIcon
                icon={faHandshake}
                size="4x"
            />
        </span>
        <h1 className="font-semibold text-4xl mb" >Contact Me</h1>
        <p className="py-4">
        I'd love to hear from you! Feel free to connect me through any of these!
        <div className="grid flex grid-cols-3 mx-40 pt-4">

        <a className="hover:text-orange-400 transition duration-500" href="mailto:aliu4@uncc.edu">
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        size="3x" />
                </a>

        <a className="hover:text-orange-400 transition duration-500" href="https://github.com/aliu47">
                    <FontAwesomeIcon
                        icon={faGithub}
                        size="3x" />
                </a>
                <a className="hover:text-orange-400 transition duration-500" href="https://www.linkedin.com/in/andrew-liu-964b15126/">
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        size="3x" />
                </a> </div>
        </p>
    </div>)
}

export default Contact