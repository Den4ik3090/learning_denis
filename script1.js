// // Создание массивов


// // function sumOfTripledEvens(array){
// //         let sum=0;
// //     for (let i=0 ;i < array.length; i++)
// //         if (array[i]%2===0){
// //             const tripleEvenNumber=array[i]*3;
// //             sum=sum+tripleEvenNumber;
// //         }
// //         return sum;
// // }
// // const arr=[1,2,3,4];
// // console.log(sumOfTripledEvens(arr));

// // function addOne(num){
// //     return num + 3;
// // }
// // const arr=[1,2,3,4,5];
// // const maappedArr=arr.map((num)=> num + 1);
// // console.log(maappedArr);
// // console.log(arr);

// // function isOdd(num){
// //     return num % 2 !==0;
// // }
// // const arr=[1,2,3,4,5,6,7,8,9,10]
// // const oddNums=arr.filter(isOdd);
// // arr.push(34);
// // console.log(oddNums);
// // console.log(arr);
// // console.log(arr.length);

// // const arr=[1,2,3,4,5];
// // const productOfAllNums=arr.reduce((total,currentItem)=>{
// //     return total * currentItem;
// // });
// // console.log(productOfAllNums);
// // console.log(arr);

// // const arr=[100,300,500,500,900];
// // const summArr=arr.reduce((one,two)=> one+two,0);
// // console.log(summArr);


// // const arr=[1,2,3,4,5];
// //  const productOfAllNums=arr.reduce((total,currentItem)=>{
// //      return total * currentItem;
// // });
// // console.log(productOfAllNums);
// // console.log(arr);
  
// // function sumOfTripledEvens(array) {
// //   let sum = 0;
// //   for (let i = 0; i < array.length; i++) {
// //     // Step 1: If the element is an even number
// //     if (array[i] % 2 === 0) {
// //       // Step 2: Multiply this number by three
// //       const tripleEvenNumber = array[i] * 3;

// //       // Step 3: Add the new number to the total
// //       sum += tripleEvenNumber;
// //     }
// //   }
// //   return sum;
// // }
// // let arr=[1,2,3,4,5,6,7,8]
// // console.log(sumOfTripledEvens(arr));


// // function sumOfTripledEvens(array){
// //     return array
// //     .filter((num)=> num%2===0)
// //     .map((num)=> num*3)
// //     .reduce((acc,one)=>acc*one, 0);
// // }
// // console.log(sumOfTripledEvens([1,2,3,4,5,6,7,8]));

// // function kebabToCamel(str){
// //     return str 
// //     .split('-')
// //     .map((word,index)=> index==0 ?word: word[0].toUpperCase()+word.slice(1))
// //     .join('');
// // }
// // console.log(kebabToCamel('project-manager'));

// // function camelToKebab(str){
// //     return str
// //     .replace (/[A-Z]/,(letter)=>'-' + letter.toUpperCase())
// // }
// // console.log(camelToKebab(`denisGrishaev`));

// // function camelToKebab(str){
// //     let kebab = str.replace(/[A-Z]/g, (letter) => '-' + letter.toUpperCase());
// //     return kebab
// //         .split('-')                                  // разбиваем по "-"
// //         .map(word => word[0].toUpperCase() + word.slice(1)) // первая буква заглавная
// //         .join('-');                                  // собираем обратно
// // }

// // console.log(camelToKebab("denisGrishaev")); 
// // // Denis-Grishaev

// // // Упражнение выбора чисел из нужного диапозона в массиве 
// // function filterRange(arr,a,b){
// //     return arr.filter( item=>(a<=item && item<=b));
// //     }
// //     let arr=[5,3,8,1]
// //     arr.push(34)
// //     let filtered= filterRange(arr,8,40);
// //     console.log(filtered);
// //  let inc=10; //Присваивание
// //      dec=10;
// //     inc++;
// //     dec--;
// //      console.log(inc);
// //      console.log(dec);

// //      console.log(5%2);
 
// //     //  Оператор И- будет true если Все значения  true
// //     const isChecked= true;
// //             isClose= true;
// //             isBase= false; //Бует итог false  так как  оператор И 
// //     console.log(isChecked && isClose && isBase);      
    
// //     //Оператор ИЛИ || (! отрицание )
// //        const isChecked= false;
// //             isClose= false;
// //             isBase= false; //Бует итог false  так как  оператор И 
// //     console.log(isChecked  || !isClose);  //Используем оператор отрицание !

//      //  If esle -условия 
// if (1){
//     console.log(`OK`)
// }
// else {
//     console.log('Ошибка')
// }




//      //  Пример с условиями 
// const num=50;
// if(num<50){
//     console.log('Больше');
// }
// else if (num>100){
//     console.log('Слишком много');
// }
// else {
//     console.log('Ok')
// }



//      // Вариант условия- краткая запись 
// const num=52;
// (num === 50) ? console.log(`Ok`) : console.log('Ошибка');




// //  Исползлвание Switch несколько проверок и условий СТРОГО СРАВНЕНИЕ 
// // Если указывать значение не число а строки , будет то же самое 
//  const num=49;
//  switch (num){
//     case 49:
//         console.log('Неверно');
//         break;
//     case 100: 
//         console.log('Неверно');
//         break;
//     case 80:
//         console.log('В точку');
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;       
//  }


// // const hamburger= 5;
// // const fries= 0;
// // if (hamburger&&fries) {
// //     console.log('Я сыт!');
// // }

// const hamburger= 3;
// const fries= 2;
// const cola=2;

// console.log(((hamburger === 3 && cola && fries)));




// // &(Оператор И) всегда запинается на лжи и возвращает 1-ое ложное значение 
// // Если все аргументы верны  то он возвращает данные последнего аргумента!
// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'dfsdfsdf');




// // || или 
// const hamburger= 0;
// const fries= 0;
// const cola=0;
//  if (hamburger||fries||cola){
//     console.log(`Все довольны!`)
//  }
//  else{
//     console.log(` Идем в другое место `)
//  } 


// if (hamburger === 3 && cola===1 && fries) {
//     console.log('Заказ готов! И все сыты !');
// }
// else{
//     console.log('Мы уходим!')
// }




// // &(Оператор ИЛИ) всегда запинается на лжи и возвращает 1-ое верное  значение
// let johnReport, samReport, mariaReport=`done`, alexReport=`Ok`;
// console.log(johnReport||samReport||alexReport||mariaReport)




// // Варинат с большими условиями (Комбинация) ( Нужно ИЛИ 3 гамбургер и 2 колы , ИЛИ 3 картошки фри и 1 нагетсы )
    
//    const hamburger= 3;
// const fries= 3;
// const cola=0;
// const naggets=4;

//  if (hamburger===3 && cola ===2||fries===3 && naggets){
//     console.log(`Все довольны!`)
//  }
//  else{
//     console.log(` Идем в другое место `)


//  } 
// //  Вначале будет порядок (===true,===false,&& false, ===true, ===true, false||true и вернет последнее значение true= naggets)
//  console.log(hamburger===3 && (cola ===2||fries===3) && naggets);

// if (hamburger === 3 && cola===1 && fries) {
//     console.log('Заказ готов! И все сыты !');
// }
// else{
//     console.log('Мы уходим!')
// } 

// console.log(!0);



//                                 // ЗАДАЧИ!
// console.log(`good` || 2 || undefined || 5);  //   Условие ||-ИЛИ _Выведет   первое  значение true                             
// console.log(NaN&&2&&undefined); // Enter NaN, the first value
// console.log( 1 && 2 && 3 );
// console.log( !1 && 2 || !3 );
// console.log( 25 || null && !3 );
// console.log( NaN || null || !3 || undefined || 5);

// console.log( NaN || null && !3 && undefined || 5);

// console.log( 5 === 5 && 3 > 1 || 5);


// //  Все условия выполнятся
// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }


// // Условие не выполнится и отобразится PROBLEM
// const hamburger=0;
// const fries = NaN;
// const cola = 0;
// const nuggets = 0;

// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }
// else{
//     console.log(`Problem`)
// }

// // Условие не выполнится !
// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// let i=10;
//  for(let i=0; i<12; i++){
//     console.log(i)
//  }


// //Задача по  вложенному циклу !
//  let result=('');
//  const lengthString=7; 
//  for (let i=1;i<lengthString;i++){
//     for(let j=0;j<i;j++){
//         result=result+("*");

//     }
//     result=result+'\n';
//  }
//  console.log(result)


// // Пример вложенных циклов по перебору (метка, break , continue)
// first:for(let i=0;i<3;i++){
//     console.log(`FirstLevel: ${i}`);
//      for(let j=0;j<3;j++){
//          console.log(`SecondLevel: ${j}`)
//              for(let k=0;k<3;k++){
//                 if (k===2) continue first;
//                  console.log(`ThirdLevel: ${k}`)
//              }
//         }
//   }

