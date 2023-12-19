import React from "react";

const About = () => {
    return (
        <section className="about-area page-section scroll-to-page" id="about">
            <div className="custom-container">
                <div className="about-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                            <i className="lar la-user"></i> About
                        </h4>
                        <h1 className="scroll-animation" data-animation="fade_from_bottom">Passionate Software Developer | Crafting Code, <span>Building Dreams..</span></h1>
                    </div>
                    <p className="scroll-animation" data-animation="fade_from_bottom">Hello! I'm Shilpa Pradeep, a seasoned Full Stack Developer based in Toronto, Canada. With a passion for crafting innovative digital solutions, I bring over 6 years of experience in the dynamic realm of software development.</p>
                    <h2 className="scroll-animation">Technical Proficiency</h2>
                    <p className="scroll-animation" data-animation="fade_from_bottom">My expertise spans a wide array of technologies, including but not limited to:</p>
                    <ul>
                        <li><b>Web Development:</b> Proficient in end-to-end web application development, utilizing technologies such as PHP, Laravel, CodeIgniter, Yii, JavaScript, Vue.js, React and more.</li>
                        <li><b>CMS Mastery:</b> Adept at working with various Content Management Systems (CMS) including WordPress, WooCommerce, Shopify, and Joomla.</li>
                        <li><b>Database Wizardry:</b> Skilled in designing and optimizing databases, with a focus on MySQL, resulting in enhanced application performance.</li>
                        <li><b>Agile Advocate:</b> Well-versed in Agile development methodologies, I actively contribute to project management, ensuring timely delivery and high-quality products.</li>
                    </ul>
    
                </div>
            </div>
        </section>
    )
}
export default About;