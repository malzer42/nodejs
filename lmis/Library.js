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
     * Remove an instance of a Subscriber to the list of Subscriber
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
    /**
     * Adding an instance of Book to the list of Books
     * @param book: a book instance to be added
     */
    addBook(book){

        this._books.push(book);
    }

    /**
     * Remove an instance of a Book to the list of Book
     * @param quote: the quote of the instance to be removed
     */
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
    /**
     * Adding an instance of borrow to the list of Borrows
     * @param borrow: a borrow instance to be added
     */
    addBorrow(borrow){
        this._borrows.push(borrow);
    }
    
    /**
     * Remove an instance of a Borrow to the list of Borrow
     * @param borrow: the instance to be removed
     */
    delBorrow(borrow)
    {
        console.log("Executing the delBorrow method");
        console.log("Borrow length: "+this._borrows.length);
        for(let i = 0; i < this._borrows.length; i++)
        {
            console.log(i);
            if(this._borrows[i].getSubscriber().getIdNumber() == borrow.getSubscriber().getIdNumber() &&
               this._borrows[i].getBook().getQuote() == borrow.getBook().getQuote())
            {
                this._borrows.splice(i, 1);
            }
        }
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
     * Borrowing a book based on some conditions
     * Check if is possible for a Subscriber to borrow a specific book
     * If yes, then a new borrow instance is added to the list of borrowers
     * The following conditions are to be met for a Subscriber to borrow a book:
     * 1. The book is available
     * 2. The subscriber meets the age criterial -- the subscriber age >= book min reader age
     * 3. The subscriber did not already borrow the book
     * 4. The subscriber did exceed the maximum number of books allowed to borrow -- 2 by subscriber
     * The method return a Boolean value to indicate a successful or failure of a book
     * @param idNumber
     * @param quote
     * @param returnDate
     * @return
     */
    
    borrowBookBySubscriber(idNumber, quote, returnDate)
    {
        const MAX_BORROW_ALLOWED = 2;
        let isSuccessful = false;
        let isBookAvailable = false;
        let isSubOldToReadTheBook = false;
        let condition_one_and_two = false;
        let iSub = 0;
        let iBook = 0;

        if(this._borrows.length == 0)
        {
            // Check condition 1.
            for(let i = 0; i < this._books.length; i++)
            {
                if(this._books[i].getQuote() == quote)
                {
                    if(this._books[i].getNavailable() > 0){
                        isBookAvailable = true;
                    }
                    else{
                        isBookAvailable = false;
                    }
                    iBook = i;
                    break;
                }
            }

            // Check condition 2.
            for(let j = 0; j < this._subs.length; j++)
            {
                if(this._subs[j].getIdNumber() == idNumber)
                {
                    isSubOldToReadTheBook = ((this._subs[j].getAge() >= this._books[iBook].getMinimalAge()) ? true : false );
                    iSub = j;
                    break;
                }
            }

            // Condition 1 and 2
            condition_one_and_two = isBookAvailable && isSubOldToReadTheBook;

            /**
             * nBorrows_ == 0
             * We do not check condition 3
             * We do not check condition 4
             */
            if(condition_one_and_two)
            {
                let borrow = new Borrow(this._subs[iSub], this._books[iBook], returnDate);

                this._borrows.push(borrow); // = &*borrow; //Borrow(subs_[iSub], books_[iBook], returnDate);
                this._borrows[this._borrows.length - 1 ].print();
                this._books[iBook].setNavailable( this._books[iBook].getNavailable() - 1 );
                isSuccessful = true;
            }
        }
        else if(this._borrows.length > 0){
            let counterSub = 0;
            let hasBorrowedTheBook = false;

            for(let k; k < this._borrows.length; k++)
            {
                if(this._borrows[k].getSubscriber().getIdNumber()== idNumber)
                {
                    counterSub++;
                    hasBorrowedTheBook = ( ( this._borrows[k].getBook().getQuote() == quote ) ? true : false);
                }
            }
            
            // Check condition 1.
            for(let i = 0; i < this._books.length; i++)
            {
                if(this._books[i].getQuote() == quote)
                {
                    isBookAvailable = ((this._books[i].getNavailable() > 0) ? true : isBookAvailable);
                    iBook = i;
                    break;
                }
            }

            // Check condition 2.
            for(let j = 0; j < this._subs.length; j++)
            {
                if(this._subs[j].getIdNumber() == idNumber)
                {
                    isSubOldToReadTheBook = ((this._subs[j].getAge() >= this._books[iBook].getMinimalAge()) ? true : false );
                    iSub = j;
                    break;
                }
            }

            // Condition 1 and 2
            condition_one_and_two = isBookAvailable && isSubOldToReadTheBook;

            if((!hasBorrowedTheBook && counterSub < MAX_BORROW_ALLOWED) && condition_one_and_two )
            {
                let borrow = new Borrow(this._subs[iSub], this._books[iBook], returnDate);
                this._borrows.push(borrow); //[nBorrows_++] = &*borrow; //Borrow(subs_[iSub], books_[iBook], returnDate);
                this._books[iBook].setNavailable( this._books[iBook].getNavailable() - 1 );
                isSuccessful = true;
            }

        }
        else{
            isSuccessful = false;
        }
        return isSuccessful;
    }

    /**
     * Return method
     * If the subscriber has borrowed the book, the borrow record is deleted 
     * from the list borrows_
     * Return a Boolean value for a successful or failed return
     * Return a borrowed book by the Subscriber in the Library
     * @param subscriber_id
     * @param book_quote
     * @return isBookReturned
     */
    returnBook(idNumber, quote)
    {

        let isBookReturned = false;
        for(let borrow_obj  of this._borrows)
        {
            if(borrow_obj.getSubscriber().getIdNumber() == idNumber && 
               borrow_obj.getBook().getQuote() == quote )
            {
                this.delBorrow(borrow_obj);
                isBookReturned = true;
                break;
            }
        }

        for(let i = 0; i < this._books.length; i++)
        {
            if(this._books[i].getQuote() == quote)
            {
                this._books[i].setNavailable(this._books[i].getNavailable() + 1);
                break;
            }
        }

        return isBookReturned;
    }
    
    /**
     * InfoSubscriber method
     * @param subscriber_id
     */
    
    infoSubscriber(idNumber)
    {
        for(let borrow of this._borrows) 
        {
            if(borrow.getSubscriber().getIdNumber() == idNumber) 
            {
                borrow.getSubscriber().print();
                break;
            }
        }

        for( let borrow of this._borrows) 
        {
            if(borrow.getSubscriber().getIdNumber() == idNumber) 
            {
                borrow.print();
            }
        }
    }
  
    /**
     * Printing methods
     */
    print()
    {
        if(this._subs.length != 0)
        {
            console.log("\n\tPrinting the Subscribers of the Library ...\n");
            for(let sub of this._subs) sub.print();
        }

        if(this._books.length != 0)
        {
            console.log("\n\tPrinting the Books of the Library ...\n");
            for(let book of this._books) book.print();
        }

        if(this._borrows.length !=0)
        {
            console.log("\n\tPrinting the Borrows of the Library ...\n");
            for(let borrow of this._borrows) borrow.print();
        }
    }
}


module.exports = Library;