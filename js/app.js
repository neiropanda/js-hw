// let money = prompt("Ваш бюджет на месяц?", '');
// let time = prompt('Введите дату в формате YYYY-MM-DD', '');

// let appData = {
//   budget: money,
//   expenses: {},
//   optionalExpenses: {},
//   income: [],
//   timeData: time,
//   savings: false
// };

// for (let i = 0; i < 2; i++) {
//   let a = prompt("Введите обязательную статью расходов в этом месяце", '');
//   let b = prompt("Во сколько обойдется?", '');

//   if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
//     console.log('done');
//     appData.expenses[a] = b;
//   }

// };

// appData.moneyPerDay = appData.budget / 30;

// alert('Ежедневный бюдждет: ' + appData.moneyPerDay);

// if (appData.moneyPerDay < 100) {
//   console.log("минимальны уровень достатка");
// } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//   console.log("средний уровень достатка");
// } else if (appData.moneyPerDay > 2000) {
//   console.log("высокий уровень достатка");
// } else {
//   console.log("произошла ошибка");
// }

// методы обьектов


// let obj1 = {
//   name: 'vasya',
//   info: {
//     skills: ['html', 'css'],
//   },
// };

// let obj2 = {
//   name: 'ivan',
//   age: 20
// };

// let newObj = Object.assign({}, obj1, obj2);
// newObj = Object.assign({}, obj1);
// let objJson = JSON.stringify(obj1);
// newObj = JSON.parse(objJson);
// console.log(newObj);


// let keys = Object.keys(obj2);
// console.log(keys);
// let values = Object.values(obj2);
// console.log(values);
// let entries = Object.entries(obj2);
// console.log(entries);
// let fromEntries = Object.fromEntries([
//   ['a', 'value'],
//   ['b', 'b_value']
// ]);
// console.log(fromEntries);


// Деструктуризация обьктов

const user = {
  firstName: 'sasha',
  lastName: 'bekh',
  age: 25,
  info: {
    work: 'easycode',
    skills: ['html', 'css'],
  }
};

// const {
//   firstName: name,
//   lastName,
//   age = 30,
// } = user;

// const {
//   info: {
//     work,
//     skills,
//   }
// } = user;

//console.log(work, skills);

// Деструктуризация массивов

const colors = ['white', 'black', 'red'];
const [w, b, r, g = 'green'] = colors;
console.log(w, b, r, g);
const names = ['denis', 'ivan', 'petya'];
const [name1, ...otherNames] = names;
console.log(name1, otherNames);
const nestedArr = ['hello world', ['key', 'value']];
const [, [key, value]] = nestedArr;
console.log(key, value);

// const [...newNames] = names;
const newNames = [...names];
// console.log(...newNames);

const colorNames = [...colors, ...names];
// console.log(colorNames);
const newUser = {
  ...user,
  age: 30,
};
console.log(newUser);
const {
  info: {
    skills: [html, css],
  }
} = newUser;
console.log(html, css);

// Деуструктуризация функций

function myPerson({
  lastName,
  firstName,
  age,
  info: {
    skills
  } = {}
} = {}) {
  console.log(skills);
}

// myPerson(newUser);

// function foo(x, y, ...others) {
//   console.log(arguments);
//   const [...args] = arguments;
//   console.log(others);
// }

// foo(1, 2, 5, 6);
const numbers = [2, 3, 4, 5];

function foo2(x, y, z) {
  console.log(x, y, z);
}

foo2(...numbers);

const organisation = {
  name: 'Google',
  info: {
    employees: ['Vlad', 'Olga'],
    partners: ['Microsoft', 'Facebook', 'Xing']
  }
};

function getInfo({
  name = 'Unknown',
  info: {
    partners,
  }
}) {
  console.log(name, partners);
}

getInfo(organisation);