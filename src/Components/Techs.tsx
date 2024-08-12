
import React from 'react';
import { useState, useEffect } from 'react';

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
    <div className='w-full h-[10rem]  flex gap-4 justify-center items-center mb-3'>
        <div className="flex items-center justify-center gap-2">

        <h1 className='text-xl font-bold'>
            Skills 
        </h1>
        <FaLongArrowAltRight className='animate-bounce  mt-2 ml-3' />

        </div>
        <div data-aos="fade-left" data-aos-delay="400"> {/* Adjust the offset value as needed */}
        <div className="flex gap-5 justify-center items-center ml-5 flex-wrap">
          <FaHtml5 className='text-orange-600 text-2xl hover:scale-125 duration-200 ease-in-out' />
          <IoLogoCss3 className='text-blue-600 text-2xl hover:scale-125 duration-200 ease-in-out' />
          <FaSass className='text-pink-500 text-2xl hover:scale-125 duration-200 ease-in-out' />
          <RiTailwindCssFill className='text-cyan-400 text-2xl hover:scale-125 duration-200 ease-in-out' />
          <SiJavascript className='text-yellow-400 bg-black text-2xl hover:scale-125 duration-200 ease-in-out' />
          <SiTypescript className='text-blue-400 text-2xl hover:scale-125 duration-200 ease-in-out' />
          <FaPython className='text-2xl hover:scale-125 duration-200 ease-in-out' />
          <SiDjango className='text-green-700 text-2xl hover:scale-125 duration-200 ease-in-out' />
          <FaReact className='text-[#00B9E8] text-2xl hover:scale-125 duration-200 ease-in-out' />
          <SiNextdotjs className='text-2xl hover:scale-125 duration-200 ease-in-out' />
          <IoMdGitMerge className='text-orange-500 text-2xl hover:scale-125 duration-200 ease-in-out' />
          <SiMysql className='text-cyan-700 text-[2.2rem] hover:scale-125 duration-200 ease-in-out' />
          <TbBrandRedux  className='text-2xl hover:scale-125 duration-200 ease-in-out text-purple-600'/>
          <FaNpm className='text-red-700 text-2xl hover:scale-125 duration-200 ease-in-out' />
          <FaFigma className='text-2xl hover:scale-125 duration-200 ease-in-out' />
        </div>
      </div>
    </div>
  )
}
