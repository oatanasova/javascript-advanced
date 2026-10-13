class Textbox {
    _elements;
    _invalidSymbols;
    _value;

    constructor(selector, invalidSymbols) {
        this._elements = document.querySelectorAll(selector);
        this._invalidSymbols = invalidSymbols;
        this._value = this._elements > 0 ? this._elements[0].value : '';

        Array.from(this._elements).forEach(element => {
            element.addEventListener('input', event => {
                this.value = event.target.value;
            })
        })
    }

    get elements() {
        return this._elements;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
        Array.from(this._elements).forEach(elements => elements.value = value);
    }
    
    isValid() {
        return Array.from(this._elements).every(elements => {
            return !this._invalidSymbols.test(elements.value)
        });
    }
}

let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click', function () { console.log(textbox.value); });