import React, { useEffect, useState } from "react";
import { getSupplies, deleteSupply } from "../InventoryService";
import InventoryList from "./InventoryList"; // New Component for listing items
import SupplyForm from "./SupplyForm"; // New Component for add/update form
import Modal from "./Modal";

export default function ListInventory() {
  const [supplies, setSupplies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSupply, setSelectedSupply] = useState(null);

  const fetchSupplies = async () => {
    try {
      const response = await getSupplies();
      setSupplies(response?.result || []);
    } catch (error) {
      console.error("Failed to fetch supplies:", error);
    }
  };

  useEffect(() => {
    fetchSupplies();
  }, []);

  const handleSearchChange = (event) => setSearchTerm(event.target.value);
  const closeModal = () => setSelectedSupply(null);

  const handleSave = () => {
    closeModal();
    fetchSupplies();
    handleSearchChange({ target: { value: searchTerm } });
    // fetchSupplies(); // Refetch supplies to update the list after saving
  };

  const removeSupply = async (supply) => {
    try {
      await deleteSupply(supply.name);
      fetchSupplies(); // Refetch supplies to update the list after deleting
    } catch (error) {
      console.error("Failed to delete supply:", error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-left text-blue-600 my-4">
        Inventory List
      </h1>
      <button
        onClick={() => setSelectedSupply({})}
        className="mb-4 p-2 bg-blue-500 text-white rounded"
      >
        Add Supply
      </button>
      <input
        type="text"
        placeholder="Search Supplies..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="mb-4 p-2 border rounded"
      />
      <InventoryList
        supplies={supplies.filter((supply) =>
          supply.name.toLowerCase().includes(searchTerm.toLowerCase()),
        )}
        onEdit={setSelectedSupply}
        onDelete={removeSupply}
      />
      <Modal isOpen={selectedSupply !== null} onClose={closeModal}>
        <SupplyForm selectedSupply={selectedSupply} onSave={handleSave} />
      </Modal>
    </div>
  );
}
