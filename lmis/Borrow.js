/**
   File: Borrow.js
   Author(s): Pierre Abraham Mulamba
   Date of creation (modification): 20210205 (20210205)
   
*/
let Subscriber = require("./Subscriber.js");
let Book = require("./Book.js");

class Borrow
{
    constructor(subscriber, book, book_return_date)
    {
        /** let subscriber = new Subscriber(sub.getIdNumber(), 
           sub.getFirstName(), sub.getLastName(), sub.getAge());
           let book_obj = new Book(book.getQuote(), book.getTitle(), 
           book.getYear(), book.getMinimalAge(), 
           book.getNpossess(), book.getNavailable(), 
           book.getNbooks());
        */
        this._subscriber = subscriber;
        this._book = book;
        this._book_return_date = book_return_date;
    }

    getSubscriber(){
        return this._subscriber;
    }
    
    getBook(){
        return this._book;
    }

    getBookReturnDate(){
        return this._book_return_date;
    }
    
    setSubscriber(sub){
        this._subscriber = sub;
    }

    setBook(book){
        this._book = book;
    }

    setBookReturnDate(book_return_date){
        this._book_return_date = book_return_date;
    }

    print(){
        console.log(console.log(this._subscriber)+
                    console.log(this._book)+
                    console.log(this._book_return_date)+
                    console.log('\n--------------------------\n')
                   );
    }
}

module.exports = Borrow;