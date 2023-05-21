import React, { useRef, useEffect } from 'react';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Heroimage4 from "../components/Heroimage4";
import Forms from '../components/Forms';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <Navbar />
      <Heroimage4 heading="CONTACT US" text="Let's stay connected! Contact us today to learn more about our cutting-edge machine learning integrated biomedical products, web development, business analysis, and marketing strategy services. Our team is dedicated to providing you with the best solutions tailored to your needs. Reach out to us via phone or email and let's start building a better future in healthcare together." />
      <div ref={formRef}>
        <Forms />
      </div>
      <div className="contact-details">
        <p><FaPhone /> Phone: <a href="tel:1234567890">+91-9000000000</a></p>
        <p><FaEnvelope /> Email: <a href="mailto:info@example.com">knoratec@gmail.com</a></p>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
