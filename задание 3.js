

/*Задание 3.

Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".

вариант 1*/
function reverseString(str) {
    let newStr = '', i;
    for (i = str.length - 1; i >= 0; i--) {
    newStr += str.charAt(i);
    }
    return newStr;
    }
     
    console.log(reverseString('Hello'));

/*вариант 2*/
function reverseString(str) {
    return str.split("").reverse().join("");
  }
  
  console.log(reverseString('Hello'));

