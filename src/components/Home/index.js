import React from "react";

const Home = () => {
    return(
        <section className="hero-section page-section scroll-to-page" id="home">

            <div className="custom-container">
                <div className="hero-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                            <i className="las la-home"></i> Introduce
                        </h4>
                        <h1 className="scroll-animation" data-animation="fade_from_bottom">Hi I'm <span>Shilpa</span>,<br /> Full Stack Developer</h1>
                    </div>
                    <p className="scroll-animation" data-animation="fade_from_bottom">Software developer with 6+ years of demonstrated experience in creating software solutions to enhance business productivity using Agile/Lean processes and enterprise management standards.I care about making the customer happy, testing, accessibility, teamwork, and code quality.</p>
                   
                    <div className="facts d-flex">
                        <div className="left scroll-animation" data-animation="fade_from_left">
                            <h1>6+</h1>
                            <p>Years of <br/>Experience</p>
                        </div>
                        <div className="right scroll-animation" data-animation="fade_from_right">
                            <h1>100+</h1>
                            <p>projects completed on <br/>6 countries</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home;