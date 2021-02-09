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
            if(this._books[i].getQuote() == quote){
                this._books.splice(i,1);
            }
        }
    }

    // Processing borrows in the Library
    addBorrow(borrow){
        this._borrows.push(borrow);
    }


}

module.exports = Library;