import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import avatar from './../assets/images/compress.jpg'


export default function Aboutme() {
  return (
    <div className='w-full h-[40rem] flex max-[660px]:flex-col  max-[660px]:items-center' id="container">
        <div className="w-1/2 h-full flex flex-col items-end justify-center gap-3  max-[660px]:items-center">
          <div className="flex flex-col gap-5 w-[60%] h-[60%]  justify-center" >
            <h1 className='font-bold text-2xl text-start'>Fullstack Web Developer</h1>
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
        <div className="w-1/2 h-full  flex justify-start items-center  max-[660px]:items-center ">
          <div className="fancy w-[20rem] h-[20rem] min-[660px]:ml-[70px]  max-[900px]:w-[15rem] max-[900px]:h-[15rem]  max-[660px]:w-full  max-[660px]:h-[15rem]    border-[5px] border-gray-200" style={{ backgroundImage: `url(${avatar})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>
        </div>
    </div>
  )
}
