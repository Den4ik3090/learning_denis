// Функция выполняеся до просмотра всего кода . Работает до того как была вызвана - FUNCTION Declaration
console.log(calc(20,5));
console.log(calc(12,13));
function calc(a,b){
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
function calc(a,b){
    return a+b
}

console.log(calc(10,10));
console.log(calc(13,10));
console.log(calc(20,5));
console.log(calc(12,13));

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
const calc=(a,b)=> a+b; //Такая функция не имеет контекста ВЫЗОВА

