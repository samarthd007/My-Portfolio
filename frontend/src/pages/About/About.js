import React from 'react'
import './about.css'
import Pic from '../../assests/images/profile-pic.jpg'

const About = () => {
    return (
        <>
            <div className="about" id="about">
                <div className="row">
                    <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12  about-img">
                        <img src={Pic} alt="profile pic" />
                    </div>
                    <div className="col-md-6 about-content about">
                        <h1>About Me</h1>
                        <p>
                            Welcome to my portfolio! I'm Samarth D Valmiki, a
                            dedicated Computer Science graduate with a passion
                            for crafting innovative software solutions from the
                            ground up. I'm thrilled to showcase my journey,
                            skills, and projects that highlight my commitment to
                            software development.I am actively seeking software
                            development roles that allow me to contribute my
                            expertise and passion for creating impactful
                            software solutions. I hold a Bachelor's degree in
                            Computer Science, where I immersed myself in the
                            intricacies of programming, algorithms, and software
                            engineering. I've always been captivated by the
                            process of building software applications from
                            scratch, from conceptualization to implementation..I
                            aspire to collaborate with like-minded
                            professionals, continuously enhance my skills, and
                            contribute to projects that drive innovation.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
