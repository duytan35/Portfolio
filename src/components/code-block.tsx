"use client";

import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightBright } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CopyIcon } from "@sanity/icons";

interface CodeBlockProps {
  code: string;
  language: string;
  filename?: string;
}

const CodeBlock = ({ code, language, filename }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      {filename && (
        <div className="text-[#E5E5E5] bg-[#404040] p-[0.5em_1em] font-bold rounded-t-md">
          {filename}
        </div>
      )}
      <div className="relative rounded-b-md">
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 bg-gray-700 text-white p-2 rounded-md group-hover:opacity-100 transition text-xs"
        >
          {copied ? "✅ Copied" : <CopyIcon style={{ fontSize: "16px" }} />}
        </button>
        <SyntaxHighlighter
          language={language}
          style={tomorrowNightBright}
          customStyle={{
            padding: "1em",
            marginBottom: "2em",
            background: "#222222",
            fontSize: "14px",
            borderBottomLeftRadius: "6px",
            borderBottomRightRadius: "6px",
          }}
        >
          {code.trim()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
