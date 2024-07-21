import React from "react";

const Header = () =>{
    return (
        <>
        <header>
            <nav className="h-20 bg-gradient-to-r from-slate-950 via-slate-600 to-slate-950 flex items-center justify-center ">
                <ul className="text-xl text-white flex gap-11 items-center justify-center py-6 mr-16 ">
                    <li className="hover:text-purple-600 cursor-pointer">About</li>
                    <li className="hover:text-purple-600 cursor-pointer">Services </li>
                    <li className="hover:text-purple-600 cursor-pointer">Process</li>
                    <li className="hover:text-purple-600 cursor-pointer">Work</li>
                    <li className="hover:text-purple-600 cursor-pointer">Pricing</li>
                    <li className="hover:text-purple-600 cursor-pointer">FAQs</li>
                </ul>
                <button className="border-2 text-white cursor-pointer border-purple-700 hover:text-purple-400 text-semibold rounded-md px-6 py-2">Book a Call</button>
            </nav>
        </header>
        </>
    )
}

export default Header;