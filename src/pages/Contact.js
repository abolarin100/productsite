import React from 'react';
import "../Contact.css";

const Contact = () => {
    return (
        <div className='contact'>
            <h3>Contact Us</h3>

            <form method='post' action='/help/contact' >
                <label>
                <span>Your email:</span>
                <input type="email" name="email" required className='input' />
                </label>
                <label>
                <span>Your message:</span>
                <textarea name="message" required className='input'></textarea>
                </label>
                <button className='btn'>Submit</button>

                
            </form>
          
        </div>
    );
}

export default Contact;
