import React from 'react'
import call from "../assets/icons-phone.png"
import message from "../assets/icons-mail.png"
import { Link } from 'react-router-dom'

function ContactUs() {
    return (
        <>
            <div className='heading'>
                <p><Link to="/"><span>Home / </span></Link> Contact</p>
            </div>

            <section className='contact-container'>
                <div className='contact-left'>
                    <div className='call'>
                        <img width={30} src={call} alt='call' />
                        <h4>Call to Us</h4>
                    </div>
                    <p>We are available 24/7, 7 days a week</p>
                    <p>Phone: +88899966800</p>
                    <div className='message call'>
                        <img width={30} src={message} alt='message' />
                        <h4>Write to Us</h4>
                    </div>
                    <p>Fill pout our form and we will contact you within 24 hours.</p>
                    <p>Email: customer@exclusive.com</p>
                    <p>Email: support@exclusive.com</p>
                </div>

                <div className='contact-right'>
                    <div className='details-input'>
                        <input type='text' placeholder='Name' />
                        <input type='text' placeholder='Email' />
                        <input type='text' placeholder='Your Phone' />
                    </div>
                    <textarea type='area' placeholder='Your Message' />
                    <br />
                    <button className='send-msg'>Send Message</button>
                </div>
            </section>
        </>
    )
}

export default ContactUs