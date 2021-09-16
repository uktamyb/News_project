/* -=- Darsga Topshiriq

1) list of news knopkani ochirip tashlang

2) 'BBC' yozuvni orniga 'UzNews'ga almashtiring va rangini oziz istagan rangni tanglang

3) glavniy fon dagi rasimni ozgartiring. Rasim joylashuvi 'img' papkani ichida

4) bizlarda yangiliklardan tashkil topgan massiv bor. 
Yangiliklarni massiv yordamida chiqaring. Html dan ochirip Faqat JS code yozip.

5) yangiliklarni oldiga ularni raqamlarini qoyip chiqimg (1, 2, 3)

6) read more knopkaga border-radius style qoshing

*/

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const news = [
    "FOOTBALL",
    "BASKETBALL",
    "UFC",
    "BOX",
    "AMERICAN FOOTBAL IN EU...",
  ];

  const btnNews = document.querySelector(".btn__news"),
    promoBtn = document.querySelector(".promo__btn button"),
    promoGenre = document.querySelector(".promo__genre"),
    promoBg = document.querySelector(".promo__bg"),
    newsList = document.querySelector(".promo__interactive-list"),
    addForm = document.querySelector(".add"),
    addInput = document.querySelector(".adding__input"),
    addCheckbox = addForm.querySelector("[type='checkbox']");

  const sortArr = (arr) => {
    arr.sort();
  };

  addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let newItem = addInput.value;
    const favourite = checkbox.checked;
    news.push(newItem);
    sortArr(news);
  });

  btnNews.remove();

  promoBtn.style.cssText = "border-radius: 20px";

  // promoGenre.innerHTML = "UzNews";
  promoGenre.textContent = "UzNews";
  // promoGenre.insertAdjacentHTML("afterbegin", "UzNews"); // turgan yozuvga qushimcha yozuv qushish
  promoGenre.style.color = "yellow";

  promoBg.style.backgroundImage = "url('img/2.jpg')";

  function addNewsList(newsAdd, parent) {
    parent.innerHTML = "";
    sortArr(news);
    newsAdd.forEach((item, index) => {
      parent.innerHTML += `<li class="promo__interactive-item">
        ${index + 1}. ${item}
        <div class="delete"></div>
      </li>`;
    });
    document.querySelector(".delete");
  }
  addNewsList(news, newsList);
});
