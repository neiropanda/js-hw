// const div = document.querySelector('div');
// const titles = document.querySelectorAll('h1');
// console.dir(titles);
// console.log(Array.from(titles));
// console.log([...titles]);

// console.log(div.parentElement);

// const link = div.querySelector('a');
// console.log(link.parentElement);
// console.log(link.closest('.content'));


// div.classList.add('article', 'custom');
// div.classList.remove('article');
// div.classList.toggle('toggle')
// console.log(div.classList);

// div.setAttribute('id', 'myID');
// div.hasAttribute('id');
// div.getAttribute('id');
// div.removeAttribute('id');

// div.dataset.myattr


// Манипуляция DOM

// const title = document.querySelector('h1');
// title.innerHTML = '<span>text</span>';
// title.textContent = 'new text';
// title.insertAdjacentHTML('beforebegin', '<h2>title h2</h2>');

// title.innerHTML += '<span>new text</span>';
// const span = title.querySelector('span');
// console.log(span);

// Создание элемента

// const span = document.createElement('span');
// span.textContent = 'this tag created by createElement';
// span.classList.add('myClass');
// console.log(span);
// title.appendChild(span);

// const fragment = document.createDocumentFragment();

// const colors = ['black', 'red', 'pink'];
// colors.forEach((color) => {
//   const item = document.createElement('div');
//   item.classList.add(`bg-${color}`);
//   item.style.background = color;
//   item.textContent = color;
//   fragment.appendChild(item);
// });

// document.body.appendChild(fragment);

// Удаление элементов

// title.remove();


// function getDom(el) {

//   let obj = {
//     nodeType: el.nodeType,
//     nodeName: el.nodeName,
//     childNodes: el.сhildNodes,
//   };

//   return obj;
// }

// const res = getDom(document.querySelector('div'));
// console.log(res);

// const list = document.querySelector('ul');
// console.log(list);
// list.classList.add('list');

// const li = document.getElementsByTagName('li');
// console.log(li);

// let a = Array.from(li);
// console.log(a);




// const link2 = document.querySelector('a');
// console.log(link2);
// link2.setAttribute('id', 'link');



// Классы

// class Animal {
//   constructor(options) {
//     this.name = options.name
//     this.age = options.age
//     this.hasTail = options.hasTail
//   }

//   voice() {
//     console.log('i am animal');
//   }
// }

// const animal = new Animal({
//   name: 'lev',
//   age: 6,
//   hasTail: true,
// });

// console.log(animal);

// class Cat extends Animal {
//   constructor(options) {
//     super(options)
//     this.color = options.color
//   }

//   voice() {
//     super.voice()
//     console.log('i am cat');
//   }

//   get ageInfo() {
//     return this.age * 7;
//   }

//   set ageInfo2(newAge) {
//     return this.age = newAge;
//   }
// }

// cat = new Cat({
//   name: 'cat',
//   age: 10,
//   hasTail: false,
//   color: 'blue',
// });


// class Component {
//   constructor(selector) {
//     this.$el = document.querySelector(selector);
//   }

//   hide() {
//     this.$el.style.display = 'none';
//   }

//   show() {
//     this.$el.style.display = 'block';
//   }
// }

// class Box extends Component {
//   constructor(options) {
//     super(options.selector);
//     this.$el.style.width = this.$el.style.height = options.size + 'px';
//     this.$el.style.background = options.color;
//   }
// }

// const box1 = new Box({
//   selector: '#box1',
//   size: 100,
//   color: 'red',
// });

// const box2 = new Box({
//   selector: '#box2',
//   size: 100,
//   color: 'green',
// });

// class Circle extends Box {
//   constructor(options) {
//     super(options);
//     this.$el.style.borderRadius = '50%';
//   }
// }

// const c = new Circle({
//   selector: '#circle',
//   size: 100,
//   color: 'blue',
// })

// const btn = document.querySelector('button');
// const link = document.querySelector('a');
// btn.onclick = function () {
//   console.log("click");
// };

// btn.addEventListener('click', function (e) {
//   console.log(e);
// });

// btn.addEventListener('click', (e) => {
//   console.log(e);
// });

// function clickhandler(e) {
//   e.preventDefault();
//   console.log('click');
// };

// link.addEventListener('click', clickhandler);
// link.removeEventListener('click', clickhandler);

// const container = document.querySelector('.container');

// btn.addEventListener('click', (e) => {
//   const div = document.createElement('div');
//   const nestedBtn = document.createElement('button');
//   div.textContent = Math.random();
//   nestedBtn.textContent = 'button';
//   div.appendChild(nestedBtn);
//   container.appendChild(div);
// });

// container.addEventListener('click', (e) => {
//   console.dir(e.target);

//   if (e.target.tagName === 'BUTTON') {
//     console.log('button clicked');
//   }
// });


// let box = document.getElementById('box');
// let btn = document.getElementsByTagName('button');
// let circle = document.getElementsByClassName('circle');
// let heart = document.querySelectorAll('.heart');
// let oneHeart = document.querySelector('.heart');
// let wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// btn[1].style.borderRadius = '1000%';

// circle[0].style.backgroundColor = 'red';
// circle[1].style.backgroundColor = 'yellow';
// circle[2].style.backgroundColor = 'green';


// // for (let i = 0; i < heart.length; i++) {
// //   heart[i].style.backgroundColor = 'black';
// // };

// heart.forEach(function (item, i, hearts) {
//   item.style.backgroundColor = 'blue';
//   // console.log(i);
//   // console.log(hearts);
// });

// let div = document.createElement('div');
// div.classList.add('black');

// // document.body.appendChild(div);
// // wrapper.appendChild(div);

// // div.innerHTML = '<h1>hello, world!</h1>';
// div.textContent = "hello, world!";

// document.body.insertBefore(div, circle[0]);
// document.body.removeChild(circle[1]);
// wrapper.removeChild(heart[0]);


// document.body.replaceChild(btn[1], circle[1]);




// console.log(div);



