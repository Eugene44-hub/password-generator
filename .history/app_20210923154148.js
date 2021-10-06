// document.querySelector('.password').addEventListener('', e => {})
// console.log(String.fromCharCode())

const person = {
    lower: function() { return 'hi' },
    upper: function() { return 'bye' },
    number: function() { return 'hello' },
    symbol: function() { return 'wave' }
}

// let key1 = 'lower';
// let key2 = 'upper';
// let key3 = 'number';
// let key4 = 'symbol';
// console.log(person[key1]())
// console.log(person[key2]())
// console.log(person[key3]())
// console.log(person[key4]())
let x = [{ lower: true }, { upper: true }, { number: true }, { symbol: true }]
console.log(x.filter(item => Object.values()))

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