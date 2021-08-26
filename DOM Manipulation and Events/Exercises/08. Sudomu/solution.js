function solve() {

    const [checkButton, clearButton] = Array.from(document.getElementsByTagName("button"));
    checkButton.addEventListener("click", check);
    clearButton.addEventListener("click", clear)

    function clear() {
        const rowsClear = Array.from(document.getElementsByTagName("tr"));
        rowsClear.shift();
        rowsClear.shift();
        for (let i = 0; i < rowsClear.length; i++) {
            const currRow = rowsClear[i];
            const children = Array.from(currRow.children);
            for (let p = 0; p < children.length; p++) {
                children[p].children[0].value = "";
            }
        }
        const outputMessage = document.getElementById("check");
        const [table] = Array.from(document.getElementsByTagName("table"));
        outputMessage.textContent = "";
        outputMessage.style.color = "";
        table.style.border = "";
    }
    
    function check() {
        const row1 = [];
        const row2 = [];
        const row3 = [];
        const rows = Array.from(document.getElementsByTagName("tr"));
        rows.shift();
        rows.shift();
        for (let i = 0; i < rows.length; i++) {
            const currRow = rows[i];
            const children = Array.from(currRow.children);
            for (let p = 0; p < children.length; p++) {
                if (p === 0) {
                    row1.push(children[p].children[0].value);
                } else if (p === 1) {
                    row2.push(children[p].children[0].value);
                } else if (p === 2) {
                    row3.push(children[p].children[0].value);
                }
            }
        }
        const row1check = checkDupes(row1);
        const row2check = checkDupes(row2);
        const row3check = checkDupes(row3);

        if (!row1check || !row2check || !row3check) {
            failed();
            return;
        }
        for (let i = 0; i < row1.length; i++) {
            if (row1[i] === row2[i] || row1[i] === row3[i] || row2[i] === row3[i]) {
                failed();
                return;
            }
        }
        finished();
    }

    function checkDupes(array) {
        return (new Set(array)).size === array.length;
    }

    function failed() {
        const outputMessage = document.getElementById("check");
        const [table] = Array.from(document.getElementsByTagName("table"));
        outputMessage.children[0].textContent = "NOP! You are not done yet...";
        outputMessage.children[0].style.color = "red";
        table.style.border = "2px solid red";
    }
    function finished() {
        const outputMessage = document.getElementById("check");
        const [table] = Array.from(document.getElementsByTagName("table"));
        outputMessage.children[0].textContent = "You solve it! Congratulations!";
        outputMessage.children[0].style.color = "green";
        table.style.border = "2px solid green";
    }
}