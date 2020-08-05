import React from 'react'
import Resume from './Resume';
import ProgrammingLanguages from './ProgrammingLanguages';
import CourseWork from './CourseWork';
import Databases from './Databases';
import Libraries from './Libraries';

function LeftContent(){
    return(
        <div className="flex-1 m-5 lg:pl-32">
            <Resume/>
            <ProgrammingLanguages/>
            <Libraries/>
            <Databases/>
            <CourseWork/>
        </div>
    )
}

export default LeftContent;