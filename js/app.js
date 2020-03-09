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

// const user = {
//   firstName: 'sasha',
//   lastName: 'bekh',
//   age: 25,
//   info: {
//     work: 'easycode',
//     skills: ['html', 'css'],
//   }
// };

// // const {
// //   firstName: name,
// //   lastName,
// //   age = 30,
// // } = user;

// // const {
// //   info: {
// //     work,
// //     skills,
// //   }
// // } = user;

// //console.log(work, skills);

// // Деструктуризация массивов

// const colors = ['white', 'black', 'red'];
// const [w, b, r, g = 'green'] = colors;
// console.log(w, b, r, g);
// const names = ['denis', 'ivan', 'petya'];
// const [name1, ...otherNames] = names;
// console.log(name1, otherNames);
// const nestedArr = ['hello world', ['key', 'value']];
// const [, [key, value]] = nestedArr;
// console.log(key, value);

// // const [...newNames] = names;
// const newNames = [...names];
// // console.log(...newNames);

// const colorNames = [...colors, ...names];
// // console.log(colorNames);
// const newUser = {
//   ...user,
//   age: 30,
// };
// console.log(newUser);
// const {
//   info: {
//     skills: [html, css],
//   }
// } = newUser;
// console.log(html, css);

// // Деструктуризация функций

// function myPerson({
//   lastName,
//   firstName,
//   age,
//   info: {
//     skills
//   } = {}
// } = {}) {
//   console.log(skills);
// }

// // myPerson(newUser);

// // function foo(x, y, ...others) {
// //   console.log(arguments);
// //   const [...args] = arguments;
// //   console.log(others);
// // }

// // foo(1, 2, 5, 6);
// const numbers = [2, 3, 4, 5];

// function foo2(x, y, z) {
//   console.log(x, y, z);
// }

// foo2(...numbers);

// const organisation = {
//   name: 'Google',
//   info: {
//     employees: ['Vlad', 'Olga'],
//     partners: ['Microsoft', 'Facebook', 'Xing']
//   }
// };

// function getInfo({
//   name = 'Unknown',
//   info: {
//     partners
//   }
// }) {
//   console.log(name);
//   console.log(partners.slice(0, 2));
// }

// getInfo(organisation);


// Object descriptor
const car = {
  brand: "Audio",
  year: 2019,
  get age() {
    return `car was created in ${this.year}`;
  },
  set age(value) {
    this.year = value;
  }
};

// Object.defineProperty(car, 'age', {
//   // configurable: false,
//   // enumerable: false,
//   // writable: false,
//   get: function () {
//     return `car was created in ${this.year}`;
//   }
// });

// const array = [1, 2, 3, 4, 5];

// Array.prototype.multBy = function (n) {
//   return this.map(function (i) {
//     return i * n;
//   });
// }

// console.log(array.multBy(50));

// Функции высшего порядка

function firstFunc(arr, handler) {
  let res = 'New Value: ';
  for (let i = 0; i < arr.length; i++) {
    res += handler(arr[i]);
  }
  return res;
}

const res1 = firstFunc(['my', 'name', 'is', 'sasha'], function (item) {
  return item[0].toUpperCase() + item.slice(1) + ' ';
});

const res2 = firstFunc([10, 20, 30], function (item) {
  return item * 10 + ' ';
})

// console.log(res1);
// console.log(res2);


function every(arr, handler) {

  for (let i = 0; i < arr.length; i++) {
    if (!handler(arr[i])) {
      return false;
    }
  }

  return true;
}

const isNum = every([2, 3, 4, 5], function (num) {
  return typeof num === 'number';
});

// console.log(isNum);

let prod1 = {
  price: 20,
  count: 100,
  getTotalPrice() {
    return this.price * this.count;
  }
};

console.log(prod1.getTotalPrice());

let prod2 = {
  price: 10,
  count: 50,
};

prod1.getTotalPrice.call(prod2);


let element = {
  height: 25,
  getHeight: function () {
    return this.height;
  }
};

let getElementHeight = element.getHeight.bind(element);
getElementHeight();

// Переберающие методы массивов

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const newArr = arr.map((num) => ({
  digit: num,
  odd: Boolean(num % 2),
}));

// console.log(newArr);

const stringArr = [{
    char: "a",
    index: 12
  }, {
    char: "w",
    index: 8
  }, {
    char: "Y",
    index: 10
  }, {
    char: "p",
    index: 3
  }, {
    char: "p",
    index: 2
  },
  {
    char: "N",
    index: 6
  }, {
    char: " ",
    index: 5
  }, {
    char: "y",
    index: 4
  }, {
    char: "r",
    index: 13
  }, {
    char: "H",
    index: 0
  },
  {
    char: "e",
    index: 11
  }, {
    char: "a",
    index: 1
  }, {
    char: " ",
    index: 9
  }, {
    char: "!",
    index: 14
  }, {
    char: "e",
    index: 7
  }
];


function getStringFromArr(arr) {
  if (!Array.isArray(arr)) {
    return;
  }

  return arr.slice().sort((prev, next) => prev.index - next.index).reduce((acc, current) => (acc += current.char), '');
}

getStringFromArr(stringArr);


const products = [{
    title: 'prod1',
    price: 5.2
  }, {
    title: 'prod2',
    price: 0.18
  },
  {
    title: 'prod3',
    price: 15
  }, {
    title: 'prod4',
    price: 25
  },
  {
    title: 'prod5',
    price: 18.9
  }, {
    title: 'prod6',
    price: 8
  },
  {
    title: 'prod7',
    price: 19
  }, {
    title: 'prod8',
    price: 63
  }
];

function filterCollection(arr, min, max) {

  return arr.slice().sort((prev, next) => prev.price - next.price).filter((product) => product.price >= min && product.price <= max);

}

filterCollection(products, 15, 30);

// Замыкания

function minus(num1 = 0) {
  return function (num2 = 0) {
    return num1 - num2;
  };
}

function multiplyMaker(num1) {
  return function (num2) {
    return num1 += num2;
  }
}

const multiply = multiplyMaker(2);

const modul = (function () {
  let str = '';

  function setString(val = '') {
    str = String(val);
    return str;
  }

  function getString() {
    return str;
  }

  function getStringlength() {
    return str.length;
  }

  function reverseString() {
    return str.split('').reverse().join('');
  }

  return {
    setString,
    getString,
    getStringlength,
    reverseString,
  };

})();