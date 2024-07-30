import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { IoLogoLinkedin } from 'react-icons/io5';
import { TfiEmail } from 'react-icons/tfi';
import './style.css';

const socialLinks = [
  {
    href: "https://github.com/JNickels1",
    icon: <FiGithub size="46" />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/jaimelieberman/",
    icon: <IoLogoLinkedin size="46" />,
    label: "LinkedIn",
  },
  {
    href: "mailto:NickelsJaime@gmail.com",
    icon: <TfiEmail size="46" />,
    label: "Email",
  },
];

const LinkItem = ({ href, icon, label }) => (
  <div className="lg:w-1/2 px-4 mt-4 lg:mt-0">
    <li href={href} className="text-400 leading-relaxed size-24 " target="_blank" rel="noopener noreferrer" aria-label={label}>
      {icon}
    </li>
  </div>
);

const Links = () => {
  return (
    <section >
      <div className="mx-auto flex sm:flex-nowrap flex-wrap">
        {socialLinks.map((link, index) => (
          <LinkItem key={index} {...link} />
        ))}
      </div>
    </section>
  );
};

export default Links;
