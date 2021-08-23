function addItem() {
    const input = document.getElementById("newItemText").value;
    const output = document.getElementById("items");

    const listItem = document.createElement("li");
    listItem.textContent = input;
    output.appendChild(listItem);
    

}