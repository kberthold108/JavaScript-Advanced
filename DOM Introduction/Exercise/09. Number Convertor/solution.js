function solve() {
    const convertoption = document.getElementById("selectMenuTo");
    const [button] = document.getElementsByTagName("button");

    const option1 = document.createElement("option");
    const option2 = document.createElement("option");

    option1.value = "binary";
    option1.text = "Binary";

    option2.value = "hexadecimal";
    option2.text = "Hexadecimal";

    convertoption.add(option1, null);
    convertoption.add(option2, null);

    button.addEventListener("click", onClick);

    function onClick() {
        const number = Number(document.getElementById("input").value);
        const opation = document.getElementById("selectMenuTo").value;
        if (opation === "hexadecimal") {
            document.getElementById("result").value = number.toString(16).toUpperCase();
        } else {
            document.getElementById("result").value = number.toString(2);
        }
    }
}