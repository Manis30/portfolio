import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active,setActive]=useState('about')
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b px-[0rem] lg:px-[12rem] border-white/10 dark:bg-gray-900">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <h1 className='text-white font-bold text-[1.7rem] uppercase'><span className='text-[#8c00ff]'>{"<"}</span>Mani<span className='text-[#8c00ff]'>/</span><span>S</span><span className='text-[#8c00ff]'>{">"}</span></h1>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#8c00ff] dark:text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex text-[1.1rem] lg:gap-x-12 text-[#afadb1]">
          <a href="#about" onClick={()=>setActive('about')} className={`font-semibold hover:text-[#8c00ff] ${active=='about'?'text-[#8c00ff]':'text-[#afadb1]'}`} >
            About
          </a>
          <a href="#skills"   onClick={()=>setActive('skills')} className={`font-semibold hover:text-[#8c00ff] ${active=='skills'?'text-[#8c00ff]':'text-[#afadb1]'}`}>
            Skills
          </a>
          <a href="#project" onClick={()=>setActive('project')} className={`font-semibold hover:text-[#8c00ff] ${active=='project'?'text-[#8c00ff]':'text-[#afadb1]'}`}>
            Project
          </a>
          <a href="#education" onClick={()=>setActive('education')} className={`font-semibold hover:text-[#8c00ff] ${active=='education'?'text-[#8c00ff]':'text-[#afadb1]'}`}>
            Education
          </a>
          <a href="#contact" onClick={()=>setActive('contact')} className={`font-semibold hover:text-[#8c00ff] ${active=='contact'?'text-[#8c00ff]':'text-[#afadb1]'}`}>
            Contact
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div>
            <a href='https://github.com/Manis30' target="_blank"
              rel="noopener noreferrer"><SiGithub className='text-white text-[1.4rem] mr-[1rem] duration-500 transition-all  hover:text-[#a855f7] cursor-pointer' /></a>
          </div>
          <div>
            <a href='https://www.linkedin.com/in/mani-s-515606376' target="_blank"
              rel="noopener noreferrer"><FaLinkedin className='text-white text-[1.4rem] duration-500 transition-all  hover:text-[#a855f7] cursor-pointer' /></a>
          </div>

        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden ">
        <div className="fixed inset-0 z-50 " />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto  bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900 dark:sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <h1 className='text-white font-semibold text-[2rem] uppercase'>Mani S</h1>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-white/10">
              <div className="space-y-2 py-6">
                <a
                  href="#about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                >
                  About
                </a>
                <a
                  href="#skills"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                >
                  Skills
                </a>
                <a
                  href="#project"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                >
                  Project
                </a>
                <a
                  href="#education"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                >
                  Education
                </a>
                <a
                  href="#contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
