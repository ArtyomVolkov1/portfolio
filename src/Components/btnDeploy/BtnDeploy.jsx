import React from 'react';
import './index.css'

const BtnDeploy = ({ deployLink }) => {
  return (
    <a href={deployLink} target='__blank' rel='noreferrer' className='btn-outline'>
    Деплой
  </a>
  )
}

export default BtnDeploy;