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
                            Think about your background, education, awards,
                            skills and other attributes that you developed or
                            earned throughout your career or education. Make a
                            list of the things that make your work exceptional
                            in any field. Consider writing or typing your list
                            to create a reference sheet as you create your
                            "about me" section. After you have created your
                            list, read the job posting for the particular
                            position for which you are applying. Compare your
                            list to the job qualifications and responsibilities
                            and see how the two compare. This exercise can help
                            you decide which information is most relevant.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
