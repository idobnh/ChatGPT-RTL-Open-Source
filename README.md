# ChatGPT RTL Open Source

This is a small Google Chrome extension for ChatGPT.

Click the button and the text direction changes. Click it again and it changes back. That's it.

## Install from the Chrome Web Store

Coming soon.

## What it does

- Switches the prompt box and chat messages between right-to-left (RTL) and left-to-right (LTR).
- Keeps code and mathematical expressions left-to-right so they stay readable.
- Remembers the direction while the page is open and resets after a full reload.

## What it does not do

- No tracking or analytics.
- No saved data or accounts.
- No network requests.
- No access to browser history, cookies, or other websites.
- No third-party libraries or hidden code.

The whole extension is less than 20KB. It runs only on `chatgpt.com`, and all of the code is available here for anyone to read.

## Install locally

1. Download or clone this repository.
2. Open `chrome://extensions` in Chrome.
3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select the repository folder.
6. Reload `https://chatgpt.com`.

## Privacy

The extension does not collect, save, or send your prompts, replies, or any other data. Everything happens locally in the open ChatGPT page. See [PRIVACY.md](PRIVACY.md) for the full policy.

## Project structure

- `manifest.json` — Chrome's instruction sheet. It contains the extension's name and version, lists its icons, and tells Chrome to run it only on `chatgpt.com`.
- `content.js` — Finds the ChatGPT prompt box, adds the button, and switches the current direction when you click it.
- `content.css` — Controls how the button looks and applies the selected text direction to prompts and replies.
- `icons/` — The green extension icon in the different sizes Chrome needs.

## License

Released under the [MIT License](LICENSE).

## Disclaimer

This is an independent open-source project. It is not affiliated with, endorsed by, or sponsored by OpenAI. ChatGPT is a trademark of OpenAI.
