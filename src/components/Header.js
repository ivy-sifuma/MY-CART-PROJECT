import React from "react";

function Header({ isDarkMode, onDarkModeClick }) {
  return (
    <header>
      <h2>Shopperholics
      <img src="https://e7.pngegg.com/pngimages/488/571/png-clipart-grocery-store-cost-food-expense-can-grocery-saving-food.png" alt="" width="70" height="40"></img>
      </h2>
      <a href="#home">Home 
      <img src="https://png.pngtree.com/png-clipart/20190920/original/pngtree-green-juice-liquid-splash-illustration-png-image_4652693.jpg" alt="" width="70" height="40"></img>
      </a>
      <a href="about us">About Us</a>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>



  );
}

export default Header;
