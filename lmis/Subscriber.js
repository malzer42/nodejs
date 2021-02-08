/**
   File: Subscriber.js
   Author(s): Pierre Abraham Mulamba
   Date of creation (modification): 20210205 (20210205)
   
*/


class Subscriber{
    constructor(idNumber, firstName, lastName, age){
        this._idNumber = idNumber;
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    getIdNumber(){
        return this._idNumber;
    };

    getFirstName(){
        return this._firstName;
    };

    getLastName(){
        return this._lastName;
    };

    getAge(){
        return this._age;
    };

    setIdNumber(idNumber){
        this._idNumber = idNumber;
    };

    print(){
        console.log(this._lastName +', '+ this._firstName + '.' + ' #'+this._idNumber);
    }
    
}

module.exports = Subscriber;

