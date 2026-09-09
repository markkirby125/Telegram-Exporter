# Telegram Exporter Script Generator

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) ![<a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a>](https://img.shields.io/badge/React-20232A?style=flat# Telegram Exporter Script Generatorlogo=react# Telegram Exporter Script GeneratorlogoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat# Telegram Exporter Script Generatorlogo=typescript# Telegram Exporter Script GeneratorlogoColor=white) ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=flat# Telegram Exporter Script Generatorlogo=vite# Telegram Exporter Script GeneratorlogoColor=FFD62E)


**Telegram chat exporter Python script generator** built as a React application. It uses <a href="https://ai.google.dev/" target="_blank" rel="noopener noreferrer">Gemini 2.5 Flash</a> to output async Python scripts based on the <a href="https://docs.telethon.dev/" target="_blank" rel="noopener noreferrer">Telethon library</a>, matching your requested export parameters.

## Features
- **Gemini Engine**: Calls the Gemini 2.5 Flash model to write the Python output.
- **Telethon Mapping**: The system prompt enforces Telethon v1.42+ syntax and blocks deprecated methods.
- **Dynamic Prompts**: Enter your export target (e.g., "Export all media from channel X to HTML") to receive the corresponding script.
- **Client-Side Execution**: Reads your API key from a local `.env` file. No backend server is required.

## Tech Stack
- React 19
- Vite
- Tailwind CSS
- Google Gen AI SDK

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/markkirby125/Telegram-Exporter.git
   cd Telegram-Exporter
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file with your Gemini API key:
   ```env
   GEMINI_API_KEY=your_key_here
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## License
MIT License
