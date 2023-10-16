/* eslint-disable no-useless-concat */
import React from 'react';
import './index.css';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
        <div className="container">
            <div className="nav-row">
                <Link to="/" className="logo"><strong>Portfolio</strong></Link>
                <ul className="nav-list">
                    <li className="nav-list__item"><NavLink to="/" className={({isActive, isPending}) => isPending ? '' : isActive ? 'nav-list__link ' + 'nav-list__link--active' : 'nav-list__link' }>Home</NavLink></li>
                    <li className="nav-list__item"><NavLink to="/projects" className={({isActive, isPending}) => isPending ? '' : isActive ? 'nav-list__link ' + 'nav-list__link--active' : 'nav-list__link' }>Проекты</NavLink></li>
                    <li className="nav-list__item"><NavLink to="/contacts" className={({isActive, isPending}) => isPending ? '' : isActive ? 'nav-list__link ' + 'nav-list__link--active' : 'nav-list__link' }>Контакты</NavLink></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;