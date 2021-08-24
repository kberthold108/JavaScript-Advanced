function lockedProfile() {
    const buttons = Array.from(document.getElementsByTagName("button"));
    buttons.forEach(button => button.addEventListener("click", changeInfos));

    function changeInfos(event) {
        const parent = event.target.parentNode;
        const locked = parent.querySelector("input[type='radio']");
        if (locked.checked === true) {
            return;
        }
        const [tempbutton] = Array.from(parent.getElementsByTagName("button"));
        
        if (tempbutton.textContent === "Show more") {
            const div = parent.querySelector("input[type='email']").parentNode;
            div.style = "display:block";
            tempbutton.textContent = "Hide it";
        } else if (tempbutton.textContent === "Hide it") {
            const div = parent.querySelector("input[type='email']").parentNode;
            div.style = "display:none";
            tempbutton.textContent = "Show more";
        }

    }
}