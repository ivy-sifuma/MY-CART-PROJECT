import React from "react";

function Header({ isDarkMode, onDarkModeClick }) {
  return (
    <header>
      <h2>Shopperholics</h2>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>

<nav class="menu">
<a href="#home">HOME</a>
<a href="about us">ABOUT US</a>
</nav>
  );
}

export default Header;
