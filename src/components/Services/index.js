import React from "react";

const Services= () => {
    return(
        <section className="services-area page-section scroll-to-page" id="services">
                                <div className="custom-container">
                                    <div className="services-content content-width">
                                        <div className="section-header">
                                            <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                                                <i className="las la-stream"></i> Services
                                            </h4>
                                            <h1 className="scroll-animation" data-animation="fade_from_bottom">My <span>Specializations</span></h1>
                                        </div>
                    
                                        <div className="services-items">
                                            <div className="service-item scroll-animation" data-animation="fade_from_bottom">
                                                <i className="las la-bezier-curve"></i>
                                                <h2>Website Developement</h2>
                                                <p>I support businesses across diverse sectors with innovative website development solutions</p>
                                                <span className="projects">50+ Projects</span>
                                            </div>
                                            <div className="service-item scroll-animation" data-animation="fade_from_bottom">
                                                <i className="las la-code"></i>
                                                <h2>Software Development</h2>
                                                <p>I help in transforming Ideas into Powerful Solutions through Expert Software Development</p>
                                                <span className="projects">20+ Projects</span>
                                            </div>
                                            <div className="service-item scroll-animation" data-animation="fade_from_bottom">
                                                <i className="las la-bezier-curve"></i>
                                                <h2>SEO/Marketing</h2>
                                                <p>I support in elevating Brands through Strategic SEO and Marketing.</p>
                                                <span className="projects">8+ Projects</span>
                                            </div>
                                        </div>
                    
                                    </div>
                                </div>
                            </section>
    )
}
export default Services;