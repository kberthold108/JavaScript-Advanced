function solve() {
    const [addTask, openTask, inProgressTask, completeTask] = Array.from(document.getElementsByTagName("section"));
    const addTaskButton = document.getElementById("add");
    addTaskButton.addEventListener("click", addTaskButtonClicked);

    function addTaskButtonClicked(event) {
        event.preventDefault();
        const task = document.getElementById("task");
        const description = document.getElementById("description");
        const date = document.getElementById("date");

        task.value = task.value.trim();
        description.value = description.value.trim();
        date.value = date.value.trim();
        if (!task.value || !description.value || !date.value) {
            task.value = "";
            description.value = "";
            date.value = "";
            return;
        }
        createNewOpenTask(task.value, description.value, date.value);
        task.value = "";
        description.value = "";
        date.value = "";
    }

    function createNewOpenTask(taskName, taskDescription, taskDueToDate) {
        const [, appenToDiv] = Array.from(openTask.children);


        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = taskName;

        const descriptionP = document.createElement("p");
        descriptionP.textContent = `Description: ${taskDescription}`;

        const dateP = document.createElement("p");
        dateP.textContent = `Due Date: ${taskDueToDate}`;

        article.appendChild(h3);
        article.appendChild(descriptionP);
        article.appendChild(dateP);

        const buttonClass = document.createElement("div");
        const greenButton = document.createElement("button");
        const redButton = document.createElement("button");

        buttonClass.classList.add("flex");
        greenButton.classList.add("green");
        greenButton.textContent = "Start";
        greenButton.addEventListener("click", moveToInProgress);
        redButton.classList.add("red");
        redButton.textContent = "Delete";
        redButton.addEventListener("click", deleteArticle);

        buttonClass.appendChild(greenButton);
        buttonClass.appendChild(redButton);
        article.appendChild(buttonClass);
        appenToDiv.appendChild(article);
    }

    function deleteArticle(event) {
        const parent = event.target.parentNode.parentNode;
        parent.parentNode.removeChild(parent);
    }

    function moveToInProgress(event) {
        const [, appenToDiv] = Array.from(inProgressTask.children);

        const parent = event.target.parentNode.parentNode;
        const [deleteButton, finishButton] = Array.from(event.target.parentNode.getElementsByTagName("button"));
        deleteButton.classList.remove("green");
        deleteButton.classList.add("red");
        deleteButton.textContent = "Delete";
        deleteButton.removeEventListener("click", moveToInProgress);
        deleteButton.addEventListener("click", deleteArticle);
        finishButton.classList.remove("red");
        finishButton.classList.add("orange");
        finishButton.textContent = "Finish";
        finishButton.removeEventListener("click", deleteArticle);
        finishButton.addEventListener("click", moveToFinished);
        appenToDiv.appendChild(parent);
    }
    function moveToFinished(event) {
        const [, appenToDiv] = Array.from(completeTask.children);
        const parent = event.target.parentNode.parentNode;
        const [div] = Array.from(parent.getElementsByTagName("div"));
        parent.removeChild(div);

        appenToDiv.appendChild(parent);
    }
}