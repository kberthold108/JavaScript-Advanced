class Contact {
    constructor(firstName, lastName, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this._online = false;
    }

    get online() {
        return this._online;
    }
    set online(value) {
        this._online = value;
        if(!this.titleDiv) {
            return;
        }
        if (this.online === true) {
            this.titleDiv.className = "title online";
        } else {
            this.titleDiv.className = "title";
        }
        
    }

    render(id) {
        const appendToDiv = document.getElementById(id);
        const article = document.createElement("article");
        this.titleDiv = document.createElement("div");
        const titleButton = document.createElement("button");
        
        const infoDiv = document.createElement("div");
        
        const spanPhone = document.createElement("span");
        const spanEmail = document.createElement("span");

        this.titleDiv.classList.add("title");
        this.titleDiv.textContent = `${this.firstName} ${this.lastName}`;
        titleButton.innerHTML = "&#8505";
        this.titleDiv.appendChild(titleButton);

        infoDiv.classList.add("info");
        infoDiv.style.display = "none";

        spanPhone.innerHTML = "&phone";
        spanPhone.textContent = this.phoneNumber;
        spanEmail.innerHTML = "&#9993";
        spanEmail.textContent = this.email;

        titleButton.addEventListener("click", () => {
            if (infoDiv.style.display === "none") {
                infoDiv.style.display = "block";
            } else {
                infoDiv.style.display = "none"
            }
        })

        infoDiv.appendChild(spanPhone);
        infoDiv.appendChild(spanEmail);
        article.appendChild(this.titleDiv);
        article.appendChild(infoDiv);

        appendToDiv.appendChild(article);
    }
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
  ];
  contacts.forEach(c => c.render('main'));
  
  // After 1 second, change the online status to true
  setTimeout(() => contacts[1].online = true, 2000);
  