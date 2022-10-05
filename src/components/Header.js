import React from "react";

function Header({ isDarkMode, onDarkModeClick }) {
  return (
    <header>
      <h2>Shopperholics</h2>
      <a href="#home">HOME
      
      </a>
      <a href="about us">ABOUT US</a>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>



  );
}

export default Header;
