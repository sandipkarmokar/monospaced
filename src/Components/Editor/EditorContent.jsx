// File: EditorContent.tsx
import React, { useContext, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { FontContext } from "../Base";
import { CodingLanguageContext } from "./Editor";
import { Fonts } from "../../Data/Fonts";
import { Javascript } from "../../Data/CodingLanguageFiles/Javascript";
import { HTML } from "../../Data/CodingLanguageFiles/HTML";
import { Typescript } from "../../Data/CodingLanguageFiles/Typescript";
import { Golang } from "../../Data/CodingLanguageFiles/Golang";
import { Java } from "../../Data/CodingLanguageFiles/Java";

function EditorContent() {
  const { font, setFont } = useContext(FontContext);
  const [selectedFont, setSelectedFont] = React.useState("");
  const { codingLanguage, setCodingLanguage } = useContext(
    CodingLanguageContext
  );

  console.log(codingLanguage.toLowerCase());

  useEffect(() => {
    const matchingFont = Fonts.find((el) => el.name === font);

    if (matchingFont) {
      setSelectedFont(matchingFont.name);
    }
  }, [font]);

  const options = {
    fontFamily: selectedFont,
    // semanticHighlighting: {
    //   enabled: false,
    // },
    // quickSuggestions: false,
  };

  const getDefaultValue = () => {
    switch (codingLanguage) {
      case "Javascript":
        return Javascript;
      case "HTML":
        return HTML;
      case "Typescript":
        return Typescript;
      case "Golang":
        return Golang;
      case "Java":
        return Java;
      default:
        return "";
    }
  };

  return (
    <div className="h-full">
      <Editor
        theme="vs-dark"
        defaultLanguage={codingLanguage.toLowerCase()}
        options={options}
        value={getDefaultValue()}
      ></Editor>
    </div>
  );
}

export default EditorContent;
