// src/components/Section.jsx
import React from 'react';

const Section = ({ id, title, content }) => {
  return (
    <section id={id} className="py-12 px-6 bg-white text-gray-800">
      <h2 className="text-3xl font-semibold mb-4">{title}</h2>
      <p className="text-lg">{content}</p>
    </section>
  );
};

export default Section;
