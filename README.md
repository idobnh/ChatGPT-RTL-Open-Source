# ChatGPT RTL Open Source

A tiny, privacy-first Chrome extension that adds an RTL/LTR direction button to the ChatGPT composer.

## Features

- One-click RTL/LTR switching for the prompt editor and chat messages.
- Direction icon that reflects the active mode.
- Code and mathematical expressions remain left-to-right.
- The selected mode lasts for the current page session and resets after a full reload.
- No tracking, analytics, network requests, accounts, or saved data.
- No third-party libraries and no build step.

## Install locally

1. Download or clone this repository.
2. Open `chrome://extensions` in Chrome.
3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select the repository folder.
6. Reload `https://chatgpt.com`.

## Privacy and permissions

The extension runs only on `https://chatgpt.com/*`. It requests no Chrome API permissions and does not collect, store, or transmit any user data. See [PRIVACY.md](PRIVACY.md) for the full policy.

## Project structure

- `manifest.json` — Manifest V3 configuration.
- `content.js` — mounts and controls the direction button.
- `content.css` — applies direction styles and draws the button.
- `icons/` — extension icons in Chrome's required sizes.

## License

Released under the [MIT License](LICENSE).

## Disclaimer

This is an independent open-source project. It is not affiliated with, endorsed by, or sponsored by OpenAI. ChatGPT is a trademark of OpenAI.
