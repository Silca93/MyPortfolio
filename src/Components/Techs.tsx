import { useEffect } from 'react';

import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { SiJavascript } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoMdGitMerge } from "react-icons/io";
import { FaNpm } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { FaLongArrowAltRight } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";
import { SiPhp } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa6";







import AOS from 'aos';
import "./../../node_modules/aos/dist/aos.css"


export default function () {
    useEffect(() => {
        AOS.init({
          duration: 2000, 
          offset: 100, 
        });
      }, []);

  return (
    <div className='w-full h-[10rem]  flex gap-4 justify-center items-center mb-3 max-[768px]:flex-col'>
        <div className="flex items-center justify-center gap-2">

        <h1 className='text-xl font-bold'>
            Skills 
        </h1>
        <div className="max-[768px]:transform  max-[768px]:rotate-45 ">
          <FaLongArrowAltRight className='min-[768px]:animate-bounce  min-[768px]:mt-2 max-[768px]:mb-2 ml-3 transform rotate-45'/>
        </div>

        </div>
        <div data-aos="fade-left" data-aos-delay="400"> {/* Adjust the offset value as needed */}
        <div className="flex gap-5 justify-center items-center ml-5 flex-wrap">
          <FaHtml5 className='text-orange-600 text-2xl hover:scale-125 duration-200 ease-in-out max-[800px]:text-xl' />
          <IoLogoCss3 className='text-blue-600 text-2xl hover:scale-125 duration-200 ease-in-out max-[800px]:text-xl' />
          <FaSass className='text-pink-500 text-2xl hover:scale-125 duration-200 ease-in-out max-[800px]:text-xl' />
          <BsBootstrapFill className='text-purple-500 text-2xl hover:scale-125 duration-200 ease-in-out max-[800px]:text-xl'/>
          <RiTailwindCssFill className='text-cyan-400 text-2xl hover:scale-125 duration-200 ease-in-out max-[800px]:text-xl' />
          <SiJavascript className='text-yellow-400 bg-black text-2xl hover:scale-125 duration-200 ease-in-out max-[800px]:text-xl' />
          <SiTypescript className='text-blue-400 text-2xl hover:scale-125 duration-200 ease-in-out max-[800px]:text-xl' />
          <FaPython className='text-2xl hover:scale-125 duration-200 ease-in-out max-[800px]:text-xl' />
          <SiDjango className='text-green-700 text-2xl hover:scale-125 duration-200 ease-in-out max-[800px]:text-xl' />
          <FaReact className='text-[#00B9E8] text-2xl hover:scale-125 duration-200 ease-in-out max-[800px]:text-xl' />
          <SiNextdotjs className='text-2xl hover:scale-125 duration-200 ease-in-out max-[800px]:text-xl' />
          <SiPhp className='text-[#717dd5]  text-[2.3rem] hover:scale-125 duration-200 ease-in-out max-[800px]:text-xl' />
          <SiMongodb  className='text-[#39a746]  text-3xl hover:scale-125 duration-200 ease-in-out max-[800px]:text-xl' />
          <SiExpress className='bg-white rounded-full p-1 text-3xl hover:scale-125 duration-200 ease-in-out max-[800px]:text-xl' />
          <FaNode className=' bg-white rounded-full p-1 text-3xl hover:scale-125 duration-200 ease-in-out max-[800px]:text-xl' />
          <SiMysql className='text-cyan-700 text-[2.2rem] hover:scale-125 duration-200 ease-in-out max-[800px]:text-xl' />
          <TbBrandRedux  className='text-2xl hover:scale-125 duration-200 ease-in-out max-[800px]:text-xl text-purple-600'/>
          <FaNpm className='text-red-700 text-2xl hover:scale-125 duration-200 ease-in-out max-[800px]:text-xl' />
          <IoMdGitMerge className='text-orange-500 text-2xl hover:scale-125 duration-200 ease-in-out max-[800px]:text-xl' />
          <FaFigma className='text-2xl hover:scale-125 duration-200 ease-in-out max-[800px]:text-xl' />
        </div>
      </div>
    </div>
  )
}
