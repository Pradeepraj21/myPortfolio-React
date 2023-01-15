import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import LinkedIn from "C:/Users/Pradeep/Desktop/MCA syllabus & notes/Placement/Portfolio/portfolio-starter/node_modules/@iconscout/react-unicons/icons/uil-linkedin"
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import MailBox from "C:/Users/Pradeep/Desktop/MCA syllabus & notes/Placement/Portfolio/portfolio-starter/node_modules/@iconscout/react-unicons/icons/uil-envelope-alt"

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span><MailBox color="white" size={"1.5rem"} /></span>
        <span>nadarpradeepraj21@gmail.com</span>
        <br />
        <br />
        <br />
        <div className="f-icons">

        <a href='https://www.linkedin.com/in/pradeepraj-nadar/' target="_blank" rel="noopener noreferrer">
          <LinkedIn color="white" size={"3rem"} />
        </a>

        <a href='https://github.com/Pradeepraj21' target="_blank" rel="noopener noreferrer">
          <Gitub color="white" size={"3rem"} />
        </a>

        <a href="https://www.instagram.com/pradeep.0722/" target="_blank" rel="noopener noreferrer">
          <Insta color="white" size={"3rem"} />
        </a>

        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <Facebook color="white" size={"3rem"} />
        </a>
        </div>
        {/* <span>Crafted with  by Pradeepraj Nadar</span> */}
      </div>
    </div>
    
  );
};

export default Footer;