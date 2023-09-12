let a = parseFloat(prompt('Enter x1'));
let b = parseFloat(prompt('Enter x2'));
let c = parseFloat(prompt('Enter y1'));
let d = parseFloat(prompt('Enter y2'));

function Distance(a, c, b, d) {
    return Math.sqrt(Math.pow(d - c, 2) + Math.pow(b - a, 2));
}

const distance = Distance(a, c, b, d);
console.log('The distance between the two points is: '+distance);
