import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}, Email: ${email}`);
  };

  return (
    <form className="bg-gray-200 p-4 rounded" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
