// In this exercise i've created a function to identify if a year is leap or not.

function leapYear(year){
    if (year % 4 === 0 || (year % 100 == 0 && year % 400 == 0 )){
        console.log("Leap Year")
    } else {
        console.log("Not a Leap Year")
    }
}


// Test
leapYear(year=2012)