# How to Install the Element Remover Chrome Extension

This guide will walk you through installing an unpacked Chrome extension.

## Prerequisites

- Google Chrome browser
- The extension files (manifest.json and content.js)

## Installation Steps

### 1. Create the Extension Directory

1. Create a new folder on your computer for the extension
2. Name it something recognizable (e.g., "ElementRemover")
3. Place both extension files inside this folder:
   - `manifest.json`
   - `content.js`

### 2. Enable Developer Mode in Chrome

1. Open Google Chrome
2. Click the three dots menu (⋮) in the top-right corner
3. Go to **More Tools** > **Extensions**
4. Alternatively, type `chrome://extensions/` in the address bar
5. In the top-right corner of the Extensions page, toggle on **Developer mode**

### 3. Load the Unpacked Extension

1. Click the **Load unpacked** button that appears after enabling Developer mode
2. Navigate to and select the folder you created with the extension files
3. Click **Select Folder** (Windows) or **Open** (Mac)

### 4. Verify Installation

1. You should see your extension appear in the list of installed extensions
2. The extension should be automatically enabled
3. You can verify it's working by visiting Twitter/X - the specified elements should be removed

## Troubleshooting

If the extension doesn't work immediately:
1. Try refreshing the Twitter/X page
2. Make sure the extension is enabled
3. Check the console for any error messages (Right-click > Inspect > Console)

## Updating the Extension

Just clone this repository again and refresh the extension on `chrome://extensions`

## Notes

- This extension needs to be in developer mode because it's not from the Chrome Web Store
- You may see a warning about running extensions in developer mode; this is normal
- The extension will remain installed until you manually remove it
- You'll need to update it manually if any changes are needed

## Security Note

Always be careful when installing extensions, especially in developer mode. Only install extensions from sources you trust and after reviewing the code yourself.