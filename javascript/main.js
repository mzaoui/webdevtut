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

var obj1 = {
    foo: function(one, two, three) {

        console.log(this);
        console.log(this === window);
        console.log(one, two, three);
    }
};

var obj2 = {
    foo: function(args) {

        console.log(this);
        console.log(this === window);
        console.log(args);
    }
};

var obj3 = {
    foo: function() {

        console.log(this);
        console.log(this === window);
    }
};

obj1.foo.call(window, 1, 2, 3);
obj2.foo.apply(window, [1, 2, 3]);
var myBoundFoo = obj3.foo.bind(window);
myBoundFoo();

$(document).ready(function() {

    var a = 0;
    
    $("button").on("click", function() {

        a++;
        console.log("button cliked " + a+ " times");
    });
});


$("li").on("click", function() {

    var currentTimes = parseInt($(this).find("span").html());
    $(this).find("span").html(currentTimes + 1);
});


$("#open-div").on("click", function() {

    var _self = this;

    $("#div1").slideToggle(300, function() {

        $(_self).toggleClass("active");
    });
});