import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar'
import './App.css'
// import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
// import About from "./components/About";

import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from './components/Experience';
import Contact from './components/Contact';
import Aos from "aos";
import "aos/dist/aos.css"



const App = () => {
  useEffect(() => {
    Aos.init();


  },[])
  return (
    <div>
      <Navbar/>
      <Home/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Contact/>
      {/* <About/> */}

      {/* <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/experience' element={<Experience/>}/>
      </Routes> */}
        
    </div>
  )
}

export default App
