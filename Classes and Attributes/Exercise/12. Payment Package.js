const chai = require("chai");


class PaymentPackage {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value    
        this.active = true; // Default value
    }

    get name() {
        return this._name;
    }

    set name(newValue) {
        if (typeof newValue !== "string") {
            throw new Error("Name must be a non-empty string");
        }
        if (newValue.length === 0) {
            throw new Error("Name must be a non-empty string");
        }
        this._name = newValue;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        if (typeof newValue !== "number") {
            throw new Error("Value must be a non-negative number");
        }
        if (newValue < 0) {
            throw new Error("Value must be a non-negative number");
        }
        this._value = newValue;
    }

    get VAT() {
        return this._VAT;
    }

    set VAT(newValue) {
        if (typeof newValue !== "number") {
            throw new Error("VAT must be a non-negative number");
        }
        if (newValue < 0) {
            throw new Error("VAT must be a non-negative number");
        }
        this._VAT = newValue;
    }

    get active() {
        return this._active;
    }

    set active(newValue) {
        if (typeof newValue !== "boolean") {
            throw new Error("Active status must be a boolean");
        }
        this._active = newValue;
    }

    toString() {
        const output = [
            `Package: ${this.name}` + (this.active === false ? " (inactive)" : ""),
            `- Value (excl. VAT): ${this.value}`,
            `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
        ];
        return output.join("\n");
    }
}


it("non empty string", function() {
    const expectedError = "Name must be a non-empty string";
    chai.expect(() => new PaymentPackage("", 0)).to.throw(expectedError);
});

it("non num string", function() {
    const expectedError = "Name must be a non-empty string";
    chai.expect(() => new PaymentPackage(0, 0)).to.throw(expectedError);
});



it("value non negative num", function() {
    const expectedError = "Value must be a non-negative number";
    chai.expect(() => new PaymentPackage("0", "0")).to.throw(expectedError);
});
it("value non negative num", function() {
    const expectedError = "Value must be a non-negative number";
    chai.expect(() => new PaymentPackage("0", -1)).to.throw(expectedError);
});




it("vat", function() {
    const expectedError = "VAT must be a non-negative number";
    const test = new PaymentPackage("0", 1);
    chai.expect(() => test.VAT = -1).to.throw(expectedError);;
});
it("vat", function() {
    const expectedError = "VAT must be a non-negative number";
    const test = new PaymentPackage("0", 1);
    test.VAT = 2
    chai.expect(test.VAT).to.equal(2);
});
it("vat", function() {
    const expectedError = "VAT must be a non-negative number";
    const test = new PaymentPackage("0", 1);
    chai.expect(() => test.VAT = "-1").to.throw(expectedError);
});






it("active", function() {
    const expectedError = "Active status must be a boolean";
    const test = new PaymentPackage("0", 1);
    chai.expect(() => test.active = "-1").to.throw(expectedError);
});

it("active", function() {
    const test = new PaymentPackage("0", 1);
    chai.expect(test.active = false).to.equal(false);
});

it("active", function() {
    
    const test = new PaymentPackage("0", 1);
    chai.expect(test.active ).to.equal(true);
});



it("toString", function() {
    const expected = "Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800";
    const test = new PaymentPackage("HR Services", 1500);
    chai.expect(test.toString()).to.equal(expected);
});

it("toString", function() {
    const expected = "Package: HR Services\n- Value (excl. VAT): 0\n- Value (VAT 0%): 0";
    const test = new PaymentPackage("HR Services", 0);
    test.VAT = 0;
    chai.expect(test.toString()).to.equal(expected);
});

it("toString", function() {
    const expected = "Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800";
    const test = new PaymentPackage("HR Services", 1500);
    test.active = false
    chai.expect(test.toString()).to.equal(expected);
});
