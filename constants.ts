export const DEFAULT_PROMPT = `Write a complete Python script for a command-line app called 'TelegramChatExporter' using the Telethon library (v1.42 or latest). The app must:

0. **Setup & Dependencies (LOGGING PRIORITY)**:
    - **IMMEDIATE ACTION**: Import 'logging' and configure it FIRST.
    - **Config**: File='debug_log.txt', Level=logging.DEBUG, Format='%(asctime)s - %(levelname)s - %(message)s'.
    - Log "Script started" immediately.
    - **Dependencies**:
        - Wrap Telethon import in try/except. If missing, log error and print "Error: Telethon not found". Exit(1).
        - Wrap Tqdm in try/except. If missing, log warning and define dummy.
        - Import 'traceback'.

1. **Authentication (Hybrid CLI/Interactive)**:
    - Log "Initializing client...".
    - Handle API ID/Hash (argparse or input). Log "API ID provided".
    - Securely handle login. Log "Client started".
    - Check authorization. Log "User authorized: [bool]".

2. **Chat Selection (Hybrid CLI/Interactive)**:
    - Log "Prompting for chat identifier".
    - Print tip: "Tip: Use 'me', username, or ID (forward to @userinfobot to get ID)."
    - Get input. **Log "Raw input received: '{input}'"**.
    - **Input Parsing**:
        - Check if input is integer-like (positive or negative).
        - If yes, convert to int. **Log "Converted input to integer: {value}"**.
        - If no, keep as string. **Log "Keeping input as string"**.
    - **Resolution**:
        - Log "Attempting get_entity({value})".
        - Wrap 'client.get_entity()' in try/except.
        - If successful, log "Entity resolved: {entity.id}".
        - If failed, **log the specific exception with exc_info=True** and re-raise.

3. **Message Fetching**:
    - Log "Starting message fetch loop".
    - Use 'client.iter_messages(chat, limit=None, reverse=True)'.
    - Filters: --min-date, --max-date, --search.
    - Use 'tqdm'.
    - Log "Total messages fetched: {count}".

4. **Media Handling**:
    - --download-media flag.
    - Log "Media download enabled: [bool]".

5. **Exports**:
    - **JSON**:
        - Log "Exporting to JSON...".
        - Function 'export_to_json'.
        - Keys: id, date, sender_id, text, reply_to, media_path.
    - **HTML**:
        - Log "Exporting to HTML...".
        - Function 'export_to_html'.
        - **Reply Resolution**: Build ID->Message map. Log "Map built, size: {len}".
        - Resolve reply snippets safely (check for None text).
        - Log "HTML generation complete".

6. **Architecture**:
    - Async 'main()'.
    - **Global Error Handler**:
        - Wrap ENTIRE main execution in try/except.
        - catch Exception as e:
            - **logging.critical("CRITICAL FAILURE", exc_info=True)**
            - print(f"CRITICAL ERROR: {e}\nSee debug_log.txt for details.")
            - traceback.print_exc()
    - **Completion & Exit Strategy**:
        - Log "Script finished successfully".
        - Print a visible summary to the console (Total messages, file locations).
        - **MANDATORY PAUSE**: At the very end of the script (in a 'finally' block or after the main logic), use 'input("\\nPress Enter to exit...")'. 
        - This must run whether the script succeeds or fails, so the user can read the output.
    - Act as a user client (no bot token).`;

export const SYSTEM_INSTRUCTION = `You are TeleBot, an expert Python developer and Telegram API specialist with 10+ years of experience building secure, efficient client apps using Telethon.
Your mission is to help build "TelegramChatExporter".
Prioritize privacy, error handling, and Telegram's TOS compliance.
Use Telethon v1.42+.
Ensure code is modular, well-commented, and uses asyncio.
Output only the requested code and brief explanations.`;