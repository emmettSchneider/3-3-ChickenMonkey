
// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    // Divide the current number by 5, and check if the remainder is 0
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log("ChickenMonkey"); // ChickenMonkey will appear on numbers divisible by 5 and 7
    }
    else if (currentNumber % 7 === 0) {
        console.log("Monkey");  // Monkey will appear on numbers divisible by 7
        }
    else if (currentNumber % 5 === 0 ) {
        console.log("Chicken"); // Chicken will apear on numbers divisible by 5
    }
    else {
        console.log(currentNumber);      // If none of the conditions above are met, the current number will be logged to the console
    }
}
