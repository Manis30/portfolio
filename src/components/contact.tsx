import { useState } from "react";
import emailjs from 'emailjs-com'
export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [sub, setSub] = useState('');
    const [msg, setMsg] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [msgError, setMsgError] = useState(false);
    const handleInput = (e: any) => {
        let value = e.target.value;
        if (e.target.id == 'name') {
            setName(value)
            setNameError(false);
        }
        if (e.target.id == 'email') {
            setEmail(value)
            setEmailError(false);
            setInvalidEmail(false);
        }
        if (e.target.id == 'sub') {
            setSub(value)
        }
        if (e.target.id == 'msg') {
            setMsg(value)
            setMsgError(false);
        }
    }
    const ValidateFields = () => {
        if (!name) {
            setNameError(true);
        }
        if (!email) {
            setEmailError(true);
            setInvalidEmail(false);
        }
        else {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                setEmailError(false);
                setInvalidEmail(false);
            }
            else {
                setEmailError(false);
                setInvalidEmail(true);
            }
        }
        if (!msg) {
            setMsgError(true);
        }
        if (name && email && msg) {
            emailjs.send(
                import.meta.env.VITE_EMAIL_SERVICE,
                import.meta.env.VITE_EMAIL_TEMPLATE,
                {
                    name,
                    email,
                    sub,
                    msg
                },
                import.meta.env.VITE_EMAIL_PUBLIC
            ).then(() => alert('Message sent to Mani successfully')).catch((error: any) => alert("Failed to send message"))
            setEmail('')
            setMsg('')
            setName('')
            setSub('')
        }

    }
    return (
        <section id='contact' className="py-[4rem]  justify-center  text-white px-[2rem] sm:px-[2.5rem] md:px-[3rem] lg:px-[6rem]">
            <div className="flex flex-col justify-center text-center items-center">
                <h1 className="text-[1.9rem] sm:text-[2rem] md:text-[2.3rem] lg:text-[2.5rem] font-semibold uppercase underline decoration-[#8c00ff] underline-offset-[0.5rem]">Contact</h1>
                <div className="max-w-[40rem]">
                    <p className="font-semibold text-[#c0c0c0] text-[1rem] sm:text-[1.1rem] lg:text-[1.2rem] mt-[0.6rem] text-center  ">I’d love to hear from you—reach out for any opportunities or questions!</p>
                </div>
            </div>
            <div className="flex justify-center mt-[4rem] ">
                <form className="max-w-[30rem] w-[100%] bg-[#0d081f] border rounded-md border-[#403a53] p-[1.5rem]">
                    <h3 className="text-center text-[1.5rem] mb-[0.6rem] font-semibold">Connect With Me 🚀</h3>
                    <input type="text" placeholder="Your Name" className="border border-[#403a53] mb-[1rem] rounded-md outline-0 w-full p-[0.8rem] focus:border-purple-500" id='name' onChange={(e) => handleInput(e)} value={name} required />
                    {nameError ? <span className="text-red-300">Name is required</span> : ""}
                    <input type="email" placeholder="Your Email" className="border border-[#403a53] mb-[1rem] rounded-md outline-0 w-full p-[0.8rem] focus:border-purple-500" id='email' value={email} onChange={(e) => handleInput(e)} required />
                    {emailError ? <span className="text-red-300">Email is required</span> : ""}
                    {invalidEmail ? <span className="text-red-300">Invalid Email</span> : ""}
                    <input type="text" placeholder="Subject" className="border border-[#403a53] mb-[1rem] rounded-md outline-0 w-full p-[0.8rem] focus:border-purple-500" id='sub' value={sub} onChange={(e) => handleInput(e)} />
                    <textarea rows={6} cols={10} placeholder="Message" id='msg' className="border border-[#403a53] mb-[1.4rem] rounded-md outline-0  p-[0.8rem] w-full focus:border-purple-500" onChange={(e) => handleInput(e)} required value={msg}></textarea>
                    {msgError ? <span className="text-red-300">Message is required</span> : ""}
                    <div className="text-center">
                        <button type="button" onClick={ValidateFields} className="bg-gradient-to-r from-purple-500 to-pink-500 text-black w-full p-[0.8rem] rounded-md cursor-pointer font-bold transition-all duration-500 hover:from-purple-600  hover:to-pink-600">Send</button>
                    </div>
                </form>
            </div>
        </section>
    );
}