function validate() {
    const input = document.getElementById("email");
    input.addEventListener("change", validateEmail);

    function validateEmail(event) {
        const string = event.target.value;

        if (/^[a-z]+@[a-z]+\.[a-z]+/g.test(string)){
            event.target.className = "";
            return;
        } 
        event.target.className = "error";
        return;

    }

}