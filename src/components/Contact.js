import React from 'react';
import emailjs from "emailjs-com";

function Contact() {

    const sendEmail =(e)=> {
        e.preventDefault();
    
        emailjs.sendForm("service_tv8sniw","template_q0wsozo",e.target,"user_5Ci8rPqJhp90LnCWBPXln")
          .then(
            (result) => {
              console.log(result.text);
              alert("Message Send Successfully");
            },
            (error) => {
              console.log(error.text);
            }
          );
        e.target.reset();
    }

    return(
        <>
            <section className="section-form" id="form">
                <div className="form_container">
                    <div className="myinfo form_container-title">
                        <h3 className="heading-secondary">Give me your feedback !</h3>
                        <h1 className="heading-primary">Contact Me</h1>
                    </div>
                    <form className="form" onSubmit={sendEmail}>
                            <label for="name">Name</label>
                            <input type="text" name="name" id="name" placeholder="Enter your name" required />
                            
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="Enter your email" required />
                            
                            <label for="description">Feedback</label>
                            <textarea name="message" id="description" cols="10" rows="4" placeholder="Feel free to share your feedback ..."></textarea>
                        <button type="submit" className="form_button" onclick="sendMail();" >Submit</button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Contact;