import FontsDisplay from "./FontsDisplay";

function FontSelector() {
  return (
    <div className="h-5/6 w-4/12 bg-dark_blue-400 rounded-lg border-[#012A45]">
      <div className="bg-dark_blue-300 h-20 rounded-t-lg border-[#012A45] flex items-center">
        <p className="ml-8 text-xl text-white">Select a font</p>
      </div>
      <FontsDisplay />
    </div>
  );
}

export default FontSelector;
