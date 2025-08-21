// Изучение циклов 
let num=50;
while (num<=55){                   //Условие 
    console.log(num)
    num++;
}

do {
    console.log(num)
    num++;
}
while (num<=57);

// Условие прерывается на значение где указано break
//Continue  пропсукает значение и продолжает работать дальше 

for(let i=1;  i<10; i++) {
    if(i===6){
        //break;
        continue;
    }
    console.log(i);
}


// Пример функции: Каждое четное число массива будет умножатся на 3 и в итоге все сложим .
 function sumOfTripledEvens(array){
    let sum=0;
    for (let i=0;i<array.length; i++)
        if (i%2===0){
            const tripleEvenNumber=array[i]*3;
            sum=sum+tripleEvenNumber;
        }
        return(sum);
 }

 console.log (sumOfTripledEvens([2,3,4,5]));

// Пример функции которая фильтрует  и перебирает массив (arr.filter)
 function isOdd(num) {
  return num % 2 == 0;
}
const arr = [1, 2, 3, 4, 5];
const oddNums = arr.filter(isOdd);
console.log(oddNums); 
console.log(arr);