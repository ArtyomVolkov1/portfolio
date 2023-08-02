import React from 'react';
import './index.css';
import { projects } from '../../helpers/projectList';
import { Link } from 'react-router-dom';

const Project = () => {
  return (
    projects.map(({ title, img, githubLink, buttonImg, buttonName }) => (
      <li className="project">
                    <img className="project__img" src={img} alt="project-gendiff" />
                    <h3 className="project__title">{title}</h3>
            <Link to={githubLink} className="btn-project">
                        <img src={buttonImg} alt="github-black" />
                        {buttonName}
                    </Link>
                </li>
    ))
  );
}

export default Project;