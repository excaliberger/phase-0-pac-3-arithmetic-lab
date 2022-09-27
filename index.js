function add(a, b) {
    console.log(a + b);
    return a + b;
}
function subtract(a, b) {
    console.log(a - b);
    return a - b;
}
function multiply(a, b) {
    console.log(a * b);
    return a * b;
}
function divide(a, b) {
    console.log(a / b);
    return a / b;
}

add(5, 3)

function increment(n) {
    console.log(n + 1);
    return n + 1;
}


function decrement(n) {
    console.log(n - 1);
    return n - 1;
}

increment(4);
decrement(19);

function makeInt(n) {
    const integer = parseInt(n, 10);
    console.log(integer);
    return integer;
        
}

function preserveDecimal(n) {
    const decimal = parseFloat(n, 10);
    console.log(decimal);
    return decimal;    
}

preserveDecimal("8.97543");
makeInt("5");