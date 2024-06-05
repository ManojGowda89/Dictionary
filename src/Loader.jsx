import React from 'react';

const loaderContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: 'black', // Black background
};

const loaderStyle = {
  border: '16px solid #f3f3f3', // Light grey
  borderTop: '16px solid white', // White color
  borderRadius: '50%',
  width: '120px',
  height: '120px',
  animation: 'spin 2s linear infinite',
};

const Loader = () => {
  return (
    <div style={loaderContainerStyle}>
      <div style={loaderStyle}></div>
    </div>
  );
};

// Adding keyframes using styled-components library
const styleSheet = document.styleSheets[0];

const keyframes =
`@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`;

styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default Loader;
