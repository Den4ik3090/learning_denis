// Функция выполняеся до просмотра всего кода . Работает до того как была вызвана - FUNCTION Declaration
console.log(calcBasic(20,5));
console.log(calcBasic(12,13));
function calcBasic(a,b){
    return a+b
}

//Изучение функций 
let num=20;                            //Переменная указана глобально 
function showFirstMessage(text){       //Переменный указанные в функции они Локальные и не видны за педелами ф. НО функция может принимать глобальные ПЕРЕМЕННЫЕ 
    console.log(text)
    let num=30;
    console.log(num)
}
showFirstMessage('Hello');
console.log(num)

//
function calcOld(a,b){
    return a+b
}

console.log(calcOld(10,10));
console.log(calcOld(13,10));
console.log(calcOld(20,5));
console.log(calcOld(12,13));

//
function ret(){
    let num=50;
    return num;
}
const anotherNum=ret(); //Функция вышла наружу и результат ее отобразится в CONST , и consol log выведет его 
console.log(anotherNum);


//Функция срабатывает только когда до нее дойдет код ( можно вызвать только после обьявления) Function Expression
const logger=function(){
console.log('Hello')
};
logger();

//Стандарт ES6 стрелочные функции 
const calcArrow=(a,b)=> a+b; //Такая функция не имеет контекста ВЫЗОВА

// Comprehensive Calculator Function
function calculator(num1, num2, operation) {
    // Convert inputs to numbers to handle string inputs
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    
    // Check if inputs are valid numbers
    if (isNaN(a) || isNaN(b)) {
        return "Error: Please enter valid numbers";
    }
    
    // Perform calculation based on operation
    switch (operation.toLowerCase()) {
        case 'add':
        case '+':
            return a + b;
        case 'subtract':
        case '-':
            return a - b;
        case 'multiply':
        case '*':
            return a * b;
        case 'divide':
        case '/':
            if (b === 0) {
                return "Error: Cannot divide by zero";
            }
            return a / b;
        case 'power':
        case '**':
        case '^':
            return Math.pow(a, b);
        case 'modulo':
        case '%':
            if (b === 0) {
                return "Error: Cannot calculate modulo with zero";
            }
            return a % b;
        default:
            return "Error: Invalid operation. Use: add, subtract, multiply, divide, power, modulo";
    }
}

// Advanced Calculator with more mathematical functions
function advancedCalculator(num, operation) {
    const a = parseFloat(num);
    
    if (isNaN(a)) {
        return "Error: Please enter a valid number";
    }
    
    switch (operation.toLowerCase()) {
        case 'sqrt':
        case 'square root':
            if (a < 0) {
                return "Error: Cannot calculate square root of negative number";
            }
            return Math.sqrt(a);
        case 'square':
            return a * a;
        case 'cube':
            return a * a * a;
        case 'sin':
            return Math.sin(a);
        case 'cos':
            return Math.cos(a);
        case 'tan':
            return Math.tan(a);
        case 'log':
            if (a <= 0) {
                return "Error: Cannot calculate logarithm of zero or negative number";
            }
            return Math.log10(a);
        case 'ln':
            if (a <= 0) {
                return "Error: Cannot calculate natural logarithm of zero or negative number";
            }
            return Math.log(a);
        case 'abs':
        case 'absolute':
            return Math.abs(a);
        case 'factorial':
            if (a < 0 || !Number.isInteger(a)) {
                return "Error: Factorial only works with non-negative integers";
            }
            let result = 1;
            for (let i = 2; i <= a; i++) {
                result *= i;
            }
            return result;
        default:
            return "Error: Invalid operation. Use: sqrt, square, cube, sin, cos, tan, log, ln, abs, factorial";
    }
}

// Test the calculator functions
console.log("\n=== Basic Calculator Tests ===");
console.log("10 + 5 =", calculator(10, 5, 'add'));
console.log("10 - 5 =", calculator(10, 5, 'subtract'));
console.log("10 * 5 =", calculator(10, 5, 'multiply'));
console.log("10 / 5 =", calculator(10, 5, 'divide'));
console.log("10 ^ 2 =", calculator(10, 2, 'power'));
console.log("10 % 3 =", calculator(10, 3, 'modulo'));
console.log("Division by zero:", calculator(10, 0, '/'));

console.log("\n=== Advanced Calculator Tests ===");
console.log("Square root of 16:", advancedCalculator(16, 'sqrt'));
console.log("Square of 5:", advancedCalculator(5, 'square'));
console.log("Cube of 3:", advancedCalculator(3, 'cube'));
console.log("Factorial of 5:", advancedCalculator(5, 'factorial'));
console.log("Absolute value of -10:", advancedCalculator(-10, 'abs'));

