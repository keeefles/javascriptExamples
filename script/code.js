// named function
// function greeting() {
    // console.log("hello, there");
// }
// doesnt work because it doesnt consist of an action to instruct it when to work.
// parenthesise is to specify the action/call. how to perform or when.
// consists of a keyword, calling and parenthesis then the weird bracket.

// calling a function
// greeting()

// linking a variable into a html.
// const is also another keyword that allows you to get a variable
// remove onclick from html button tag. onclick="greeting()"
// * document.getElementById('btnClick')
// encouraged not to use onClick.
// specify ID name, not #.
// DOM is a hierarchy. like a family tree. how everything is connected.
// document is everything within the html(structure).
//   const btnSubmit =
//   document.getElementById('btnClick')
// console.log(btnSubmit);
//   btnSubmit.addEventListener('click', greeting)
// .addEventListener() learning how to dance...
// known as a call-back function.

/*function greeting() {
    console.log("hello, Aakeefah");
}
const btnSubmit =
document.getElementById('btnClick')
btnSubmit.addEventListener('click', greeting)
// my example.

const btnSubmit2 =
document.querySelector('[data-submit]')
//when using querySelector, we make use of # ('#btnClick'). make use of any css tag element. guarantees a job because of experience level.
btnSubmit2.addEventListener('click', greeting)

// new work!
let firstName = 'Joel'
console.log(firstName+' is working at LifeChoices');
firstName = 'David'
console.log(firstName=' stay in plumstead');*/

/*
let numb1 = 3
let numb2 = 4
console.log(numb1 + numb2)
console.log(numb1 * numb2)
console.log(numb1 - numb2)
*/

/*
-primitive data type: string, number, boolean, undefined,
dynamic data type: array, object and function
*/

/*
let numb1 = 3.5
console.log(numb1)
console.log(typeof numb1)
*/

// create an integer value.
/*let numb1 = 'Three'
console.log(numb1)
console.log(typeof numb1)*/

/*let numb1 = '17'
const isMale = true
console.log(numb1)
console.log(typeof numb1)
console.log(!isMale)
console.log(typeof isMale)*/

/*let numb1
let numb2 = 'null'
console.log(numb1)
console.log(numb2)*/
// undefined
// null is a placeholder but it's nothing.

// initializing a variable. Initialization.
/*let numb1 = 6*/

// difference between var, let and const
// var - similar to let but is older thus has to make constant chnages to it.
// let - similar to var but less complicated and can change the value.
// const - stays the same and cannot change. consistent value throughout.

/*
var numb1 = 3
numb1 = "hello"
*/

/*
let numb1 = 1
numb1 = 37
console.log(numb1);
*/

// let numb1 = 4
// console.log(numb1);
// console.log(typeof numb1);

/*
-primitive data type: string, number, boolean, undefined, it is immutable.
-dynamic data type: array, object and function
*/

// let numbers = [9, 4, 5, 12]
// console.table(numbers);

// primitive data type = immutable
// dynamic data type = mutable

/*let data = 8 + 2 + "Joel"
console.log(data);*/

// let data = "Joel" + 8 + 2
// console.log(data);

/*concat
let numb1 = "3"
let numb2 = "4"
console.log(numb1 + numb2);
*/

/*addition
let numb1 = "3"
let numb2 = "4"
console.log(+numb1 + +numb2);
*/


let numb1 = "3"
let numb2 = "4"
console.log(+numb1 + +numb2);
console.log(eval(`${numb1} + ${numb2}`) );

console.log(window);

/*
arrays are a collection of data.

let numb1 = (8, 7, 2)
console.log(numb1);

returns the last number as a response.
*/

/*
Create an array

let numbers = [
    3, 5, 8
    'Veronique'
    'Sivuyisiwe'
]
// in order to display the name veronique, type in the console, numbers[3]
// arrays alwayst start counting from 0.
make use of console.log(table); for easier usage.
*/

let data = [
    3, 5, 8,
    'Veronique',
    'Sivuyisiwe'
]
console.log(data)
console.log(`Array's size: ${data.length}`);
console.log(`Element at position 3: ${data[3]}`);
// console.log(numbers.at(-1));
data.push('Matthew')
data.push('Shawn', 'Simamkele')
console.log(data);

data.unshift('new', 'element')
data.pop()
// .unshift is to add a new element.
// data.pop removes the last element.
// push adds an element to the end of the array.
// let = lastRemovedElement = data.pop()
// then use console.log(lastRemovedElement); brings back the last removed element.
console.log(data);

// let newArr = data.concat(lastRemovedElement)
// removes the last element

data.shift()
console.log("after shift");
console.log(data);
console.log('before slicing');
data 


/*

splice = add or remove.
0 => adding.
1 => Number(s) of elements to remove.

*/

// adding a splice
data.splice(2, 0, 'Joel')
console.log(data);

let numbers = [1, 3, 5]
numbers.splice(1, 0, '2', '9', '4')
console.table(numbers);

// removing element using splice
numbers.splice(2, 2)
console.log(numbers);

console.table(numbers)




// reverse
data.reverse()
console.log(data);




// sorting
console.log(data.sort());
// return only numbers
data.push(23, 7.4)
// let numbers = data.filter( a=> typeof a == 'number' )65
console.log('=====OBJECT=====')