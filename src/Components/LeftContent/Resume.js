import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudDownloadAlt, faEye, faFilePdf, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import pdf from '../../Files/Andrew_Liu_2.pdf'

function Resume() {
    return (<div className="flex-1 my-3 border-b-2 justify-center xl:mr-20 xl:pl-10 mt-0 pb-6" data-aos="fade-right" >
        <h1 className=" font-semibold text-xl mb" >
            <span className="text-orange-400">
                <FontAwesomeIcon className="mr-3 ml-1 align-middle "
                    icon={faFileAlt}
                    size='2x'
                />
            </span>
            <span className="align-bottom">
                Download My Resume</span>
        </h1>
        <div className="p-3 pl-0 m-0 pt-10" data-aos="fade-right" >
            <a href={pdf} download={pdf}>
                <button className="transition duration-500 bg-transparent hover:bg-orange-400 text-teal-dark font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded mr-4 focus:outline-none">
                    <FontAwesomeIcon
                        icon={faCloudDownloadAlt}
                    />  Download</button></a>
            <a href={pdf}>
                <button className="transition duration-500 bg-transparent hover:bg-orange-400 text-teal-dark font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded mr-2 focus:outline-none">
                    <FontAwesomeIcon
                        icon={faEye}
                    /> View</button>
            </a>
        </div>
    </div>)
}

export default Resume