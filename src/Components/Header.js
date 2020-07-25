import React from 'react'
import Navigation from './Navigation'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom"

function Header() {
    return (
        <header className="border-b  p-3 flex  items-center">
            <Navigation />
            <Link to="/">
                <span className="font-bold p-3">AppName</span>
            </Link>
        </header>
    )
}

export default Header