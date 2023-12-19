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
                    <p className="scroll-animation" data-animation="fade_from_bottom">I am an enthusiastic software developer with a passion for crafting products that resonate with users. My focus extends to ensuring customer satisfaction, rigorous testing, accessibility, collaborative teamwork, and maintaining high standards of code quality.</p>
                   
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