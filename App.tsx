import React, { useState, useCallback } from 'react';
import { Terminal, Send, Code2, AlertCircle, Loader2 } from 'lucide-react';
import { CodeBlock } from './components/CodeBlock';
import { generateScript } from './services/geminiService';
import { DEFAULT_PROMPT } from './constants';
import { GenerationState } from './types';

export default function App() {
  const [prompt, setPrompt] = useState<string>(DEFAULT_PROMPT);
  const [state, setState] = useState<GenerationState>({
    isLoading: false,
    error: null,
    content: null,
  });

  const handleGenerate = useCallback(async () => {
    setState({ isLoading: true, error: null, content: null });

    try {
      const code = await generateScript(prompt);
      setState({ isLoading: false, error: null, content: code });
    } catch (err: any) {
      setState({ isLoading: false, error: err.message, content: null });
    }
  }, [prompt]);

  return (
    <div className="flex flex-col h-screen bg-gray-950 text-gray-100 font-sans selection:bg-blue-500/30">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-gray-900 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-600 rounded-lg shadow-lg shadow-blue-900/50">
            <Terminal size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">Telethon Script Gen</h1>
            <p className="text-xs text-blue-400 font-medium">Powered by Gemini 2.5 Flash</p>
          </div>
        </div>
        <a 
          href="https://docs.telethon.dev/en/stable/" 
          target="_blank" 
          rel="noreferrer"
          className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
        >
          <Code2 size={16} />
          Telethon Docs
        </a>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex overflow-hidden">
        
        {/* Left Panel: Configuration */}
        <div className="w-1/3 min-w-[350px] max-w-[500px] border-r border-gray-800 bg-gray-900/50 flex flex-col p-6 overflow-y-auto">
          
          <div className="flex-1 flex flex-col">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Script Requirements
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="flex-1 w-full bg-gray-800 text-sm text-gray-200 p-4 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none transition-all placeholder-gray-500 font-mono"
              placeholder="Describe the python script you need..."
            />
            
            <button
              onClick={handleGenerate}
              disabled={state.isLoading}
              className={`mt-6 w-full py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-semibold shadow-lg transition-all ${
                state.isLoading 
                  ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white hover:shadow-blue-900/30'
              }`}
            >
              {state.isLoading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Generating Script...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Generate Python Script
                </>
              )}
            </button>
            
            {state.error && (
              <div className="mt-4 p-3 bg-red-900/20 border border-red-800 rounded-md flex items-start gap-3">
                <AlertCircle size={18} className="text-red-400 shrink-0 mt-0.5" />
                <p className="text-sm text-red-200">{state.error}</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Panel: Output */}
        <div className="flex-1 p-6 bg-gray-950 flex flex-col overflow-hidden relative">
          {state.content ? (
            <CodeBlock code={state.content} />
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-gray-500 border-2 border-dashed border-gray-800 rounded-xl bg-gray-900/20">
              <Code2 size={48} className="mb-4 opacity-20" />
              <p className="text-lg font-medium">Ready to generate</p>
              <p className="text-sm opacity-60 max-w-md text-center mt-2">
                Click generate to create the TelegramChatExporter script.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}