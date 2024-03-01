// RingLoader.js
import React from 'react';
import './RingLoader.css';

const RingLoader = ({ color }) => {
  return (
    <div className="ring-loader">
      <div className="loader" style={{borderColor: color}}></div>
    </div>
  );
};

export default RingLoader;
