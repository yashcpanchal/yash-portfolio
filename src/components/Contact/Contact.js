import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function Contact() {
    const form = useRef();

    function handleSubmit(e) {
        e.preventDefault();

        const lastSubmission = localStorage.getItem('lastSubmission');
        const now = new Date().getTime();
        const fiveMinutes = 5 * 60 * 1000; // 5 minutes in milliseconds

        if (lastSubmission && (now - lastSubmission) < fiveMinutes) {
            alert("You've sent a message recently. Please wait a few minutes before sending another.");
            return;
        }

        const name = form.current.from_name.value.trim();
        const email = form.current.reply_to.value.trim();
        const message = form.current.message.value.trim();

        if (!name || !email || !message) {
            alert("All fields are required.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY).then(
            (result) => {
                console.log(result.text);
                alert('Message Sent');
                localStorage.setItem('lastSubmission', now);
            }, (error) => {
                console.log(error.text);
                alert("Something went wrong.");
            }
        );
    }

    return (
        <section id="contact" className="contact">
            <h2>Contact Me</h2>
            <form ref={form} onSubmit={handleSubmit}>
                <input type="text" name="from_name" placeholder='Name'/>
                <input type="email" name="reply_to" placeholder='Email'/>
                <textarea name="message" rows="5" placeholder='Message'/>
                <button type="submit">Send</button>
            </form>
        </section>
    )
}

export default Contact;