import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import resume from "./Rahul Kumar Resume Latest.pdf";

// Icons
var collegeIcon = <i class="fas fa-graduation-cap testt"></i>;
var workIcon = <i class="fas fa-code testt"></i>;
var schoolIcon = <i class="fas fa-school testt"></i>;
var starIcon = <i class="far fa-star-half fa-5x testt"></i>;

function Qualifications(){
    return(
        <>
            <section className="section-qualifications" id="qualifications">
                <div className="myinfo header-qualification">
                    <div>
                        <h6 className="heading-secondary">Here are my journey till now</h6>
                        <h1 className="heading-primary">My Journey</h1>
                    </div>
                   
                    <div class="resume-download">
                        <a href={resume} target="_blank" rel="noreferrer">View Resume</a>
                    </div>
                </div>

                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work vertical-date"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2021 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={collegeIcon}
                    >
                        <h3 className="vertical-timeline-element-title vertical-title">Bachelor of Technology</h3>
                        <h4 className="vertical-timeline-element-subtitle vertical-subtitle">Indian Institute of Information Technology</h4>
                        <p className="vertical-para">
                            Kalyani, West Bengal
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work vertical-date vertical-date--whiteText"
                        date="October 2020 - January 2021"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={workIcon}
                    >
                        <h3 className="vertical-timeline-element-title vertical-title">Frontend Web Developer</h3>
                        <h4 className="vertical-timeline-element-subtitle vertical-subtitle">BookVigyapan</h4>
                        <p  className="vertical-para">
                        Utilized Reactjs library and VS Code to create website layouts and user-friendly interfaces.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education vertical-date vertical-date--whiteText"
                        date="December 2019"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={workIcon}
                    >
                        <h3 className="vertical-timeline-element-title vertical-title">HackOffv2.0</h3>
                        <h4 className="vertical-timeline-element-subtitle vertical-subtitle">Vellore Institute of Technology, Gorbachev Road, Vellore, Tamil Nadu, India</h4>
                        <p className="vertical-para">
                        A 24-hour long hackathon, Hack Off is inviting young minds from all across the nation, to come together to put up the greatest show the digital realm has ever seen.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work vertical-date vertical-date--whiteText"
                        date="2017"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={schoolIcon}
                    >
                        <h3 className="vertical-timeline-element-title vertical-title">Intermediate</h3>
                        <h4 className="vertical-timeline-element-subtitle vertical-subtitle">Maharana Pratap Education Centre, Kalyanpur, Kanpur</h4>
                        <p className="vertical-para">
                            Passed: 84%
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work vertical-date vertical-date--whiteText"
                        date="2015"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={schoolIcon}
                    >
                        <h3 className="vertical-timeline-element-title vertical-title">High School</h3>
                        <h4 className="vertical-timeline-element-subtitle vertical-subtitle">Maharana Pratap Education Centre, Kalyanpur, Kanpur</h4>
                        <p className="vertical-para">
                            Passed: 9.6CGPA
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        icon={starIcon}
                    />
                    </VerticalTimeline>
            </section>
        </>
    );
}

export default Qualifications;