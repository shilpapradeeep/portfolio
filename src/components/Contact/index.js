import React from "react";
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const Contact= () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('service_vgyzg9i', 'template_91yvrmn', form.current, 'W6YLfNDE4CqOUDNQX')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }

    return(
        <section className="contact-area page-section scroll-content" id="contact">
                                <div className="custom-container">
                                    <div className="contact-content content-width">
                                        <div className="section-header">
                                            <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                                                <i className="las la-dollar-sign"></i> contact
                                            </h4>
                                            <h1 className="scroll-animation" data-animation="fade_from_bottom">Contact <span>Me!</span></h1>
                                        </div>
                                        <h3 className="scroll-animation" data-animation="fade_from_bottom">shilpa.pradeeep@gmail.com</h3>
                                        <p id="required-msg">* Marked fields are required to fill.</p>
                                        <form className="contact-form scroll-animation" data-animation="fade_from_bottom" ref={form} onSubmit={sendEmail}>
                                            <div className="alert alert-success messenger-box-contact__msg" style={{display: 'none'}} role="alert">
                                                Your message was sent successfully.
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="input-group">
                                                        <label htmlFor="full-name">full Name <sup>*</sup></label>
                                                        <input type="text" name="full-name" id="full-name" placeholder="Your Full Name" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="input-group">
                                                        <label htmlFor="email">Email <sup>*</sup></label>
                                                        <input type="email" name="email" id="email" placeholder="Your email adress" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="input-group">
                                                        <label htmlFor="phone-number">phone <span>(optional)</span></label>
                                                        <input type="text" name="phone-number" id="phone-number" placeholder="Your number phone" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="input-group">
                                                        <label htmlFor="subject">subject <sup>*</sup></label>
                                                        <input type="text" name="subject" id="subject" placeholder="Subject" required />
                                                    </div>
                                                </div>
                                                
                                                <div className="col-md-12">
                                                    <div className="input-group">
                                                        <label htmlFor="message">message</label>
                                                        <textarea name="message" id="message" placeholder="Wrire your message here ..."></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="input-group submit-btn-wrap">
                                                        <button className="theme-btn" name="submit" type="submit" id="submit-form">send message</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </section>
    )
}
export default Contact;