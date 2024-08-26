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

// function encode(data){
//     var encodedData = [];
//     for(var key in data){
//         encodedData.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
//     }
//     return encodedData.join(("&"));
// }

// var form = document.getElementById('form');

// form.addEventListener("submit", function(e) {
//     e.preventDefault();
//     console.log('Теперь я ничего не делаю');

//     var data = {
//         'name':form.elements[1].value,
//         '_replyto': form.elements[2].value
//     }

//     request = new XMLHttpRequest();
//     request.open("POST", )
// });










const newPost = {
    "userId": 1,
    "id": 15,
    "title": "hi",
    "body": "gd"
};

fetch(
    'https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
    }
).then((data) => {
    return data.json();
}).then((info) => {
    console.log(info);
});


fetch(
    'https://jsonplaceholder.typicode.com/users'
).then((data) => {
    return data.json();
}).then((info) => {
    console.log(info);
});







// //задача 1
// const a = prompt("Введите число a:  ");
// const b = prompt("Введите число b:  ");
// const sum = a + b;
// const min = a - b;
// const umn = a * b;
// console.log(sum, min, umn);

// // задача 2
// const c = prompt("Введите число c:  ");
// const d = prompt("Введите число d:  ");
// const e = prompt("Введите число e:  ");
// let max;
// if (c > d && c > e)
//     max = c;
// if (d > c && d > e)
//     max = d;
// else {
//     max = e;
// }
// console.log(max);

// //задача 3
// const year = prompt("Введите год");
// if (year % 4 && year % 100) {
//     console.log("год не високосный");
// } else {
//     console.log("год високосный");
// }

// //задача 4
// const n = 5;
// let one = 1;
// while (one <= n) {
//     console.log(one * one);
//     one++;
// }

// //задача 5
// const num = 20;
// let degree = 1;
// let number = 2;
// let res;
// while(number<=num){
//     res = number**degree;
//     degree++
// }
// console.log(degree);
// console.log(res);

// //задача 6
// for (let i = 10; i < 21; i++) {
//     console.log(i * i);
// }

// //задача 7
// const q = prompt("Введите до какого числа считать (q)");
// let total = 0;
// for (let i = 1; i <= q; i++) {
//     total += i;
// }
// console.log(total);