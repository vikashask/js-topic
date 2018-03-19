/* 
The try...catch statement marks a block of statements to try, and specifies a response, 
should an exception be thrown.

try...catch
try...finally
try...catch...finally
 */
try {
    throw 'myException'; // generates an exception
 }
 catch (e) {
    // statements to handle any exceptions
    logMyErrors(e); // pass exception object to error handler
 }