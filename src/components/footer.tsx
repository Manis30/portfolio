import { IoLogoLinkedin } from "react-icons/io5";
import { SiLeetcode } from "react-icons/si";
import { SiHackerrank } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";
export default function Footer(){
    return(
        <section className="text-white text-center py-[3rem]">
            <h1 className="text-[#a855f7] uppercase font-semibold text-[1.5rem] mb-[1rem]">Mani S</h1>
            <div className="flex justify-center gap-[1.4rem] py-[0.8rem]">
                <a href="https://www.linkedin.com/in/mani-s-515606376" target="_blank"
                        rel="noopener noreferrer"><IoLogoLinkedin className="text-[1.4rem] duration-500 transition-all  hover:text-[#a855f7] cursor-pointer"/></a>
                <a href="https://leetcode.com/u/ManiSaravanan/" target="_blank"
                        rel="noopener noreferrer"><SiLeetcode className="text-[1.4rem] duration-500 transition-all  hover:text-[#a855f7] cursor-pointer"/></a>
                        <a href="https://www.hackerrank.com/profile/mani30saravanan" target="_blank"
                        rel="noopener noreferrer"><SiHackerrank className="text-[1.4rem] duration-500 transition-all  hover:text-[#a855f7] cursor-pointer"/></a>
                        <a href="https://github.com/Manis30" target="_blank"
                        rel="noopener noreferrer"><FaGithub className="text-[1.4rem] duration-500 transition-all  hover:text-[#a855f7] cursor-pointer"/></a>
                        <a href="mailto:mani30saravanan@gmail.com" target="_blank"
                        rel="noopener noreferrer"><SiGmail className="text-[1.4rem] duration-500 transition-all  hover:text-[#a855f7] cursor-pointer"/></a>
                         <a href="https://www.instagram.com/mani_s.17/" target="_blank"
                        rel="noopener noreferrer"><FaInstagram className="text-[1.4rem] duration-500 transition-all  hover:text-[#a855f7] cursor-pointer"/></a>
            </div>
            <p className="mt-[1rem] text-[#9ca3af]">© 2025 MANI S. All rights reserved.</p>
        </section>
    );
}