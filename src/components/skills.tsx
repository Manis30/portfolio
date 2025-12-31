import "devicon/devicon.min.css"
export default function Skills() {
    return (
        <section id="skills" className="text-white py-[4rem] px-[2rem] sm:px-[3rem] md:px-[4rem] lg:px-[12rem]">
            <div className="flex flex-col justify-center items-center text-center">
                <h1 className="text-[1.9rem] sm:text-[2rem] md:text-[2.3rem] lg:text-[2.5rem] font-semibold uppercase underline decoration-[#8c00ff] underline-offset-[0.5rem]">Skills</h1>
                <div className="max-w-[46rem]">
                    <p className="font-semibold text-[#c0c0c0] text-[1rem] sm:text-[1.1rem] lg:text-[1.2rem] mt-[0.6rem] text-center">A collection of my technical skills and expertise developed through various projects and experiences.</p>
</div>
            </div>
            <div className="grid mt-[4rem] gap-[2.5rem] lg:grid-cols-2 text-white">
                <div className="border-[#e0bfffc2] rounded-lg bg-[#111827] transition-all duration-500 hover:scale-[1.06] cursor-pointer  border p-[1.5rem]">
                    <h3 className="text-center font-semibold text-[1.8rem] text-[#b900ffc4] mb-[1rem]">Frontend</h3>
                    <div className="grid gap-[0.8rem] grid-cols-2 lg:grid-cols-3">
                        <div className="flex border rounded-full justify-center border-[#e0bfffc2] items-center p-[0.5rem] gap-[0.3rem]">
                            <i className="devicon-html5-plain colored text-4xl"></i>
                            <p>HTML</p>
                        </div>
                        <div className="flex border rounded-full justify-center border-[#e0bfffc2] items-center p-[0.5rem] gap-[0.3rem]">
                            <i className="devicon-css3-plain colored text-4xl"></i>
                            <p>CSS</p>
                        </div>
                        <div className="flex border rounded-full justify-center border-[#e0bfffc2] items-center p-[0.5rem] gap-[0.3rem]">
                            <i className="devicon-javascript-plain colored text-4xl"></i>
                            <p>JavaScript</p>
                        </div>
                        <div className="flex border rounded-full justify-center border-[#e0bfffc2] items-center p-[0.5rem] gap-[0.3rem]">
                            <i className="devicon-react-plain colored text-4xl"></i>
                            <p>React JS</p>
                        </div>
                        <div className="flex border rounded-full justify-center border-[#e0bfffc2] items-center p-[0.5rem] gap-[0.3rem]">
                            <i className="devicon-nextjs-plain colored bg-white rounded-full text-4xl"></i>
                            <p>Next JS</p>
                        </div>
                        <div className="flex border rounded-full justify-center border-[#e0bfffc2] items-center p-[0.5rem] gap-[0.3rem]">
                            <i className="devicon-tailwindcss-plain colored text-4xl"></i>
                            <p>Tailwind CSS</p>
                        </div>
                        <div className="flex border rounded-full justify-center border-[#e0bfffc2] items-center p-[0.5rem] gap-[0.3rem]">
                            <i className="devicon-bootstrap-plain colored text-4xl"></i>
                            <p>Bootstrap</p>
                        </div>
                        <div className="flex border rounded-full justify-center border-[#e0bfffc2] items-center p-[0.5rem] gap-[0.3rem]">
                            <i className="devicon-redux-plain colored text-4xl"></i>
                            <p>Redux</p>
                        </div>
                        <div className="flex border rounded-full justify-center border-[#e0bfffc2] items-center p-[0.5rem] gap-[0.3rem]">
                            <i className="devicon-zustand-plain bg-white rounded-full colored text-4xl"></i>
                            <p>Zustand</p>
                        </div>
                    </div>
                </div>
                <div className="border border-[#e0bfffc2] bg-[#111827] transition-all duration-500 hover:scale-[1.06] rounded-lg p-[1.5rem]">
                    <h1 className="text-center font-semibold text-[1.8rem] text-[#b900ffc4] mb-[1rem]">Backend</h1>
                    <div className="grid gap-[0.8rem] grid-cols-2 lg:grid-cols-3">
                        <div className="flex items-center gap-2 px-4 py-2 border border-[#e0bfffc2] rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 128 128"
                                className="w-9 h-9 "
                            >
                                <path
                                    fill="#83CD29"
                                    d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"
                                />
                            </svg>

                            <p className="text-sm font-medium whitespace-nowrap">
                                Node.js
                            </p>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 border border-[#e0bfffc2] rounded-full">
                       <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                        className="w-8 h-7 text-white"
                        fill="currentColor"
                        >
                        <path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"/>
                        </svg>

                        <p className="text-sm font-medium whitespace-nowrap">
                            Express.js
                        </p>
                        </div>

                        <div className="flex border rounded-full justify-center border-[#e0bfffc2] items-center p-[0.5rem] gap-[0.3rem]">
                            <i className="devicon-mongodb-plain colored text-4xl"></i>
                            <p>MongoDB</p>
                        </div>
                        <div className="flex border rounded-full justify-center border-[#e0bfffc2] items-center p-[0.5rem] gap-[0.3rem]">
                            <i className="devicon-mysql-plain colored text-4xl"></i>
                            <p>MySQL</p>
                        </div>
                        <div className="flex border rounded-full justify-center border-[#e0bfffc2] items-center p-[0.5rem] gap-[0.3rem]">
                            <i className="devicon-postgresql-plain colored text-4xl"></i>
                            <p>PostgreSQL</p>
                        </div>
                    </div>
                </div>
                <div className="border border-[#e0bfffc2] bg-[#111827] transition-all duration-500 hover:scale-[1.06] rounded-lg p-[1.5rem]">
                    <h1 className="text-center font-semibold text-[1.8rem] text-[#b900ffc4] mb-[1rem]">Languages</h1>
                    <div className="grid gap-[0.8rem] grid-cols-2 lg:grid-cols-3">
                        <div className="flex border rounded-full justify-center border-[#e0bfffc2] items-center p-[0.5rem] gap-[0.3rem]">
                            <i className="devicon-java-plain colored  text-4xl"></i>
                            <p>Java</p>
                        </div>
                        <div className="flex border rounded-full justify-center border-[#e0bfffc2] items-center p-[0.5rem] gap-[0.3rem]">
                            <i className="devicon-c-plain colored text-4xl"></i>
                            <p>C</p>
                        </div>
                        <div className="flex border rounded-full justify-center border-[#e0bfffc2] items-center p-[0.5rem] gap-[0.3rem]">
                            <i className="devicon-python-plain colored text-4xl"></i>
                            <p>Python</p>
                        </div>
                        <div className="flex border rounded-full justify-center border-[#e0bfffc2] items-center p-[0.5rem] gap-[0.3rem]">
                            <i className="devicon-javascript-plain colored text-4xl"></i>
                            <p>Javascript</p>
                        </div>
                        <div className="flex border rounded-full justify-center border-[#e0bfffc2] items-center p-[0.5rem] gap-[0.3rem]">
                            <i className="devicon-typescript-plain colored text-4xl"></i>
                            <p>Typescript</p>
                        </div>
                    </div>
                </div>
                <div className="border border-[#e0bfffc2] bg-[#111827] transition-all duration-500 hover:scale-[1.06] rounded-lg p-[1.5rem]">
                    <h1 className="text-center font-semibold text-[1.8rem] text-[#b900ffc4] mb-[1rem]">Tools and Methodologies</h1>
                    <div className="grid gap-[0.8rem] grid-cols-2 lg:grid-cols-3">
                        <div className="flex border rounded-full justify-center border-[#e0bfffc2] items-center p-[0.5rem] gap-[0.3rem]">
                            <p>Atomic Design</p>
                        </div>
                        <div className="flex border rounded-full justify-center border-[#e0bfffc2] items-center p-[0.5rem] gap-[0.3rem]">
                            <p>Solid Principles</p>
                        </div>
                        <div className="flex border rounded-full justify-center border-[#e0bfffc2] items-center p-[0.5rem] gap-[0.3rem]">
                            <i className="devicon-git-plain colored text-4xl"></i>
                            <p>Git</p>
                        </div>
                        <div className="flex border rounded-full justify-center border-[#e0bfffc2] items-center p-[0.5rem] gap-[0.3rem]">
                            <i className="devicon-github-plain colored bg-white rounded-full text-4xl"></i>
                            <p>GitHub</p>
                        </div>
                        <div className="flex border rounded-full justify-center border-[#e0bfffc2] items-center p-[0.5rem] gap-[0.3rem]">
                            <i className="devicon-vscode-plain colored text-4xl"></i>
                            <p>VS Code</p>
                        </div>
                       
                        <div className="flex border rounded-full justify-center border-[#e0bfffc2] items-center p-[0.5rem] gap-[0.3rem]">
                            <i className="devicon-postman-plain colored text-4xl"></i>
                            <p>Postman</p>
                        </div>
                         <div className="flex border rounded-full justify-center border-[#e0bfffc2] items-center p-[0.5rem] gap-[0.3rem]">
                            <i className="devicon-vercel-plain colored bg-white rounded-full text-4xl"></i>
                            <p>Vercel</p>
                        </div>
                        <div className="flex border rounded-full justify-center border-[#e0bfffc2] items-center p-[0.5rem] gap-[0.3rem]">
                            <i className="devicon-netlify-plain colored text-4xl"></i>
                            <p>Netlify</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}