import React from "react";
import Editor from "./Editor/Editor";
import FontSelector from "./FontsSelector/FontSelector";

export const FontContext = React.createContext();

function Base() {
  const [font, setFont] = React.useState("Fira Code");
  return (
    <FontContext.Provider value={{ font, setFont }}>
      <div className="w-screen bg-dark_blue-500 h-screen flex items-center">
        <div className="container mx-auto max-w-1680 flex justify-between h-5/6 gap-12">
          <Editor />
          <FontSelector />
        </div>
      </div>
    </FontContext.Provider>
  );
}

export default Base;
