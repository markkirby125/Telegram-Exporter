import React, { useState } from 'react';
import { Key, Eye, EyeOff } from 'lucide-react';
import { ApiKeyProps } from '../types';

export const ApiKeyInput: React.FC<ApiKeyProps> = ({ apiKey, setApiKey }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mb-6">
      <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
        <Key size={16} />
        Gemini API Key
      </label>
      <div className="relative">
        <input
          type={isVisible ? "text" : "password"}
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="Enter your Google Gemini API Key"
          className="w-full bg-gray-900 text-white border border-gray-600 rounded-md py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="absolute right-3 top-2.5 text-gray-400 hover:text-white transition-colors"
        >
          {isVisible ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
      <p className="text-xs text-gray-500 mt-2">
        Your key is used locally and never stored. Get one at <a href="https://aistudio.google.com/" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">AI Studio</a>.
      </p>
    </div>
  );
};