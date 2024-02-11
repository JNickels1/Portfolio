import React from "react";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";


export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 ml-80">
          <div className="flex  lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
            <p>HTML</p>
          </div>
          <div className="flex  lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
            <p>CSS</p>
          </div>
          <div className="flex  lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
            <p>JavaScript</p>
          </div>
          <div className="flex  lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
            <p>React</p>
          </div>
          <div className="flex lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
            <p>GitHub</p>
          </div>
          <div className="flex lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
            <p>Node.Js</p>
          </div>
          <div className="flex lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
            <p>API's</p>
          </div>
          <div className="flex lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
            <p>HTTPS</p>
          </div>
          <div className="flex lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
            <p>REST</p>
          </div>
          <div className="flex lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
            <p>NPM</p>
          </div>
          <div className="flex lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
            <p>Attention to detail</p>
          </div>
          <div className="flex lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
            <p>Problem Solving</p>
          </div>
          <div className="flex lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
            <p>Communication</p>
          </div>
        </div>
      </div>
    </section>
  );
}