import React from 'react';
import './index.css';
import github from '../img/icons/gitHub-black.svg';

const btnGithub = ({ link }) => {
  return (
    <a href={link}  className='btn-outline'>
    <img src={github} alt='' />
    GitHub repo
  </a>
  )
}

export default BtnGithub;