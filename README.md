# YouTube Auto Subscribe Script

This repository contains a JavaScript snippet that automatically clicks all "Subscribe" buttons on a YouTube search results page.  
It is useful for quickly subscribing to multiple channels shown in search results.

## ⚠️ Disclaimer
Use this script responsibly.  
Mass-subscribing can be considered spammy behavior and may violate YouTube's Terms of Service.  
You are responsible for your own account and actions.

---

## How It Works
- The script scans the current YouTube search results page for all visible "Subscribe" buttons.
- It clicks each button with a small delay between clicks to avoid overwhelming the page.
- The process runs entirely in your browser, no external tools required.

---

## Installation & Usage

### 1. Open a YouTube search results page
Example: [https://www.youtube.com/results?search_query=music](https://www.youtube.com/results?search_query=music)

### 2. Open your browser's Developer Console
- **Chrome / Edge**: Press `F12` or `Ctrl + Shift + J`
- **Firefox**: Press `F12` or `Ctrl + Shift + K`
- **Safari**: Enable Developer Menu in preferences, then press `Command + Option + C`

### 3. Paste and run the script
Copy the entire contents of [`subscribe.js`](./subscribe.js) and paste it into the console, then press **Enter**.

### 4. Wait for completion
The script will:
- Show how many channels were found
- Subscribe to each one
- Log the progress in the console

---

## Configuration
You can adjust the delay between clicks by changing:
```javascript
var SUBSCRIBE_DELAY_TIME = 200; // milliseconds
