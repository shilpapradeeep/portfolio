import React from "react";

const Skills= () =>{
    return(
        <section className="skills-area page-section scroll-to-page" id="skills">
                                <div className="custom-container">
                                    <div className="skills-content content-width">
                                        <div className="section-header">
                                            <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                                                <i className="las la-shapes"></i> my skills
                                            </h4>
                                            <h1 className="scroll-animation" data-animation="fade_from_bottom">My <span>Advantages</span></h1>
                                        </div>
                    
                                        <div className="row skills text-center">
                                            <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                                                <div className="skill">
                                                    <div className="skill-inner">
                                                        <img src="assets/images/laravel.png" alt="Laravel/PHP" />
                                                        <h1 className="percent">90%</h1>
                                                    </div>
                                                    <p className="name">Laravel/PHP</p>
                                                </div>
                                            </div>
                                            <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                                                <div className="skill">
                                                    <div className="skill-inner">
                                                        <img src="assets/images/laravel.png" alt="Laravel/PHP" />
                                                        <h1 className="percent">90%</h1>
                                                    </div>
                                                    <p className="name">CodeIgniter/PHP</p>
                                                </div>
                                            </div>
                                            <div className="col-md-3 scroll-animation" data-animation="fade_from_left">
                                                <div className="skill">
                                                    <div className="skill-inner">
                                                        <img src="assets/images/wordpress.png" alt="WordPress" />
                                                        <h1 className="percent">86%</h1>
                                                    </div>
                                                    <p className="name">WordPress</p>
                                                </div>
                                            </div>
                                            <div className="col-md-3 scroll-animation" data-animation="fade_from_right">
                                                <div className="skill">
                                                    <div className="skill-inner">
                                                        <img src="assets/images/react.png" alt="React" />
                                                        <h1 className="percent">60%</h1>
                                                    </div>
                                                    <p className="name">React</p>
                                                </div>
                                            </div>
                                            
                                            
                                        </div>
                    
                                    </div>
                                </div>
                            </section>
    )
}
export default Skills;