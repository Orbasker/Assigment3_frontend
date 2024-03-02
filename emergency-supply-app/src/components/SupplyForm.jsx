import React, { useState, useEffect } from "react";
import { updateSupply, addSupply } from "../InventoryService";

const SupplyForm = ({ selectedSupply, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    quantity: "",
  });
  const [error, setError] = useState(null);

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
        const res = await updateSupply(selectedSupply.name, formData);
        if (res.error) {
          setError(res.error);
          return;
        }
      } else {
        const res = await addSupply(formData);
        if (res.error) {
          setError(res.error);
          return;
        }
      }
      onSave();
    } catch (error) {
      console.error("Failed to save supply:", error);
      setError(error.response?.data?.message || "An unexpected error occurred.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <div className="mb-4 text-red-600">
          <p>{error}</p>
        </div>
      )}
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-sm font-bold mb-2">
          Price
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="quantity" className="block text-sm font-bold mb-2">
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="p-2 border rounded"
        />
      </div>
      <button type="submit" className="p-2 bg-blue-600 text-white rounded">
        {selectedSupply && selectedSupply._id ? "Update Supply" : "Add Supply"}
      </button>
    </form>
  );
};

export default SupplyForm;
