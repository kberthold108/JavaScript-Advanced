
const assert = require("assert");


function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255)){
        return undefined; // Red value is invalid
    }
    if (!Number.isInteger(green) || (green < 0) || (green > 255)){
        return undefined; // Green value is invalid
    }
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255)){
        return undefined; // Blue value is invalid
    }
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

it("should return red", function() {
    const expected = "#FF0000";
    const actual = rgbToHexColor(255,0,0);

    assert.equal(actual, expected);
});

it("should return undefined if input is below range", function() {
    const expected = undefined;
    const actual = rgbToHexColor(-108, -108, -108);

    assert.equal(actual, expected);
})
it("should return undefined if the input is above range", function() {
    const expected = undefined;
    const actual = rgbToHexColor(500,500,500);

    assert.equal(actual, expected);
});
