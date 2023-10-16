import React from 'react';
import './index.css';
import github from '../../img/icons/gitHub-black.svg';

const BtnGithub = ({ link }) => {
  return (
    <a href={link} target='__blank' rel='noreferrer' className='btn-outline'>
      <img src={github} alt='' />
      GitHub repo
    </a>
  );
};

export default BtnGithub;
