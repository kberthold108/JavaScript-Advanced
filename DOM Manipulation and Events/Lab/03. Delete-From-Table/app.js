function deleteByEmail() {
    const [input] = document.getElementsByTagName("input");
    const result = document.getElementById("result");
    const data = Array.from(document.getElementsByTagName("tr"));
    data.shift();
    const emails = Array.from(data.map(row => row.children[1].textContent));
    console.log(emails);
    if (emails.indexOf(input.value) === -1) {
        result.textContent = "Not found";
    } else {
        const index = emails.indexOf(input.value);
        result.textContent = "Deleted";
        data[index].remove();
    }
}