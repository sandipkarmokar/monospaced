// File: EditorContent.tsx
import React, { useContext, useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { FontContext } from "./Base";
import { CodingLanguageContext } from "./Editor";
import { Fonts } from "../Data/Fonts";
import { Javascript } from "../Data/CodingLanguageFiles/Javascript";
import { HTML } from "../Data/CodingLanguageFiles/HTML";

function EditorContent() {
  const { font, setFont } = useContext(FontContext);
  const [selectedFont, setSelectedFont] = useState("");
  const { codingLanguage, setCodingLanguage } = useContext(
    CodingLanguageContext
  );

  useEffect(() => {
    const matchingFont = Fonts.find((el) => el.name === font);

    if (matchingFont) {
      setSelectedFont(matchingFont.name);
    }
  }, [font]);

  const options = {
    fontFamily: selectedFont,
  };

  const getDefaultValue = () => {
    switch (codingLanguage) {
      case "Javascript":
        return Javascript;
      case "HTML":
        return HTML;
      default:
        return "";
    }
  };

  console.log("codingLanguage:", codingLanguage);
  console.log("defaultValue:", getDefaultValue());

  return (
    <Editor
      className="h-full"
      theme="vs-dark"
      defaultLanguage={codingLanguage.toLowerCase()}
      options={options}
      defaultValue={getDefaultValue()}
    ></Editor>
  );
}

export default EditorContent;
