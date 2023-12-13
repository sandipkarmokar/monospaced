import React from "react";
import { CodingLanguages } from "../Data/CodingLanguages";
import CodingLanguageButton from "./CodingLanguageButton";

function EditorHeader() {
  return (
    <div className="bg-dark_blue-300 h-20 rounded-t-lg border-[#012A45] p-6">
      {CodingLanguages.map(({ name, id }) => {
        return (
          <CodingLanguageButton name={name} key={id}></CodingLanguageButton>
        );
      })}
    </div>
  );
}

export default EditorHeader;
