import React, { useEffect, useState } from "react";
import { Typography, TextField, Button, Container, Grid, CircularProgress } from "@mui/material";
import InventoryList from "./InventoryList";
import { getSupplies, deleteSupply } from "../InventoryService";
import SupplyForm from "./SupplyForm";
import Modal from "./Modal";

export default function ListInventory() {
  const [supplies, setSupplies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSupply, setSelectedSupply] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSupplies = async () => {
    try {
      const response = await getSupplies();
      if (response.error) {
        setError(response.error);
      }
      setSupplies(response?.result || []);
    } catch (error) {
      console.error("Failed to fetch supplies:", error);
      setError(error.message || "An error occurred while fetching supplies.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSupplies();
  }, []);

  const handleSearchChange = (event) => setSearchTerm(event.target.value);
  const closeModal = () => {
    setSelectedSupply(null);
    setError(null);
  };

  const handleSave = () => {
    closeModal();
    fetchSupplies();
    handleSearchChange({ target: { value: searchTerm } });
  };

  const removeSupply = async (supply) => {
    try {
      await deleteSupply(supply.name);
      fetchSupplies();
    } catch (error) {
      console.error("Failed to delete supply:", error);
      setError(error.message || "An error occurred while deleting the supply.");
    }
  };

  return (
    <Container>
      <Grid container justifyContent="space-between">
        <Typography variant="h4" color="primary" gutterBottom>
          Inventory List
        </Typography>
        <div>
          <TextField
            type="text"
            placeholder="Search Supplies..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="mb-4 p-2 border rounded"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => setSelectedSupply({})}
            className="mb-4"
          >
            Add Supply
          </Button>
        </div>
      </Grid>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error" variant="body1">
          {error}
        </Typography>
      ) : (
        <InventoryList
          supplies={supplies.filter((supply) =>
            supply.name.toLowerCase().includes(searchTerm.toLowerCase()),
          )}
          onEdit={setSelectedSupply}
          onDelete={removeSupply}
          fetchSupplies={fetchSupplies}
        />
      )}
      <Modal isOpen={selectedSupply !== null} onClose={closeModal}>
        <SupplyForm selectedSupply={selectedSupply} onSave={handleSave} />
      </Modal>
    </Container>
  );
}
