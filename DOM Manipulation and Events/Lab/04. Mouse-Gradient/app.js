function attachGradientEvents() {

    const gradiantBar =  document.getElementById("gradient");
    const result = document.getElementById("result");

    function updateDisplay(event) {
        result.innerText = Math.floor((event.offsetX / event.target.clientWidth) * 100) + "%";

      }
    gradiantBar.addEventListener("mousemove", updateDisplay, false);

}