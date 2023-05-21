import React from "react";
import "./index.css";
import Home from "./routes/home";
import Contact from "./routes/contact";
import Projects from "./routes/projects";
import About from "./routes/about";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
