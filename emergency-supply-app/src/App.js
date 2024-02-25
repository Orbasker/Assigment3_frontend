import React, { useState } from "react";
import "./App.css";
import ListInventory from "./components/ListInventory";
// import MyComponent from "./components/myComponent";
import MyComponent from "./template/MyComponent";

const App = () => {
  return (
    <div className="App">
      <h1 class="text-4xl font-bold text-center text-blue-600 my-4">
        Emergency Supply App
      </h1>
      {/* <MyComponent /> */}
      <ListInventory />
    </div>
  );
};

export default App;
