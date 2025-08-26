// const container = document.querySelector("#container");

// const content = document.createElement("div");
// content.classList.add("content");
// content.textContent = "This is the glorious text-content!";

// container.appendChild(content);

// //Добавляем красный заголовок с помощью JS
// const p= document.createElement("p");
// p.style.color="red";
// p.textContent="Hey I'm red!";
// container.appendChild(p);

// //Добавление заголовка 3 уровня с помощью JS
// const h3=document.createElement("h3");
// h3.style.color="blue";
// h3.textContent="Я синий h3!";
// container.appendChild(h3);

// // Добавление контейнера с черной рамкой и розовым фоном 
// const newContainer=document.createElement("div");
// newContainer.style.backgroundColor="pink";
// newContainer.style.border="black"
// container.appendChild(newContainer);

// const h=document.createElement("h1");
// h.textContent="Я в див";
// newContainer.appendChild(h);

// const p1=document.createElement("p1");
// p1.textContent="Я ТОЖЕ!";
// p1.style.fontSize="24px";
// p1.style.fontWeight="bolder";
// newContainer.appendChild(p1);

// // const btn=document.querySelector("#btn");
// // btn.onclick = () =>alert("Привет мир");

// // // Прикрепляем функцию через JS к кнопке МЕТОД 1
// // function alertFunction(){
// //     alert("Внимание!");
// // }

// // МЕТОД 2
// function alertFunction(e) {
//   alert("YAY! YOU DID IT!");
// }
// btn.addEventListener("click", function (e) {
//   e.target.style.background = "blue"; // изменяем фон кнопки
// });
// btn.addEventListener("click", alertFunction);

// Показывает id кнопки, на которую кликнули
            const buttons = document.querySelectorAll("button"); // получаем все кнопки

            buttons.forEach((button) => {
            button.addEventListener("click", () => {
                alert(button.id); // показывает id кнопки, на которую кликнули
            });
        });
