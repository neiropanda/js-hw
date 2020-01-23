// if (value === 10) {
//   console.log('value: 10');
// } else {
//   console.log('else statement');
// }

// if (value) {
//   console.log('some action', value);
// } else {
//   console.log('else', value);
// }

// value = null;

// if (!value) {
//   console.log(value);
// }

// value = [];

// if (value.length) {
//   console.log(value);
// } else {
//   console.log('array is empty');
// }

// value = {};

// if (Array.isArray(value)) {
//   console.log(value);
// } else {
//   console.log('array is empty');
// }

// let user = {
//   name: 'sasha',
// };

// if (user.hasOwnProperty('name')) {
//   console.log(user.name);
// } else {
//   console.log('object is empty');
// }

// let age = 16;

// if (age < 16 || age > 60) {
//   console.log('welcome');
// } else {
//   console.log('closed');
// }

// let serverNick = 'Denis';
// let nickname = serverNick || 'default nickname';

// console.log(nickname);

// value = 1 && 0 && 3;
// console.log(value);

// let price = 10;

// if (price >= 5 && price <= 9) {
//   console.log('i will take it');
// } else {
//   console.log('else');
// }

// value = 10;

// if (value > 10) {
//   console.log('value > 10', value);
// } else if (value === 10) {
//   console.log('value >= 10', value);
// } else {
//   console.log('else');
// }

// let car = {
//   name: 'lexus',
//   age: 10,
//   create: 2008,
//   needRepair: false,
// }

// if (car.age > 5 && car.age <= 10) {
//   console.log('need repair', car.needRepair = true);
// } else {
//   console.log('else');
// }

// console.log(car);

// let item = {
//   name: 'intel I7',
//   price: '100$',
//   discount: '15%'
// };

// if (item.discount) {

//     item.priceWithDiscount = parseInt(item.price) * parseFloat(item.discount) / 100;

//     console.log(`Price with discount: ${parseInt(item.price) - item.priceWithDiscount} $`);

// } else {
//  console.log(item.price);
// }

// console.log(item);

// let product = {
//   name:'apple',
//   price: '10$'
// };

// let min = 10; // минимальная цена
// let max = 20; // максимальная цена

// if (parseInt(product.price) >= min || parseInt(product.price) <= max) {
//   console.log(product.name);
//   console.log(typeof product.price);
// } else {
//   console.log('item not found');
// }

// let a = 1;
// let b = 0;

// if (a > 0) {
//   b = a;
// } else {
//   b += 1;
// }

// b = a > 0 ? a : b + 1;

// b = a > 0 ? 2 : a < 0 ? 3 : 0;

// console.log(`b: ${b}`);

// let color = 'yellow';

// switch(color) {
//   case 'yellow':
//   case 'red':
//     console.log('color is red || yellow');
//     break;
//   default:
//     console.log('default');
// }

// let a = 'inline';

// switch (a) {
//   case 'inline':
//     console.log('inline');
//     break;
//   case 'block':
//     console.log('block');
//     break;
//   case 'none':
//     console.log('none');
//     break;
//   default:
//     console.log('other');
// }

// let b = '1';

// b = b === 'inline' ? console.log('inline') : b === 'block' ? console.log('block') : b === 'none' ? console.log('none') : console.log('other')

// let i = 10;

// while (i--) {
//   console.log(i);
// }

// do {
//   console.log('some action');
// } while (i > 0)

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   if (i === 6) {
//     continue;
//   }
//   console.log(i);
// }

// let str = 'hello';

// let res = '';

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i] + '!');
//   res += str[i].toUpperCase(); + '*';

// }

// console.log(res);

// let colors = ['black', 'blue', 'yellow', 'red'];

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
//   colors[i] = colors[i].toUpperCase();
// }

// console.log(colors);

// const users = [
//   {
//     name: 'sasha',
//     age: 30
//   },
//   {
//     name: 'denis',
//     age: 25
//   },
//   {
//     name: 'dvasya',
//     age: 45
//   },
//   {
//     name: 'petya',
//     age: 70
//   },
// ];

// const usersObj = {};

// for (let i = 0; i < users.length; i++) {
//console.log(users[i].age);
//   usersObj[users[i].name] = users[i];
// }

// console.log(usersObj['petya']);

// const user = {
//   name: "sasha",
//   age: 30
// };

// for (let key in user) {
//   console.log(key);
//   console.log(user[key]);
// }

// функция факториала

// function factorial(n) {
//   let result = 10;
//   while (n) {
//     result *= n--;
//   }

//   return result;
// }

// console.log(factorial(10));

// На основе строки “JavaScript is a pretty good language” сделать новую строку,
// где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

// let str1 = "JavaScript is a pretty good language";
// let str2 = str1.split(" ");
// let strFinal = "";

// for (let i = 0; i < str2.length; i++) {
//   let value = str2[i].charAt(0).toUpperCase() + str2[i].substr(1);

//   strFinal += value;
// }

// console.log(strFinal);

// На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова будут в верхнем регистре. Использовать for или while.

// let str = "i am in the easycode";
// let newStr = str.split(" ");
// let strUpper = "";

// console.log(newStr);

// for (let i = 0; i < newStr.length; i++) {
//   let value = newStr[i].charAt(0).toUpperCase() + newStr[i].substring(1);

//   strUpper += value + " ";
// }

// strUpper.trim();
// console.log(strUpper);

// Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// for (let value of arr) {
//   if (value % 2 != 0) {
//     console.log(value);
//   }
// }

// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.

// let list = {
//   name: "denis",
//   work: "easycode",
//   age: 29
// };

// for (let key in list) {
//   if (typeof list[key] === "string") {
//     let a = list[key].toString().toUpperCase();
//     console.log(a);
//   }
// }

// методы массивов

// const myArr = [2, 3, 4, 5, 45];

// let value;

// value = myArr.length;

// value = Array.isArray(myArr);
// myArr[2] = 22;
// value = myArr.indexOf(3);

// value = myArr.push(100);
// value = myArr.pop();

// value = myArr.unshift(333);
// value = myArr.shift();

// value = myArr.slice(0, 2);

// value = myArr.splice(1, 3, "one", "two");
// value = myArr.reverse();
// value = myArr.concat(myArr);

// value = myArr.join();
// value = "hello world".split(" ");

// console.log(value, myArr);

function sayHello(firstName = "Default", lastName = "Default") {
  console.log(firstName, lastName);
  console.log("hello world");

  return `Hello ${firstName} ${lastName}`;
}
// let res = sayHello("sasha", "bekh");
// let res2 = sayHello("vasya", "bekh");
// let res3 = sayHello();

// console.log(res3);

// let x = 10;

// function foo() {
//   x = 20;
//   console.log(x);
// }

// foo();

// console.log(x);

// function calc(a, b) {
//   if (typeof a !== "number" || isNaN(a)) {
//     return console.log("error");
//   }

//   if (typeof b !== "number" || isNaN(b)) {
//     return console.log("error");
//   }
//   return console.log(a + b);
// }

// calc(2, 4);

// function multiply(a, b) {
//   if (typeof a === "number") {
//     return a + b;
//   } else {
//     return 0;
//   }
// }

// let res = multiply();
// console.log(res);

// reverse string
// function reverseStr(str) {
//   let newStr = str
//     .split("")
//     .reverse()
//     .join("");
//   return newStr;
// }

// let value = reverseStr("hello");

// console.log(value);

// function foo(str) {
//   let newStr = str.split("");

//   for (let i = 0; i < str.length; i++) {
//     let value = str[i].charCodeAt();
//     newStr += value + " ";
//     console.log(value);
//   }
//   return newStr;
// }

// let value3 = foo("hello");
// console.log(value3);

// угадать рандомное число
// let a = 0;

// function guess(a) {
//   if (a > 0 && a <= 10) {
//     let newVal = Math.ceil(Math.random() * 10);
//     console.log(newVal);
//     if (newVal === a) {
//       console.log("you won. congrats");
//     } else {
//       console.log(
//         `you lose. you number is: ${a}, but my number was: ${newVal}`
//       );
//     }
//     return newVal;
//   }
//   return newVal;
// }

// let value = guess(5);
// console.log(value);

// const arr = ["sasha", "vasya", "petya"];

// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   newArr.push(arr[i].length);
// }

// console.log(newArr);

// callback function!




// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   newArr.push(arr[i].length);
// }
// console.log(newArr);


// let newArr2 = [];

// for (let i = 0; i < arr.length; i++) {
//   newArr2.push(arr[i].toUpperCase());
// }
// console.log(newArr2);

const names = ['sasha', 'vanya', 'petya', 'olga'];

function mapArray(arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i]));
  }
  return res;
}

function nameLength(el) {
  // console.log(el);
  return el.length;
}

function nameToUpperCase(el) {
  return el.toUpperCase();
}

const result = mapArray(names, nameLength)
const result2 = mapArray(names, nameToUpperCase);
// console.log(result2);

function greeting(firstName) {
  return function (lastName) {
    return `hello, ${firstName} ${lastName}`;
  }
}

// const testGreet = greeting('Sasha');
// console.log(testGreet);
const fullName = greeting('Sasha')('Bekh');
// console.log(fullName);


function question(job) {
  const jobDictionary = {
    developer: 'what is js?',
    teacher: 'what is ur subject?',
  }
  return function (name) {
    return `${name}, ${jobDictionary[job]}?`
  };
}

const devQuestion = question("developer");
// console.log(devQuestion('sasha'));

const teachQuestion = question("teacher");
// console.log(teachQuestion('petya'));

// const persons = [
//   { name: 'Peter', age: 16 },
//   { name: 'Mark', age: 18 },
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 14 },
//   { name: 'Tony', age: 24 },
// ];

// const fullAge = [];

// for (let i = 0; i < persons.length; i++) {
//   if (persons[i].age >= 18) {
//     fullAge.push(persons[i]);
//   }
// }

// console.log(fullAge);

const names2 = ['my', 'name', 'is', 'Trinity'];
// let newStr = '';

function firstFunc(arr, fn) {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i]));
    //newStr = res;
  }

  return `New value: ${res}`;
}

function secondFunc(el) {
  return el.charAt(0).toUpperCase() + el.substr(1) + el.join('');
}

let result1 = firstFunc(names2, secondFunc);
console.log(result1);


