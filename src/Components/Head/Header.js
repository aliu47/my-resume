import React from 'react'
import Navigation from './Navigation'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom"
function Header() {
    return (
        <div className=" items-center border-b-2  p-3 flex bg-white fixed inset-x-0 z-40  top-0 shadow-md ">
            <Navigation />
            <h1 className="px-3 font-semibold">Andrew Liu</h1>
        </div>
    )
}

export default Header