import React, { useState } from "react";
import ActionCard from "./Action";
import ListInventory from "./ListInventory";
export default function ActionCards() {
  const [showInventory, setShowInventory] = useState(false);
  const actions = [
    {
      title: "Add New Item",
      action: "Add Item",
    },
    {
      title: "View Inventory",
      action: "View Inventory",
    },
    {
      title: "Edit Item",
      action: "Edit Item",
    },
    {
      title: "Delete Item",
      action: "Delete Item",
    },
  ];

  const handleAction = (action) => {
    return () => {
      // Return a function that will be called on click
      switch (action) {
        case "Add Item":
          console.log("Add Item");
          // return
          break;
        case "View Inventory":
          console.log("View Inventory");
          setShowInventory(true);
          break;
        case "Edit Item":
          console.log("Edit Item");
          break;
        case "Delete Item":
          console.log("Delete Item");
          break;
        default:
          break;
      }
    };
  };

  return (
    <div className="">
      <div className="flex justify-center space-x-4 actionCard">
        <>
          {actions.map((action, index) => (
            <ActionCard
              key={index} // Always use a unique key when mapping over an array
              title={action.title}
              action={action.action}
              onClick={handleAction(action.action)} // Pass the function returned by handleAction
            />
          ))}
        </>
      </div>

      <div className="flex m-4 justify-center">
        {showInventory && <ListInventory />}
      </div>
    </div>
  );
}
