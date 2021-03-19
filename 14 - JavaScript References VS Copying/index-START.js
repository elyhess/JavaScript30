// var variables can be updated and re-declared within its scope; 
// let variables can be updated but not re-declared; 
// const variables can neither be updated nor re-declared.

// start with strings, numbers and booleans
let age = 100;
let age2 = age;

console.log(age, age2) // 100 100

age = 200;

console.log(age, age2) // 200 100


var myName = 'Ely';
var name2 = myName;
console.log(myName, name2);

myName = 'Elijah'
console.log(myName, name2)





// -----------------------
// ARRAYS ARE DIFFERENT!!! --- BASICALLY YOU NEED TO COPY THE ARRAY OTHERWISE YOU'LL MODIFY THE ORIGINAL
// -----------------------

// // Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;

console.log(players, team);
// You might think we can just do something like this:
team[3] = 'Bob';
console.log(team) // line 37 changes the last element to bob. ['Wes', 'Sarah', 'Ryan', 'Bob' ]
console.log(players) // ^^^ team is a reference to players - so when you modify team, you in turn modify players


// So, how do we fix this? We take a copy instead!
const team2 = players.slice();
console.log(team2) // ['Wes', 'Sarah', 'Ryan', 'Bob' ]

team2[3] = "Lux"

console.log(team2)   // [ 'Wes', 'Sarah', 'Ryan', 'Lux' ]
console.log(players) // [ 'Wes', 'Sarah', 'Ryan', 'Bob' ]


// or create a new array and concat the old one in
const team3 = [].concat(players);
console.log(team3) // ['Wes', 'Sarah', 'Ryan', 'Bob' ]

team3[3] = "Lux"

console.log(team3)   // [ 'Wes', 'Sarah', 'Ryan', 'Lux' ]
console.log(players) // [ 'Wes', 'Sarah', 'Ryan', 'Bob' ]


// or use the new ES6 Spread
const team4 = [...players];
console.log(team4) // ['Wes', 'Sarah', 'Ryan', 'Bob' ]

team4[3] = "Lux"

console.log(team4)   // [ 'Wes', 'Sarah', 'Ryan', 'Lux' ]
console.log(players) // [ 'Wes', 'Sarah', 'Ryan', 'Bob' ]

// now when we update it, the original one isn't changed







// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

// and think we make a copy:
const captain = person;
captain.number = 99;
console.log(captain) // { name: 'Wes Bos', age: 80, number: 99 } - THIS CHANGES THE ORIGINAL OBJ



// how do we take a copy instead?
// Things to note - this is only 1 level deep 
const myPerson = {
  name: 'Ely Hess',
  age: 25
};

const myPerson2 = Object.assign({}, myPerson, { number: 70 });

console.log(myPerson) // { name: 'Ely Hess', age: 25 }
console.log(myPerson2) // { name: 'Ely Hess', age: 25, number: 70 }


// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
// Poormans deep clone

const ely = {
  name: "ely",
  age: 100,
  social: {
    twitter: "@ely-hess4",
    linkedin: "linkedin.com/ely-hess"
  }
};
// console.clear();
console.log(ely); // { name: 'ely', age: 100, social: { twitter: '@ely-hess4', linkedin: 'linkedin.com/ely-hess' }}

const dev = JSON.parse(JSON.stringify(ely)); // this allows you to modify all levels deep without effecting the original.
