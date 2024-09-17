import React from "react";
import google from "./Data/google.png";
import microsoft from "./Data/microsoft.png";
import netflix from "./Data/netflix.png";

const Experience = () => {
  return (
    <>
      <div id="experience" className="contaciner ex" data-aos="fade-down"
    data-aos-duration="1000">
        <h1 className="ex_itemses text-2xl size-32 font-bold ml-36  ">EXPERIENCE</h1>
        <div>
          <div className="ex-items" data-aos="fade-up-right"
         data-aos-duration="2000">
            <img className="size-18" src={google} alt="google" />
            <div className="ex-item mt-0 ml-10">
            <h2 className="text-2xl mt-1 p-0">Senior Software Development Engineer SDE - I</h2>
            <h3 className="text-center"><span style={{alignItems:"center", color:"skyblue",fontWeight:"bold", fontSize:"18px"}}>Sept,2023 Present</span><span style={{color:"yellow", fontSize:"20px", fontWeight:"bold", marginLeft:"10px"}}>CA,United State</span></h3>
            <h3 className="text-center"style={{color:"gold"}}>Worked on Google Gmail</h3>
            <h3 className="text-center"style={{color:"gold"}}>Worked with the Google Bard Team</h3>
            </div>
          </div>
          <div className="ex-items" data-aos="fade-up-left"
         data-aos-duration="2000">
            <img src={microsoft} alt="microsoft" />
            <div className="ex-item mt-0 ml-10">
            <h2 className="text-2xl mt-1 p-0">Software Development Engineer SDE - II</h2>
            <h3 className="text-center"><span style={{alignItems:"center", color:"skyblue",fontWeight:"bold", fontSize:"18px"}}>Aug, 2022 & Aug, 2023</span><span style={{color:"yellow", fontSize:"20px", fontWeight:"bold", marginLeft:"10px"}}>London, UK</span></h3>
            <h3 className="text-center"style={{color:"gold"}}>Worked on Windows 10 terminal</h3>
            <h3 className="text-center"style={{color:"gold"}}>Worked on Window 11 Upcoming features</h3>
            </div>
          </div>
          <div className="ex-items" data-aos="fade-up-right"
         data-aos-duration="2000">
            <img src={netflix} alt="netflix" />
            <div className="ex-item mt-0 ml-10">
            <h2 className="text-2xl mt-1 p-0">Software Development Engineer - Intern</h2>
            <h3 className="text-center"><span style={{alignItems:"center", color:"skyblue",fontWeight:"bold", fontSize:"18px"}}>April, 2021 & Jun, 2022</span><span style={{color:"yellow", fontSize:"20px", fontWeight:"bold", marginLeft:"10px"}}>Bengluru, India</span></h3>
            <h3 className="text-center" style={{color:"gold"}}>Worked on Nextflix payment system</h3>
            <h3 className="text-center" style={{color:"gold"}}>Helped to create UI for video player</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
