import myimage from '../assets/Mani S_CSE1.jpeg';
import resume from '../assets/resume_mani.pdf';
import TextType from './TextType';


export default function Home() {
  return (
    <main className="text-white py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[6.7rem] px-[2rem] " id='about'>
      <div className="flex flex-col lg:flex-row  items-center justify-center gap-[5rem]">
        <div className='max-w-[25rem] w-[100%] order-2 lg:order-1'>
          <h1 className='font-semibold text-[1.8rem] text-center lg:text-left md:text-[2rem] lg:text-[2.4rem]'>Hi, I am <span className='font-bold text-[1.8rem] md:text-[2rem]  lg:text-[2.4rem]'>MANI S</span></h1>
          <h3 className='font-semibold text-[1.3rem] text-center lg:text-left md:text-[1.4rem] lg:text-[1.6rem] mt-[0.6rem]'>I am a <span className='text-[#8c00ff] font-bold'><TextType
            text={["Full Stack Developer",
              "Frontend Developer",
              "React.js Developer",
              "MERN Stack Developer", "Java Developer"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          /></span></h3>
          <p className='max-w-[24rem] mt-[0.6rem] text-[#d5d5d5]'>Full-stack developer with knowledge in React.js, Node.js, MongoDB, and other modern web technologies. Experienced in building responsive and dynamic web applications through academic and personal projects. Passionate about creating efficient solutions and enhancing user experiences.</p>
          <div className='flex flex-col gap-[1rem] lg:flex-row'>
            <a href={resume} download='Mani_S_Resume' className='uppercase cursor-pointer bg-[#8c00ff] p-[1rem] text-[1.3rem] font-semibold rounded-full mt-[2rem] inline-block shadow-[0_0_20px_rgba(168,85,247,0.8)] text-center hover:shadow-[0_0_35px_rgba(168,85,247,1)] transition-all duration-300'>download cv</a> <a className='text-center uppercase cursor-pointer bg-[#8c00ff] p-[1rem] text-[1.3rem] font-semibold rounded-full mt-[2rem] inline-block shadow-[0_0_20px_rgba(168,85,247,0.8)] hover:shadow-[0_0_35px_rgba(168,85,247,1)] transition-all duration-300' href='#contact'>Get in Touch</a>
          </div>
        </div>
        <div className="lg:w-[26rem] w-[16rem] aspect-square border-[#8c00ff] border-4 rounded-full overflow-hidden flex items-center justify-center order-1 lg:order-2">
  <img
    src={myimage}
    alt="My image"
    className="w-full h-full object-cover"
  />
</div>


      </div>
    </main>
  );
}