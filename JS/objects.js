(function() {
    "use strict";
//
//     /**
//      * TODO:
//      * Create an object with firstName and lastName properties that are strings
//      * with your first and last name. Store this object in a variable named
//      * `person`.
//      *
//      * Example:
//      *  > console.log(person.firstName) // "Rick"
//      *  > console.log(person.lastName) // "Sanchez"
//      */
//     let person = {
//         firstName: "Jordan",
//         lastName:\ "Witt"
//     }
//     /**
//      * TODO:
//      * Add a sayHello method to the person object that returns a greeting using
//      * the firstName and lastName properties.
//      * console.log the returned message to check your work
//      *
//      * Example
//      * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
//      */
//    person.sayHello = function() {
//        return "Hello" ${person.firstName} ${person.lasName}
//    }
// console.log(person.sayHello());
//     /** TODO:
//      * HEB has an offer for the shoppers that buy products amounting to
//      * more than $200. If a shopper spends more than $200, they get a 12%
//      * discount. Write a JS program, using conditionals, that logs to the
//      * browser, how much Ryan, Cameron and George need to pay. We know that
//      * Cameron bought $180, Ryan $250 and George $320. Your program will have to
//      * display a line with the name of the person, the amount before the
//      * discount, the discount, if any, and the amount after the discount.
//      *
//      * Uncomment the lines below to create an array of objects where each object
//      * represents one shopper. Use a foreach loop to iterate through the array,
//      * and console.log the relevant messages for each person
//      */
//
//      var shoppers = [
//          {name: 'Cameron', amount: 180},
//          {name: 'Ryan', amount: 250},
//          {name: 'George', amount: 320}
//      ];
// shoppers.forEach(function(shopper){
//     if(shopper.amount > 200) {
//         let discount = 0.12 * shopper.amount;
//         let afterDiscount = shopper.amount - discount;
//         console.log(shopper.name + " you have a total amount of " + shopper.amount + "." + " You have recieved a discount of " + discount + " percent off!" +" Your new total is " + afterDiscount + "!");
//     }else{
//         let discount = 0
//         let afterDiscount = shopper.amount;
//         console.log(shopper.name + " your total is " + shopper.amount + "!" + " Thank you for shoppin n' boppin.");
//     }
// })

})
// HEB if offer is > 200 answer is true(12 percent discount applied)

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    let books = [
        {
            title: "Deathly Hallows",
            author:{
                firstName: "J.K",
                lastName: "Rowling"
            }
        },
        {
            title: "The Hobbit",
            author:{
                firstName: "J.R.R",
                lastName: "Tolkien"
            }
        },
        {
            title: "Game of Thrones",
            author:{
                firstName: "George",
                lastName: "R.R Martin"
            }
        },
        {
            title: "Cat in the Hat",
            author:{
                firstName: "Dr.",
                lastName: "Suess"
            }
        },
        {
            title: "The Giving Tree",
            author:{
                firstName: "Shel",
                lastName: "Silverstein"
            }
        },
    ]
// console.log(books[1].title);
// console.log(books[4].title);
// console.log(books[3].author.firstName);
// console.log(books[0].author.lastName);
//
//     //     {harryPotter: "Deathly Hallow"},
//     //     {harryPotter: "Order of the Phoenix"},
//     //     {harryPotter: "Chamber of Secrets"},
//     //     {harryPotter: "Sorcerers Stone"},
//     //     {harryPotter: "Half Blood Prince}"
//     //     author: {
//     //             firstName: "J.K",
//     //             lastName: "Rowling"
//     //         }
//     // ];
//     // console.log(books.harryPotter);
//     /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
books.forEach(function(book, index)
    {
        console.log("Book # 1" + (index + 1) + "\nTitle: " + book.title + "\nAuthor: " +  book.author.firstName + " " + book.author.lastName);
    })
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
function createBook(bookTitle, author){
    let authorName = author.split(" ")

        return {title: bookTitle,
        author: {
            firstName: authorName[0],
            lastName: authorName[1]
        }}
    }



    // function showBookInfo(book){
//     let niceString = books.title + "\n" + books.author.firstName + " " + books.author.lastName
//         return niceString;
//     }
//     console.log(showBookInfo(books)[1]);
// })();
