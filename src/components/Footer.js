import React from "react";

const Footer =() => {

    return(
        <div>
            <div className="row" style={{ margin: 0 }}>

                    <a href="https://github.com/tussingj89"  target="_blank" rel="noreferrer"><img src="/assets/GitHub-Mark.png" className="social" alt="github"></img></a> 

                    <a href="https://www.linkedin.com/in/jack-tussing-0842461b5/"  target="_blank" rel="noreferrer"><img src="/assets/LinkedIn_logo.png" alt="linkedin" className="social"></img> </a>

                    <a href="mailto: tussing40@gmail.com"><img src="/assets/email.png" alt="email" className="social"></img></a>

                    <a href="assets/resume.pdf" target="_blank"><img src="/assets/resume.png" alt="resume" className="social"></img></a>

                    <a href="tel:2602238529" onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"><p classNameS="call-button">Call: (260) 223-8529</p></a>

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