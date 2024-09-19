# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

import React, { useState } from 'react';

function App() {
const [isModalOpen, setIsModalOpen] = useState(false);

// Open and close modal
const modalOpen = () => setIsModalOpen(true);
const modalClose = () => setIsModalOpen(false);

return (
<div className="w-[95%] h-screen flex items-center justify-center relative">
{/_ Background overlay with fade-in effect _/}
{isModalOpen && (
<div
className="fixed inset-0 bg-gray-800 opacity-50 z-40 transition-opacity duration-300"
onClick={modalClose} // Close modal when clicking outside ></div>
)}

      {/* Modal with animation */}
      {isModalOpen ? (
        <div
          className={`login-form z-50 border p-10 flex flex-col gap-5 rounded-lg bg-white w-full lg:w-1/3 relative transition-all duration-300 transform ${
            isModalOpen
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-90'
          }`}
        >
          {/* Close button */}
          <img
            onClick={modalClose}
            src="close_icon.png" // replace with your close icon URL
            alt="close_icon"
            className="size-7 cursor-pointer absolute right-3 top-2"
          />
          <h2 className="mx-auto text-2xl font-bold">Modal Title</h2>
          <input
            type="email"
            placeholder="Email address"
            className="form-input px-5 py-2 rounded-md outline-none focus:ring focus:ring-blue-600 border-b border-blue-600"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="form-input px-5 py-2 rounded-md outline-none focus:ring focus:ring-blue-600 border-b border-blue-600"
            required
          />
          <button
            type="submit"
            className="submit-button border border-blue-600 px-4 py-2 rounded-md bg-white hover:bg-blue-600 hover:text-white"
          >
            Submit
          </button>
        </div>
      ) : (
        <button
          onClick={modalOpen}
          className="border bg-blue-500 text-white text-xl px-5 py-3 rounded-lg"
        >
          Open Modal
        </button>
      )}
    </div>

);
}

export default App;
