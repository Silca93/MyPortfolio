import { ImArrowDownLeft } from "react-icons/im";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";



export default function Footer() {
  return (
    <div className='w-full  pt-[5rem]'>
        <div className="up w-full h-[15rem] max-[768px]:h-[10rem]  flex flex-col gap-3 items-center justify-center" >
            <h1 className='text-[#6F4E37] font-bold text-2xl'>Contact</h1>
            <div className="flex gap-2 flex-wrap">

            <h3 className='max-[768px]:text-sm px-5 text-center font-bold'>Let's get in touch? Just send me en email or hit me up on LinkedIn.
            </h3>
            <ImArrowDownLeft className='mt-1 ml-1 animate-pulse max-[550px]:hidden' />
            </div>
            <div className="flex w-[17rem] h-[3rem] my-4">
                <div className="icon w-[4rem] h-full flex justify-center items-center ">
                    <div className='circle w-[3rem] h-[3rem] rounded-full bg-[#FEFEFA] flex items-center justify-center'>
                        
                <IoIosMail  className='text-3xl'/>
                    </div>

                </div>
                <div className="text w-[13rem] h-full flex justify-start items-center">
                    <a href="mailto:eric_delhaye@hotmail.com" className='hover:text-blue-600 cursor-pointer'>eric_delhaye@hotmail.com</a>
                </div>

            </div>
            
        </div>
        <div className="down  w-full h-[10rem]  flex bg-[#dbdad8]">
            <div className="left w-1/2 h-full  flex justify-center items-center">
                <h3 className='font-bold text-xl max-[768px]:text-lg px-5'>All copyrights © reserved 2024</h3>
            </div>
            <div className="right w-1/2 h-full flex justify-center items-center">
            <div className="flex gap-5">
              <a href="https://www.linkedin.com/in/eric-delhaye-91a39b164/">
                <FaLinkedin className='text-2xl' />
              </a>
              <a href="https://github.com/Silca93">
                <FaGithub className='text-2xl' />
              </a>
            </div>

            </div>

        </div>

    </div>

  )
}
