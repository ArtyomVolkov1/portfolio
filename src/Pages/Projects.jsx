import React from 'react';
import Navbar from '../Components/navbar/Navbar';
import Footer from '../Components/footer/Footer';
import { projects } from '../helpers/projectList';
import Project from '../Components/projects/Project';

const Projects = () => {
  return (
    <div className='App'>
      <Navbar />
      <main className='section'>
        <div className='container'>
          <ul className='projects'>
            {projects.map((project, index) => {
              return (
                <Project
                  key={index}
                  title={project.title}
                  img={project.img}
                  index={index}
                />
              );
            })}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
