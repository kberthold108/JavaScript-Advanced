function validate() {
    const submit = document.getElementById("submit");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const companyInfo = document.getElementById("companyInfo");
    const companyCheck = document.getElementById("company");
    const companyNumber = document.getElementById("companyNumber");
    const div = document.getElementById("valid")

    const usernameRegex = /^[A-Za-z\d]{3,20}$/;
    const emailRegex = /^.*@.*\..*$/;
    const passwordRegex = /^[\w]{5,15}$/;



    
    submit.addEventListener("click", submitted);

    companyCheck.addEventListener("change", companyCheckClicked);
    let checked = false;

    function submitted(event) {
        event.preventDefault();
        let valid = true;
        const userValid = usernameRegex.test(username.value);
        const emailValid = emailRegex.test(email.value)
        const passwordValid = passwordRegex.test(password.value);
        const confirmPasswordValid = passwordRegex.test(confirmPassword.value) && confirmPassword.value === password.value;
        const numberValid = companyNumber.value >= 1000 && companyNumber.value <= 9999;
        let numberIsValid = false;

        if (userValid) {
            username.style = "border:none";
        } else {
            username.style = "border-color:red";
            valid = false;
        }

        if (emailValid) {
            email.style = "border:none";
        } else {
            email.style = "border-color:red";
            valid = false;
        }

        if (passwordValid) {
            password.style = "border:none";
        } else {
            password.style = "border-color:red";
            valid = false;
        }
        if (confirmPasswordValid) {
            confirmPassword.style = "border:none";
        } else {
            confirmPassword.style = "border-color:red";
            valid = false;
        }

        if (numberValid) {
            companyNumber.style = "border:none";
            numberIsValid = true;
        } else {
            companyNumber.style = "border-color:red";
            numberIsValid = false;
            
        }

        if (checked === true) {
            if (valid && numberIsValid) {
                div.style = "display:block";
            } else {
                div.style = "display:none"
            }
        } else {
            if (valid) {
                div.style = "display:block";
            } else {
                div.style = "display:none"
            }
        }

    }

    function companyCheckClicked(event) {
        event.preventDefault();
        if (event.target.checked === true) {
            companyInfo.style = "display:block";
            checked = true;
        } else {
            companyInfo.style = "display:none";
            checked = false;
        }
    }

}
