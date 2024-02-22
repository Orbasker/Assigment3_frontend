import React from "react";

export default function ListItem({ supply, onEdit, onDelete }) {
  return (
    <div
      key={supply._id}
      className="bg-white p-5 rounded-lg shadow-lg m-2 flex justify-between items-center"
    >
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          {supply.name}
        </h2>
        <p className="text-left">Quantity: {supply.quantity}</p>
        <p className="text-left">Price: {supply.price}</p>
      </div>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1"
          onClick={() => onEdit(supply)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1"
          onClick={() => onDelete(supply)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
