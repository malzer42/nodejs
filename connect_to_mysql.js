/**
   File: connect_to_mysql.js
   Programmer(s): Pierre Abraham Mulamba
   Date of creation (modification): 20210203 (20210203)
   Description: javascript file used to connect to mysql using nodejs
   Usage: from terminal type
   1. exec bash
   2. nvm use 12
   3. node connect_to_mysql.js
*/

/*
include mysql module
if the module is not found
then run first npm init
then run nvm i mysql
*/

let mysql = require('mysql'); 
let async = require('async');

// create a connection variable with the required details
let con = mysql.createConnection({
    multipleStatements: true,
    host: "localhost",    // ip address of server running mysql
    user: "root",    // user name to your mysql database
    password: "mfzvs2ttlmn2", // corresponding password
    database: "classicmodels" // use the specified database
});
 
/* make to connection to the database.
con.connect(function(err) 
{
    if (err) throw err;
    // if connection is successful
    con.query("SELECT employeeNumber, lastName, firstName FROM employees where officeCode=4 ORDER BY firstName", function (err, result, fields) {
        // if any error while executing above query, throw error
        if (err) throw err;
        // if there is no error, you have the result
        console.log(result);
    });
});
*/
// return payments record with maximum amount
con.connect(function(err) 
{
    let query1 = "SELECT employeeNumber, lastName, firstName FROM employees where officeCode=4 ORDER BY firstName";
    let query2 = "SELECT * FROM payments where amount = (SELECT Max(amount) FROM payments)";

    if (err) throw err;
    // if connection is successful
    con.query(query1, function (err, result, fields) {
        // if any error while executing above query, throw error
        if (err) throw err;
        // if there is no error, you have the result
        console.log(result);
    });
});
