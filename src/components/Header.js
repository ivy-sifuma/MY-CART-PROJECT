import React from "react";

function Header({ isDarkMode, onDarkModeClick }) {
  return (
    <header>
      <h2>Shopperholics <br></br>
      <img src="https://e7.pngegg.com/pngimages/488/571/png-clipart-grocery-store-cost-food-expense-can-grocery-saving-food.png" alt="" width="70" height="70"></img>
      </h2>

      <a href="#home">HOME <br></br>
      <img src="https://s3.envato.com/files/141375302/milk-splash-fruits-on-pink-background.jpg" alt="" width="70" height="70"></img> </a>
      <a href="about us">ABOUT US <br></br>
      <img src="https://s22908.pcdn.co/wp-content/uploads/2022/01/online-payment-comparison.jpg" alt="" width="70" height="70"></img> </a>
      
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>



  );
}

export default Header;
