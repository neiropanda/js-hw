let money = +prompt("Ваш бюджет на месяц?", '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: false
};

for (let i = 0; i < 2; i++) {
  let a = prompt("Введите обязательную статью расходов в этом месяце", '');
  let b = prompt("Во сколько обойдется?", '');

  if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
    console.log('done');
    appData.expenses[a] = b;
  } else {

  }

};

appData.moneyPerDay = appData.budget / 30;

alert('Ежедневный бюдждет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log("минимальны уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
  console.log("высокий уровень достатка");
} else {
  console.log("произошла ошибка");
}