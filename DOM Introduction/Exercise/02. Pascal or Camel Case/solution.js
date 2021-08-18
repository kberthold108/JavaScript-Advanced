function solve() {
  //TODO...
    let text = document.getElementById("text").value;
    const namingCase = document.getElementById("naming-convention").value;

    text = text.toLowerCase().split(" ");
    if (namingCase === "Camel Case") {
      for (let i = 1; i < text.length; i++) {
          let word = text[i];
          word = word.charAt(0).toUpperCase() + word.slice(1);
          text[i] = word;
      }
      text = text.join("");
      document.getElementById("result").textContent = text;
    }else if (namingCase === "Pascal Case") {
      for (let i = 0; i < text.length; i++) {
          let word = text[i];
          word = word.charAt(0).toUpperCase() + word.slice(1);
          text[i] = word;
      }
      text = text.join("");
      document.getElementById("result").textContent = text;
    } else {
      
      document.getElementById("result").textContent = "Error!";
    }


}