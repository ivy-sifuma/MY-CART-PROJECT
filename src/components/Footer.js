import React from "react";

function Footer ({isDarkMode, onDarkModeClick}) {
return (
    <footer>
        
        <br></br>
        <img src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg?w=2000" alt="" width="70" height="80"></img> <br></br>
        <img src="https://img.freepik.com/free-photo/happy-man-with-handbags-dancing-after-shopping-spree_482257-18132.jpg?w=2000&t=st=1665049853~exp=1665050453~hmac=ef05a6f4d7bc53fc476aa243c62738815a1c63d8e356b93fd8989f0929a3b103" alt="" width="60" height="80"> 
        </img> <br></br>
        <img src="https://s22908.pcdn.co/wp-content/uploads/2022/01/online-payment-comparison.jpg" alt="" width="60" height="80"> 
        </img> <br></br>

        <h2>Order your fav produce!
        </h2>

        <button onClick={onDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </footer>
);


}

export default Footer;