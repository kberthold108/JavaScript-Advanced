const assert = require("assert");

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}



it("check if string is even", function() {
    const expected = "even";
    const actual = isOddOrEven("cc");

    assert.equal(actual, expected);
});

it("check if string is odd", function() {
    const expected = "odd";
    const actual = isOddOrEven("ccc");

    assert.equal(actual, expected);
});

it("should return undefined when a number is passed", function() {
    const expected = undefined;
    const actual = isOddOrEven(9);

    assert.equal(actual, expected);
});

it("should return undefined when a array with numbers is passed", function() {
    const expected = undefined;
    const actual = isOddOrEven([9, 8]);

    assert.equal(actual, expected);
});

it("should return undefined when a array with strings is passed", function() {
    const expected = undefined;
    const actual = isOddOrEven(["wdad"]);

    assert.equal(actual, expected);
});