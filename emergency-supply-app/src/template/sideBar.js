// Sidebar.js
import React from "react";

function SideBar() {
  return (
    <div className="flex flex-col items-center justify-between h-full w-16 bg-stone-200">
      <div className="mt-4">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/65ce7246242ebc7407c6a2566da1d477093102392e81f19435563b7f91ed366c?"
          className="w-8 h-8 cursor-pointer"
          alt="Home"
        />
      </div>
      <div className="mb-4">
        <img
          loading="lazy"
          src="https://via.placeholder.com/50"
          className="w-6 h-6 rounded-full cursor-pointer"
          alt="Profile"
        />
      </div>
    </div>
  );
}

export default SideBar;
