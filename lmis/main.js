/**
   File: main.ja
   Author(s): Pierre Abraham Mulamba
   Date of creation (modification): 20210205 (20210205)
   Description: driver for the library management and inventory system
   usage: node main.js
*/

//include the module subscriber
let Subscriber = require("./Subscriber.js");
let Book = require("./Book.js");
let Borrow = require("./Borrow.js");
let Library = require("./Library.js");
const today = new Date();


try{

    console.log(today);
    
    console.log("\nIF YOU FAIL TO PLAN FOR FAILURES, YOU ARE PLANNING TO FAIL\n")
    console.log("LIBRARY MANAGEMENT INVENTORY SYSTEM");
    console.log("INTEGRATION TEST PROGRAM");

    console.log("\nCREATING AND DISPLAYING OF SUBSCRIBERS");
    console.log(Subscriber);
    const sub1 = new Subscriber('1839456', 'John', 'Doe', 23);
    const sub2 = new Subscriber('1630236', 'Nicolas', 'Gagnon', 8);
    const sub3 = new Subscriber('1269348', 'Martin', 'Tremblay', 18);
    sub1.print();
    sub2.print();
    sub3.print();

    console.log("\nCREATING AND DISPLAYING OF BOOKS");
    console.log(Book);
    const book1 = new Book("GA403", "Big C++", 2009, 8, 3, 3, 6);
    const book2 = new Book("QA203", "Calcul a plusieurs variables partie 1", 2011, 3, 2, 2, 4);
    const book3 = new Book("QA204", "Calcul a plusieurs variables partie 2", 2011, 3, 2, 2, 4);
    const book4 = new Book("AC409", "Le chateau d'Ortrante", 1764, 16, 1, 1, 2);
    const book5 = new Book("BD302", "Harry Potter et le prisionier d'Azkaban", 1999, 3, 1, 1, 2);
    const book6 = new Book("CE413", "Ibssz Qpuufs et le prisionier c'balbcbo", 2000, 4, 2, 2, 4);
    const book7 = new Book("HB514", "Bjh D++", 2010, 9, 3, 4, 7);
    book1.print();
    book2.print();
    book3.print();
    book4.print();
    book5.print();
    book6.print();
    book7.print();

    console.log("\nCREATING OF BORROWS")
    console.log(Borrow);
    const borrow1 = new Borrow(sub1, book2, 2020);
    const borrow2 = new Borrow(sub2, book1, 2020);

    /** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** */
    /* BEGINNING OF TESTS */
    /* Les modifications restantes sont a la fin de la fonction main. */
    /** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** */

    console.log("\nADDING OF BOOKS, BORROWS, AND SUBSCRIBERS TO THE LIBRARY");
    console.log(Library);
    const library = new Library();
    library.addSubscriber(sub1);
    library.addSubscriber(sub2);
    library.addSubscriber(sub3);
    library.addBook(book1);
    library.addBook(book2);
    library.addBook(book3);
    library.addBook(book4);
    library.addBook(book5);
    library.addBook(book6);
    library.addBook(book7);
    library.addBorrow(borrow1);
    library.addBorrow(borrow2);

    console.log(library);
    const idNumber = '1269348';
    library.delSubscriber(idNumber);
    const quote = 'CE413';
    library.delBook(quote);
    console.log(library);
    console.log(library._borrows);

    const title_to_search = 'Big C++';
    library.searchBookByTitle(title_to_search);
    
    const title = 'Harry';
    library.searchBookByTitle(title);

    const quote_to_search = 'QA204';
    library.searchBookByQuote(quote_to_search);
    library.searchBookByQuote(quote);
    
    console.log("\n\tPROGRAM ENDED SUCCESSFULLY\n");

}catch(err){
    console.log("Unknown Error Thrown");
}



