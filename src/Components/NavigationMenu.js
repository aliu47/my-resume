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
            <header className="border-b flex  items-center">

                <FontAwesomeIcon
                    icon={faBars}
                    onClick={props.closeMenu} />
                <span className="font-bold p-3">Andrew Liu's Resume</span>
            </header>
                <ul>
                    <li>
                        <Link
                            to="/my-resume"
                            className=" py-3 border-t border-b block"
                            onClick={props.closeMenu}>
                            >Home
                 </Link>
                    </li>
                    <li>
                        <Link
                            to="/my-resume/about"
                            className=" py-3  border-b block"
                            onClick={props.closeMenu}>
                            >About</Link>
                    </li>

                        <li>
                        <Link
                            to="/my-resume/projects"
                            className=" py-3  border-b block"
                            onClick={props.closeMenu}>
                            >Projects</Link>
                    </li>
                </ul>
        </div>
            )
        }
        
export default NavigationMenu;