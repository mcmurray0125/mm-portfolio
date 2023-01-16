import '../assets/contact-styles.css'
import keyboard from '../assets/keyboard.svg'
import mail from '../assets/mail.svg'
import arrowTwo from '../assets/arrow-2.svg'
import personThree from '../assets/person-3.svg'
import shadow from '../assets/shadow-2.svg'

export default function Contact() {
    return (
        <section id='contact' className="contact">
            <div className="contact-text">
                <div className="contact-titles">
                    <h1 id="c-title-1" className="contact-title">Got a project in</h1>
                    <h1 id="c-title-2" className="contact-title">mind?</h1>
                </div>
                <div className="contact-images">
                    <img id='person-three' src={personThree} alt="person-3" />
                    <img id='arrow-two' src={arrowTwo} alt="arrow-2" />
                    <img id='shadow-three' src={shadow} alt="shadow-3" />
                </div>
            </div>
            <div className="form" action="POST" data-netlify="true" name="contact">
                <div className="form-top">
                    <div className="user-name">
                        <label htmlFor="name">Your name</label>
                        <input type="text" placeholder='Name' name='name' id= "name" className='top-input' />
                    </div>
                    <div className="user-email">
                        <label htmlFor="email">Your email</label>
                        <input id= "email" type="email" placeholder='Email' name='email' className='top-input'/>
                    </div>
                </div>
                <label htmlFor="message">Your message</label>
                <textarea id= 'message' name='message' placeholder='Message'/>
               <button id='contact-btn' type="submit" value="Send Message">Send Message &nbsp;<i className="fa-regular fa-paper-plane"></i></button>
            </div>
        </section>
    )
}