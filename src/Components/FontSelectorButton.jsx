import React from "react";

function FontSelectorButton({ setFont, name, id }) {
  return (
    <button
      className="bg-[#052840] text-white px-4 py-2 mx-2 my-2 rounded-sm"
      onClick={() => setFont(name)}
    >
      {name}
    </button>
  );
}

export default FontSelectorButton;
