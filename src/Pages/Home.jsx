import React from 'react';
import Navbar from '../Components/navbar/Navbar';
import Footer from '../Components/footer/Footer';
import Header from '../Components/header/Header';
import Skills from '../Components/skills/Skills';

const Home = () => {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <main className='section'>
      <div className="section__title">
            <h2 className='section__title--skills title-2'>Навыки</h2>
        </div>
        <Skills />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

// <li className="content-list__item">
// <h2 className="title-2">Frontend</h2>
// <p>JavaScript, TypeScript, ReactJS, Redux, HTML, CSS, NPM, Bootstrap</p>
// </li>
