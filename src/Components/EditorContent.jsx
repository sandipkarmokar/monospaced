import React, { useContext, useState } from "react";
import Editor from "@monaco-editor/react";
import { FontContext } from "./Base";
import { Fonts } from "../Data/Fonts";

function EditorContent() {
  const { font, setFont } = useContext(FontContext);
  const [selectedFont, setSelectedFont] = useState("");

  React.useEffect(() => {
    const matchingFont = Fonts.find((el) => el.name === font);

    if (matchingFont) {
      setSelectedFont(matchingFont.name);
    }
  }, [font]);

  const options = {
    fontFamily: selectedFont,
  };

  const jsValue = `
    const greeter = (name) => {
      console.log(name);
    };

    greeter("alex");
    const greeter = (name) => {
      console.log(name);
    };

    greeter("alex");
    const greeter = (name) => {
      console.log(name);
    };

    greeter("alex");
  `;

  return (
    <div className="h-full">
      <Editor
        className="h-full"
        theme="vs-dark"
        defaultLanguage="javascript"
        options={options}
        defaultValue={jsValue}
      ></Editor>
    </div>
  );
}

export default EditorContent;
