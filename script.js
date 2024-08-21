const inputs = [].slice.call(document.querySelectorAll('input'));
inputs.forEach(function(input) {
    if (input.getAttribute('type') !== 'submit') {
        console.log(input);
        input.addEventListener('focusin', focusIn, false);
        input.addEventListener('focusout', focusOut, false);
    }
});

function focusIn() {
    const label = document.querySelector('label[for="' + this.id + '"]');
    label.classList.add('focused');
}

function focusOut() {
    const label = document.querySelector('label[for="' + this.id + '"]');
    if (this.value == '')
        label.classList.remove('focused');
}







// fetch(
//     'https://jsonplaceholder.typicode.com/users/15'
// ).then((data) => {
//     return data.json();
// }).then((info) => {
//     console.log(info);
// });



// const newPost = {
//     "id": 15,
//     "name": "bogdan lalalala",
//     "username": "tatar",
//     "email": "chihuahua@gmail.com"
// }
// fetch(
//     https://jsonplaceholder.typicode.com/posts, {
//         method: 'POST',
//         body: newPost
//     }
// ).then((data) => {
//     return data.json();
// }).then((info) => {
//     console.log(info);
// });






//задача 1
const a = prompt("Введите число a:  ");
const b = prompt("Введите число b:  ");
const sum = a + b;
const min = a - b;
const umn = a * b;
console.log(sum, min, umn);

// задача 2
const c = prompt("Введите число c:  ");
const d = prompt("Введите число d:  ");
const e = prompt("Введите число e:  ");
let max;
if (c > d && c > e)
    max = c;
if (d > c && d > e)
    max = d;
else {
    max = e;
}
console.log(max);

//задача 3
const year = prompt("Введите год");
if (year % 4 && year % 100) {
    console.log("год не високосный");
} else {
    console.log("год високосный");
}

//задача 4
const n = s("Введите число n:  ");
let one = 1;
while (one <= n) {
    console.log(one * one);
    one++;
}

//задача 5
let cikle = true;
const l = prompt("задача 5(l)");
let two = 2;
while (two <= l) {
    two = two * two;
}
console.log(two);

//задача 6
for (let i = 10; i < 21; i++) {
    console.log(i * i);
}

//задача 7
const q = prompt("Введите до какого числа считать (q)");
let total = 0;
for (let i = 1; i <= q; i++) {
    total += i;
}
console.log(total);