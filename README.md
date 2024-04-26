# Keydown Event Handler Extension

The Keydown Event Handler is a lightweight Chrome extension designed to enhance user experience by managing keydown events in the browser, specifically targeting the 'Enter' key during text composition. This feature is particularly useful for users who work with complex input methods or need refined control over how key events are handled in web applications.

## Features

- **Toggle Activation**: Users can easily toggle the extension's functionality on and off with a single click on the extension icon. This toggles the keydown event handling on the active tab.
- **Visual Feedback**: The extension icon changes dynamically to indicate whether the event handler is active or inactive on the current tab.

## Installation

To install this extension:

1. Clone or download the repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" at the top right of the page.
4. Click "Load unpacked" and select the directory where you saved the extension files.

## Usage

Simply click on the extension icon to toggle the handling of the 'Enter' key during text composition. The icon will change to indicate whether the extension is active (colored icon) or inactive (black and white icon) on the current tab.

## How It Works

The extension uses a content script that listens for keydown events and a background script to manage the state and icon of the extension. When enabled, the script prevents the propagation of the 'Enter' key events if they are part of a text composition, ensuring that text input behaves as expected without unexpected submissions or other actions.

## Contributing

Contributions to this project are welcome! Please fork the repository and submit a pull request with your changes or improvements.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you encounter any issues or have suggestions for improvement, please file an issue in the GitHub repository.
