import React from 'react';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Heroimage2 from "../components/Heroimage2";
import Projectwork from '../components/Projectwork';

const projects = () => {
  return (
    <div>
      projects
      <Navbar/>
      <Heroimage2 heading="PROJECTS" text="Project we contributed"/>
      <Projectwork/>
      <Footer/>
    </div>
  )
}

export default projects;
