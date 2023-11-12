# color-change-chrome-extension

This Chrome extension automatically changes the color of words in the DOM when they match specific patterns.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Bindubn001/color-change-chrome-extension.git
   cd color-change-chrome-extension
   
   The extension uses a content script (popup.js) to traverse the DOM and find text nodes containing specific patterns. When a match is found, it dynamically adds a <span> element around the matched text, changing its color.

# Customizing the Extension : 
To customize the extension to match different words or colors, modify the replaceText function in popup.js. Add or modify regular expressions to match the desired words, and adjust the replacement logic accordingly.

# Examples 

![Screenshot (66)](https://github.com/Bindubn001/color-change-chrome-extension/assets/104840116/838c1432-7b47-4518-8ca9-5879a54350b5)
