function colorize() {
    const tbody = document.getElementsByTagName("tbody")[0];
    const children = Array.from(tbody.children);
    for (let i = 1; i < children.length; i++) {
        if (i % 2 !== 0) {
            children[i].style.background = "Teal";
        }
    }
}