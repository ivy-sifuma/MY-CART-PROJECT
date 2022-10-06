import React from "react";

function Footer ({isDarkMode, onDarkModeClick}) {
return (
    <footer>
        <h2>Get your fav produce! </h2>

        <button onClick={onDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </footer>
);


}

export default Footer;