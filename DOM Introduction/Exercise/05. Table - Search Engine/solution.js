function solve() {
   document.querySelector("#searchBtn").addEventListener("click", onClick);

   function onClick() {
      let search = document.getElementById("searchField").value;
      const students = document.getElementsByTagName("tr");
      if (search === "") {
         return "";
      }
      for (let i = 2; i < students.length; i++) {
         students[i].classList.remove("select");
      }
      for (let i = 2; i < students.length; i++) {
         if (students[i].textContent.includes(search)) {
            students[i].classList.add("select");
         }
      }
   }
}