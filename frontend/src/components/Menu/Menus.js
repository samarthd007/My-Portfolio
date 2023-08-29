import React from 'react'
import './Menus.css'
import { Link } from 'react-scroll'
import Photo from '../../assests/images/profile-pic.jpg'
import {
    FcHome,
    FcAbout,
    FcPortraitMode,
    FcBiotech,
    FcReading,
    FcCommandLine,
    FcBusinessman,
    FcCallback,
} from 'react-icons/fc'

import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

function Menus({ toggle }) {
    return (
        <>
            {toggle ? (
                <>
                    <Zoom>
                        <div className="navbar-profile-pic">
                            <img src={Photo} alt="profile pic" />
                        </div>
                    </Zoom>
                    <Fade left>
                        <div className="nav-items">
                            <div className="nav-item">
                                <div className="nav-link">
                                    <Link
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
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
                                    >
                                        <FcAbout />
                                        About
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link
                                        to="tech"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                    >
                                        <FcBiotech />
                                        Tech Stack
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link
                                        to="project"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                    >
                                        <FcCommandLine />
                                        Project
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link
                                        to="education"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                    >
                                        <FcReading />
                                        Education
                                    </Link>
                                </div>

                                <div className="nav-link">
                                    <Link
                                        to="work"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                    >
                                        <FcPortraitMode />
                                        Work Experience
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                    >
                                        <FcCallback />
                                        Contact
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </>
            ) : (
                <>
                    <div className="nav-items">
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcHome title="home" />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcAbout title="About" />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link
                                    to="work"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcPortraitMode title="Work Experience" />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link
                                    to="tech"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcBiotech title="Tech Stack" />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link
                                    to="education"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcReading title="Education" />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link
                                    to="project"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcCommandLine title="Project" />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcCallback title="Contact" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Menus
