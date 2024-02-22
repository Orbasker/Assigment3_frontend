import React, { useState, useEffect } from "react";
import { updateSupply, addSupply } from "../InventoryService";

const SupplyForm = ({ selectedSupply, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    quantity: "",
  });

  useEffect(() => {
    if (selectedSupply) {
      setFormData({
        name: selectedSupply.name || "",
        price: selectedSupply.price || "",
        quantity: selectedSupply.quantity || "",
      });
    }
  }, [selectedSupply]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedSupply && selectedSupply._id) {
        await updateSupply(selectedSupply._id, formData);
      } else {
        await addSupply(formData);
      }
      onSave(); // Trigger refetch or state update in parent component
    } catch (error) {
      console.error("Failed to save supply:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type="submit" className="p-2 bg-blue-600 text-white rounded">
        {selectedSupply && selectedSupply._id ? "Update Supply" : "Add Supply"}
      </button>
    </form>
  );
};

export default SupplyForm;
