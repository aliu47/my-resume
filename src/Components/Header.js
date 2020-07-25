import React from 'react'
import Navigation from './Navigation'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom"

function Header() {
    return (
        <header className="border-b  p-3 flex bg-opacity-90 items-center text-center bg-gray-900">
            <Navigation />
            <Link to="/">
                <span className="font text-gray-100  p-3">Andrew Liu's Resume</span>
            </Link>
            
        </header>
    )
}

export default Header