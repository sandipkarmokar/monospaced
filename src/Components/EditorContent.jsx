import React from "react";
import hljs from "highlight.js";
import Javascript from "../Language Files/javascript";
import Editor from "@monaco-editor/react";

function EditorContent() {
  React.useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <div className="h-full">
      <Editor
        className="h-full"
        theme="vs-dark"
        defaultLanguage="javascript"
      ></Editor>
      {/* <Javascript /> */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark-reasonable.css"
      />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
      <script>hljs.highlightAll();</script>
    </div>
  );
}

export default EditorContent;
