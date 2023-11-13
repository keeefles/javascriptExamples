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


/*let numb1 = "3"
let numb2 = "4"
console.log(+numb1 + +numb2);
console.log(eval(`${numb1} + ${numb2}`) );

console.log(window);*/

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

/*let data = [
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
/*
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
*/


/*let data = [7, 3, 'Abc', 2, 1, 'abc', 6]
console.log(data);
// reverse - reverses the order of numbers and words displayed.
console.log(data.reverse());

console.log(data.slice(2, 4));

data.splice(3, 0, 'Aakeefah')
console.table(data);
data.splice(3, 1)
console.log(data)

// sorting - sorts numbers in ascending order
console.log(data.sort());

// return only numbers - displays only numbers within an array.
data.push(23, 7.4)
console.log(data);

/*let numbers = data.filter( a=> typeof a == 'number' )
console.log('=====OBJECT=====')*/

/*let numbers = data.filter(onlyNumbers)
// Named Function or function declaration.
function onlyNumbers(a) {
    return typeof a == 'number'
}
console.log(numbers);*/

// TYPEOF checks the data types.

/* let numbers = data.filter(a=> a%2 ==0)
console.log(numbers);
displays EVEN NUMBERS only 
as well as...
 */
/*
let evenNumbers = data.filter( x=> x % 2 >=1)
console.log(evenNumbers);
*/

// sentence 
/*
let sentence = "I am going to work."
console.log(sentence);
console.log(sentence.at(-1));

let size = sentence.length
console.log(size);
console.log(sentence.slice);
console.log(sentence[size-1]);
console.log(sentence.slice(0, -1));
console.log(sentence);
// makes all letters uppercase
console.log(sentence.toUpperCase()); 
// makes all letters lowercase
console.log(sentence.toLowerCase());
// true or false
console.log(sentence.includes('work'));
// separates all the letters and uts them into different stuffs.
console.log(sentence.split(""));
*/

// end of sentence

// OBJECTS
// when creating an Object, make use of let or const.
// specify value in curly bracket.
// if you're making use of an array within an object, use a sqaure bracket to specify.
// use a curly bracket for the specific index.

// let numbers = [9, 8 , 3]
// console.log(numbers);
// console.log(typeof numbers);

// let person = {
//     name: 'Peter',
//     surname: 'Shawn',
//     age: 30,
//     subjects: ['HTML', 'CSS3', 'JavaScript']
// }
// display the object to the console.
// console.log(person);
// console.table(person);

// make use of the dot operator.
// console.log(person.name);
// make use of the square bracket
// console.log(person['surname'])
// with the dot operator
// console.log(person.age);

// displays only the keys
// console.log(Object.keys(person));
// displays only the values within the respective keys
// console.log(Object.values(person));
// displays the subject starting from the last element.
// console.log(person.subjects.at(-1));

/*
ARRAY: collection of data
OBJECT: represents a place, person or thing.
        such as a car, phone, etc.
*/

/*
let studentInfo = [
    {
        id: 1,
        name: 'Your Name',
        surname: 'Your Surname'
    },
    {
        id: 2,
        name: 'Your Name',
        surname: 'Your Surname'
    }
]
*/

/*

O P E R A T O R S ~
operator precedence - making use of BODMAS.
console.log(7 + 5 * 2);

- artihmetic : +, -, *, /, % (modulus), ** (Exponent), ++, --
    - numb++
    - ++numb
    - a = b + c
    - m = b % c

- assignment =, +=, *=, /=, %=
    - let a = 3
      let b = 2
      let c = a + b is the same as.
    - a += c

- comparison


- logical


- conditional


- type or unary operator
*/

// let salary = 7000
// let bonus = 2000
// let performance = false

// if(salary < 5000) {
//     console.log(salary + bonus);
// } else {
//     console.log(salary);
// }
// salary has to be higher than the specified 'if' amount.

// if(salary < 5000) {
//     console.log("Your salary is below R5000");
// }else if (salary > 5000) {
//     console.log(salary + bonus);
// }else {
//     console.log(`Your salary is R${salary}`);
// }

// outer if statement
// if(salary > 5000) {
// inner if statement
//     if (performance) {
//         console.log(salary + bonus);
//     }else {
//         console.log(`You didn't perform well\nYour salary is R${salary}`);
//     }
// } else {
//     console.log("R5000");
// }


let marks =100;
switch (marks) {
    case 100:
        console.log("A+");
    break;
    case 90:
        console.log("A");
    break;
    default:
        console.log("other");
}

let firstName = "Lerato";
switch (firstName) {
    case ""
}