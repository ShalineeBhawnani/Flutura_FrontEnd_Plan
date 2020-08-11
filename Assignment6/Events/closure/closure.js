var outer = 200;
function count(){
    var counter = 30;
    document.write("inner called", counter)
    document.write("outer called with inner", outer)
}
count();

// nested function

function show(){
    var localVar=30;
    document.write("show parent function value",localVar);
    function innerFunction()
    {
        var innerLocalVar=80;
        document.write("show inner function value",innerLocalVar);
        //closure
        document.write("show parent function value",localVar);
    }
    innerFunction()
    document.write("show inner function value in outer function",innerLocalVar); // it will give error
}
show()