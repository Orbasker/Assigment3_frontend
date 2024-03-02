import React from "react";
import "./App.css";
import ListInventory from "./components/ListInventory";

const App = () => {
  return (
    <div className="App">
      <h1 className="text-4xl font-bold text-center text-blue-600 my-4">
        Emergency Supply App
      </h1>
      <ListInventory />
    </div>
  );
};

export default App;
