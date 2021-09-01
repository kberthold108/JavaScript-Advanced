const assert = require("assert");
let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe("mathEnforcer", function() {
    describe("addFive", function() {
        it("should return 10 if input is 5", function() {
            const expected = 10;
            const input = 5;
            const actual = mathEnforcer.addFive(input);
            assert.equal(actual, expected);
        });
        it("should return 5 if input is 0", function() {
            const expected = 5;
            const input = 0;
            const actual = mathEnforcer.addFive(input);
            assert.equal(actual, expected);
        });
        it("should return 0 if input is -5", function() {
            const expected = 0;
            const input = -5;
            const actual = mathEnforcer.addFive(input);
            assert.equal(actual, expected);
        });
        it("should return 10.42 if input is 5.42", function() {
            const expected = 10.42;
            const input = 5.42;
            const actual = mathEnforcer.addFive(input);
            assert.equal(actual, expected);
        });
        it("should return undefined if input is a string", function() {
            const expected = undefined;
            const input = "5";
            const actual = mathEnforcer.addFive(input);
            assert.equal(actual, expected);
        });
        it("should return undefined if input is a array", function() {
            const expected = undefined;
            const input = [5];
            const actual = mathEnforcer.addFive(input);
            assert.equal(actual, expected);
        });
    });
    describe("subtractTen", function() {
        it("should return 10 if input is 20", function() {
            const expected = 10;
            const input = 20;
            const actual = mathEnforcer.subtractTen(input);
            assert.equal(actual, expected);
        });
        it("should return 20 if input is -10", function() {
            const expected = -20;
            const input = -10;
            const actual = mathEnforcer.subtractTen(input);
            assert.equal(actual, expected);
        });
        it("should return 10.42 if input is 20.42", function() {
            const expected = 10.42;
            const input = 20.42;
            const actual = mathEnforcer.subtractTen(input).toFixed(2);
            assert.equal(actual, expected);
        });
        it("should return undefined if input is a string", function() {
            const expected = undefined;
            const input = "5";
            const actual = mathEnforcer.subtractTen(input);
            assert.equal(actual, expected);
        });
        it("should return undefined if input is a array", function() {
            const expected = undefined;
            const input = [5];
            const actual = mathEnforcer.subtractTen(input);
            assert.equal(actual, expected);
        });
    });
    describe("sum", function() {
        it("should return 10 if input is 5 and 5", function() {
            const expected = 10;
            const input1 = 5;
            const input2 = 5;
            const actual = mathEnforcer.sum(input1, input2);
            assert.equal(actual, expected);
        });
        it("should return -10 if input is -5 and -5", function() {
            const expected = -10;
            const input1 = -5;
            const input2 = -5;
            const actual = mathEnforcer.sum(input1, input2);
            assert.equal(actual, expected);
        });
        it("should return 10 if input is 5 and 5", function() {
            const expected = 0;
            const input1 = 5;
            const input2 = -5;
            const actual = mathEnforcer.sum(input1, input2);
            assert.equal(actual, expected);
        });
        it("should return 10.42 if input is 20.42", function() {
            const expected = 10.42;
            const input1 = 5.21;
            const input2 = 5.21;
            const actual = mathEnforcer.sum(input1, input2).toFixed(2);
            assert.equal(actual, expected);
        });
        it("should return undefined if input is a string", function() {
            const expected = undefined;
            const input1 = "5";
            const input2 = "5";
            const actual = mathEnforcer.sum(input1, input2);
            assert.equal(actual, expected);
        });
        it("should return undefined if input is a array", function() {
            const expected = undefined;
            const input1 = [5];
            const input2 = [5];
            const actual = mathEnforcer.sum(input1, input2);
            assert.equal(actual, expected);
        });
    });
})