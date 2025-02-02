import { useState } from "react";

function Contact(){
    const [emailResult, setEmailResult] = useState(null);
    const [isSending, setIsSending] = useState(false);

    async function sendEmail(e){
        e.preventDefault();
        setIsSending(true);

        const backendUrl = process.env.REACT_APP_backend_host;

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value
        }

        const res = await fetch(`${backendUrl}/contact/send-email`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/JSON'},
                body: JSON.stringify(formData),
            }
        );
        if (res.ok){
            setEmailResult(true);
        }
        if (!res.ok){
            setEmailResult(false);
        }
        setIsSending(false);
    }

    return(
    <div className='page-container'>
        <div className="contact-us-title-container">
            <h1>Contact us</h1>
            <p>Let us know what you think of The Top 10 Game</p>
            <form className="contact-us-form" onSubmit={sendEmail}>
                <label htmlFor="name">Name</label>
                <input className="name-input" type="text" name="name" id="name"></input>
                <label htmlFor="email" >Email</label>
                <input className="email-input" type="text" name="email" id="email"></input>
                <label htmlFor="message" >Message</label>
                <textarea className="message-input" type="textarea" maxLength={1000} id="message"></textarea>
                <button className="contact-submit-button" type="submit" >{isSending ? "Sending..." : "Submit"}</button>
            </form>
            {emailResult !== null && (emailResult ? <p className="email-success">Email sucessfully sent, we will aim to respond in 3 bussiness days.</p> : <p className="email-failure">Error while sending email. Please try again.</p>)}
        </div>
    </div>
    )
}

export default Contact;