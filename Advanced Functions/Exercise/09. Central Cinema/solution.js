function solve() {
    const moviesList =  document.querySelector("#movies ul");
    const archivesList = document.querySelector("#archive ul");
    const [onScreenButton, clearButton] = document.getElementsByTagName("button");
    onScreenButton.addEventListener("click", onScreenButtonClicked)


    function onScreenButtonClicked() {
        console.log("wad")
    }
}