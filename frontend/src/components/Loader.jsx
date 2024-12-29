import React from 'react';
import './Loader.css'; // Add custom styles here

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>Finding your ride...</p>
    </div>
  );
};

export default Loader;