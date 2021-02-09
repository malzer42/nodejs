/**
   File: Library.js
   Author(s): Pierre Abraham Mulamba
   Date creation (modification): 20210208 (20210208)
   Description:
*/

let Subscriber = require("./Subscriber.js");
let Book = require("./Book.js");
let Borrow = require("./Borrow.js");


class Library
{
    constructor()
    {
        this._subs = [];
        this._books = [];
        this._borrows = [];
    }

    // Accessor methods
    getSubs(){
        return this._subs;
    }

    getBooks(){
        return this._books;
    }
    
    getBorrows(){
        return this._borrows;
    }

    // Mutators
    setSubs(subs){
        this._subs = subs;
    }

    setBooks(books){
        this._books = books;
    }

    setBorrows(borrows){
        this._borrows = borrows;
    }

    // Processing subscribers in the Library
    /**
     * Adding an instance of Subscriber to the list of Subscribers
     * @param subscriber: a subscriber instance to be added
     */
    addSubscriber(subscriber){
        this._subs.push(subscriber);
    }

    /**
     * Remove an instance of a Subscriber to the list of Subscribesr
     * @param idNumber: the idNumber of an instance to be removed
     */
    delSubscriber(idNumber)
    {
        for(let i = 0; i < this._subs.length; i++){
            if(this._subs[i].getIdNumber() == idNumber){
                this._subs.splice(i,1);
            }
        }
    }

    // Processing books in the Library
    addBook(book){

        this._books.push(book);
    }

    delBook(quote)
    {
        for(let i = 0; i < this._books.length; i++ ){
            if(this._books[i].getQuote() == quote)
            {
                this._books.splice(i,1);
            }
        }
    }

    // Processing borrows in the Library
    addBorrow(borrow){
        this._borrows.push(borrow);
    }

    // Searching, borrowing, returning, displaying methods

    /**
     * Searching instances of a Book by title
     * @param title: title of the book to be searched
     */
    
    searchBookByTitle(book_title)
    {
        let isPresent = false;
        
        for(let book of this._books){
            if(book.getTitle() == book_title)
            {
                isPresent = true;
                console.log("\nDetails of the book with the title: "+book_title);
                book.print();
            }
        }
        
        if(!isPresent)
        {
            console.log("\n!!!No book with the title: "+book_title+"  found in the Library");
        }
    }

    /**
     * Searching instances of a Book by quote
     * @param book_quote: the quote of the book to be searched
     */
    
    searchBookByQuote(book_quote)
    {
        let isFound = false;
        
        for(let book of this._books){
            if(book.getQuote() == book_quote)
            {
                isFound = true;
                console.log("\nDetails of the book with the quote: "+book_quote);
                book.print();
            }
        }
        
        if(!isFound)
        {
            console.log("\n!!!No book with the quote: "+book_quote+"  found in the Library");
        }
    }

    /**
     * Printing methods
     */
    print()
    {
        if(this._subs.lenght != 0)
        {
            console.log("\n\tPrinting the Subscribers of the Library ...\n");
            for(let sub of this._subs){
                sub.print();
            }
        }

        if(this._books.length != 0)
        {
            console.log("\n\tPrinting the Books of the Library ...\n");
            for(let book of this._books) book.print();
        }

    }
}


module.exports = Library;