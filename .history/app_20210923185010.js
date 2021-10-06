const length = document.querySelector('#length');
const upperBox = document.querySelector('#uppercase');
const lowerBox = document.querySelector('#lowercase');
const numberBox = document.querySelector('#number');
const symbolBox = document.querySelector('#symbol');
const output = document.querySelector('#password');
const clipBoard = document.querySelector('i');

const generateBtn = document.querySelector('#generate-password');

generateBtn.addEventListener('click', e => {
    console.log('password generated')
})

class Generator {
    constructor(length, upperBox, lowerBox, numberBox, symbolBox) {
        this.length = length;
        this.upperBox = upperBox
        this.lowerBox = lowerBox
        this.numberBox = numberBox;
        this.symbolBox = symbolBox;
    }
    generateUpperCase() {

        return String.fromCharCode(Math.floor(Math.random() * (90 - 65)) + 65)
    }
    generatelowerCase() {
        return String.fromCharCode(Math.floor(Math.random() * (122 - 97)) + 97)
    }
    generateNumber() {
        return String.fromCharCode(Math.floor(Math.random() * (57 - 49)) + 49)
    }
    generateSymbol() {
        let symbols = '!@#$%^&*\+=';

        return symbols[Math.floor(Math.random() * (10 - 1)) + 1]
    }

    randomfunc() {
        return {
            lower: this.generatelowerCase,
            upper: this.generateUpperCase,
            number: this.generateNumber,
            symbol: this.generateSymbol
        }
    }

    generatePassword() {
        let countBox = this.lowerBox.checked + this.upperBox.checked + this.numberBox.checked + this.symbolBox.checked;
        console.log(countBox);
        let lower = this.lowerBox.checked;
        let upper = this.upperBox.checked;
        let number = this.numberBox.checked;
        let symbol = this.symbolBox.checked;
        let length = this.length.value

        let generatedPassword = '';

        if (countBox === 0)
            return '';
        let typeVal = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);


        for (let i = 0; i < length; i += countBox) {
            typeVal.forEach(
                (type) => {
                    const keys = Object.keys(type)[0];
                    generatedPassword += this.randomfunc()[keys]()
                }
            )
        }
        return generatedPassword
    }
}



function EventListeners() {

    generateBtn.addEventListener('click', e => {
        const generator = new Generator(length, upperBox, lowerBox, numberBox, symbolBox);
        output.textContent = generator.generatePassword();

    })
    clipBoard.addEventListener('click', e => {
        const textarea = document.createElement('textarea');
        const password = output.textContent;

        textarea.value = password;
        document.body.appendChild(textarea);
        textarea.select();
        textarea.execCommand('copy');
        textarea.remove();
        alert()
    })
}

EventListeners()