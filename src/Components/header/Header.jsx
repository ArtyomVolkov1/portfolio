import React, { useEffect, useState } from 'react';
import './index.css';

const Header = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDelete, setIsDelete] = useState(false);
  const toRotate = [
    'Фронтенд-разработчик',
    'Frontend-Developer',
    'Верстальщик',
  ];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDelete
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updateText);
    if (isDelete) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDelete && updateText === fullText) {
      setIsDelete(true);
      setDelta(period);
    } else if (isDelete && updateText === '') {
      setIsDelete(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  return (
    <header className='header'>
      <div className='header__wrapper'>
        <h1 className='header__title'>
          <strong>
            Привет, меня зовут <em>Артем</em>
          </strong>
          <br />Я {text}
        </h1>
        <a target='_blank' rel='noreferrer' href='https://cv.hexlet.io/ru/resumes/2417' className='btn'>
          Посмотреть резюме
        </a>
      </div>
    </header>
  );
};

export default Header;
