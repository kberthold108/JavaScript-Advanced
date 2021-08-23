function solve() {
    const convertoption = document.getElementById("selectMenuTo");
    const [button] = document.getElementsByTagName("button");

    const options = {
        "binary": {text: "Binary", operation: (number) => number.toString(2)},
        "hexadecimal": {text: "Hexadecimal", operation: (number) => number.toString(16).toUpperCase()},
    }; 

    Object.entries(options).forEach(([optionValue, optionInfo]) => {
        const optionElement = document.createElement("option");
        optionElement.text = optionInfo.text;
        optionElement.value = optionValue;
        convertoption.add(optionElement, null);
    });

    button.addEventListener("click", onClick);

    function onClick() {
        const number = Number(document.getElementById("input").value);
        const operation = document.getElementById("selectMenuTo").value;
        document.getElementById("result").value = options[operation].operation(number);
    }
}