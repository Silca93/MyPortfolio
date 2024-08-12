import React from 'react'
import { ImLocation } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import avatar from './../assets/images/needygf.jpg'


export default function Aboutme() {
  return (
    <div className='w-full h-[40rem]  flex'>
       <div className="w-1/2 h-full flex flex-col items-end justify-center gap-3">
          <div className="flex flex-col gap-5 w-[60%] h-[60%]  justify-center" >
            <h1 className='font-bold text-2xl text-start'>Fullsatck Web Developer</h1>
            <div className="flex gap-2">
              <p className=''>Hi, I'm Eric. A Web Developer. I am based in Brussels, Belgium 
                <i className="fa-solid fa-location-dot text-red-600 pl-2 mb-2" ></i>
              </p>
             
            </div>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/eric-delhaye-91a39b164/">
                <FaLinkedin className='text-xl' />
              </a>
              <a href="https://github.com/Silca93">
                <FaGithub className='text-xl' />
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full  flex justify-start items-center ">
          <div className="fancy w-[20rem] h-[20rem]   border-[5px] border-gray-300 mx-[5rem]" style={{ backgroundImage: `url(${avatar})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>
        </div>
    </div>
  )
}
