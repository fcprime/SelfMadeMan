'use strict';

// let title = "Laser";
// let screens = "Light, Meddium, Hard";
// let ScreenPrice = 85 + " usd";
// let fullPrice = 950;
// let adaptive = true;
// console.log(title, fullPrice, adaptive);
// console.log(screens.length);
// console.log(ScreenPrice, fullPrice);
// console.log(screens.toLocaleLowerCase());
// console.log(screens.split(''));
// console.log(price);




let title = prompt('Как называется ваш проект?')
let screens = prompt('Какие типы экранов нужно разработать?')
let ScreenPrice = prompt('Сколько будет стоить данная работа?')
let adaptive = prompt('Нужен ли адаптив на сайте?')

let service1 = prompt('Какой дополнительный тип услуг нужен?')
let servicePrice1 = prompt('Сколько это будет стоить?')
let service2 = prompt('Какой дополнительный тип услуг нужен?')
let servicePrice2 = prompt('Сколько это будет стоить?')

let fullPrice = Number(ScreenPrice) + Number(servicePrice1) + Number(servicePrice2)
console.log(fullPrice);
let rollback = 60;
let price = fullPrice * (rollback/100)
let ServicePercentPrice = Number(fullPrice) - Number(price);
console.log(Math.ceil(Number(ServicePercentPrice)));

if (Number(fullPrice) > 30000) {
    console.log('Даем Скидку в 10%');
} else if (Number(fullPrice) > 15000 && Number(fullPrice) < 30000) {
    console.log('Даем скидку в 5%'); 
} else if (Number(fullPrice) < 15000 & Number(fullPrice) > 0) {
    console.log('Скидка не предусмотрена');
} else if (Number(fullPrice) < -1) {
    alert('Что то пошло не так');
}






