function solution(initialNum) {
    const initialNumber = initialNum;

    return {
        add: function add(num) {
            return initialNumber + num;
        },
        substract: function substract(num) {
            return initialNumber - num;
        }
    };
}

const calculator = solution(7);
console.log(solution.add(2));
console.log(solution.add(3));
console.log(solution.substract(2));
console.log(solution.substract(3));


class Calculator {

    constructor(number) {
        this.initialNum = number;

    }

    add(number) {
        return this.initialNum + number;
    }

    substract(number) {
        return this.initialNum - number;
    }
}

const calculator2 = new Calculator(7);
console.log(calculator2.add(2));
console.log(calculator2.add(3));
console.log(calculator2.substract(3));
console.log(calculator2.substract(2));