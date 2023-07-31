import React from 'react';
import Navbar from '../Components/navbar/Navbar';
import Footer from '../Components/footer/Footer';
import Project from '../Components/projects/Project';


const Projects = () => {
  return (
    <div className="App">
    <Navbar />
    <main className="section">
        <div className="container">
            <ul className="projects">
                <Project />
            </ul>
            </div>
    </main>
    <Footer />
    </div>
  )
}

export default Projects;