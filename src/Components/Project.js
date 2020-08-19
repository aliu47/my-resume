import React, {  } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Youtube from 'react-youtube';

function Project(props) {
    let content = null
    let example = null
    const opts = {
        height: '200',
        width: '300',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
        },
    }

    if (props.web) {
        example = <div className="flex justify-center mt-8">
            <a className=" text-teal-500 hover:text-teal-700 transition duration-500" href={props.web}>
                <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    size="3x" />
            </a>
        </div>
    }


    if (props.url != null) {
        example = <div className="flex justify-center">
            <Youtube opts={opts} videoId={props.url} />
        </div>
    }

    if (props.count == 1) {
        content = <div className="max-w-sm rounded overflow-hidden shadow-2xl lg:mt-0 lg:mb-4" data-aos="flip-up" data-aos-duration="500"
            >
            <div className="lg:px-6 py-4">
                <div className="font-bold text-xl mb-2 font-mono">{props.title}</div>
                <p className="text-gray-700 text-base m-2">
                    {props.desc}
                </p>
            </div>
            {example}
            <div className="px-6 py-4">
                {props.tags.map((tag, key) =>
                    <span key={key}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold font-mono text-gray-700 mr-2">
                        {tag}</span>
                )}


            </div>
        </div>
    }


    if (props.count == 2) {
        content = <div className="max-w-sm rounded overflow-hidden shadow-2xl h-auto lg:my-8 lg:mb-0" data-aos="flip-up" data-aos-duration="500"
            data-aos-offset="250">
            <div className="lg:px-6 py-4">
                <div className="font-bold text-xl mb-2 font-mono">{props.title}</div>
                <p className="text-gray-700 text-base m-2">
                    {props.desc}
                </p>
            </div>
            {example}
            <div className="px-6 py-4">
                {props.tags.map((tag, key) =>
                    <span key={key}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 font-mono">
                        {tag}</span>
                )}


            </div>
        </div>

    }
  

    return (<div>{content}
    </div>)
}

export default Project