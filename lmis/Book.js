/**
   File: Book.js
   Author(s): Pierre Abraham Mulamba
   Date of creation (modification): 20210205 (20210205)
   
*/


class Book
{
    constructor(quote, title, year, minimal_age, n_possess, n_available, nBooks)
    {
        this._quote = quote;
        this._title = title;
        this._year = year;
        this._minimal_age = minimal_age;
        this._n_possess = n_possess;
        this._n_available = n_available;
        this._nBooks = nBooks;
    }

    // Accessors
    getQuote(){
        return this._quote;
    };

    getTitle(){
        return this._title;
    };

    getYear(){
        return this._year;
    };

    getMinimalAge(){
        return this._minimal_age;
    };

    getNpossess(){
        return this._n_possess;
    };

    getNavailable(){
        return this._n_available;
    };

    getNbooks(){
        return this._nBooks;
    };

    // Mutators
    setQuote(quote){
        this._quote = quote;
    };


    setTitle(title){
        this._title = title;
    };

    setYear(year){
        this._year = year;
    };

    print(){
        console.log(this.getQuote() +'. '+ this.getTitle() + '. ' + this.getMinimalAge() + ' y.o.');
    };
}



module.exports = Book;
