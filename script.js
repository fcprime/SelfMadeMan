let title = "Laser";
let screens = "Light, Meddium, Hard";
let ScreenPrice = 85 + " usd";
let rollback = 60;
let fullPrice = 950;
let adaptive = true;
let price = fullPrice * (rollback/100);


console.log(title, fullPrice, adaptive);
console.log(screens.length);
console.log(ScreenPrice, fullPrice);
console.log(screens.toLocaleLowerCase());
console.log(screens.split(''));
// console.log(fullPrice * (rollback/100));
console.log(price);