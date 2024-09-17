import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div id="contact" className="container contact" data-aos="fade-down"
    data-aos-duration="1000">
        <h2 className="c_item text-2xl size-32 font-bold ml-36 mt-5">CONTACT</h2>
        <div className="contact_items" data-aos="zoom-in"
    data-aos-duration="1000">
          <a href="mailto:dchaitanya373@gmail.com" className="c_itemses">
            <BiLogoGmail  className="item1"/>
          </a>
          <a href="https://www.facebook.com/chaita.davuluri?mibextid=ZbWKwL" className="c_itemses">
            <FaFacebook className="item1"/>
          </a>
          <a className="c_itemses" href="https://github.com/MrChaitu111"><FaGithub className="item1"/></a>
          <a href="https://www.instagram.com/mr_chaitu_111?igsh=MWtnM296MndqZ3Jpag==" className="c_itemses">
            <FaInstagram className="item1"/>
          </a>
          <a href="https://www.linkedin.com/in/chaitanya-davuluri" className="c_itemses">
            <FaLinkedin className="item1"/>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
