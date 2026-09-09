# Telegram Exporter Script Generator

A React application that generates custom `TelegramChatExporter` Python scripts. It uses Gemini 2.5 Flash to output async Python scripts based on the Telethon library, matching your requested export parameters.

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
