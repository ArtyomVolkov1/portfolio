import React from 'react';
import Navbar from '../Components/navbar/Navbar';
import Footer from '../Components/footer/Footer';

const Contacts = () => {
  return (
    <div className="App">
      <Navbar />
    <main className="section">
        <div className="container">
            <h1 className="title-1">Contacts</h1>
            <ul className="contact-list">
                <li className="contact-list__item">
                    <h2 className="title-2">Location</h2>
                    <p>Saint-Petersburg, Russia</p>
                </li>
                <li className="contact-list__item">
                    <h2 className="title-2">Telegram / WhatsApp</h2>
                    <p><a href="tel:+79114965729">+7 (911) 496-57-29</a></p>
                </li>
                <li className="contact-list__item">
                    <h2 className="title-2">Email</h2>
                    <p><a href="mailto:Email">artemvolk2099@yandex.ru</a></p>
                </li>
            </ul>
        </div>
    </main>
    <Footer />
    </div>
  )
}

export default Contacts;