import ifet from '../assets/ifet-logo-old-white.png';
export default function Education() {
    return (
        <section id='education' className="py-[4rem]  justify-center  text-white px-[1rem] sm:px-[2rem] md:px-[3rem] lg:px-[6rem]">
            <div className="flex flex-col justify-center text-center items-center">
                <h1 className="text-[1.9rem] sm:text-[2rem] md:text-[2.3rem] lg:text-[2.5rem] font-semibold uppercase underline decoration-[#8c00ff] underline-offset-[0.5rem]">Education</h1>
                <div className="max-w-[40rem]">
                    <p className="font-semibold text-[#c0c0c0] text-[1rem] sm:text-[1.1rem] lg:text-[1.2rem] mt-[0.6rem] text-center  ">My education has been a journey of learning and development. Here are the details of my academic background.</p>
                </div>
            </div>
            <div className=" relative mx-[1rem] sm:px-[2rem] md:px-[4rem] lg:mx-[10rem] pt-[3rem]">
                <div className="flex flex-start mr:[2rem] sm:mr-[3rem] md:mr-[5rem] lg:mr-[18rem]">
                    <div className="ml-[1rem] sm:ml-[2rem] md:ml-[3rem] lg:ml-[5rem] cursor-pointer shadow-[0_0_3px_0px_blue] hover:shadow-[0_0_6px_2px_blue] transition-all duration-300 hover:scale-[1.05] bg-[#111827] border border-white rounded-lg z-1 p-[1.5rem]  ">
                        <div className='flex flex-col lg:flex-row items-center  gap-[0.7rem]'>
                            <img src={ifet} alt='ifet college' className='h-[5.2rem] w-[5.2rem] object-contain' />
                            <div>
                                <h3 className='text-[1.3rem] font-semibold leading-[1.7rem]'>Bachelor of Engineering – Computer Science and Engineering</h3>
                                <h5 className='mb-[0.5rem] text-[#c7c4c4]'>IFET College Of Engineering</h5>
                                <p className='text-[#808080]'>Nov 2022 - Present</p>
                            </div>
                        </div>
                        <h3 className='text-[1.2rem] my-[0.5rem] text-[#9ca3af] font-semibold'>CGPA: 8.2</h3>
                        <p className='font-semibold text-[#9ca3af]'>I completed my Bachelor of Engineering (B.E.) in Computer Science and Engineering, gaining a strong foundation in core computer science and engineering principles. My studies covered C/C++, Java, Data Structures, Computer Networks, Operating Systems, DBMS, and Software Engineering. Through academic projects, I strengthened my problem-solving and logical thinking skills, building a solid base in software development and real-world technical concepts.</p>
                    </div>
                </div>
                <div className="absolute top-[3rem] bottom-[3rem] w-[2px] bg-white left-1/2 -translate-x-1/2"></div>
                <div className="flex flex-end ml-[2rem] sm:ml-[4rem] md:ml-[6rem] lg:ml-[18rem] mt-[5rem]">
                    <div className="ml-[1rem] sm:ml-[2rem] md:ml-[3rem] lg:ml-[5rem] cursor-pointer shadow-[0_0_3px_0px_blue] hover:shadow-[0_0_6px_2px_blue] transition-all duration-300 hover:scale-[1.05] bg-[#111827] border border-white rounded-lg z-1 p-[1.5rem] ">
                        <div className='flex  flex-col '>
                            <h3 className='text-[1.3rem] font-semibold leading-[1.7rem]'>Higher Secondary (XII) – PCM with Biology</h3>
                            <h5 className='my-[0.5rem] text-[#c7c4c4]'>Government Higher Secondary School,Athipadi,Krishnagiri</h5>
                            <p className='text-[#808080]'>Jun 2021 - Mar 2022</p>
                        </div>
                        <h3 className='text-[1.2rem] my-[0.5rem] text-[#9ca3af] font-semibold'>Grade: 81.4%</h3>
                        <p className='font-semibold text-[#9ca3af]'>I completed my Class 12 education from Government Higher Secondary School, Athipadi, Krishnagiri, under the State Board, where I studied Physics, Chemistry, and Mathematics (PCM) with Biology.</p>
                    </div>
                </div>
                <div className="flex flex-start mr-[2rem] sm:mr-[3rem] md:mr-[5rem] lg:mr-[18rem] mt-[5rem]">
                    <div className="ml-[1rem] sm:ml-[2rem] md:ml-[3.5rem] lg:ml-[5rem] cursor-pointer shadow-[0_0_3px_0px_blue] hover:shadow-[0_0_6px_2px_blue] transition-all duration-300 hover:scale-[1.05] bg-[#111827] border border-white rounded-lg z-1 p-[1.5rem] ">
                        <div className='flex  flex-col '>
                            <h3 className='text-[1.3rem] font-semibold leading-[1.7rem]'>SSLC (X) – State Board</h3>
                            <h5 className='my-[0.2rem] text-[#c7c4c4]'>Government High School, T.Ammapettai ,Dharmapuri</h5>
                            <p className='text-[#808080]'>Jun 2019 - Mar 2020</p>
                        </div>
                        <h3 className='text-[1.2rem] my-[0.5rem] text-[#9ca3af] font-semibold'>Grade: 94%</h3>
                        <p className='font-semibold text-[#9ca3af]'>I completed my Class 10 education from Government High School, Ammapettai, under the State Board.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}