import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {
  const [ isDark, setIsDark ] = useState(false);
  function updateIsDark(){
    setIsDark(isDark => !isDark);
  }
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDark ? "App dark" : "App light";
  const btnText = !isDark ? "Dark Mode" : "Light Mode";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={updateIsDark}>{btnText}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
