function calculator(a, operator, b) {
    console.log(a, b);
    if (a + b) {
        function add(a, b) {
            console.log(a + b);
            return a + b;
        }
    } else if (a - b) {
        function subtract(a, b) {
            console.log(a - b);
            return a - b;
        }
    } else if (a * b) {
        function multiply(a, b) {
            console.log(a * b);
            return a * b;
        }    
    } else if (a / b) {
        function divide(a, b) {
            console.log(a / b);
            return a / b;
        }
    }
    console.log("What");
}

calculator(5, 7);