/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'Jordan Witt';
const email = 'icode@codeup';
const languages = ['HTML ', 'CSS ', 'JAVASCRIPT'];
// let name = 'Bruce'

// TODO: rewrite the object literal using object property shorthand
users.push({
  name: name,
  email: email,
  languages: languages
});
//USING CONST CONTACT INFO TO LOG CONST VARS
const contactInfo = {
  name,
  email,
  languages
}
console.log(contactInfo);

// TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
users.forEach (user => console.log(user.email))
users.forEach (user => console.log(user.name))

//SHORTHAND FUNCTION FOR VARIABLES USING ARROW
const userInfo = users => name + ', ' + email
console.log(userInfo());

// TODO: replace `var` with `let` in the following declaration

users.forEach(function(user) {
  // TODO: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition
  const name = user.name;
  const email = user.email;
  const languages = user.languages;

  // TODO: rewrite the assignment below to use template strings

});
let developers = []
users.forEach(({name, email, languages}) =>
    developers.push(name + ' \'s email is ' + ' ' +email + ' ' +name + ' knows ' + languages.join(', ')))
console.log(developers);
// TODO: Use `let` for the following variable
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop

for( let developer of developers){
  console.log(developer);
}
  // TODO: rewrite the assignment below to use template strings
for( let list of developers) {
  console.log(list)
}

//ANOTHER EXAMPLE FOR TOTALING SALES
const salesPeople = [
  {name: 'Jim Halpert', sales: 100},
  {name: 'Dwight Schrute', sales: 50},
  {name: 'Andy Bernard', sales: 150},
];

const totalSales = salesPeople.reduce((total, person) => {
  return total + person.sales;
}, 0);
console.log(totalSales);
//END OF EXAMPLE 

//Bonus
const unique = [...new Set(users.map(it => it.group))]
console.log(unique);

