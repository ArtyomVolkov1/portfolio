import React from 'react';
import './index.css';

const Header = () => {
  return (
    <header className="header">
            <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Привет, меня зовут <em>Артем</em></strong><br />
                Я Frontend-разработчик
            </h1>
                <a href="https://cv.hexlet.io/ru/resumes/2417" className="btn">Посмотреть резюме</a>
            </div>
    </header>
  )
}

export default Header;