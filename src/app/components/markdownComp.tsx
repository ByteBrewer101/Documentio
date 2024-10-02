"use client"

import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownEditor: React.FC = () => {

  const [markdownContent, setMarkdownContent] = useState<string>("");
  const editorRef = useRef<HTMLDivElement>(null);

 
  const handleInput = () => {
    if (editorRef.current) {
      setMarkdownContent(editorRef.current.innerText); 
    }
  };

  useEffect(() => {
    // Add a listener for when content in the div changes
    const div = editorRef.current;
    if (div) {
      div.addEventListener("input", handleInput);
    }


    
    return () => {
      if (div) {
        div.removeEventListener("input", handleInput);
      }
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row">

      <div
        className="w-full p-4 border rounded-lg mr-4"
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning={true} // Suppress React contentEditable warning
        style={{ whiteSpace: "pre-wrap", minHeight: "200px", outline: "none" }}
      >
        Write your markdown here...
      </div>

    
      <div className="w-full p-4 border rounded-lg">
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;
