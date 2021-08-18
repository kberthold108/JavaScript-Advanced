function editElement(element, match, replacer) {
    const elementText = element.textContent;
    const regex = new RegExp(match, "g");
    const replacedText = elementText.replace(regex, replacer); 
    element.textContent = replacedText;
}