import Editor from "./Editor";
import LanguageSelector from "./LanguageSelector";

function Base() {
  return (
    <div className="w-screen bg-dark_blue-500 h-screen flex items-center">
      <div className="container mx-auto max-w-1680 flex justify-between h-5/6 gap-12">
        <Editor />
        <LanguageSelector />
      </div>
    </div>
  );
}

export default Base;
