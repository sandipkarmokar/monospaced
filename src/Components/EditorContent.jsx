import React from "react";
import Editor from "@monaco-editor/react";

function EditorContent() {
  // React.useEffect(() => {
  //   hljs.highlightAll();
  // }, []);

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
        defaultValue={jsValue}
      ></Editor>
      {/* <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark-reasonable.css"
      />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
      <script>hljs.highlightAll();</script> */}
    </div>
  );
}

export default EditorContent;
