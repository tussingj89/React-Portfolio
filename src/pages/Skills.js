import React from "react";

const Skills = () => {
    return (
        <div className="aboutApp">
           <div className="container">
                <div className="col-lg-12 center ">Skills:</div>
            <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Front-end:</h5>
              <ul>
                <li>JavaScript (ES6)</li>
                <li>React</li>
                <li>Redux</li>
                <li>HTML5</li>
                <li>CSS3/BootStrap/Materialize/Bulma</li>
                <li>AJAX</li>
                <li>jQuery</li>
                <li>Jest</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Back-end:</h5>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Other:</h5>
              <ul>
                <li>Git</li>
                <li>Webpack</li>
                <li>JSON</li>
                <li>Heroku</li>
              </ul>
            </div>
        </div>
        </div>
  </div>
    )
}
export default Skills;