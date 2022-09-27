// function calculator(a, operator, b) {
//     if (operator === "+") {
//             console.log(a + b);
//             return a + b;
        
//     } else if (operator === "-") {
//            console.log(a - b);
//             return a - b;
        
//     } else if (operator === "*") {
//             console.log(a * b);
//             return a * b;
            
//     } else if (operator === "/") {
//             console.log(a / b);
//             return a / b;
    
//     }
// }


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


// function calculator(a, operator, b) {
//     if (operator === "+") {
//         add(a, b);
        
//     } else if (operator === "-") {
//         subtract(a, b);
        
//     } else if (operator === "*") {
//         multiply(a, b)
            
//     } else if (operator === "/") {
//         divide(a, b);
    
//     }
// }

function calculator(a, operator, b) {
    switch (operator) {
        case ("+"):
            add(a, b);
            break;

        case ("-"):
            subtract(a, b);
            break;

        case ("*"):
            multiply(a, b);
            break;
        
        case ("/"):
            divide(a, b);
            break;
    }
}


calculator(5, "-", 7);


