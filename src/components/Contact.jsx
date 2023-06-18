import '../assets/contact-styles.css'
import { useState } from 'react'

import arrowTwo from '../assets/arrow-2.svg'
import personThree from '../assets/person-3.svg'
import shadow from '../assets/shadow-2.svg'

export default function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleMessage = (e) => {
        setMessage(e.target.value)
    }

    return (
        <section id='contact' className="contact">
            <div className="contact-text">
                <div className="contact-titles">
                    <h1 id="c-title-1" className="contact-title">Got a project in</h1>
                    <h1 id="c-title-2" className="contact-title">mind?</h1>
                </div>
                <div className="contact-images">
                    <img id='shadow-three' src={shadow} alt="shadow-3" />
                    <img id='person-three' src={personThree} alt="person-3" />
                    <img id='arrow-two' src={arrowTwo} alt="arrow-2" />
                </div>
            </div>
            <form className="form" method="POST" data-netlify="true" name="contact">
                <input type="hidden" name="form-name" value="contact" />
                <div className="form-top">
                    <div className="user-name">
                        <label htmlFor="name">Your name</label>
                        <input
                            type="text"
                            placeholder='Name'
                            name='name'
                            value={name}
                            onChange={handleName}
                            autoComplete='on'
                            id= "name"
                            className='top-input'
                        />
                    </div>
                    <div className="user-email">
                        <label htmlFor="email">Your email</label>
                        <input
                            id= "email"
                            type="email"
                            placeholder='Email'
                            name='email'
                            value={email}
                            autoComplete='on'
                            onChange={handleEmail}
                            className='top-input'
                        />
                    </div>
                </div>
                <label htmlFor="message">Your message</label>
                <textarea
                    id= 'message'
                    name='message'
                    value={message}
                    onChange={handleMessage}
                    placeholder='Message'
                />
               <button
                    id='contact-btn'
                    type="submit"
                    value="Send Message"
                    disabled={!(name && email && message)}
                >
                    Send Message &nbsp;<i className="fa-regular fa-paper-plane"></i>
                </button>
            </form>
        </section>
    )
}