import React from "react";

function CodingLanguageButton({ name, id }) {
  return (
    <button key={id} className="bg-dark_blue-200 px-6 py-2">
      {name}
    </button>
  );
}

export default CodingLanguageButton;
