const assert = require("assert");

function sum(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += Number(num);
  }
  return sum;
}

describe("Testing sum", function() {
  it("should return correct result when provided with correct input", function () {
    //Arrange
    const arr = ["1", "2", "3"];
    const expected = 6;
    
    //Act
    const actual = sum(arr);
  
    //Assert
    assert.equal(actual, expected);
  });
  
  it("should return 0 (zero) if empty array is provided", function () {
    const arr = [];
    const expected = 0;
    const actual = sum(arr);
    assert.equal(actual, expected);
  });
  
  it("should return NaN if a string is provied in the input", function () {
    const arr = ["1", "2", "three"];
    const expected = NaN;
    const actual = sum(arr);
    assert.equal(actual, expected);
  });
  
  it("should throw an error if not an iterable input is provided", function () {
    const arr = 1234;
    assert.throws(() => sum(arr));
  });
});
