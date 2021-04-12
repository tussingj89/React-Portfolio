import React from "react";
import email from "../assets/email.png"
import github from "../assets/GitHub-Mark.png"
import linkedin from "../assets/LinkedIn_logo.png"
import resume from "../assets/resume.png"
import ResumePDF from "../assets/Resume.pdf"
const Footer =() => {

    return(
        <div>
            <div className="row" style={{ margin: 0 }}>

                    <a href="https://github.com/tussingj89"  target="_blank" rel="noreferrer"><img src={github} className="social" alt="github"></img></a> 

                    <a href="https://www.linkedin.com/in/jack-tussing-0842461b5/"  target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin" className="social"></img> </a>

                    <a href="mailto: tussing40@gmail.com"><img src={email} alt="email" className="social"></img></a>

                    <a href={ResumePDF} target="_blank" rel="noreferrer"><img src={resume} alt="resume" className="social"></img></a>

                    {/* <a href="tel:2602238529" onClick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"><p className="call-button">Call: (260) 223-8529</p></a> */}

            </div>
            <div className="row " id="copyright" style={{ margin: 0 }}>
              <div className="col-lg-12 ">
                <p className="meduim">© 2021 Jack Tussing</p>
              </div>
            </div>
        </div>
    )
}
export default Footer;