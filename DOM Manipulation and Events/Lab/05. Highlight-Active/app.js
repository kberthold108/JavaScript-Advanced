function focused() {
    const divs = Array.from(document.getElementsByTagName("input"));
    divs.map(x => x.addEventListener("click", clicked));
    
    function clicked(event) {
        divs.map(x => x.parentNode.classList.remove("focused"));
        event.target.parentNode.classList.add("focused");
    }
}