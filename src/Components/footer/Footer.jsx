import React from 'react';
import './index.css';
import github from '../../img/icons/gitHub.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
    <div className="container">
        <div className="footer__wrapper">
            <ul className="social">
                <li className="social__item">
                    <Link to="https://github.com/ArtyomVolkov1"><img src={github} alt="github" /></Link>
                </li>
            </ul>
        </div>
    </div>
</footer>
)
}

export default Footer;