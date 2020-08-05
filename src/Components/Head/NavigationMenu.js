import React from 'react'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
function NavigationMenu(props) {
    return (
        <div>
            <div className=" bg-white items-center border-b p-2 flex sticky top-0 sticky inset-x-0 z-40">
                <span className="text-xl hover:text-teal-500 cursor-pointer">
                    <FontAwesomeIcon
                        icon={faBars}
                        onClick={props.closeMenu} />
                </span>

                {/* <h1 className="px-3 font-semibold">Andrew Liu</h1> */}

            </div>
            <ul>
                <li>
                    <Link
                        to="/resume"
                        className=" py-3 border-t border-b block"
                        onClick={props.closeMenu}>
                        >Home
                 </Link>
                </li>
                <li>
                    <Link
                        to="/projects"
                        className=" py-3  border-b block"
                        onClick={props.closeMenu}>
                        >Projects</Link>
                </li>
                <li>
                    <Link
                        to="/timeline"
                        className=" py-3  border-b block"
                        onClick={props.closeMenu}>
                        >Timeline</Link>
                </li>

            </ul>
        </div>
    )
}

export default NavigationMenu;