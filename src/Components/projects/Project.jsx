import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

const Project = ({title, img, index}) => {
  return (
      <li className='project'>
        <img className='project__img' src={img} alt='project-gendiff' />
        <h3 className='project__title'>{title}</h3>
        <NavLink to={`/project/${index}`} className='btn-project'>
          <p className='btn-project__text'>Посмотреть</p>
        </NavLink>
      </li>
  );
};

export default Project;
