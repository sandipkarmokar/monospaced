import React from "react";
import { CodingLanguages } from "../Data/CodingLanguages";
import CodingLanguageButton from "./CodingLanguageButton";

function EditorHeader() {
  const [selectedButton, setSelectedButton] = React.useState("HTML");
  console.log(selectedButton);
  return (
    <div className="bg-dark_blue-300 h-20 rounded-t-lg border-[#012A45] p-6">
      {CodingLanguages.map(({ name, id }) => {
        const isSelected = selectedButton === name;
        return (
          <CodingLanguageButton
            setSelectedButton={setSelectedButton}
            name={name}
            key={id}
            isSelected={isSelected}
          ></CodingLanguageButton>
        );
      })}
    </div>
  );
}

export default EditorHeader;
