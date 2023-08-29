import React, { useState } from 'react'
import './mobilenav.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineMenu } from 'react-icons/ai'
import {
    FcHome,
    FcAbout,
    FcPortraitMode,
    FcBiotech,
    FcReading,
    FcCommandLine,
    FcCallback,
} from 'react-icons/fc'
import { Link } from 'react-scroll'

const Mobilenav = () => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    const handleMenuClick = () => {
        setOpen(false)
    }

    return (
        <>
            <div className="mobile-nav">
                <div className="mobile-nav-header">
                    {open ? (
                        <AiOutlineMenu
                            size={30}
                            className="mobile-nav-icon"
                            onClick={handleOpen}
                        />
                    ) : (
                        <GiHamburgerMenu
                            size={30}
                            className="mobile-nav-icon"
                            onClick={handleOpen}
                        />
                    )}

                    <span className="mobile-nav-title">My Portfolio</span>
                </div>
                {open && (
                    <div className="mobile-nav-menu">
                        <div className="nav-items">
                            <div className="nav-item">
                                <div className="nav-link">
                                    <Link
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                        onClick={handleMenuClick}
                                    >
                                        <FcHome />
                                        Home
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                        onClick={handleMenuClick}
                                    >
                                        <FcAbout />
                                        About
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link
                                        to="work"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                        onClick={handleMenuClick}
                                    >
                                        <FcPortraitMode />
                                        Work Experience
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link
                                        to="tech"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                        onClick={handleMenuClick}
                                    >
                                        <FcBiotech />
                                        Tech Stack
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link
                                        to="education"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                        onClick={handleMenuClick}
                                    >
                                        <FcReading />
                                        Education
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link
                                        to="project"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                        onClick={handleMenuClick}
                                    >
                                        <FcCommandLine />
                                        Project
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                        onClick={handleMenuClick}
                                    >
                                        <FcCallback />
                                        Contact
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Mobilenav
