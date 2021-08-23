function addItem() {

    const input = document.getElementById("newItemText");
    const output = document.getElementById("items");

    const listItem = document.createElement("li");
    listItem.textContent = input.value;

    const deleteElement = document.createElement("a");

    deleteElement.href = "#";
    deleteElement.textContent = "[Delete]";
    listItem.addEventListener("click", deleteListElement);


    listItem.appendChild(deleteElement);
    output.appendChild(listItem);
    input.value = "";

    function deleteListElement(event) {
        output.removeChild(event.target.parentNode);
    }
}