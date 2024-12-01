import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 text-white">
    <h1 className="text-4xl md:text-5xl font-bold">Welcome to Muhammad Fahad Ismail's Landing Page</h1>  
      <nav className="mt-4">
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#services" className="hover:underline">Services</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
