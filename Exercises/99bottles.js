function bottles(){
    for (var i = 99; i >= -1; i--){
        if ( i <= 0){
            console.log("No more bottles of wine on the wall, no more bottles of wine. Go to the store and buy some more, 99 bottles of wine on the wall")
        } else {
    console.log(i + " bottles of wine on the wall " + i + " bottles of wine. Take 1 down, pass it around, " + --i + " bottles of beer on the wall" )
        }
    }
}
 bottles()
