class Textbox {
	constructor (selector, regex) {
		this._value = "";
		this._elements = Array.from(document.querySelectorAll(selector));
		this._invalidSymbols = regex;
	}
    get elements () {
		return this._elements;
	}

	get value () {
		return this._value;
	}

	set value (val) {
        this._elements = this._elements.map(x => val);
		this._value = val;
	}

	isValid () {
        return this._invalidSymbols.test(this.value);
    } 
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click',function(){console.log(textbox.value);});
