function subtract() {
    console.log('TODO:...');
    const num1 = Number(document.getElementById("firstNumber").value);
    const num2 = Number(document.getElementById("secondNumber").value);
    const sum = num1 - num2;
    console.log(sum);
    document.getElementById("result").textContent = sum;
}