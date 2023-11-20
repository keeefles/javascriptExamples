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
// separates all the letters and puts them into different stuffs.
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


/*

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

*/

/*

L O O P S - ternary operator

*/


// console.log("0");
// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");
// console.log("6");
// console.log("7");
// console.log("8");
// console.log("9");
// console.log("10");


//  to make an even list using for loop
// for (let i = 0; i <= 10; i++) {
//     if(i % 2==0)
//         console.log(i);
//     else
//     console.log(`${i} it is an odd number`);
// }


// if correct display i, if false, display 0.
// for (let i =10; i >= 0; i--){
    //console.log( i % 2 == 0 ? `${i} it is an even number` : `${i} odd number`);
// }

// if you have more than one statement make use of a curly bracket. otherwise, use a c bracket.

// DEBUGGER
//  for (let i=0; i<=10; i++){
//     console.log(i);
//     if(i == 5)
//         break
//  }
// break can only be used within a full loop.

/*
for(let i = 0; i <= 18; i++) {
    let numbers = [12, 18, 11, 5, 8, 2];
    console.log(i)
    
}
*/

// let a = 3
// console.log(a++);
// console.log(a);


// use of continue in loop.
// skips to the next loop, allows you to start another loop without finishing.
// for(let i = 0; i<=10; i++) {
//     if (1 == 5) {
//         continue
//     }
//     console.log(i);
// }

// let cnt = 0
// while(cnt <= 10) {
//     console.log(cnt);
// if we don't have the below code it will produce an infinite loop.
//     cnt++;
// }while(cnt <=10)

// while loop has a condition that specifies when it ends. condition comes first.
// for loop
// do while condition comes after.

// let cnt = 0
// do {
//     console.log(cnt);
//     cnt++
// }while(cnt <=10)

// if we don't have the below code it will produce an infinite loop.
// foreach

/*
let numbers = [12, 18, 11, 5, 2, 8];
for(let i=0; i<numbers.length; i++){
    console.log
    (`${i} => ${numbers[i]}`);
}
*/

// numbers.forEach array method that allows the code to look clean.
// displays the array in console.
// numbers.forEach((number) =>{
//     console.log(number);
// })

// displays numbers in the console log.
// numbers.forEach(display)
// function display(number) {
//     console.log(number);
// }

// numbers.forEach((number, i)=>{
//     console.log(number, i);
// })

// display even numbers only.
// numbers.forEach((number, i) =>{
//     if(number % 2 == 0)
//     console.log(number);
// }
// )

// in represents index. reads the index of each element.
/*
for(let i in numbers){
    console.log(i, numbers[i]);
}
*/

// for of.
// displays the array the amount of numbers that is displayed within the array.
/*
for(let number of numbers) {
    console.log(numbers);
}
*/

/*
let numbers = [12, 18, 12, 11, 5, 18, 2, 8, 2];
let unique = []
numbers.forEach((number)=>{
    if (!unique.includes(number)) {
        unique.push(number)
    }
})
console.log(unique);

console.log(Array.from(new Set (numbers)));
// removes duplicates from the array.
*/
/*

F U N C T I O N S ~
named function or declaration function.

function constName(){
    console.log("Name is Aakeefah.");
    constName()
    constName ("Leigh")
}

*/

// doesnt display the second name because there is no argument. parameter was not specified.
// another word for parameter is placeholder.
// argument is a function that was defined.

/*
function constName(firstName) {
    console.log(`First name is ${firstName || 'Aakeefah'}`);
}
constName()
constName ("Leigh")
*/

let greeting = " Hello World ";
console.log(greeting.split(""));
console.log(greeting.trim().split(""));

function constName(firstName) {
    console.log(`I wanna make ${firstName} the happiest girl in the world.`)
    console.log(`I'm sure I can make ${firstName} the happiest girl in the world.`);
}
constName("Aakeefah")


// function 

// hoisting the process where the declaration of functions, variables, classes or imports to the top of the scope prior to the execution of the code.

console.log("accessing a value");
x = 3
console.log(x);
console.log("creating a variable");
var x;
console.log(x);



let addition = function (numb1, numb2){
    return numb1 + numb2
}
console.log(addition(3,2));

/*

` R E C U R S I V E  F U N C T I O N `

*/

// function repeat(limit) {
//     let cnt = 1
//     if(cnt < limit) {
//         console.log(cnt);
//         cnt++
//         repeat(limit)
//     }
// }
// repeat(10)

function display() {
    let numb1 = 9
    console.log(`inside of a function: ${numb1}`);
}
display()

// if there isn't a value it will say reference error but if the function is not defined then it will say undefined.

/*

F A C T O R Y  F U N C T I O N `

*/

// a factory function allows us to create and return an object.

// function person() {
//     let data = {
//         firstName: 'Peter',
//         age: 20,
//     }
//     return data
// }

// when using factory funcation, plan it ahead then execute the plan/idea.

/*
function person(firstName, lastName, age, hrs, rate) {
    return{
        name: firstName,
        surname: lastName,
        userAge: age,
        hoursWorked: hrs,
        userRate: rate
    }
}
let person1 = person('Peter', 'Mukanya', 3, 60, 500)
let person2 = person('John', 'Mukanya', 2, 30, 350)
console.log(person1);
console.log(person2);

*/

// A SHORTCUT
// function person(firstName, lastName, age, hrs, rate) {
//     return {
//         firstName, lastName, age, hrs, rate
//     }
// }


// C O N S T R U C T O R  F U N C T I O N `
// constructor function allows us to create an object. then return this

// name of constructor function is always in caps. easy identification.
// makes use of "this" to create a property.
// all your properties return in one place.
function Laptop(make, amount) {
    this.make = make
    this.amount = amount
    return this
}
function SmartPhone(amount) {
    this.amount = amount
}

let laptop1 = new Laptop('HP', 18000)
let laptop2 = new Laptop('Dell', 20000)
let samsungA51 = new SmartPhone (20000)
console.log(laptop1);
console.log(laptop2);
console.log(laptop2 instanceof Laptop);
// checks for true or false - instanceof
// checks if the specified property is within the object. or constructor property.
console.log(laptop2 instanceof SmartPhone);


/* 

20 NOVEMBER 2023

D Y N A M I C  N A T U R E  O F  A N  O B J E C T

*/
/*
let person = {
    firstName: 'John',
    lastName: 'Bruce'
}


 when adding and replacing another value into a property make use of square bracket notation or dot notation.

 square bracket notation
 person['firstName'] = 'Peter'

console.log(person);
 dot notation
person.firstName = 'Peter'

 add a new property to the current object
person.age = 20
console.log(person);

/*

C O N S T R U C T O R  P R O P E R T Y

it is the same as using instaneof
when making use of the code below, make sure to use the constructor property = .constructor
console.log(person1.constructor === NewRecord);

*/
/*
function NewRecord(name) {
    this.name = name;
}
let person1 = new NewRecord('John');
let person2 = {name: 'Henk'};

console.log(person1.constructor === NewRecord);
     output is true.
console.log(person1 instanceof NewRecord);
     output is true.
console.log(person2.constructor === NewRecord);
console.log(person2 instanceof NewRecord);
*/
// shows false because the NewRecord function was not made use of within the let person2 code.

// objectliteral is used...
// makes use of the typeof operator.
/*
let person = {
    firstName: 'Aakeefah',
    lastName: 'Jones',
    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(person);
console.log(person.fullName());
*/
/*
let person = {
    firstName: 'Aakeefah',
    lastName: 'Jones',
    hrs: 120,
    rate: 500,
    salary: function() {
        return this.hrs * this.rate
    }
}
// if you wanna display it on console.
console.log(person.salary());
console.log(person);
// if you wanna display it on a function
person.salary();
*/

/*

L O O P I N G  T H R O U G H  A N  O B J E C T 

*/
let laptop = {
    make: 'Dell',
    cpu: '3Ghz',
    ram: '16GB'
}
// display all the values and properties within an object using loop.
console.log(laptop);
for (const key in laptop) {
    console.log(laptop[key]);
}
console.log(Object.keys(laptop));
console.log(Object.values(laptop));

Object.keys(laptop).forEach( (key)=>{
    console.log(`${key} -> ${laptop[key]}`);
})
Object.values(laptop).forEach( (values)=>{
    console.log(`${values}`);
})

// console.log(laptop.make);
// console.log(laptop.cpu);
// console.log(laptop.ram);

/*
for(let key of laptop) {
    does not work because object is not iterable
}
*/

// reads all the properties for a specific key.
for(let key in laptop) {
    console.log(key, ' ', laptop[key]);
}
// use a square bracket in case you dont know what the specific key is.
// if you're targeting a specific key then use the dot notation.


/*

C L O N I N G  A N  O B J E C T - using spread op, Object.assign(), JSON.parse()

*/
let car1 = {
    make: 'Toyota',
    year: 2023
}
// deep copy
let car2 = car1
console.log("==car1==");
console.log(car1);
console.log("==car2==");
console.log(car2);
console.log('change the value of car2');
car2.year = 2024
console.log(car1, car2);



/*

M A T H  A N D  S T R I N G  M E T H O D S

*/


/*

S P R E A D  O P E R A T O R 

*/


/*

M A P  A N D  R E D U C E (ARRAY METHODS)

*/


/*

F E T C H  A P I

*/

