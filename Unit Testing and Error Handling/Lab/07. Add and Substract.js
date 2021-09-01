const assert = require("assert");


function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}

it("should be a object", function() {
    const expected = "object";
    const actual = typeof createCalculator();
    assert.equal(actual, expected);
});

it("has methode add", function() {
    const expected = "function";
    const actual = typeof createCalculator().add;
    assert.equal(actual, expected);
})

it("has methode substract", function() {
    const expected = "function";
    const actual = typeof createCalculator().subtract;
    assert.equal(actual, expected);
})
it("has methode get", function() {
    const expected = "function";
    const actual = typeof createCalculator().get;
    assert.equal(actual, expected);
})