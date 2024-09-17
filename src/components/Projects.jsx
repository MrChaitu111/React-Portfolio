import React from "react";
import projects from "./Data/projects.json";

const Projects = () => {
  return (
    <>
    <div id="projects" className="project_item" data-aos="fade-up"
    data-aos-duration="1000">
      <h2 className="projects1 text-2xl size-32 font-bold ml-36 mt-5">PROJECTS</h2>
    </div>
    <div className="container projects">
      {projects.map((data) =>{
        return(
          <>
          <div key={data.id}>
          </div>
          <div className="ppro_item" data-aos="zoom-in-down"
    data-aos-duration="1000">
            <img className="pro_item items-center" src={data.imageSrc} alt="" />
            <h3 className="title_card ">{data.title}</h3><br/>
           <p className="para">{data.description}</p>
           <a href="www.amazon.com" className="btn btn-primary mt-3">Go somewhere</a>
          </div>
          </>
        )
      })}
    </div>
    </>
  );
};

export default Projects;
