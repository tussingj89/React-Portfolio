import React, { Component } from 'react';
import Card from './../components/Card';
import projects from './../resumeData.json';


class Portfolio extends Component {
  // keep track of project data
  state = {
    projects: projects,
  }

  render() {
    // map through project data and create a Bootstrap card for each project
    const projectsArr = this.state.projects;
    const newProjectsArr = projectsArr.map((project) => 
      <Card
        key = {project.id}
        id={project.id}
        name={project.name}
        image={project.image}
        description={project.description}
        tryLink={project.tryLink}
        repository={project.repository}
        note={project.note}
        technologies={project.technologies}
      />
    );

    return(
      <div>

        <div className="container mb-5">
          <h1>Portfolio</h1>
          <h3>Here are some projects I've worked on.</h3>
        
          
        
        <div className="flex-container">
          
          {/* render the newProjects array, which is an array of Bootstrap cards */}
          {newProjectsArr}

        </div>
      </div>
      </div>
    );
  }
}

export default Portfolio;