// однострочный 
/*многострочный*/

/*str, my_str, mystr, a1, $, $a допустимые имена переменных*/

// пееменные
// ключевое слово var, let, const
// формат lowerCamelCase (верблюжья нотация)



// var leftBorderWidth - 1;
// let second = 2;
// const pi - 3.14;

// console.log (second)

// типы данных, классификация

//примитивный тип данных
//строка string
//двойные кавычки, одинарные кавычки - простые, обратные кавычки имеют расширенный функционал

// let string - 'hello';
// console.log(string);


// let name = "иван";
// console.log(name);



// let name = "иван";
// alert( `Привет, ${name}!` );
// console.log( `Привет, ${name}!` )

// числа number

// let number = $;
// console.log(number);

//специальный тип данных 
// null  //специальное значение которое представляет отсуствующий объект
// console.log(something);


// undefined //представляет значение переменной которая не была иинциализирована


// let numb
// console.log(numb);


// NaN //специальное значение "не число" которое говорит о том что была выполнена бессмысленная операция

// console.log('string' * 4);

// Infinity // бессконечность известная ошибка при деления на ноль

// console.log(4/0);


//логический тип данных boolean (true,false)

// let boolean = true;
// console.log(boolean);


//обстрактный тип данных object{} это набор свойств и значений

// let object - {};

// let persone =[
//     name: 'ok',
//     age: 30,
//     isMarried: false
// ]

// console.log(persone[`age`]);


//массив

// let arr - ['plum.jpeg' ];
// console.log(arr[0])

//простое общение с пользой


// alert('бОЖЕ');

//оператор typeof для определения типа данных

// let answer = confirm(' Are you here? ');
// console.log(anser);

// let answer = prompt('есть ли вам 18 лет?', 'да');
//  console.log(typeof(answer));

// оператора js 
// унарный +
//  console.log('arr' + '- object');
//  console.log( 5 + '- object');

//инкремент и декремент

// ++ префиксный инкремент 
// -- постфиксный декремент


// let incr = 10;
//     decr = 10; 

//     console.log(incr++);
//     console.log(--decr);

// console.log(5%2);

// = присваивание
// == проверка на равенство 
// === это строгая проверка на равенство

// console.logI('2' == 2);

// оператор && и

//let isChecked = true;
//    isClosed = false;
//  console.log( sChecked && isClosed)

// опрератор || ии

//let isChecked = false;
//    isClosed = false;
//  console.log( sChecked || isClosed)


//обьявление переменных нескольких в js

//let a = 1; 
//let b = 2;
//let c = 3;

//console.log(a);
//console.log(b);
//console.log(c);

// 2
// let a= 1, b= 2, c= 3;

//3 
//let a, b, c;
// a = 1;
// b = 2;
// c = 3;


//Изменения значения переменных

//let a;
// a = 1;
//alter(a);

//a = 2;
// alert(a);

//Несколько let для одной переменной

// 1
// let a = 1;
// alter(a);

// a = 2;
// alter(a);


// 2
// let a = 1;
// alter(a);

// b = 2;
// alter(b);

// 3

// let a;
// a = 1;
// alter(a);

// a = 2;
// alter(a);


//Математические операции с числами
// сложение

// let a = 1 + 2;
// alert(a);  //3 

// //Вычитание

// let b = 3 - 2;
// alert(b); //1

// //Умножение 

// let c = 3 * 2;
// alert(c); //6

// //Деление 

// let d = 4 / 2;
// alert(d); //2

// Решение

// let a = 1;
// alter(a);

// a = 2;
// alter(a);

// a = 3;
// alter(a);

//Математические операции над переменными 

// //1
// let a = 1;
// let b = 2;
// alert(a + b); //3

// //2

// let a = 1;
// let b = 2;
// let c = a + b;
// alert(c);

//РЕШЕНИЕ 

//1 

//let a = 10;
//let b = 2;
//let c = a + b;
// alert(c);  //12 

// //Вычитание

//let a = 10;
//let b = 2;
//let c = a - b;
// alert(c);  //8

// //Умножение 

//let a = 10;
//let b = 2;
//let c = a * b;
// alert(c);  //20

// //Деление 

//let a = 10;
//let b = 2;
//let c = a / b;
// alert(c);  //5

//2

//let c = 10;
//let b = 5;
//let result = c + b;
// alert(result);  //15

//3 

//let c = 3;
//let a = 10;
//let b = 2;
//let result = c + b + a;
// alert(result);  //15

//4 

//let a = 10;
//let b = 5;
//let c = a - b;
// alert(c);  //5


//let a = 10;
//let b = 5;
//let c  = a - b;
//let result = (a - b) + c;
//alert(result);  //10



// Решение

// let a = 1;
// alter(a);

// a = 2;
// alter(a);

// a = 3;
// alter(a);


//Задачи

// let a = 5 + 5 * 3;
// alert(a); //20

// let a = 5 + 5 * 3 + 3;
// alert(a); //23

// let a = 8 / 2 + 2;
// alert(a); // 6

// let a = 8 + 2 / 2;
// alert(a); //9


// let a = 8 / 2 * 2;
// alert(a); // 8

// let a = 8 * 4 / 2 / 2;
// alert(a); //8

// let a = (2 + 3) * (2 + 3);
// alert(a); //25

// let a = (2 + 3) * 2 + 3;
// alert(a); //13

// let a = 2 * (2 + 4 * (3 + 1));
// alert(a); //36


// let a = 2 * 8 / 4;
// alert(a); //4 

// let a = (2 * 8) / 4;
// alert(a); //4 


// let a = 2 * (8 / 4);
// alert(a); //4


// let a = 1.5;
// let b = 0.75;
// let c = a + b;
// alert(c);  //2.25


// let a = -100
// alter(a);

// let a = 100
// alter(-a);


// let a = 13;
// let b = 5;
// alert(a % b);n //2.6

// let a = 2;
// alert(a ** 10); //1024






