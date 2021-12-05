'use strict';  

let title = prompt('Как называется ваш проект?')
let screens = prompt('Какие типы экранов нужно разработать?, укажите через запятую')
let ScreenPrice = +prompt('Сколько будет стоить данная работа?')
let adaptive = confirm('Нужен ли адаптив на сайте?')
let service1 = prompt('Какой дополнительный тип услуг нужен?')
let servicePrice1 = +prompt('Сколько это будет стоить?')
let service2 = prompt('Какой дополнительный тип услуг нужен?')
let servicePrice2 = +prompt('Сколько это будет стоить?')
let rollback = 10
let fullPrice = ScreenPrice + servicePrice1 + servicePrice2
let servicePercentPrices = getservicePercentPrices(Number(fullPrice), Number(rollback), 100)
let allServicePrices

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}


const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return "Даем скидку в 10%"
    } else if (price >= 15000 && price < 30000) {
        return "Даем скидку в 5%"
    } else if (price >= 0 && price < 15000) {
        return "Скидка не предусмотрена"
    } else if (price < -1) {
        return "Что то пошло не так"
    }
}

function getAllServicePrices(price1, price2) {
    return Number(price1) + Number(price2)
}
allServicePrices = getAllServicePrices(Number(servicePrice1), Number(servicePrice2))

function getFullPrice(price3, price4) {
    return Number(price3) + Number(price4)
}
fullPrice = getFullPrice(Number(ScreenPrice), Number(allServicePrices))

function getTitle(string){
    let stringWisoutSpace = string.trim()
    return stringWisoutSpace[0].toUpperCase() + stringWisoutSpace.slice(1); 
}

function getservicePercentPrices(price5, price6, number3) {
    return Number(price5) - (Number(price5) * (Number(price6) / number3))
}

const getscreens = function(screens) {
    return screens.split(",")
}


showTypeOf(title)


console.log(getRollbackMessage(fullPrice));
console.log(getscreens(screens))
console.log(servicePercentPrices);

