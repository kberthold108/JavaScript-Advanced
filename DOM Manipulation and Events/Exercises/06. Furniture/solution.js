//TODO: Refactor when possible :)
function solve() {
  const [generateButton, buyButton] = Array.from(document.getElementsByTagName("button"));
  generateButton.addEventListener("click", generateButtonClicked);
  buyButton.addEventListener("click", buyButtonClicked);

  const [input, input2] = document.getElementsByTagName("textarea");

  const tbody = document.querySelector("tbody");

  const template = ({ img, name, price, decFactor }) => {
    const newItem = document.createElement("tr");

    newItem.innerHTML = `<td><img src=${img}></td>
                        <td><p>${name}</p></td>
                        <td><p>${price}</p></td>
                        <td><p>${decFactor}</p></td>
                        <td><input type="checkbox"/></td>`;
    return newItem;
  };

  function generateButtonClicked() {
    JSON.parse(input.value).forEach(val => tbody.appendChild(template(val)));
  }

  function buyButtonClicked() {
    let total = 0;
    const decScore = [];
    const set = new Set();
    const checked = Array.from(tbody.querySelectorAll("input[type=checkbox]:checked")).map(val => Array.from(val.parentNode.parentNode.children));
    checked.forEach(val => {
      set.add(val[1].textContent);
      total += Number(val[2].textContent);
      decScore.push(Number(val[3].textContent));
    });
    total = total.toFixed(2);
    const avgDecScore = decScore.reduce((acc, curr) => acc + curr) / decScore.length;
    input2.value += `Bought furniture: ${Array.from(set).join(", ")}\n`;
    input2.value += `Total price: ${total}\n`;
    input2.value += `Average decoration factor: ${avgDecScore}`;
  }
}