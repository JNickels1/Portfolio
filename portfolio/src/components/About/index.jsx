import React from "react";


export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10    py-20 md:flex-row flex-col items-center">
                <div className="md:max-w-lg md:w-full md:w-1/2 w-5/6 mr-6">
                    <img
                    className="object-cover object-start rounded"
                    alt="hero"
                    src="./pic.jpeg"
                    />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Hi! I'm Jaime Nickels,
                        <br className="hidden lg:inline-block mb-2" />
                         A passionate Full-Stack Developer with a focus in MERN.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                         Are you looking for your next Web developer or Software Engineer? Then you're in the right spot.
                         
                          Based in Columbus,Ohio I am an eager Full-Stack Software Engineer with a focus in MERN. Having Just completed my study of full stack web development at Kenzie Academy. Their program allowed us to learn in a project based enviornment providing me not only with the technical skills needed but also many more that are just as crucial.  While also Giving me a hands on experience with Html, CSS, JavaScript, and many more. Check out my skills section to see more.
                          <br className="hidden lg:inline-flex mb-8"/>
                            In my free time when I am not working I enjoy hiking with my partner and two dog's. We also do alot of traveling so I love finding new adventures and places to explore. 

                         
                    </p>
                    <div className="flex justify-center">
                        <a href="#contact" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Contact Me
                        </a>
                        <a href="#projects"
                            className="ml-4 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            View Past Work
                        </a>
                        <a href="resume.pdf"
                            className="ml-4 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
                        >
                            View My Resume
                        </a>
                    </div>
                </div>
                {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                    className="object-cover object-start rounded"
                    alt="hero"
                    src="./pic.jpeg"
                    />
                </div> */}
            </div>
        </section>
    )
}