import React from "react";
import SideBar from "./sideBar";
import SupplyList from "./SupplyList";

function MyComponent(props) {
  return (
    <div className="bg-stone-50">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <SideBar />
        <SupplyList />
      </div>
    </div>
  );
}

export default MyComponent;
