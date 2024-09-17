import React from 'react'
import firebase from './Data/firebase.png'
import graphql from './Data/graphql.png'
import style from './Data/style.png'
import html from './Data/html.png'
import javascript from './Data/javascript.png'
import node from './Data/node.png'
import react from './Data/react.png'
import figma from './Data/figma.png'
import { FaDivide } from 'react-icons/fa'

const Skills = () => {
  return (
  <>
  <div id="skills" className="skill_item" data-aos="fade-down"
    data-aos-duration="1000">
  <h2 className="items text-2xl size-32 font-bold ml-36 mt-5"> SKKILS</h2>
  </div>
  <div className="container skills">
    {/* html */}
    <div className="boxes" data-aos="flip-left"
         data-aos-duration="1000">
    <img className="box h-44 w-44" src={html} alt="html" />
    <h2 className="box_html">HTML</h2>
    </div>
    {/* css */}
    <div className="boxes" data-aos="flip-right"
    data-aos-duration="1000">
    <img className="box h-44 w-44" src={style} alt="style" />
    <h2 className="box_html">STYLE</h2>
    </div>
    {/* js */}
    <div className="boxes" data-aos="flip-left"
         data-aos-duration="1000">
    <img className="box h-44 w-44" src={javascript} alt="javascript" />
    <h2 className="box_html_java">JAVASCRIPT</h2>
    </div>
  {/* react */}
    <div className="boxes" data-aos="flip-right"
    data-aos-duration="1000">
    <img className="box h-44 w-44" src={react} alt="react" />
    <h2 className="box_html">REACT</h2>
    </div>
    {/* node */}
    <div className="boxes" data-aos="flip-left"
         data-aos-duration="1000">
    <img className="box h-44 w-44" src={node} alt="node" />
    <h2 className="box_html_node">NODE.JS</h2>
    </div>
    {/* figma */}
    <div className="boxes" data-aos="flip-right"
    data-aos-duration="1000">
    <img className="box h-44 w-44" src={figma} alt="figma" />
    <h2 className="box_html">FIGMA</h2>
    </div>
    {/* firebase */}
    <div className="boxes" data-aos="flip-left"
         data-aos-duration="1000">
    <img className="box h-44 w-44" src={firebase} alt="firebase" />
    <h2 className="box_html_fire">FIREBASE</h2>
    </div>
    {/* graphql */}
    <div className="boxes" data-aos="flip-right"
    data-aos-duration="1000">
    <img className="box h-44 w-44" src={graphql} alt="graphql" />
    <h2 className="box_html_graph">GRAPHQL</h2>
    </div>
  </div>
  </>
  )
}

export default Skills
