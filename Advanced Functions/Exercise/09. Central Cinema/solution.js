// eslint-disable-next-line no-unused-vars
function solve() {
    const moviesList = document.querySelector("#movies ul");
    const archivesList = document.querySelector("#archive ul");
    const [onScreenButton, clearButton] = document.getElementsByTagName("button");
    onScreenButton.addEventListener("click", onScreenButtonClicked);
    clearButton.addEventListener("click", clearButtonClicked);


    function onScreenButtonClicked(event) {
        event.preventDefault();

        const input = Array.from(document.getElementById("container").children);
        input.pop();
        const [name, hall, ticketPrice] = input;
        name.value = name.value.trim();
        hall.value = hall.value.trim();
        ticketPrice.value = ticketPrice.value.trim();
        if (!name.value || !hall.value || !ticketPrice.value) {
            name.value = "";
            hall.value = "";
            ticketPrice.value = "";
            return;
        }

        moviesList.appendChild(makeMovie(name.value, hall.value, ticketPrice.value));
        name.value = "";
        hall.value = "";
        ticketPrice.value = "";
    }

    function makeMovie(name, hall, tickedPrice) {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = name;

        const strong = document.createElement("strong");
        strong.textContent = `Hall: ${hall}`;

        const div = document.createElement("div");
        const divStrong = document.createElement("strong");
        const divInput = document.createElement("input");
        const divButton = document.createElement("button");
        tickedPrice = Number(tickedPrice);
        divStrong.textContent = tickedPrice.toFixed(2);
        divInput.placeholder = "Ticked Sold";
        divButton.textContent = "Archive";
        divButton.addEventListener("click", archiveMovieButtonClicked);
        div.appendChild(divStrong);
        div.appendChild(divInput);
        div.appendChild(divButton);
        li.appendChild(span);
        li.appendChild(strong);
        li.appendChild(div);
        return li;
    }

    function archiveMovieButtonClicked(event) {
        const parent = event.target.parentNode;
        const parentLi = parent.parentNode;
        const [ticketsSold] = parent.getElementsByTagName("input");
        if (isNaN(ticketsSold.value) || !ticketsSold.value) {
            console.log("not A Number");
            return;
        }
        archivesList.appendChild(getProfitOfMovie(parentLi, ticketsSold.value));
        parentLi.parentNode.removeChild(parentLi);
    }

    function getProfitOfMovie(liWithInfos, ticketsSold) {
        const li = document.createElement("li");
        const span = document.createElement("span");
        const strong = document.createElement("strong");
        const button = document.createElement("button");

        const [movieName] = liWithInfos.getElementsByTagName("span");
        const [,ticketPrice] = liWithInfos.getElementsByTagName("strong");
        const totalProfit = (Number(ticketsSold) * Number(ticketPrice.textContent)).toFixed(2);
        span.textContent = movieName.textContent;
        strong.textContent = `Total amount: ${totalProfit}`;
        button.textContent = "Delete";
        button.addEventListener("click", deleteMovieFromArchive);

        li.appendChild(span);
        li.appendChild(strong);
        li.appendChild(button);
        return li;
    }

    function deleteMovieFromArchive(event) {
        const parent = event.target.parentNode;
        parent.parentNode.removeChild(parent);
    }

    function clearButtonClicked(event) {

        event.preventDefault();
        const arr = Array.from(archivesList.children);

        for (const i of arr) {
            i.parentNode.removeChild(i);
        }

    }
}