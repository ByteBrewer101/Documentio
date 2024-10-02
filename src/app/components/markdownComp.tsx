"use client"
// components/MarkdownEditor.tsx
import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownEditor: React.FC = () => {
  // State to hold the markdown content
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const editorRef = useRef<HTMLDivElement>(null);

  // Function to handle input in the content-editable div
  const handleInput = () => {
    if (editorRef.current) {
      setMarkdownContent(editorRef.current.innerText); // Get the text inside the contentEditable div
    }
  };

  useEffect(() => {
    // Add a listener for when content in the div changes
    const div = editorRef.current;
    if (div) {
      div.addEventListener("input", handleInput);
    }

    // Cleanup the event listener when component unmounts
    return () => {
      if (div) {
        div.removeEventListener("input", handleInput);
      }
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      {/* Content-editable div for markdown input */}
      <div
        className="w-full p-4 border rounded-lg mr-4"
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning={true} // Suppress React contentEditable warning
        style={{ whiteSpace: "pre-wrap", minHeight: "200px", outline: "none" }}
      >
        Write your markdown here...
      </div>

      {/* Render markdown content */}
      <div className="w-full p-4 border rounded-lg">
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;
