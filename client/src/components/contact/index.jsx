import React from "react";
import { FiGithub } from "react-icons/fi";
import { IoLogoLinkedin } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

export default function Contact() {
    const git = "https://github.com/JNickels1";
    const linkedin = "https://www.linkedin.com/in/jaimelieberman/";
    const gmail = "mailto: NickelsJaime@gmail.com";

    return (
        <footer id="contact" className="ml-60 mt-5 auto">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">

                <div className="lg:w-1/2 px-6">
                    <a href={git} target="_blank">
                        <FiGithub size='46' />
                    </a>
                </div>

                <div className="lg:w-1/2 px-6">
                    <a href={linkedin} target="_blank">
                        <IoLogoLinkedin size='46' />
                    </a>
                </div>

                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <a href={gmail} className="text-blue-400 leading-relaxed size-24" target="_blank">
                        <TfiEmail size='46' />
                    </a>
                </div>

            </div>
        </footer>
    )
};