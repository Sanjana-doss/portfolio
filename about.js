import React, { useState, useEffect } from 'react';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Heroimage3 from "../components/Heroimage3";
import Work from '../components/Work';

const About = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const words = ["Knora Tec is a technology company that specializes in developing machine learning integrated biomedical products for the healthcare industry. Our products are designed to leverage the power of technology to improve patient outcomes and enhance the quality of care. In addition to our focus on healthcare, we also have expertise in web development, business analysis, analytics, and marketing strategy development using data mining and analysis. Our team is composed of experts in various fields, including software engineering, biomedical research, and data analysis. We're committed to staying at the forefront of innovation and investing in cutting-edge technologies that enable us to deliver products that meet the highest standards of quality and reliability. At Knora Tec, we're passionate about making a positive impact in the world and helping our clients achieve their goals. Whether it's developing a new healthcare product or creating a digital marketing strategy, we work closely with our clients to ensure that we're delivering solutions that meet their unique needs. We believe that technology has the power to transform industries, and we're proud to be at the forefront of that transformation."];
    let wordIndex = 0;
    let letterIndex = 0;

    const typingInterval = setInterval(() => {
      if (!isTyping) return;

      const currentWord = words[wordIndex];
      setText(currentWord.substring(0, letterIndex));

      if (letterIndex === currentWord.length) {
        setIsTyping(false);
        setTimeout(() => {
          setIsTyping(true);
          wordIndex = (wordIndex + 1) % words.length;
          letterIndex = 0;
        }, 2000);
      } else {
        letterIndex++;
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [isTyping]);

  return (
    <div>
      <Navbar />
      <Heroimage3 heading="ABOUT US" text={<p>{text}</p>} />
      <Work />
      <Footer />
    </div>
  );
}

export default About;
