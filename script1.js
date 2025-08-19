// Создание массивов


// function sumOfTripledEvens(array){
//         let sum=0;
//     for (let i=0 ;i < array.length; i++)
//         if (array[i]%2===0){
//             const tripleEvenNumber=array[i]*3;
//             sum=sum+tripleEvenNumber;
//         }
//         return sum;
// }
// const arr=[1,2,3,4];
// console.log(sumOfTripledEvens(arr));

// function addOne(num){
//     return num + 3;
// }
// const arr=[1,2,3,4,5];
// const maappedArr=arr.map((num)=> num + 1);
// console.log(maappedArr);
// console.log(arr);

// function isOdd(num){
//     return num % 2 !==0;
// }
// const arr=[1,2,3,4,5,6,7,8,9,10]
// const oddNums=arr.filter(isOdd);
// arr.push(34);
// console.log(oddNums);
// console.log(arr);
// console.log(arr.length);

// const arr=[1,2,3,4,5];
// const productOfAllNums=arr.reduce((total,currentItem)=>{
//     return total * currentItem;
// });
// console.log(productOfAllNums);
// console.log(arr);

// const arr=[100,300,500,500,900];
// const summArr=arr.reduce((one,two)=> one+two,0);
// console.log(summArr);


// const arr=[1,2,3,4,5];
//  const productOfAllNums=arr.reduce((total,currentItem)=>{
//      return total * currentItem;
// });
// console.log(productOfAllNums);
// console.log(arr);
  
// function sumOfTripledEvens(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     // Step 1: If the element is an even number
//     if (array[i] % 2 === 0) {
//       // Step 2: Multiply this number by three
//       const tripleEvenNumber = array[i] * 3;

//       // Step 3: Add the new number to the total
//       sum += tripleEvenNumber;
//     }
//   }
//   return sum;
// }
// let arr=[1,2,3,4,5,6,7,8]
// console.log(sumOfTripledEvens(arr));


// function sumOfTripledEvens(array){
//     return array
//     .filter((num)=> num%2===0)
//     .map((num)=> num*3)
//     .reduce((acc,one)=>acc*one, 0);
// }
// console.log(sumOfTripledEvens([1,2,3,4,5,6,7,8]));

// function kebabToCamel(str){
//     return str 
//     .split('-')
//     .map((word,index)=> index==0 ?word: word[0].toUpperCase()+word.slice(1))
//     .join('');
// }
// console.log(kebabToCamel('project-manager'));

// function camelToKebab(str){
//     return str
//     .replace (/[A-Z]/,(letter)=>'-' + letter.toUpperCase())
// }
// console.log(camelToKebab(`denisGrishaev`));

// function camelToKebab(str){
//     let kebab = str.replace(/[A-Z]/g, (letter) => '-' + letter.toUpperCase());
//     return kebab
//         .split('-')                                  // разбиваем по "-"
//         .map(word => word[0].toUpperCase() + word.slice(1)) // первая буква заглавная
//         .join('-');                                  // собираем обратно
// }

// console.log(camelToKebab("denisGrishaev")); 
// // Denis-Grishaev

// // Упражнение выбора чисел из нужного диапозона в массиве 
// function filterRange(arr,a,b){
//     return arr.filter( item=>(a<=item && item<=b));
//     }
//     let arr=[5,3,8,1]
//     arr.push(34)
//     let filtered= filterRange(arr,8,40);
//     console.log(filtered);
 let inc=10; //Присваивание
     dec=10;
    inc++;
    dec--;
     console.log(inc);
     console.log(dec);

     console.log(5%2);
 
    //  Оператор И- будет true если Все значения  true
    const isChecked= true;
            isClose= true;
            isBase= false; //Бует итог false  так как  оператор И 
    console.log(isChecked && isClose && isBase);      
    
    //Оператор ИЛИ || (! отрицание )
       const isChecked= false;
            isClose= false;
            isBase= false; //Бует итог false  так как  оператор И 
    console.log(!isChecked  || isClose);      
    
    
          