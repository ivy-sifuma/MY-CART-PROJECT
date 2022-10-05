import React from "react";

function Header({ isDarkMode, onDarkModeClick }) {
  return (
    <header>
      <h2>Shopperholics</h2>
      <a href="#home">Home
      
      </a>
      <a href="about us">About Us</a>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>



  );
}

export default Header;
