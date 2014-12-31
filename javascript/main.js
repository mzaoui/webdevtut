// scope === variable access
// context === this
var a = 1;

function foo() {

    var a = 2;
    var b = 3;

    console.log("foo: global a = " + window.a);
    console.log("foo: local  a = " + a);
    console.log("foo: local  b = " + b);
}

foo();
console.log("main: a = " + a);

function bar() {

    a = 4;

    console.log("foo: global a = " + window.a);
    console.log("foo: local  a = " + a);
}

bar();
console.log("main: a = " + a);

function add(first, second, callback) {
   
    console.log(first + second);
   
    if (callback) {
        callback();
    }
}


add(2, 3, function() {
    
    console.log('done');
});


add(4, 5, function() {
    
    console.log('done again');
});


add(6, 7);


$(document).ready(function() {

    var a = 0;
    
    $("button").on("click", function() {

        a++;
        alert(a);
    });
});