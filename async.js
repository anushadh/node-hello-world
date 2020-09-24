// function add(a,b) {
//     return (a+b);
// }

// var x = add(3,5);
// console.log(x);


function add(a, b, callback) {
    callback(a+b);
}

function print(c) {
    console.log(c);
}

//add(1, 2, print);
add(1, 2, function(c) {
    console.log(c);
})

add(1, 2, (c) => {
    console.log(c);
})

