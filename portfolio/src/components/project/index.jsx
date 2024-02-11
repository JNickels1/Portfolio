import React from "react";
import { CodeIcon } from "@heroicons/react/solid";

export default function Project() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font ml-10">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4 " />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div className="flex flex-wrap -m-16">

          <div className="flex relative mb-2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ_LMxMYhZVY2juhdUcIieUi75iC1YvQYUeg&usqp=CAU" alt="" />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-25 hover:opacity-100 ">
              <h1 className="title-font text-lg font-medium text-white mb-3">
                Project Title
              </h1>
              <p className="leading-relaxed">project description</p>
            </div>
          </div>

          <div className="flex relative mb-2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ_LMxMYhZVY2juhdUcIieUi75iC1YvQYUeg&usqp=CAU" alt="" />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-25 hover:opacity-100 ">
              <h1 className="title-font text-lg font-medium text-white mb-3">
                Project Title
              </h1>
              <p className="leading-relaxed">project description</p>
            </div>
          </div>

          <div className="flex relative">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ_LMxMYhZVY2juhdUcIieUi75iC1YvQYUeg&usqp=CAU" alt="" />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-25 hover:opacity-100 ">
              <h1 className="title-font text-lg font-medium text-white mb-3">
                Project Title
              </h1>
              <p className="leading-relaxed">project description</p>
            </div>
          </div>

          <div className="flex relative">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ_LMxMYhZVY2juhdUcIieUi75iC1YvQYUeg&usqp=CAU" alt="" />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-25 hover:opacity-100 ">
              <h1 className="title-font text-lg font-medium text-white mb-3">
                Project Title
              </h1>
              <p className="leading-relaxed">project description</p>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}