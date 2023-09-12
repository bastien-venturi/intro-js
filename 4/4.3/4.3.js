function rand10() {
    return Math.ceil(Math.random() * 10);
}

let n = prompt('How many random numbers between 1 and 10 do you want?');

if ( n <= 0) {
    console.log('Invalid input. Please enter a positive number.');
} else {
    for (let i = 1; i <= n; i++) {
        let random = rand10();
        console.log(random);
    }
}