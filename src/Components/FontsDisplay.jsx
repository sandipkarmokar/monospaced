import React, { useContext } from "react";
import { Fonts } from "../Data/Fonts";
import FontSelectorButton from "./FontSelectorButton";
import { FontContext } from "./Base";

function FontsDisplay() {
  const { font, setFont } = useContext(FontContext);
  console.log(font);
  return (
    <div className="m-6">
      {Fonts.map(({ name, id }) => {
        return <FontSelectorButton setFont={setFont} name={name} key={id} />;
      })}
    </div>
  );
}

export default FontsDisplay;
