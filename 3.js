"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const number = +prompt("Введите 1 число");
const numberTwo = +prompt("Введите 2 число");
const numberFree = +prompt("Введите 3 число");

function maxNumber(max) {
  return max = Math.max(number, numberTwo, numberFree);
}
alert(
  `Максимальное значение среди чисел ${number},${numberTwo},${numberFree} равно ${maxNumber()}`
);
