import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { FiGithub } from "react-icons/fi";
import { IoLogoLinkedin } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";




export default function Contact() {
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
        <section id="contact" className="relative ml-80">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
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
                    <div className="inline-flex">
                        <div className="lg:w-1/2 px-6">
                            <a href="https://github.com/JNickels1" target="_blank">
                                <FiGithub size='46' />
                            </a>

                        </div>
                        <div className="lg:w-1/2 px-6">
                            <a href="https://www.linkedin.com/in/jaimelieberman/" target="_blank">
                                <IoLogoLinkedin size='46' />
                            </a>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <a href="mailto: NickelsJaime@outlook.com" className="text-blue-400 leading-relaxed size-24" target="_blank">
                                <TfiEmail size='46' />

                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};