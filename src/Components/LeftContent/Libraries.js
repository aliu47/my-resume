import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

function Libraries(){
    const langauages=["Angular", "React", "Vue", "Spring boot", "Flask", "Bootstrap", "TailwindCSS" ];

    return (<div className="flex-1 my-3 border-b-2 justify-center xl:mr-20 xl:pl-10 mt-0 pb-6" data-aos="fade-right" >
    <h1 className=" font-semibold text-xl mb" >
        <span className="text-orange-400">
            <FontAwesomeIcon className="mr-3 ml-0 align-middle "
                icon={faCodeBranch}
                size='2x'
            />
        </span>
        <span className="align-bottom">Libraries & Frameworks</span>
    </h1>
    <div className="px-0 py-4" data-aos="fade-right">
                {langauages.map((tag, key) =>
                   <span key={key}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 mt-3 text-sm font-semibold text-gray-700 mr-1">
                        {tag}</span>
                )}


            </div>
</div>)
}

export default Libraries