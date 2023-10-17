import React from 'react';
import BtnGithub from '../Components/btnGithub/btnGithub';
import { projects } from '../helpers/projectList';
import Navbar from '../Components/navbar/Navbar';
import Footer from '../Components/footer/Footer';
import { useParams, NavLink } from 'react-router-dom';

const Project = () => {
  const { id } = useParams();
  const project = projects[id];
  return (
    <div className='App'>
      <Navbar />
      <main className='section'>
        <div className='container'>
          <div className='project-details'>
            <h1 className='title-1'>{project.title}</h1>
            {!project.deployLink ? (
              <img
                src={project.imgBig}
                alt={project.title}
                className='project-details__cover'
              />
            ) : (
              <NavLink target='_blank' rel='noreferrer' to={project.deployLink}>
                <img
                  src={project.imgBig}
                  alt={project.title}
                  className='project-details__cover active-link'
                />
              </NavLink>
            )}
            <div className='project-details__desc'>
              <div className='project-details__desc-description'>
                <h3>Описание:</h3>
                <p>{project.description}</p>
              </div>
              <div className='project-details__desc-skills'>
                <h3>Навыки:</h3>
                <p>{project.skills}</p>
              </div>
            </div>
            <BtnGithub link={project.githubLink} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Project;
