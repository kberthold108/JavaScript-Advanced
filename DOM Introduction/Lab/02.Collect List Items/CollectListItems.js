function extractText() {
    const list = document.getElementById("items");
    const textArea = document.getElementById("result");
    const listChildren = Array.from(list.children);

    for (const i of listChildren) {
        textArea.textContent += i.innerText + "\n";
    }
    textArea.textContent = textArea.textContent.trim();
}