# Un-Grok

<img src="imgs/hero.png" alt="Un-Grok Extension Demo" width="50%">

A Chrome extension that removes tweets mentioning @GROK from your Twitter/X feed.

## What it does

This extension automatically hides any tweet that:
- Contains a mention of `@GROK` (case-insensitive)
- Is posted by the user GROK

## Features

- **Automatic Filtering**: Removes GROK-related tweets in real-time as you scroll
- **Analytics Mode**: Optional toggle to display a counter showing how many tweets were removed
- **Clean Interface**: Minimal popup with a simple on/off toggle for analytics

## Installation

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" (toggle in top-right corner)
3. Click "Load unpacked"
4. Select the `un-grok` directory
5. The extension is now active on Twitter/X

## Usage

- The extension works automatically on twitter.com and x.com
- Click the extension icon to toggle Analytics Mode
- When Analytics Mode is enabled, you'll see a banner showing how many tweets were removed
- When disabled, tweets are still removed but no counter is shown

## Files

- `manifest.json` - Extension configuration
- `content.js` - Main script that removes tweets
- `popup.html` - Settings popup interface
- `popup.css` - Popup styling
- `popup.js` - Popup functionality
- `icon*.png` - Extension icons
