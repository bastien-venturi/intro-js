function factorial(a) {
    if (a === 0) {
        return 1;
    } else {
        return a * factorial(a - 1);
    }
}

let a = prompt('Enter number');
let result = factorial(a);
console.log('Factorial of '+ a +' is ' +result);
