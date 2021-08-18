function search() {
   // TODO
   const search = document.getElementById("searchText").value;


   const towns = document.getElementById("towns").children;
   let matches = 0;

   for (let i = 0; i < towns.length; i++) {
      if (towns[i].innerHTML.includes(search)) {
         towns[i].style.textDecoration = "underline";
         towns[i].style.fontWeight = "bold";
         matches++;
      }
   }

   //works but not in judge
   // for (const i of towns) {
   //    if (i.innerHTML.includes(search)) {
   //       i.style.textDecoration = "underline";
   //       i.style.fontWeight = "bold";
   //       matches++;
   //    }
   // }

   document.getElementById("result").textContent = `${matches} matches found`;

}
