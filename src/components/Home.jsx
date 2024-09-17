import React, { useEffect, useRef } from "react";
import hero from "./Data/hero.png";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null)
  useEffect(() =>{
 const  options ={
  strings:[
    "Welcome to My Profile",
    "My Name Is Chaitanya",
    "Iam a Full-Stack Developer", 
    "React-Developer"
  ],
  typeSpeed:50,
  startDelay: 1000,
  backSpeed:50,
  loop:true

 };
 const typed = new Typed(typedRef.current, options)

 return()=>{
  typed.destroy()
 }
},[])
  return (
    <>
      <div id="home" className="container home" 
      >
        <div className="left" data-aos="fade-right"
         data-aos-duration="1000">
          <h1 ref={typedRef}></h1> 
          <a
            href=""
            download="Resume.pdf"
            className="btn btn-outline-warning mr-4 mt-9 my-4"
          >
            Download Resume
          </a>
        </div>
        <div className="right"
        data-aos="fade-left"
        data-aos-duration="1000">
          <div className="img">
            <img className="mr-40" src={hero} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
