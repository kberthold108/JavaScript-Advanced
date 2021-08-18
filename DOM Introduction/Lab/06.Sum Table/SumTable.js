function sumTable() {
    let sum = 0;
    const resultElement = document.getElementsById("sum");
    const tbody = document.querySelector("tbody");
    const rows = Array.from(tbody.children);
    for (let i = 1; i < rows.length - 1; i++) {
        const children = rows[i].children;
        sum += Number(children[1].textContent);
    }
    resultElement.textContent = sum;
}