# Домашнее задание к занятию «Знакомство с JavaScript»

## Задача 2. Посчитать налоги с использованием прогрессивной шкалы налогообложения.

Перед вами стоит задача разработать приложение на JavaScript, которое может на основе информации о зарплатах посчитать с них налоги. Налог с зарплаты взимается по прогрессивной шкале, округляется в меньшую сторону до целого числа и рассчитывается следующим образом:
* первые 10 тыс. рублей зарплаты не облагаются налогом;
* следующие 10 тыс. рублей облагаются налогом со ставкой 10%;
* следующие 50 тыс. рублей облагаются налогом со ставкой 20%;
* всё что выше - со ставкой 50%.

Вам известны зарплаты сотрудников: 5 человек получают 10 тыс. рублей, 15 получают 25 тыс. рублей, 40 получают 50 тыс. рублей и 10 получают 100 тыс. рублей. Заведите массив и заполните его зарплатами людей.

Пробегитесь циклом по зарплатам и посчитайте:
* суммарные налоговые отчисления со всех зарплат;
* средние налоговые отчисления на человека в рублях.

Выведите посчитанную информацию на экран.