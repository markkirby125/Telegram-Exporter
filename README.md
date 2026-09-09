# Telegram Exporter Script Generator

A specialized, AI-powered React application that generates a custom `TelegramChatExporter` Python script. Powered by Gemini 2.5 Flash, it produces robust, async Python scripts using the Telethon library tailored to your specific export requirements.

## Features
- **Gemini AI Engine**: Utilizes Google's Gemini 2.5 Flash model for fast, high-quality code generation.
- **Telethon Expertise**: The AI is system-prompted with deep knowledge of the Telethon v1.42+ API, ensuring accurate session management and Telegram TOS compliance.
- **Dynamic Prompts**: Describe your exact export requirements (e.g., "Export all media from channel X to HTML") and get a ready-to-run Python script.
- **Client-Side execution**: API keys are securely loaded via local `.env` and never touch a backend.

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
