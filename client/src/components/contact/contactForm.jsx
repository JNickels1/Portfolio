import { Button, Form } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const ContactForm = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('portfolio', 'portfolio', form.current, {
        publicKey: 'E30t3DObnkIRuhpjI'
      })
      .then(
        () => {
          console.log('Success')
        },
        (error) => {
          console.log('Failed...', error.text)
        }
      )
  }
  
  return (
  <form ref={form} onSubmit={sendEmail}>
  <div className="relative mb-4">
      <label
          htmlFor="name"
          className="leading-7 text-sm text-gray-400"
      > Name
      </label>

      <input
          type="text"
          id="name"
          name="Name"
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
  </div>
  <div className="relative mb-4">
      <label
          htmlFor="email"
          className="leading-7 text-sm text-gray-400"
      >
          Email
      </label>
      <input
          id="email"
          type="email"
          name="email"
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
  </div>
  <div className="relative 	align-items: center;">
      <label
          className="leading-7 text-sm text-gray-400"
      >
          Message
      </label>
      <textarea
          name="message"
          id="message"
          placeholder="Type Your Message Here"
          cols="30"
          rows="10"
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"

      />
  </div>
  <input
      type="submit"
      value="Send"
      className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
  />
</form> 
  )
};

export default ContactForm;