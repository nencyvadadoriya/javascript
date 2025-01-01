// try-catch
// The try statement defines a code block to run (to try).

// The catch statement defines a code block to handle any error.

// The finally statement defines a code block to run regardless of the result.

// The throw statement defines a custom error.
try {
    var a = 10;
    var b =2;
    console.log(a / b);  
    throw new Error("Error!!!!!!!!!");
} catch (err) {
    console.log("error handled in the catch block");
}
