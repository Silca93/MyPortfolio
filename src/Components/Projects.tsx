import React from 'react'


export default function Projects() {
  return (
    <>
       
            <div className="flex w-full h-[3rem] justify-center ">
                <h1 className='mr-[45rem] font-2xl text-2xl font-bold text-[#6F4E37]'>My Projects</h1>

            </div>
        <div className='w-full  items-center flex justify-center '>
            <div className="flex w-3/5  items-center justify-center">
                <div className=" left flex flex-col w-1/2 h-[30rem]  justify-center items-center">
                   <div className='pwd w-full h-[25rem] flex justify-center items-center'>

                   </div>
                   <div className="w-[10rem] h-[3rem] flex justify-center items-center border-[2px] border-blue-600">
                    <a href="https://silca93.github.io/PasswordGenerator/" className='text-xl'>
                        View Live</a>
                   </div>
                </div>
                
                <div className="right flex flex-col gap-5 w-1/2 h-[30rem]  items-start pl-3 justify-center">
                <h1 className='text-xl font-bold'>Password Generator</h1>
                <p>A versatile password generator built with vanilla JavaScript that empowers users to create secure passwords tailored to their specific needs. Users can customize their password by:</p>
                
                <li>
                    Including symbols (e.g., !@#$%^&*())
                </li>
                <li>
                    Using only letters (both uppercase and lowercase)
                </li>
                <li>
                    Adding numerical digits (0-9)
                </li>
                <li>
                    Specifying the desired password length
                </li>
                <li>
                    The intuitive interface allows for easy selection of options and generates a strong password with a single click, ensuring enhanced security and personalization.
                </li>

                </div>
            </div>
        </div>
    </>
  )
}
