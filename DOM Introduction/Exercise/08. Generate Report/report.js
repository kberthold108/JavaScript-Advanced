function generateReport() {
    const checkbox = Array.from(document.querySelectorAll("input[type='checkbox']"));
    const data = Array.from(document.getElementsByTagName("tr"));
    const output = document.getElementById("output");
    
    const arr = [];

    const checked = checkbox.filter(x => x.checked).map(x => x.name);
    const index = checkbox.map(x => x.name);
    
    const rowData = data.map(x => Array.from(x.children).map(y => y.innerHTML));
    rowData.shift();
    
    for (const line of rowData) {
        const info = {};
        for (let i = 0; i < checked.length; i++) {
            
            const tempindex = index.indexOf(checked[i]);
            
            info[checked[i]] = line[tempindex];
        }
        arr.push(info);
    }
    output.value = JSON.stringify(arr);
}