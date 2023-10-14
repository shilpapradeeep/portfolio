import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar= () => {
    return(
        <div>
            <div className="left-sidebar">
                    <div className="sidebar-header d-flex align-items-center justify-content-between">
                        <h2>Shilpa Pradeep</h2>
                        <span className="designation">Full Stack Developer</span>
                    </div>
                    <img className="me" src="assets/images/me.jpg" alt="Me" />
                    <h2 className="email">shilpa.pradeeep@gmail.com</h2>
                    <h2 className="address">Unit 96 1775 Valley Farm, CA</h2>
                    <p className="copyright">&copy; 2023 Shilpa. All Rights Reserved</p>
                    <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
                        <li>
                            <a target="_blank" href="https://www.linkedin.com/in/shilpa-pradeep/"><FontAwesomeIcon icon={faLinkedin} color="#999999" className="anchor-icon" /></a>
                        </li>
                        <li>
                            <a target="_blank" href="https://github.com/shilpapradeeep"><FontAwesomeIcon icon={faGithub} color="#999999" className="anchor-icon" /></a>
                        </li>
                        <li>
                            <a target="_blank" href="#"><FontAwesomeIcon icon={faSkype} color="#999999" className="anchor-icon" /></a>
                        </li>
                        <li>
                            <a target="_blank" href="#"><FontAwesomeIcon icon={faTwitter} color="#999999" className="anchor-icon" /></a>
                        </li>
                    </ul>
                    <a href="#" className="theme-btn">
                        <i className="las la-envelope"></i> Hire Me!
                    </a>
            </div>
        </div>
    )
}

export default Sidebar;