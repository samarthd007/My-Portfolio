import './Project.css'

import Shop from '../../assests/images/movie.jpg'
import Movie from '../../assests/images/shopping.png'
import Portfolio from '../../assests/images/portfolio.png'
import React from 'react'

const Projects = () => {
    return (
        <>
            <div className="container project" id="project">
                <h2 className="col-12 mt-3 mb-1 text-center">
                    Recent Projects
                </h2>
                <hr />
                <p className="pb-3 text-center">
                    Here are my top recent projects with Source code
                </p>
                <div className="row" id="ads">
                    <div className="col-md-4">
                        <div className="card rounded">
                            <div className="card-image">
                                <span className="card-notify-badge">
                                    Back-end(frontend in progress)
                                </span>
                                <img src={Shop} alt="project 1" />
                            </div>
                            <div className="card-image-overly m-auto">
                                <span className="card-detail-badge">
                                    Node.js
                                </span>
                                <span className="card-detail-badge">
                                    Express.js
                                </span>
                                <span className="card-detail-badge">
                                    MongoDB
                                </span>
                                <span className="card-detail-badge">
                                    HTML,CSS
                                </span>
                            </div>
                            <div className="card-body">
                                <div className="ad-title m-auto">
                                    <h5 className="">Movie PlayList website</h5>
                                </div>
                                <a
                                    href="https://github.com/samarthd007/GMFINITY_MovieAPI_project"
                                    className="ad-btn"
                                >
                                    Source code
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card rounded">
                            <div className="card-image">
                                <span className="card-notify-badge">
                                    Full Stack(Hosted)
                                </span>
                                <img src={Portfolio} alt="project 1" />
                            </div>
                            <div className="card-image-overly m-auto">
                                <span className="card-detail-badge">
                                    Node.js
                                </span>
                                <span className="card-detail-badge">
                                    Express.js
                                </span>
                                <span className="card-detail-badge">
                                    MongoDB
                                </span>
                                <span className="card-detail-badge">REACT</span>
                            </div>
                            <div className="card-body">
                                <div className="ad-title m-auto">
                                    <h5 className="">Portfolio website</h5>
                                </div>
                                <a
                                    href="https://github.com/samarthd007/GMFINITY_MovieAPI_project"
                                    className="ad-btn"
                                >
                                    Source code
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card rounded">
                            <div className="card-image">
                                <span className="card-notify-badge">
                                    Back-end
                                </span>
                                <img src={Movie} alt="project 1" />
                            </div>
                            <div className="card-image-overly m-auto">
                                <span className="card-detail-badge">
                                    Node.js
                                </span>
                                <span className="card-detail-badge">
                                    Express.js
                                </span>
                                <span className="card-detail-badge">
                                    MongoDB
                                </span>
                            </div>
                            <div className="card-body">
                                <div className="ad-title m-auto">
                                    <h5 className="">
                                        E-commerce complete backend
                                    </h5>
                                </div>
                                <a
                                    href="https://github.com/samarthd007/Ecommerce_CURD_operations"
                                    className="ad-btn"
                                >
                                    Source code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
