import React from 'react'
import './home.css'
import Typewriter from 'typewriter-effect'
import Resume from '../../assests/Resume/Samarth D Valmiki Resume 2023(2).pdf'
import Fade from 'react-reveal/Fade'

const Home = () => {
    return (
        <>
            <div className="container-fluid home-container" id="home">
                <div className="container home-content">
                    <Fade right>
                        <h2> Hi 👋 I'm Samarth D Valmiki</h2>
                        <h1>
                            <Typewriter
                                options={{
                                    strings: [
                                        'Full Stack Developer',
                                        'SDE-1',
                                        'Back-end Developer',
                                        'MERN Stack Developer',
                                    ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                    </Fade>
                    <Fade bottom>
                        <div className="home-buttons">
                            <a
                                className="btn btn-hire"
                                href="https://api.whatsapp.com/send?phone=9449270552"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Hire Me
                            </a>

                            <a
                                className="btn btn-cv "
                                href={Resume}
                                download="Samarth.pdf"
                            >
                                My Resume
                            </a>
                        </div>
                    </Fade>
                </div>
            </div>
        </>
    )
}

export default Home
