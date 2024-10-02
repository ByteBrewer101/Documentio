"use client";

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function MarkdownEditor() {
  const [markdownText, setMarkdownText] = useState("");
  const customComponents = {
    h1: (props: React.ComponentProps<"h1">) => (
      <h1 className="text-4xl font-bold text-blue-500" {...props} />
    ),
  };

  return (
    <div>
      <h1>Write your Markdown here:</h1>
      <textarea
        value={markdownText}
        onChange={(e) => setMarkdownText(e.target.value)}
        placeholder="Type some Markdown..."
      />
      <h2>Your Preview:</h2>
      <ReactMarkdown components={customComponents} remarkPlugins={[remarkGfm]}>
        {markdownText}
      </ReactMarkdown>
    </div>
  );
}

export default MarkdownEditor;
