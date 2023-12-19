import React from "react";

const Portfolio= () => {
    return(
        <section className="portfolio-area page-section scroll-to-page" id="portfolio">
                                <div className="custom-container">
                                    <div className="portfolio-content content-width">
                                        <div className="section-header">
                                            <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                                                <i className="las la-grip-vertical"></i> portfolio
                                            </h4>
                                            <h1 className="scroll-animation" data-animation="fade_from_bottom">Featured <span>Projects</span></h1>
                                        </div>
                    
                                        <div className="row portfolio-items">
                                            <div className="col-md-12 scroll-animation" data-animation="fade_from_bottom">
                                                <div className="portfolio-item portfolio-full">
                                                    <div className="portfolio-item-inner">
                                                        <a href="assets/images/comtix.jpg" data-lightbox="example-1">
                                                            <img src="assets/images/comtix.jpg" alt="Portfolio" />
                                                        </a>
                    
                                                        <ul className="portfolio-categories">
                                                            <li>
                                                                <button>WordPress</button>
                                                            </li>
                                                            <li>
                                                                <button>Ecommerce</button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <h2><a href="https://www.comtix.com/">Comtix</a></h2>
                                                </div>
                                            </div>
                    
                                            <div className="col-md-6 scroll-animation" data-animation="fade_from_left">
                                                <div className="portfolio-item portfolio-half">
                                                    <div className="portfolio-item-inner">
                                                        <a href="assets/images/tsquare.jpg" data-lightbox="example-1">
                                                            <img src="assets/images/tsquare.jpg" alt="Portfolio" />
                                                        </a>

                                                        <img src="assets/images/tsquare.jpg" alt="Portfolio" />
                    
                                                        <ul className="portfolio-categories">
                                                            <li>
                                                                <button>Laravel/PHP</button>
                                                            </li>
                                                            <li>
                                                                <button>HTML</button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <h2><button>TSquare Solutions</button></h2>
                                                </div>
                                            </div>
                    
                                            <div className="col-md-6 scroll-animation" data-animation="fade_from_right">
                                                <div className="portfolio-item portfolio-half">
                                                    <div className="portfolio-item-inner">
                                                        <a href="assets/images/oncopatient.png" data-lightbox="example-1">
                                                            <img src="assets/images/oncopatient.png" alt="Portfolio" />
                                                        </a>
                    
                                                        <ul className="portfolio-categories">
                                                            <li>
                                                                <button>CodeIgniter</button>
                                                            </li>
                                                            <li>
                                                                <button>API</button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <h2><button>ONCOpatient Doctor Application</button></h2>
                                                </div>
                                            </div>
                    
                                            <div className="col-md-12 scroll-animation" data-animation="fade_from_bottom">
                                                <div className="portfolio-item portfolio-half">
                                                    <div className="portfolio-item-inner">
                                                        <a href="assets/images/safetylens.jpg" data-lightbox="example-1">
                                                            <img src="assets/images/safetylens.jpg" alt="portfolio" />
                                                        </a>
                    
                                                        <ul className="portfolio-categories">
                                                            <li>
                                                                <button>Laravel</button>
                                                            </li>
                                                            <li>
                                                                <button>Ecommerce</button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <h2><button>SafetyLensUSA</button></h2>
                                                </div>
                                            </div>
                    
                                            {/* <div className="col-md-12 scroll-animation" data-animation="fade_from_bottom">
                                                <div className="portfolio-item portfolio-half">
                                                    <div className="portfolio-item-inner">
                                                        <a href="assets/images/portfolio5.jpg" data-lightbox="example-1">
                                                            <img src="assets/images/portfolio5.jpg" alt="portfolio" />
                                                        </a>
                    
                                                        <ul className="portfolio-categories">
                                                            <li>
                                                                <a href="#">Framer</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <h2><a href="#">Lewis Portfolio Framer Template</a></h2>
                                                </div>
                                            </div> */}
                                        </div>
                    
                                    </div>
                                </div>
                            </section>
    )
}
export default Portfolio;