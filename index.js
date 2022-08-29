let salarys = [10000, 25000, 50000, 100000];
let peoples = [5, 15, 40, 10];
let percents = [0, 0.1, 0.2, 0.5];

let allpeople = 0;
let tax = [];
let sum = 0;
let average = 0;


for (let i = 0; i < salarys.length; i++) {
  if (salarys[i] <= 10000) {
    tax[i] = salarys[i] * percents[0];
  } else if (salarys[i] > 10000 && salarys[i] <= 50000) {
    tax[i] = (salarys[i] - 10000) * percents[1] * peoples[i];

  } else if (salarys[i] > 50000 && salarys[i] <= 100000) {
    tax[i] = ((salarys[i] - 50000) * percents[2] + (salarys[i] - 10000 - (salarys[i] - 50000)) * percents[1]) * peoples[i];

  } else if (salarys[i] > 100000) {
    tax[i] = ((salarys[i] - 100000) * percents[3] + 50000 * percents[2] + 40000 * percents[1]) * peoples[i];
  }

  sum = sum + tax[i];
  allpeople = allpeople + peoples[i];
}

average = sum / allpeople;

console.log("суммарные налоговые отчисления: " + sum);
console.log("средние налоговые отчисления на человека: " + Math.floor(average));