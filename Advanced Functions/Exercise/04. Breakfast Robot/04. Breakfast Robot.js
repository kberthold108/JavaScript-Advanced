function solution() {
    const ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

    const cmd = {
        prepare,
        restock,
        report
    };

    const meals = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
        },
    };

    function prepare(val, val1) {
        const meal = Object.entries(meals[val]);
        for (const line of meal) {
            const [product, qty] = line;
            if (ingredients[product] < qty * val1) {
                return `Error: not enough ${product} in stock`;
            }
        }
        meal.forEach(val => {
            const [product, qty] = val;
            ingredients[product] -= qty * val1;
        });
        return "Success";
    }

    function restock(ingredient, quantity) {
        ingredients[ingredient] += Number(quantity);
        return "Success";
    }

    function report() {
        const arr = [];
        Object.entries(ingredients).forEach(val => {
            arr.push(`${val[0]}=${val[1]}`);
        });
        return (arr.join(" "));
    }

    return input => {
        const [command, val1, val2] = input.split(" ");
        return cmd[command](val1, +val2);
    };

}


//['prepare turkey 1', 'Error: not enough protein in stock'],
//['restock protein 10', 'Success'],
//['prepare turkey 1', 'Error: not enough carbohydrate in stock'],
//['restock carbohydrate 10', 'Success'],
//['prepare turkey 1', 'Error: not enough fat in stock'],
//['restock fat 10', 'Success'],
//['prepare turkey 1', 'Error: not enough flavour in stock'],
//['restock flavour 10', 'Success'],
//['prepare turkey 1', 'Success'],
//['report', 'protein=0 carbohydrate=0 fat=0 flavour=0']


let manager = solution();
console.log(manager("prepare turkey 1"));
console.log(manager("restock protein 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("report"));



