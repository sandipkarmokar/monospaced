import { useContext } from "react";
import { Fonts } from "../Data/Fonts";
import FontSelectorButton from "./FontSelectorButton";
import { FontContext } from "./Base";

function FontsDisplay() {
  const { font, setFont } = useContext(FontContext);
  return (
    <div className="m-6">
      {Fonts.map(({ name, id }) => {
        const isSelected = font === name;
        return (
          <FontSelectorButton
            isSelected={isSelected}
            setFont={setFont}
            name={name}
            key={id}
          />
        );
      })}
    </div>
  );
}

export default FontsDisplay;
