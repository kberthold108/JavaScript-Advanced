const chai = require("chai");

class StringBuilder {
    constructor(string) {
        if (string !== undefined) {
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        } else {
            this._stringArray = [];
        }
    }

    append(string) {
        StringBuilder._vrfyParam(string);
        for (let i = 0; i < string.length; i++) {
            this._stringArray.push(string[i]);
        }
    }

    prepend(string) {
        StringBuilder._vrfyParam(string);
        for (let i = string.length - 1; i >= 0; i--) {
            this._stringArray.unshift(string[i]);
        }
    }

    insertAt(string, startIndex) {
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    }

    remove(startIndex, length) {
        this._stringArray.splice(startIndex, length);
    }

    static _vrfyParam(param) {
        if (typeof param !== 'string') throw new TypeError('Argument must be a string');
    }

    toString() {
        return this._stringArray.join('');
    }
}

let str = new StringBuilder('hello');
str.append(', there');
str.prepend('User, ');
str.insertAt('woop', 5);
console.log(str.toString());
str.remove(6, 3);
console.log(str.toString());

describe("testing the string builder", function () {
    it("should return a normal string when input is valid", function () {
        const str = new StringBuilder("Valid");
        const result = str.toString();
        const expected = "Valid";
        chai.expect(result).to.equal(expected);
    });

    it("should return a normal string when input is valid", function () {
        const str = new StringBuilder("");
        const result = str.toString();
        const expected = "";
        chai.expect(result).to.equal(expected);
    });

    it("should throw error when the input is not a string", function () {
        chai.expect(() => {
            const str = new StringBuilder(1);
        }).to.throw();
    });

});


describe("testing append function", function () {
    it("append should appen a string if input is valid", function () {
        const str = new StringBuilder("");
        str.append("1");
        const expected = "1";
        chai.expect(str.toString()).to.equal(expected);
    });
    it("append should appen a string if input is valid", function () {
        const str = new StringBuilder("TEST");
        str.append("Test");
        const expected = "TESTTest";
        chai.expect(str.toString()).to.equal(expected);
    });
    it(" valid", function () {
        const str = new StringBuilder("");
        str.append("");
        const expected = "";
        chai.expect(str.toString()).to.equal(expected);
    });

    it("should throw error when the append input is not a string", function () {
        chai.expect(() => {
            const str = new StringBuilder("w");
            str.append(1);
        }).to.throw();
    });
});

describe("testing prepend function", function () {
    it("prepend should prepend a string if input is valid", function () {
        const str = new StringBuilder("");
        str.prepend("1");
        const expected = "1";
        chai.expect(str.toString()).to.equal(expected);
    });
    it("prepend should prepend a string if input is valid", function () {
        const str = new StringBuilder("Wwasd");
        str.prepend("1");
        const expected = "1Wwasd";
        chai.expect(str.toString()).to.equal(expected);
    });
    it("prepend should prepend a string if input is valid", function () {
        const str = new StringBuilder("");
        str.prepend("");
        const expected = "";
        chai.expect(str.toString()).to.equal(expected);
    });
    it("prepend throw error when the append input is not a string", function () {
        chai.expect(() => {
            const str = new StringBuilder("");
            str.prepend(1);
        }).to.throw();
    });
});



describe("testing remove function", function () {
    it("should remove", function () {
        const str = new StringBuilder("test");
        str.remove(0, 1);
        const expected = "est";
        chai.expect(str.toString()).to.equal(expected);
    });
    it("should remove", function () {
        const str = new StringBuilder("test");
        str.remove(0, 1212);
        const expected = "";
        chai.expect(str.toString()).to.equal(expected);
    });
    it("should do nothing", function () {
        const str = new StringBuilder("test");
        str.remove("a", "a");
        const expected = "test";
        chai.expect(str.toString()).to.equal(expected);
    });

});


