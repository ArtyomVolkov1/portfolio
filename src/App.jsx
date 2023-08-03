import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Contacts from './Pages/Contacts';
import Projects from './Pages/Projects';
import NotFound from './Pages/NotFound';

const App = () => {
  return (
    <BrowserRouter basename='/portfolio'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
