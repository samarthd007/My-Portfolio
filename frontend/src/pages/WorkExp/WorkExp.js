import React from 'react'
import './WorkExp.css'
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { BsPersonWorkspace } from 'react-icons/bs'

const WorkExp = () => {
    return (
        <>
            <div className=" work" id="work">
                <div className="work-exp">
                    <h2 className="col-12 mt-3 mb-1 text-center">
                        Work Experience
                    </h2>
                    <hr />
                    <VerticalTimeline lineColor="#138781">
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                background: 'white',
                                color: 'black',
                            }}
                            contentArrowStyle={{
                                borderRight: '7px solid  #138781 ',
                            }}
                            date="Feb 2022 - Apr 2022"
                            iconStyle={{
                                background: '#138781',
                                color: '#fff',
                            }}
                            icon={<BsPersonWorkspace />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                Software Engineer Intern
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                Cerner Corporation ,BLR
                            </h4>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                background: 'white',
                                color: 'black',
                            }}
                            contentArrowStyle={{
                                borderRight: '7px solid  #138781 ',
                            }}
                            date="May 2022 - Mar 2023"
                            iconStyle={{
                                background: '#138781',
                                color: '#fff',
                            }}
                            icon={<BsPersonWorkspace />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                Full Stack Developer
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                OneDirect/Gupshup ,BLR
                            </h4>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        </>
    )
}

export default WorkExp
