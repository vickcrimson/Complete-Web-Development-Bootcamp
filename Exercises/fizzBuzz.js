var count = [];

function fizzBuzz(){

for (var i = 1; i <= 100; i++) {
    if ( i % 3 == 0 && i % 5 == 0){
        count.push("fizzbuzz");
    } else if ( i % 5 == 0) {
        count.push("buzz");
    } else if ( i % 3 == 0 ){
        count.push("fizz")
    } else {
    count.push(i);
    }
}
    console.log(count);
}

fizzBuzz() 