// document.querySelector('.password').addEventListener('', e => {})
// console.log(String.fromCharCode())

const person = {
    lower: true,
    upper: true,
    number: true,
    symbols: false
}
let x = [{ lower: true }, { upper: false }, { number: true }, { symbol: true }]
x.filter(item => item === true);


// for (let i = 0; i < x.length; i++) {
//     const funcName = Object.keys(x);

// }
// const rand = {
//     lower: true,
//     upper: true,
//     number: false,
//     symbol: true,
// }

// const functName =
//     console.log()

// .filter(item => Object.values(item)[0]);

const x1 = ['hello', 'hi', 'bye']

const filtered = x1.filter(item => item !== 'hello');
console.log('hello' === x1[0])
console.log(filtered)