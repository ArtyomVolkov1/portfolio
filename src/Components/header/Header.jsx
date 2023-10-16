import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './index.css';

const Header = () => {
  const [text] = useTypewriter({
    words: [
      'Фронтенд-разработчик',
      'Хочу найти рабо',
      'Frontend-Developer',
      'Верстальщик',
    ],
    loop: {},
    typeSpeed: 110,
    delaySpeed: 2700,
  });

  return (
    <header className='header'>
      <div className='header__wrapper'>
        <h1 className='header__title'>
          <strong>
            Привет, меня зовут <em>Артем</em>
          </strong>
          <br />Я {text} <Cursor />
        </h1>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://cv.hexlet.io/ru/resumes/2417'
          className='btn'
        >
          Посмотреть резюме
        </a>
      </div>
    </header>
  );
};

export default Header;
