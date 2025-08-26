// Выбрать элемент и создать ссылку на него 
const link=document.querySelector("a");
link.textContent="MozillaDeveloper Network";
link.href="https://developer.mozilla.org";

//  Создаем элемент section 
 const sect=document.querySelector("section");
 const para=document.createElement("p");
 para.textContent="We hope you enjoyed the ride."
 sect.appendChild(para);
 const text=document.createTextNode(" — the premier source for web development knowledge.");
 const linkPara=document.querySelector("p");
 linkPara.appendChild(text);
//  linkPara.remove();
//  Можно задавать стили CSS прямо в JS 
// para.style.color=("blue");
// para.style.backgroundColor="black"
// para.style.margin=("40px")
// para.style.width=('250px')
// para.style.height=("200px")
// para.style.display=("flex")
// para.style.flexDirection=('column')
// para.style.justifyContent=("center")
// para.style.alignItems=("center")
 linkPara.setAttribute("class", "highlight");  //Стили класса hihglight применяются к linkPara