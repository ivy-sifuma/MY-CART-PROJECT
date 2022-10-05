import React from "react";

function Header({ isDarkMode, onDarkModeClick }) {
  return (
    <header>
      <h2>Shopperholics
      <img src="https://e7.pngegg.com/pngimages/488/571/png-clipart-grocery-store-cost-food-expense-can-grocery-saving-food.png" alt="" width="70" height="70"></img>
      </h2>
      <a href="#home">Home 
      <img src="https://png.pngtree.com/png-clipart/20190920/original/pngtree-green-juice-liquid-splash-illustration-png-image_4652693.jpg" alt="" width="70" height="70"></img>
      </a>
      <a href="about us">About Us
      <img src="https://thumbs.dreamstime.com/z/pay-credit-card-via-electronic-wallet-wirelessly-phone-new-mobile-banking-app-e-payment-vector-illustration-hand-193631712.jpg" alt="" width="60" height="70"></img>
      </a>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>



  );
}

export default Header;
