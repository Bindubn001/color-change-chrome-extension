replaceText(document.body);

function replaceText(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText);
  } else if (element.nodeType === Text.TEXT_NODE) {
    const regexPatterns = [
      /(green)/gi,
      /(environment)/gi,
      /(trees)/gi,
      /(plants)/gi
      // Add more regex patterns as needed
    ];

    const matches = regexPatterns.some(regex => regex.test(element.textContent));

    if (matches) {
      let newContent = element.textContent;
      regexPatterns.forEach(regex => {
        newContent = newContent.replace(regex, '<span class="rainbow">$&</span>');
      });

      const newElement = document.createElement('span');
      newElement.innerHTML = newContent;
      element.replaceWith(newElement);
    }
  }
}
