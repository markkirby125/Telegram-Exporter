import React from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  const [copied, setCopied] = React.useState(false);

  const extractPythonCode = (text: string): string => {
    // Regex to find python code blocks
    const pythonBlockRegex = /```python\s*([\s\S]*?)```/;
    const match = text.match(pythonBlockRegex);
    
    if (match && match[1]) {
      return match[1].trim();
    }
    
    // Fallback: look for generic code blocks
    const genericBlockRegex = /```\s*([\s\S]*?)```/;
    const genericMatch = text.match(genericBlockRegex);
    
    if (genericMatch && genericMatch[1]) {
      return genericMatch[1].trim();
    }

    // If no blocks found, return original text (assuming it might be just code)
    return text;
  };

  const handleCopy = async () => {
    const cleanCode = extractPythonCode(code);
    await navigator.clipboard.writeText(cleanCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group bg-[#1e1e1e] rounded-lg overflow-hidden border border-gray-700 shadow-2xl h-full flex flex-col">
      <div className="flex justify-between items-center px-4 py-2 bg-[#2d2d2d] border-b border-gray-700">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-xs text-gray-400 font-mono">script.py</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 rounded hover:bg-white/10 text-xs text-gray-400 hover:text-white transition-all border border-transparent hover:border-gray-600"
          title="Copy only the Python code"
        >
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
          {copied ? "Copied!" : "Copy Code Only"}
        </button>
      </div>
      <div className="overflow-auto flex-1 p-4 font-mono text-sm leading-relaxed text-gray-300">
        <pre className="whitespace-pre-wrap">{code}</pre>
      </div>
    </div>
  );
};