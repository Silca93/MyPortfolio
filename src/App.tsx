import { useState, useEffect} from 'react'



import Aboutme from './Components/Aboutme'
import Techs from './Components/Techs'
import Details from './Components/Details'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import './App.css'

function App() {


  return (
    
    <div  className='w-screen bg-gradient-to-b from-[#F2F3F4] to-[#F8F8FF] overflow-x-hidden' >
      <section className="w-full h-[3rem] flex justify-between bg-[#dbdad8] items-center">
        <h1 className='ml-5  text-xl font-bold text-[#6F4E37]'>Silca.dev</h1>
        <li className='flex gap-2 mr-7'>
          <ul className='text-xl text-[#6F4E37] font-bold hover:underline-offset-[0.5rem] hover:underline duration-300 cursor-pointer'>Home</ul>
          <ul className='text-xl text-[#6F4E37] font-bold hover:underline-offset-[0.5rem] hover:underline duration-300 cursor-pointer'>About</ul>
          <ul className='text-xl text-[#6F4E37] font-bold hover:underline-offset-[0.5rem] hover:underline duration-300 cursor-pointer'>Projects</ul>
        </li>
      </section>

      <section className="">
        <Aboutme/>
      </section>

      <section className=''>
        <Techs/>
      </section>
      
      <section className=''>
        <Details/>
      </section>

      <section>
        <Projects/>
      </section>

      <section className='mt-[10rem]'>
        <Footer/>
      </section>

      
  
    </div>
  )
}

export default App
