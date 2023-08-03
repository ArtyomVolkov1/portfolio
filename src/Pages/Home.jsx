import React from 'react';
import Navbar from '../Components/navbar/Navbar';
import Footer from '../Components/footer/Footer';
import Header from '../Components/header/Header';

const Home = () => {
  return (
    <div className="App">
     <Navbar />
     <Header />
     <main className="section">
        <div className="container">
            <ul className="content-list">
                <li className="content-list__item">
                    <h2 className="title-2">Frontend</h2>
                    <p>JavaScript, TypeScript, ReactJS, Redux, HTML, CSS, NPM, Bootstrap</p>
                </li>
            </ul>
        </div>
    </main>
    <Footer />
    </div>
)
}

export default Home;