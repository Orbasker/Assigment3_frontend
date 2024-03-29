import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const InventoryList = ({ supplies, onEdit, onDelete, fetchSupplies }) => {
  const [loading, setLoading] = useState(false);

  const handleFetchSupplies = async () => {
    try {
      setLoading(true);
      await fetchSupplies();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (supplies.length === 0) {
      handleFetchSupplies();
    }
  }, []);

  return (
    <div>
      {loading ? (
        <CircularProgress />
      ) : supplies.length > 0 ? (
        supplies.map((supply) => (
          <ListItem
            key={supply._id}
            supply={supply}
            onEdit={() => onEdit(supply)}
            onDelete={() => onDelete(supply)}
          />
        ))
      ) : (
        <>
          <Typography variant="body1">No supplies found.</Typography>
          <Button variant="contained" color="primary" onClick={handleFetchSupplies}>
            Refresh Supplies
          </Button>
        </>
      )}
    </div>
  );
};

export default InventoryList;
