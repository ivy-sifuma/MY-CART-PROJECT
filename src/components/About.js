import React from "react";
import React from "react";

function About({ isDarkMode, onDarkModeClick }) {
    return (
      <header>
        <h2>About 
        </h2>
        
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
  
  
  
    );
  }
  
  export default Home;
  