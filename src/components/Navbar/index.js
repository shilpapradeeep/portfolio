import React from "react";
import { useState } from 'react'

import { Link,NavLink } from 'react-router-dom'

const Navbar= () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <nav>
            <Link className="icon-menu" onClick={() => setShowNav(!showNav)}>
                <span className="bar"></span>
                <span className="bar"></span>
            </Link>
            <div className={showNav ? 'active responsive-sidebar-menu' : 'responsive-sidebar-menu'}>
                <div className="overlay"></div>
                <div className="sidebar-menu-inner">
                    <div className="menu-wrap">
                        <p>Menu</p>
                        <ul className="menu scroll-nav-responsive d-flex">
                            <li>
                                <NavLink className="scroll-to" activeclassname="active"  to='/'  offset={-100} duration={500} onClick={() => setShowNav(false)}>
                                    <i className="las la-home"></i> <span>Home</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="scroll-to" activeclassname="active"  to='about'  offset={-100} duration={500}>
                                    <i className="lar la-user"></i> <span>About</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="scroll-to" activeclassname="active"  to='resume'  offset={-100} duration={500} href="#resume">
                                    <i className="las la-briefcase"></i> <span>Resume</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="scroll-to" activeclassname="active"  to='services'  offset={-100} duration={500} href="#services">
                                    <i className="las la-stream"></i> <span>Services</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="scroll-to" activeclassname="active"  to='skills'  offset={-100} duration={500} href="#skills">
                                    <i className="las la-shapes"></i> <span>Skills</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="scroll-to" activeclassname="active"  to='portfolio'  offset={-100} duration={500} href="#portfolio">
                                    <i className="las la-grip-vertical"></i> <span>Portfolios</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="scroll-to" activeclassname="active"  to='contact'  offset={-100} duration={500} href="#contact">
                                    <i className="las la-envelope"></i> <span>Contact</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <ul className="menu scroll-nav d-flex">
                <li>
                    <NavLink className="scroll-to" activeclassname="active"  to='/'  offset={-100} duration={500}>
                        <span>Home</span> <i className="las la-home"></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="scroll-to" activeclassname="active"  to='about'  offset={-200} duration={500}>
                        <span>About</span> <i className="lar la-user"></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="scroll-to" activeclassname="active"  to='resume'  offset={-200} duration={500}>
                        <span>Resume</span> <i className="las la-briefcase"></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="scroll-to" activeclassname="active"  to='services'  offset={-200} duration={500}>
                        <span>Services</span> <i className="las la-stream"></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="scroll-to" activeclassname="active"  to='skills'  offset={-200} duration={500}>
                        <span>Skills</span> <i className="las la-shapes"></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="scroll-to" activeclassname="active"  to='portfolio'  offset={-200} duration={500}>
                        <span>Portfolios</span> <i className="las la-grip-vertical"></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="scroll-to" activeclassname="active"  to='contact'  offset={-200} duration={500} >
                        <span>Contact</span> <i className="las la-envelope"></i>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
} 

export default Navbar;