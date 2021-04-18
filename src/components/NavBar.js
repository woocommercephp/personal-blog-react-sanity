import React from 'react';
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

export default function NavBar(props) {
    return (
        <header className="bg-red-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink
                        to="/"
                        exact
                        className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
                        activeClassName="text-white"
                        >

                        Sergio
                    </NavLink>
                    <NavLink 
                        to="/post" 
                        className="inflex-flex items-center py-3 px-3 my-6 text-red-100 hover:text-green-800 "
                        activeClassName="text-red-100 bg-red-700"
                        >
                        
                        Blog Posts
                    </NavLink>
                    <NavLink 
                        to="/project" 
                        className="inflex-flex items-center py-3 px-3 my-6 text-red-100 hover:text-green-800 " 
                        activeClassName="text-red-100 bg-red-700"
                        >
                        
                        Projects
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                        activeClassName="text-red-100 bg-red-700"
                        >
                        About me
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my=6">
                    <SocialIcon url="google.com" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                    <SocialIcon url="youtube.com" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                    <SocialIcon url="linkedin.com" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                </div>
            </div>
        </header>
    )
}
