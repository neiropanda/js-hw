const div = document.querySelector('div');
const titles = document.querySelectorAll('h1');
// console.dir(titles);
// console.log(Array.from(titles));
// console.log([...titles]);

// console.log(div.parentElement);

const link = div.querySelector('a');
// console.log(link.parentElement);
// console.log(link.closest('.content'));


div.classList.add('article', 'custom');
div.classList.remove('article');
// div.classList.toggle('toggle')
// console.log(div.classList);

// div.setAttribute('id', 'myID');
// div.hasAttribute('id');
// div.getAttribute('id');
// div.removeAttribute('id');

// div.dataset.myattr