import React from "react";
import { CodingLanguages } from "../../Data/CodingLanguages";
import CodingLanguageButton from "../Buttons/CodingLanguageButton";

import { CodingLanguageContext } from "./Editor";

function EditorHeader() {
  const { codingLanguage, setCodingLanguage } = React.useContext(
    CodingLanguageContext
  );
  return (
    <div className="bg-dark_blue-300 h-20 rounded-t-lg border-[#012A45] p-6">
      {CodingLanguages.map(({ name, id }) => {
        const isSelected = codingLanguage === name;
        return (
          <CodingLanguageButton
            setCodingLanguage={setCodingLanguage}
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
