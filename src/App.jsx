// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';
import Form from './components/Form';
import Button from './components/Button';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow">
        <Section
          id="home"
          title="Welcome to Muhammad Fahad Ismail's Landing Page"
          content="Discover the unique features and stunning design we offer."
        />
        <Section
          id="about"
          title="About Us"
          content="We are committed to delivering the best experience for our users."
        />
        <Section
          id="services"
          title="Our Services"
          content="Explore the wide range of services we provide to our clients."
        />
        <Section
          id="contact"
          title="Contact Us"
          content={
            <div>
              <Form />
            </div>
          }
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
