const length = document.querySelector('#length');
const upperBox = document.querySelector('#uppercase');
const lowerBox = document.querySelector('#lowercase');
const numberBox = document.querySelector('#number');
const symbolBox = document.querySelector('#symbol');

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
        let countBox = this.lowerBox.checked + this.upperBox.checked + this.numberBox + this.symbolBox;
        console.log(countBox);

        let generatedPassword = '';

        if (countBox === 0)
            return '';

    }
}



function EventListeners() {

    generateBtn.addEventListener('click', e => {
        const generator = new Generator(length, upperBox, lowerBox, numberBox, symbolBox);
        generator.generatePassword()
    })
}

EventListeners()