// document.querySelector('.password').addEventListener('', e => {})
// console.log(String.fromCharCode())

const person = {
    lower: true,
    upper: true,
    number: true,
    symbols: false
}
let x = [{ lower: true, greetings }, { upper: false }, { number: true }, { symbol: true }]
x.filter(item => console.log(Object.values(item)))


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
// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// function isPrime(num) {
//     for (let i = 2; num > i; i++) {
//         if (num % i == 0) {
//             return false;
//         }
//     }
//     return num > 1;
// }

// console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]