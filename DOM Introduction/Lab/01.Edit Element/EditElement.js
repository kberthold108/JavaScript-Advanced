function editElement(element, match, replacer) {
    const elementText = element.textContent;
    const replacedText = elementText.replace(match, replacer); 
    element.textContent = replacedText;
}