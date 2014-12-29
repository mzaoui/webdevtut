
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