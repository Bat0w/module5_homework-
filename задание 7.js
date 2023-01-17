
/*Задание 7.

Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.*/

let arr = [1, 2, 3, 4, 5];

let evenNums
evenNums = arr.filter(function(item) {
	return item % 2 == 0;
});

let oddNums
oddNums = arr.filter(function(item) {
	return item % 2 != 0;
});
console.log( evenNums.length );
console.log( oddNums.length );
