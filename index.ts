/*1- Identify if a Number is Even or Odd
You are given a variable num. Check whether the number is even or odd without using a function.*/

let num : number=10;
if(num%2==0)
{
    console.log("Number is Even");
}
else{
    console.log("Number is Odd");
}


/*2- Filter Expensive Products from an Array : 
You are given an array of product prices. print out  all prices that are higher than a given threshold price, without using a function.*/

let price :number=20;

let products : number[]=[10, 15, 25, 30, 40];
for(let i=0; i<products.length; i++)
    {
        if(products[i]>price)
        {
            console.log(products[i]);
        }
     
    }


 /*   3- Find the Oldest Admin
You have an array of user objects, where each user has the properties name, age, and isAdmin. Find and print the name of the oldest admin, without using a function.*/

let users: any[] = [
    {name: "rama", age: 28, isAdmin: true},
    {name: "ahmad", age: 25, isAdmin: false},
    {name: "omar", age: 45, isAdmin: true},
    {name: "Sarah", age: 35, isAdmin: false}
];

let oldestAdmin: any = null;  // Initialize oldestAdmin to null

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin && (oldestAdmin == null || users[i].age > oldestAdmin.age)) {
        oldestAdmin = users[i]; // Store the entire user object
    }
}

console.log("The oldest admin is: ", oldestAdmin ? oldestAdmin.name : "No admin found");


/*************************task day2 */

// Sum All Elements in an Array
// You are given an array of numbers. Iterate through the array and print the sum of all elements, without using a function.

let numbers: number[] = [1, 2, 3, 4, 5];
let sum: number = 0;

for(let i=0; i<numbers.length; i++)
{
    sum+=numbers[i];
}

console.log("Sum of all elements: ", sum);


// Check if All Elements in Array are Positive
// You are given an array of numbers. Check whether all elements are positive, and print "All Positive" if true, otherwise print "Not All Positive", without using a function.

let positiveNumbers: number[] = [6, -2, 3, 4, 5];
let allPositive: boolean = true;

for(let i=0; i<positiveNumbers.length; i++)
{
    if(positiveNumbers[i]<=0)
    {
        allPositive=false;
        break;
    }
}

console.log(allPositive ? "All Positive" : "Not All Positive");

// Find the Longest Name in an Array
// You are given an array of names. Iterate through the array and print the longest name, without using a function.

let names: string[] = ["John", "Alex", "Sarah", "Emma", "Michael"];
let longestName: string = "";

for(let i=0; i<names.length; i++)
{
    if(names[i].length > longestName.length)
        longestName=names[i];
}

console.log("Longest Name: ", longestName);

// Count Occurrences of a Character in a String
// You are given a string and a character. Print the number of times the character appears in the string, without using a function.

let str: string = "Hello World";
let char: string = "l";
let count: number = 0;

for(let i=0; i<str.length; i++)
{
    if(str[i] === char)
        count++;
}

console.log("Number of occurrences of character: ", count);

// Identify Prime Numbers in an Array
// You are given an array of numbers. Identify and print all prime numbers from the array, without using a function.

let numbersArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let primeNumbers: number[] = [];

for(let i=0; i<numbersArray.length; i++)
{
    let isPrime: boolean = true;

    for(let j=2; j<numbersArray[i]; j++)
    {
        if(numbersArray[i] % j === 0)
        {
            isPrime = false;
            break;
        }
    }

    if(isPrime)
        primeNumbers.push(numbersArray[i]);
}

console.log("Prime Numbers: ", primeNumbers);