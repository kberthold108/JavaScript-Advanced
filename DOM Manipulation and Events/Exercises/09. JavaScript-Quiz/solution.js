function solve() {
  const answerText = Array.from(document.getElementsByClassName("answer-text"));
  answerText.forEach(element => {
    element.addEventListener("click", clicked);
  });
  const [output] = Array.from(document.getElementsByClassName("results-inner"));

  const endDisplayMessages = {
    victory: "You are recognized as top JavaScript fan!",
    lose: (correctAnswers) => `You have ${correctAnswers} right answers`
  };

  let correctAnswers = 0;
  let level = 0;
  const rightAnswerArr = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];

  function clicked(event) {
    const parent = event.target.parentNode.parentNode.parentNode.parentNode;
    const answer = event.target.textContent;
    const nextSibling = parent.nextElementSibling;
    parent.classList.add("hidden");
    parent.style.display = "none";
    nextSibling.style = "display:block";
    
    if (rightAnswerArr[level] === answer) {
      correctAnswers++;
    }

    level++;

    if (level === rightAnswerArr.length) {
      const result = document.getElementById("results");
      result.style.display = "block";
      output.children[0].textContent = correctAnswers === rightAnswerArr.length ? endDisplayMessages.victory : endDisplayMessages.lose(correctAnswers);
    }
  }
}
