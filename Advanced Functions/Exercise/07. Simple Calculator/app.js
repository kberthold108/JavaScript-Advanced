function calculator() {
    // TODO:

    const selectorsObj = {};

    function init(...selectors) {
        selectors.forEach((sel, i) => selectorsObj[i] = document.querySelector(sel));
    }

    function add() {
        selectorsObj[2].value = Number(selectorsObj[0].value) + Number(selectorsObj[1].value);
    }
    function subtract() {
        selectorsObj[2].value = Number(selectorsObj[0].value) - Number(selectorsObj[1].value);
    }

    return {
        init,
        add,
        subtract
    };
}


const calculate = calculator();
calculate.init("#num1", "#num2", "#result");

