function solve() {
    const [checkButton, clearButton] = Array.from(document.getElementsByTagName("button"));
    checkButton.addEventListener("click", check);
    clearButton.addEventListener("click", clear);

    const rows = Array.from(document.getElementsByTagName("tr"));
    rows.shift();
    rows.shift();

    const outputMessage = document.getElementById("check");
    const [table] = Array.from(document.getElementsByTagName("table"));

    function clear() {
        for (let i = 0; i < rows.length; i++) {
            const currRow = rows[i];
            const children = Array.from(currRow.children);
            for (let p = 0; p < children.length; p++) {
                children[p].children[0].value = "";
            }
        }
        outputMessage.textContent = "";
        outputMessage.style.color = "";
        table.style.border = "";
    }


    function check() {
        const arr = [];
        const valueArr = []
        for (let i = 0; i < rows.length; i++) {
            //obj.add(Array.from(rows[i].children));
            const thing = Array.from(rows[i].children).flat(1);
            arr.push(thing);
        }

        arr.forEach(val => {
            const tempArr = [];
            val.forEach(vel => {
                tempArr.push(vel.children[0].value);
            });
            valueArr.push(tempArr);
        });
        
        for (let i = 0; i < valueArr.length; i++) {
            console.log(valueArr[i])
            console.log(valueArr[i + 1])
            console.log(valueArr[i] === valueArr[i + 1])
            if (valueArr[i] === valueArr[i + 1]) {
                failed()
            }
        }
    }


    function failed() {
        console.log("failed");
    }

}