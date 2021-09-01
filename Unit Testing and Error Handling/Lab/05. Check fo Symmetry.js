const assert = require("assert");
function isSymmetric(arr) {
    if (!Array.isArray(arr)){
        return false; // Non-arrays are non-symmetric
    }
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

it("should return false if input is a string", function() {
    const input = "123";
    const expected = false;
    const actual = isSymmetric(input);

    assert.equal(actual, expected);
});

it("should return false if input is a number", function() {
    const input = 1233;
    const expected = false;
    const actual = isSymmetric(input);

    assert.equal(actual, expected);
});

it("should return false if input is an object", function() {
    const input = {};
    const expected = false;
    const actual = isSymmetric(input);

    assert.equal(actual, expected);
});

it("should return false if input is a boolean", function() {
    const input = true;
    const expected = false;
    const actual = isSymmetric(input);

    assert.equal(actual, expected);
});

it("should return false if the given arraay is not symmetric", function() {
    const input = ["1", "2", "3"];
    const expected = false;
    const actual = isSymmetric(input);

    assert.equal(actual, expected);
});

it("should return true if the given array is Symmetric", function(){
    const input = ["1", "1", "1"];
    const expected = true;
    const actual = isSymmetric(input);

    assert.equal(actual, expected);
});


it("should return true if an empty array is passed", function(){
    const input = [];
    const expected = true;
    const actual = isSymmetric(input);

    assert.equal(actual, expected);
});
// check if it is an array