import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import Footer from "./Footer";
import About from "./Home";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList />
      <Footer isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
    </div>
  );
}

export default App;
