function encodeAndDecodeMessages() {
    const button = Array.from(document.getElementsByTagName("button"));
    button.forEach(button => button.addEventListener("click", messageDecoder));

    function messageDecoder(event) {
        const parent = event.target.parentNode;
        const [text] = Array.from(parent.getElementsByTagName("textarea"));
        const diffArea = button[1].parentNode;
        const [diffText] = Array.from(diffArea.getElementsByTagName("textarea"));

    
        if (parent.getElementsByTagName("p")[0].textContent === "Last received message") {
            const arr2 = Array.from(diffText.value);
            const code2 = arr2.map(char => char.charCodeAt() - 1).map(char => String.fromCharCode(char)).join("");
            diffText.value = code2;
        } else {
            const arr = Array.from(text.value);
            const code = arr.map(char => char.charCodeAt() + 1).map(char => String.fromCharCode(char)).join("");

            diffText.value = code;
            text.value = "";
        }

    }
}