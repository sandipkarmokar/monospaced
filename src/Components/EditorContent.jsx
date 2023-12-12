import React from "react";
import Javascript from "../Language Files/javascript";

function EditorContent() {
  const code = Javascript.toString();
  return <div className="m-8">{code}</div>;
}

export default EditorContent;
