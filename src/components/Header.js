import React from "react";

function Header({ isDarkMode, onDarkModeClick }) {
  return (
    <header>
      <h2>Shopperholics <br></br>
      <img src="https://e7.pngegg.com/pngimages/488/571/png-clipart-grocery-store-cost-food-expense-can-grocery-saving-food.png" alt="" width="70" height="70"></img>
      </h2>
      
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>



  );
}

export default Header;
