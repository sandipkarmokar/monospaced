import React from "react";
import EditorHeader from "./EditorHeader";
import EditorContent from "./EditorContent";

export const CodingLanguageContext = React.createContext();

function Editor() {
  const [codingLanguage, setCodingLanguage] = React.useState("Javascript");
  return (
    <CodingLanguageContext.Provider
      value={{ codingLanguage, setCodingLanguage }}
    >
      <div className="h-5/6 w-8/12 bg-dark_blue-400 rounded-lg border-[#012A45]">
        <EditorHeader></EditorHeader>
        <EditorContent></EditorContent>
      </div>
    </CodingLanguageContext.Provider>
  );
}

export default Editor;
