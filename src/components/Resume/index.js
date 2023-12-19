import React from "react";

const Resume= () => {
    return(
        <section className="resume-area page-section scroll-to-page" id="resume">
                                <div className="custom-container">
                                    <div className="resume-content content-width">
                                        <div className="section-header">
                                            <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                                                <i className="las la-briefcase"></i> Resume
                                            </h4>
                                            <h1 className="scroll-animation" data-animation="fade_from_bottom">Education & <span>Experience</span></h1>
                                        </div>
                    
                                        <div className="resume-timeline">
                                            <div className="item scroll-animation" data-animation="fade_from_right">
                                                <span className="date">2020 - Present</span>
                                                <h2>Senior Full Stack Developer</h2>
                                                <p>QBurst</p>
                                                <h2>Full Stack Developer</h2>
                                                <p>QBurst</p>
                                            </div>
                                            <div className="item scroll-animation" data-animation="fade_from_right">
                                                <span className="date">2018 - 2020</span>
                                                <h2>Software Developer</h2>
                                                <p>Three Seas Infologics Pvt Ltd</p>
                                                
                                            </div>
                                            <div className="item scroll-animation" data-animation="fade_from_right">
                                                <span className="date">2016 - 2018</span>
                                                <h2>Backend Developer</h2>
                                                <p>TechWyse Internet Marketing </p>
                                            </div>
                                            <div className="item scroll-animation" data-animation="fade_from_right">
                                                <span className="date">2012 - 2016</span>
                                                <h2>Bachelor's degree in Computer Science Engineering</h2>
                                                {/* <p>TechWyse Internet Marketing </p> */}
                                            </div>
                                        </div>
                    
                                    </div>
                                </div>
                            </section>
    )
}

export default Resume;