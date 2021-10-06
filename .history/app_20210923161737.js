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
        this.upperBox = upperBox;
        this.lowerBox = lowerBox;
        this.numberBox = numberBox;
        this.symbolBox = symbolBox;
    }
    generateUpperCase() {

        return String.fromCharCode(Math.floor(Math.random() * (90 - 65)) + 65)
    }
    generatelowerCase() {
        return String.fromCharCode(Math.floor(Math.random() * (90 - 65)) + 65)
    }
    generateNumber() {

    }
    generateSymbol() {

    }
}

const generator = new Generator(length, upperBox, lowerBox, numberBox, symbolBox);

console.log(generator.generateUpperCase())