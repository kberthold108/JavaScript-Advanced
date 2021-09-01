const assert = require("assert");


function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

it("valid input should give valid result ('abcd', 2) => c", function() {
    const input = "abcd";
    const index = 2;
    const expected = "c";
    const actual = lookupChar(input, index);
    assert.equal(actual, expected)
})

it("should return undefined if first arg is not a string", function() {
    const input = 123456;
    const index = 2;
    const expected = undefined;
    const actual = lookupChar(input, index);
    assert.equal(actual, expected);
})
it("should return undefined if second arg is not a number", function() {
    const input = "123456";
    const index = "2";
    const expected = undefined;
    const actual = lookupChar(input, index);
    assert.equal(actual, expected);
})
it("should return undefined if second arg is not a number", function() {
    const input = "123456";
    const index = 2.6;
    const expected = undefined;
    const actual = lookupChar(input, index);
    assert.equal(actual, expected);
})
it("should return Incorrect index if index is not in the range (Bigger then the length of the string)", function() {
    const input = "123456";
    const index = 100000;
    const expected = "Incorrect index";
    const actual = lookupChar(input, index);
    assert.equal(actual, expected);
})
it("should return Incorrect index if index is not in the range (smaller then the string length (negative))", function() {
    const input = "123456";
    const index = -100000;
    const expected = "Incorrect index";
    const actual = lookupChar(input, index);
    assert.equal(actual, expected);
})