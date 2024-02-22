import React from "react";

// Correct way to receive props in a functional component
export default function ActionCard(props) {
  const { title, action, onClick } = props; // Destructure props here

  return (
    <div className="bg-white p-5 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h2>
      {/* Ensure onClick is attached to an element that can handle it, like this button */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onClick}
      >
        {action}
      </button>
    </div>
  );
}
