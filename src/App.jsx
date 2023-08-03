import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contacts from './Pages/Contacts';
import Projects from './Pages/Projects';

const App = () => {
  return (
    <HashRouter>
    <Routes>
      <Route path='/portfolio' element={<Home />} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
    </HashRouter>
  )
}

export default App;
