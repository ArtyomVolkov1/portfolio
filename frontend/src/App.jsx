import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contacts from './Pages/Contacts';
import Projects from './Pages/Projects';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
