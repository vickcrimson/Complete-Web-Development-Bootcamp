function fibonacciGenerator(n){
    if (n <= 1) {
        return[0];
    } else if ( n === 2) {
        return [0,1];
    }
    
    var arr = [0,1];
    for ( var i = 2; i < n; i++){
        arr.push(arr[i-1] + arr[i-2])
    }
    return arr
}

fibonacciGenerator(5)