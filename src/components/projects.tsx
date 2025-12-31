import healprime from '../assets/healprime.png';
import booksky from '../assets/booksky.png';
import calculator from '../assets/calculator.png';
import weather from '../assets/weather.png';
import startup from '../assets/startup.png';
import bootslander from '../assets/bootslander.png';
export default function Projects() {
    return (
        <section id='project' className="text-white py-[4rem] px-[2rem] sm:px-[3rem] md:px-[4rem] lg:px-[7rem]">
            <div className="flex flex-col justify-center text-center items-center">
                <h1 className="text-[1.9rem] sm:text-[2rem] md:text-[2.3rem] lg:text-[2.5rem] font-semibold uppercase underline decoration-[#8c00ff] underline-offset-[0.5rem]">Projects</h1>
                <div className="max-w-[40rem]">
                    <p className="font-semibold text-[#c0c0c0] text-[1rem] sm:text-[1.1rem] lg:text-[1.2rem] mt-[0.6rem] text-center  ">A showcase of the projects I have worked on, highlighting my skills and experience in various technologies.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[3rem] items-stretch mt-[3rem]">
                <div>
                    <a href='#' target="_blank"
                        rel="noopener noreferrer"
                        className='h-full block'>
                        <div className='flex flex-col  gap-[1rem] hover:shadow-[-1px_0px_19px_9px_#c1baba] transition-all duration-500 h-full rounded-md cursor-pointer p-[1.4rem] bg-[#111827]'>
                            <div>
                                <img src={healprime} alt='HealPrime Project' className='rounded-md' />
                            </div>
                            <div>
                                <h2 className='text-[1.7rem] sm:text-[1.8rem] md:text-[1.9rem]  lg:text-[2rem] font-semibold'>HealPrime</h2>
                                <h5 className='text-[#adadb0] leading-[1.6rem] text-[1.2rem] my-[0.4rem]'>A full-stack healthcare application built for efficient scheduling, secure health data, and digital consultations.</h5>
                                <div className='grid grid-cols-2 lg:grid-cols-3 mt-[0.9rem] gap-[0.5rem] font-semibold text-[#a855f7]'>
                                    <p className='bg-[#45454cab] cursor-pointer w-[5.8rem] py-[0.2rem] px-[0.5rem] rounded-full'>TypeScript</p>
                                    <p className='bg-[#45454cab] cursor-pointer w-[5rem] py-[0.2rem] px-[0.5rem] rounded-full'>React JS</p>
                                    <p className='bg-[#45454cab] cursor-pointer w-[6.9rem] py-[0.2rem] px-[0.5rem] rounded-full'>Tailwind CSS</p>
                                    <p className='bg-[#45454cab] cursor-pointer w-[5.8rem] py-[0.2rem] px-[0.5rem] rounded-full'>ExpressJS</p>
                                    <p className='bg-[#45454cab] cursor-pointer w-[5.8rem] py-[0.2rem] px-[0.5rem] rounded-full'>MongoDB</p>
                                    <p className='bg-[#45454cab] cursor-pointer w-[5.8rem] py-[0.2rem] px-[0.5rem] rounded-full'>ExpressJS</p>
                                    <p className='bg-[#45454cab] cursor-pointer w-[7.7rem] mr-[0.9rem] py-[0.2rem] px-[0.5rem] rounded-full'>Atomic Design</p>
                                    <p className='bg-[#45454cab] cursor-pointer w-[8rem] py-[0.2rem] px-[0.5rem] rounded-full'>Solid Principles</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className=' '>
                    <a href='https://helpful-tiramisu-a1d880.netlify.app/' target="_blank"
                        rel="noopener noreferrer"
                        className='h-full block'>
                        <div className='flex flex-col hover:shadow-[-1px_0px_19px_9px_#c1baba] transition-all duration-500  gap-[1rem] h-full rounded-md cursor-pointer p-[1.4rem] bg-[#111827]'>
                            <div>
                                <img src={booksky} alt='Booksky Project' className='rounded-md' />
                            </div>
                            <div>
                                <h2 className='text-[1.7rem] sm:text-[1.8rem] md:text-[1.9rem] lg:text-[2rem] font-semibold'>Booksky</h2>
                                <h5 className='text-[#adadb0] leading-[1.6rem] text-[1.2rem] my-[0.4rem]'>A simple and elegant web app to add, manage, and organize your personal book collection with ease.</h5>
                                <div className='grid grid-cols-2 lg:grid-cols-3 mt-[0.9rem] gap-[0.5rem] font-semibold text-[#a855f7]'>
                                    <p className='bg-[#45454cab] cursor-pointer w-[5.8rem] py-[0.2rem] px-[0.5rem] rounded-full'>JavaScript</p>
                                    <p className='bg-[#45454cab] cursor-pointer w-[5.8rem] py-[0.2rem] px-[0.5rem] rounded-full'>HTML</p>
                                    <p className='bg-[#45454cab] cursor-pointer w-[7.8rem] py-[0.2rem] px-[0.5rem] rounded-full'>Bootstrap CSS</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div>
                    <a href='https://calculatorapp-rosy.vercel.app/' target="_blank"
                        rel="noopener noreferrer"
                        className='h-full block'>
                        <div className='flex flex-col hover:shadow-[-1px_0px_19px_9px_#c1baba] transition-all duration-500  gap-[1rem] h-full rounded-md cursor-pointer p-[1.4rem] bg-[#111827]'>
                            <div>
                                <img src={calculator} alt='Calculator Project' className='rounded-md' />
                            </div>
                            <div>
                                <h2 className='text-[1.7rem] sm:text-[1.8rem] md:text-[1.9rem] lg:text-[2rem] font-semibold'>Calculator</h2>
                                <h5 className='text-[#adadb0] leading-[1.6rem] text-[1.2rem] my-[0.4rem]'>A clean and responsive web calculator for fast, accurate everyday calculations.</h5>
                                <div className='grid grid-cols-2 lg:grid-cols-3 mt-[0.9rem] gap-[0.5rem] font-semibold text-[#a855f7]'>
                                    <p className='bg-[#45454cab] cursor-pointer w-[5.8rem] py-[0.2rem] px-[0.5rem] rounded-full'>TypeScript</p>
                                    <p className='bg-[#45454cab] cursor-pointer w-[5rem] py-[0.2rem] px-[0.5rem] rounded-full'>React JS</p>
                                    <p className='bg-[#45454cab] cursor-pointer w-[5rem] py-[0.2rem] px-[0.5rem] rounded-full'>React JS</p>
                                    <p className='bg-[#45454cab] cursor-pointer w-[6.9rem] py-[0.2rem] px-[0.5rem] rounded-full'>Tailwind CSS</p>
                                    <p className='bg-[#45454cab] cursor-pointer w-[7.8rem] py-[0.2rem] px-[0.5rem] rounded-full'>Atomic Design</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div>
                    <a href='https://weather-app-mu-orpin-41.vercel.app/' target="_blank"
                        rel="noopener noreferrer"
                        className='h-full block'>
                        <div className='flex flex-col hover:shadow-[-1px_0px_19px_9px_#c1baba] transition-all duration-500  gap-[1rem] h-full rounded-md cursor-pointer p-[1.4rem] bg-[#111827]'>
                            <div>
                                <img src={weather} alt='Weather App' className='rounded-md' />
                            </div>
                            <div>
                                <h2 className='text-[1.7rem] sm:text-[1.8rem] md:text-[1.9rem] lg:text-[2rem] font-semibold'>Weather App</h2>
                                <h5 className='text-[#adadb0] leading-[1.6rem] text-[1.2rem] my-[0.4rem]'>A real-time weather application that provides accurate forecasts and current conditions for any location.</h5>
                                <div className='grid grid-cols-2 lg:grid-cols-3 mt-[0.9rem] gap-[0.5rem] font-semibold text-[#a855f7]'>
                                    <p className='bg-[#45454cab] cursor-pointer w-[5.8rem] py-[0.2rem] px-[0.5rem] rounded-full'>JavaScript</p>
                                    <p className='bg-[#45454cab] cursor-pointer w-[5rem] py-[0.2rem] px-[0.5rem] rounded-full'>React JS</p>
                                    <p className='bg-[#45454cab] cursor-pointer w-[6.9rem] py-[0.2rem] px-[0.5rem] rounded-full'>Tailwind CSS</p>
                                    <p className='bg-[#45454cab] cursor-pointer w-[9.4rem] py-[0.2rem] px-[0.5rem] rounded-full'>OpenWeather API</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div> <a href='https://startup-template-ts.vercel.app/' target="_blank"
                    rel="noopener noreferrer"
                    className='h-full block'>
                    <div className='flex flex-col hover:shadow-[-1px_0px_19px_9px_#c1baba] transition-all duration-500  gap-[1rem] h-full rounded-md cursor-pointer p-[1.4rem] bg-[#111827]'>
                        <div>
                            <img src={startup} alt='Startup Project' className='rounded-md' />
                        </div>
                        <div>
                            <h2 className='text-[1.7rem] sm:text-[1.8rem] md:text-[1.9rem] lg:text-[2rem] font-semibold'>Startup Application</h2>
                            <h5 className='text-[#adadb0] leading-[1.6rem] text-[1.2rem] my-[0.4rem]'>A modern and responsive landing page template designed to kickstart our startup’s web presence with clean design and smooth UX.</h5>
                            <div className='grid grid-cols-2 lg:grid-cols-3 mt-[0.9rem] gap-[0.5rem] font-semibold text-[#a855f7]'>
                                <p className='bg-[#45454cab] cursor-pointer w-[5.8rem] py-[0.2rem] px-[0.5rem] rounded-full'>TypeScript</p>
                                <p className='bg-[#45454cab] cursor-pointer w-[5rem] py-[0.2rem] px-[0.5rem] rounded-full'>React JS</p>
                                <p className='bg-[#45454cab] cursor-pointer w-[6.9rem] py-[0.2rem] px-[0.5rem] rounded-full'>Tailwind CSS</p>
                                <p className='bg-[#45454cab] cursor-pointer w-[5.8rem] py-[0.2rem] px-[0.5rem] rounded-full'>ExpressJS</p>
                                <p className='bg-[#45454cab] cursor-pointer w-[5.8rem] py-[0.2rem] px-[0.5rem] rounded-full'>MongoDB</p>
                                <p className='bg-[#45454cab] cursor-pointer w-[7.8rem] py-[0.2rem] px-[0.5rem] rounded-full'>Atomic Design</p>
                                <p className='bg-[#45454cab] cursor-pointer w-[8.2rem] py-[0.2rem] px-[0.5rem] rounded-full'>Solid Principles</p>
                            </div>
                        </div>
                    </div></a></div>
                <div>
                    <a href='https://manitemplatesbootstrap.netlify.app/' target="_blank"
                        rel="noopener noreferrer"
                        className='h-full block'>
                        <div className='flex flex-col hover:shadow-[-1px_0px_19px_9px_#c1baba] transition-all duration-500  gap-[1rem] h-full rounded-md cursor-pointer p-[1.4rem] bg-[#111827]'>
                            <div>
                                <img src={bootslander} alt='Bootslander Project' className='rounded-md' />
                            </div>
                            <div>
                                <h2 className='text-[1.7rem] sm:text-[1.8rem] md:text-[1.9rem] lg:text-[2rem] font-semibold'>Bootslander</h2>
                                <h5 className='text-[#adadb0] leading-[1.6rem] text-[1.2rem] my-[0.4rem]'>A Bootstrap-based UI templates collection offering clean, responsive designs for versatile web projects.</h5>
                                <div className='grid grid-cols-2 lg:grid-cols-3 mt-[0.9rem] gap-[0.5rem] font-semibold text-[#a855f7]'>
                                    <p className='bg-[#45454cab] cursor-pointer w-[5rem] py-[0.2rem] px-[0.5rem] rounded-full'>HTML</p>
                                    <p className='bg-[#45454cab] cursor-pointer w-[7.7rem] py-[0.2rem] px-[0.5rem] rounded-full'>Bootstrap CSS</p>
                                    <p className='bg-[#45454cab] cursor-pointer w-[5.8rem] py-[0.2rem] px-[0.5rem] rounded-full'>JavaScript</p>
                                    <p className='bg-[#45454cab] cursor-pointer w-[5.8rem] py-[0.2rem] px-[0.5rem] rounded-full'>AOS</p>
                                    <p className='bg-[#45454cab] cursor-pointer w-[5.8rem] py-[0.2rem] px-[0.5rem] rounded-full'>Carousel</p>
                                    <p className='bg-[#45454cab] cursor-pointer w-[6.2rem] py-[0.2rem] px-[0.5rem] rounded-full'>Modern UI</p>
                                </div>
                            </div>
                        </div></a>
                </div>

            </div>
        </section>
    );
}