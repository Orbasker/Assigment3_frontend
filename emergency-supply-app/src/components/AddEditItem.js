import React, { useState, useEffect } from "react";
import { addSupply, updateSupply } from "../InventoryService";

const AddEditItem = ({ itemToEdit, onSave, onCancel }) => {
  const [item, setItem] = useState({
    name: "",
    price: "",
    quantity: "",
    // Add other fields as necessary
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (itemToEdit) {
      setItem(itemToEdit);
    } else {
      // Reset form when there's no item to edit (useful for switching between add/edit mode)
      setItem({ name: "", price: "", quantity: "" });
    }
  }, [itemToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any existing errors
    setLoading(true); // Indicate loading state

    try {
      if (itemToEdit) {
        await updateSupply(item._id, item); // Assume updateItem needs the item ID
      } else {
        await addSupply(item);
      }
      onSave(); // Trigger onSave action, e.g., to refresh the list or close the modal
    } catch (error) {
      console.error("Failed to save item:", error);
      setError("Failed to save item. Please try again."); // Provide feedback on error
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  const handleReset = () => {
    setItem({ name: "", price: "", quantity: "" }); // Reset form to initial state
    if (onCancel) onCancel(); // If provided, trigger onCancel action
  };

  // Basic validation (for demonstration, expand as needed)
  const isFormValid = () => {
    return item.name.trim();
  };

  return (
    <div>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={item.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="price" className="block">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={item.price}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="quantity" className="block">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={item.quantity}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        {/* Add other input fields as necessary */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={!isFormValid() || loading}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
          >
            {loading ? "Saving..." : itemToEdit ? "Update" : "Add"} Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEditItem;
