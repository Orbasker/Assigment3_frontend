import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

export default function ListItem({ supply, onEdit, onDelete }) {
  return (
    <Card className="m-2">
      <CardContent>
        <Typography variant="h4" component="div" mb={2} style={{ fontWeight: "bold", color: "blue" }}>
          {supply.name}
        </Typography>
        <Typography variant="body1" component="p" style={{ fontWeight: "bold" }}>
          Quantity: {supply.quantity}
        </Typography>
        <Typography variant="body1" component="p" style={{ fontWeight: "bold" }}>
          Price: {supply.price}
        </Typography>
      </CardContent>
      <div className="flex justify-between p-2">
        <Button
          variant="contained"
          color="primary"
          onClick={() => onEdit(supply)}
          className="mr-2"
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => onDelete(supply)}
        >
          Delete
        </Button>
      </div>
    </Card>
  );
}
