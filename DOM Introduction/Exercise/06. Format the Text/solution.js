function solve() {
  //TODO
  const text = document.getElementById("input").value;
  const output = document.getElementById("output");
  const splitted = text.split(".").filter(val => val.length > 0).map(val => val.trim());

  let arr = [];
  for (const i of splitted) {
    if (arr.length < 3) {
      arr.push(i);
    } else if (arr.length === 3) {
      output.innerHTML += `<p>${arr.join(".")}</p>`;
      arr = [];
      arr.push(i);
    }
  }
  output.innerHTML += `<p>${arr.join(".")}</p>`;
}