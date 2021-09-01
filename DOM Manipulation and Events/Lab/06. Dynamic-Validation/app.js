function validate() {
    const email = document.getElementById("email");
    const regex = /[a-z]+@[a-z]+\.[a-z]+/g;
    email.addEventListener("change", validate);

    function validate() {
        if (!email.value.match(regex)) {
            email.classList.add("error");
        } else {
            email.classList.remove("error");
        }
    }
}