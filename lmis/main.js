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
    /* BEGINNING OF TESTS                                                                               */
    /* Remaining modification are at the end of the main function.                                      */
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
    
    console.log("\n/*******************************************************************/\n");
    console.log("/*                      BEGINNING OF TESTS                         */\n");
    console.log("/* Remaining modification are at the bottom of main function    .  */\n");
    console.log("/*******************************************************************/\n");

    console.log("\n\t\tSEARCHING BOOKS BY TITLE");
    console.log("Search for a title containing: Big C++");
    const title_to_search = 'Big C++';
    library.searchBookByTitle(title_to_search);

    console.log("Search for a title containing: Harry");
    const title = 'Harry';
    library.searchBookByTitle(title);

    
    console.log("\n\t\tSEARCHING BOOKS BY QUOTE");
    console.log("Search for a quote containing: AC409");
    const quote_to_search = 'AC409';
    library.searchBookByQuote(quote_to_search);

    console.log("Search for a quote containing: BD302");
    const quote = 'BD302';
    library.searchBookByQuote(quote);

    console.log("\n\t\tTESTING THE BORROWING");
    console.log("\n// Should fail because Nicolas is too young! AC409 <--> 1630236\n");
    if (library.borrowBookBySubscriber("1630236", "AC409", "160204"))
    {
        console.log("AC409 borrowed by 1630236\n");
    }
    else{
        console.log("(Fail)!!!BORROWING OF AC409 by 1630236 failed because the Subscriber Nicolas is too young!!!\n");
    }

    console.log("\n// Should work. BD302 borrowed by 1630236\n");
    if (library.borrowBookBySubscriber("1630236", "BD302", "160204"))
    {
        console.log("(Pass)BD302 borrowed by 1630236\n");
    }
    else{
        console.log("!!!BORROWING BD302 by 1630236 failed!!!\n");
    }

    console.log("\n// Should not work because the book is not available anymore\n");
    if (library.borrowBookBySubscriber("1839456", "BD302", "160204"))
    {
        console.log("BD302 borrowed by 1839456\n");
    }
    else{
        console.log("(Fail)!!!BORROWING BD302 by 1839456 failed because the book is not Available!!!\n");
    }

    console.log("\n// Should not work because the subscriber has the book\n");
    if (library.borrowBookBySubscriber("1630236", "BD302", "160204"))
    {
        console.log("BD302 borrowed by 1630236\n");
    }
    else{
        console.log("(Fail)!!!BORROWING BD302 by 1630236 failed because the Subscriber has the book!!!\n");
    }

    console.log("\n// Should work\n");
    if(library.borrowBookBySubscriber("1630236", "QA204", "160204"))
    {
        console.log("(Pass)QA204 borrowed by 1630236\n");
    }
    else{
        console.log("!!!BORROWING QA204 by 1630236 failed!!!\n");
    }

    console.log("\n// Should not work because the subscriber has reached the limit of books to borrow\n");
    if (library.borrowBookBySubscriber("1630236", "QA203", "160204"))
    {
        console.log("QA203 borrowed by 1630236\n");
    }
    else {
        console.log("(Fail)!!!BORROWING QA203 by 1630236 failed because the limit is exceeded!!!\n");
    }

    // Info of a subscriber before returning a book
    console.log("\n\t\tINFO OF A SUBSCRIBER BEFORE RETURNING A BOOK.\n");
    library.infoSubscriber("1630236");

    console.log("\n\t\tTESTS ON BOOKS RETURN.\n");

    console.log("// should work\n");
    if (library.returnBook("1630236", "QA204"))
    {
        console.log("(Pass)QA204 return by 1630236\n");
    }
    else{
        console.log("!!!Returning of BD302 by 1630236 Failed!!!\n");
    }

    console.log("// Should not work because the subscriber never borrowed a book\n");
    if (library.returnBook("1839456", "QA203"))
    {
        console.log("QA203 return by 1839456\n");
    }
    else{
        console.log("(Fail)!!!Returning failed because the Subscriber 1839456 never borrowed a book!!!\n");
    }

    // Info of a Subscriber after returning a book
    console.log("\n\t\tINFO OF A SUBSCRIBER AFTER RETURNING A BOOK.\n");
    library.infoSubscriber("1630236");

    console.log("/*********************************/");
    console.log("/*       END OF TESTS            */");
    console.log("/*********************************/");
    
    console.log("\n\tPROGRAM ENDED SUCCESSFULLY\n");

}catch(err){
    console.log("Unknown Error Thrown");
}



