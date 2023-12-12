import EditorHeader from "./EditorHeader";
import EditorContent from "./EditorContent";
function Editor() {
  return (
    <div className="h-5/6 w-9/12 bg-dark_blue-400 rounded-lg border-[#012A45]">
      <EditorHeader></EditorHeader>
      <EditorContent></EditorContent>
    </div>
  );
}

export default Editor;
