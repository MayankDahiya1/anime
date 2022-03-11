import React from "react";
import './About.scss'
import { images } from "../../constants";
const About = () => {
  return (
    <>
      <div className="container-fluid">
        <div class="row app_row">
          <div class="col-6">
            <img className="img1" src={images.Anime1} a="Profile" />
          </div>
          <div class="col-6"><h1><span style={{color:"#fe7028"}}>Hey ! It's me</span> <span style={{color:"#fcfefe"}}>Mayank Dahiya</span></h1>
        
          <p style={{color:"#f8a01b", fontSize:"2rem"}}>Just Created an Anime app just for learning and fun.</p>
          <br/><br/>
          <p style={{color:"#e13d57", fontSize:"1.3rem"}}>I am a Web Developer</p>
          <p style={{color:"#e13d57", fontSize:"1.3rem"}}>Expertise in MERN Stack</p>
          <br/>
          <h3 style={{color:"#fcfefe"}}>Contact Me</h3>
          <br/>
          <div class="row">
  <div class="col"> <a href="https://mayank001portfolio.netlify.app/" target="_blank" rel="noreferrer" > <img className="icon" src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/000000/external-portfolios-passive-income-xnimrodx-blue-xnimrodx.png" a="potfolio"/></a><p  style={{color:"#fcfefe",textDecoration:"none"}}>My Portfolio Website</p></div>
  <div class="col"> <a href="https://www.instagram.com/_mrdahiya_/" target="_blank" rel="noreferrer" > <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" a="insta"/></a><p className="app_text " style={{color:"#fcfefe",textDecoration:"none"}}>Instagram</p></div>
  <div class="col"><a href="https://www.linkedin.com/in/mayank-dahiya-aa90a2153/" target="_blank" rel="noreferrer" > <img src="https://img.icons8.com/fluency/48/000000/linkedin.png" a="Linkedin"/></a><p className="app_text" style={{color:"#fcfefe",textDecoration:"none"}}>Linkedin</p></div>
  <div class="col"> <a href="https://github.com/MayankDahiya1" target="_blank" rel="noreferrer" > <img src="https://img.icons8.com/ios-filled/50/000000/github.png" a="git"/></a><p className="app_text" style={{color:"#fcfefe",textDecoration:"none"}}>Github</p></div>
</div>
       
        

          </div>
        </div>
      </div>
    </>
  );
};

export default About;
