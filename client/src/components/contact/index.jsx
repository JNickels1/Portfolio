import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './style.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('portfolio', 'portfolio', e.target, {
            publicKey: 'E30t3DObnkIRuhpjI'
        })
            .then((result) => {
                alert('Message sent successfully!');
            }, (error) => {
                alert('Failed to send message, please try again.');
            });

        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="message">Message:</label>
                <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>

                <button type="submit">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;

// import React, { useState } from 'react';
// import emailjs from '@emailjs/browser';
// import './style.css';
// import { Button } from 'bootstrap';

// const Contact = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         emailjs.sendForm('portfolio', 'portfolio', e.target, {
//             publicKey: 'E30t3DObnkIRuhpjI'
//         })
//             .then((result) => {
//                 alert('Message sent successfully!');
//             }, (error) => {
//                 alert('Failed to send message, please try again.');
//             });

//         setFormData({
//             name: '',
//             email: '',
//             message: '',
//         });
//     };

//     return (
//         <section id="contact">
//             <h2>Contact Me</h2>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="name">Name:</label>
//                 <input
//                     type="text"
//                     name="name"
//                     id="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                 />

//                 <label htmlFor="email">Email:</label>
//                 <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                 />

//                 <label htmlFor="message">Message:</label>
//                 <textarea
//                     name="message"
//                     id="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                 ></textarea>

//                 <button type="submit">Send Message</button>
//             </form>
//         </section>
//     );
// };

// export default Contact;