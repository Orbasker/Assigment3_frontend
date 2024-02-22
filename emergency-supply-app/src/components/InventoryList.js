import React from "react";
import ListItem from "./ListItem"; // Assuming ListItem is a presentational component

const InventoryList = ({ supplies, onEdit, onDelete }) => {
  return (
    <div>
      {supplies.length > 0 ? (
        supplies.map((supply) => (
          <ListItem
            key={supply._id}
            supply={supply}
            onEdit={() => onEdit(supply)}
            onDelete={() => onDelete(supply)}
          />
        ))
      ) : (
        <p>No supplies found.</p>
      )}
    </div>
  );
};

export default InventoryList;
