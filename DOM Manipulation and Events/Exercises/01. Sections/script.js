function create(words) {
   const output = document.getElementById("content");

   words.forEach(element => {
      const div = document.createElement("div");
      const p = document.createElement("p");
      p.textContent = element;
      p.style = "display:none";
      div.appendChild(p);
      div.addEventListener("click", changeDisplay);
      output.appendChild(div);
   });

   function changeDisplay(event) {
      const parentDiv = event.target;
      const child = parentDiv.querySelector("p");
      child.style = "display:block";
   }
}