import React from "react";

function CodingLanguageButton({ setCodingLanguage, name, id, isSelected }) {
  // return (
  // <button
  //   key={id}
  //   className={`bg-${
  //     isSelected ? "dark_blue-200" : "dark_blue-300"
  //   } text-white border-[#012A45] border-2 px-6 py-2`}
  //   onClick={() => setCodingLanguage(name)}
  // >
  //   {name}
  // </button>
  // );

  // For some reason having a single button and using conditional rendering on that button to display different states doesnt work properly with tailwind
  return (
    <>
      {isSelected ? (
        <button
          key={id}
          className="bg-dark_blue-200
       text-white border-[#012A45] border-2 px-6 py-2"
          onClick={() => setCodingLanguage(name)}
        >
          {name}
        </button>
      ) : (
        <button
          key={id}
          className="bg-dark_blue-300
       text-white border-[#012A45] border-2 px-6 py-2"
          onClick={() => setCodingLanguage(name)}
        >
          {name}
        </button>
      )}
    </>
  );
}

export default CodingLanguageButton;
