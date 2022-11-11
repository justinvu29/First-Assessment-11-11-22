///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

let totalAcres = 0
for (let i = 0; i < fujiAcres.length; i++){
    // loop that runs through each index of the array from 0 til the end
    totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i];
    // makes totalAcres = the sum of the value of each inidividual index value in all 3 arrays 
}
console.log(totalAcres)



// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE


averageDailyAcres = (totalAcres / 7)
// to find the average you take 'totalAcres' divided by # of days 
console.log(averageDailyAcres)


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE

while (acresLeft > 0) {
    (acresLeft = acresLeft - averageDailyAcres) & (days++)
    // basically says as long as acres left is more than 0, subtract avg. daily acres from what is left and add a day until acres Left = 0, in order to find how many days are left
}
console.log(days)

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

let fujiTons = fujiAcres.slice(0, fujiAcres.length)
let galaTons = galaAcres.slice(0, galaAcres.length)
let pinkTons = pinkAcres.slice(0, pinkAcres.length)
// copy the arrays previous

for (let i = 0; i < fujiAcres.length; i++){
    fujiTons[i] = fujiAcres[i] * 6.5
}
console.log(fujiTons)

// runs through the arrays values and multiplies each by 6.5, the sum of that then = fujiTons

for (let i = 0; i < galaAcres.length; i++){
    galaTons[i] = galaAcres[i] * 6.5
}
console.log(galaTons)

for (let i = 0; i < pinkAcres.length; i++){
    pinkTons[i] = pinkAcres[i] * 6.5
}
console.log(pinkTons)

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0

for (let i = 0; i < fujiTons.length; i++){
    fujiPounds = fujiTons[i] + fujiPounds
}
fujiPounds = fujiPounds * 2000
console.log(fujiPounds)



for (let i = 0; i < galaTons.length; i++){
    galaPounds = galaTons[i] + galaPounds
}
galaPounds = galaPounds * 2000
console.log(galaPounds)

for (let i = 0; i < pinkTons.length; i++){
    pinkPounds = pinkTons[i] + pinkPounds
}
pinkPounds = pinkPounds * 2000
console.log(pinkPounds)

// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = (fujiPounds * fujiPrice)
let galaProfit = (galaPounds * galaPrice)
let pinkProfit = (pinkPounds * pinkPrice)

// multiply pounds by price per pound to find profit 

console.log(fujiProfit)
console.log(galaProfit)
console.log(pinkProfit)





// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

let totalProfit = (fujiProfit + galaProfit + pinkProfit)
console.log(totalProfit)

// value of totalProfit = sum of all profits