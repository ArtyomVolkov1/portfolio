import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Contacts from './Pages/Contacts';
import Projects from './Pages/Projects';
import Project from './Pages/Project';
import NotFound from './Pages/NotFound';
import ScrollToTop from './utils/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter basename='/portfolio'>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/project/:id' element={<Project />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
