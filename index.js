/*1- Identify if a Number is Even or Odd
You are given a variable num. Check whether the number is even or odd without using a function.*/
var num = 10;
if (num % 2 == 0) {
    console.log("Number is Even");
}
else {
    console.log("Number is Odd");
}
/*2- Filter Expensive Products from an Array :
You are given an array of product prices. print out  all prices that are higher than a given threshold price, without using a function.*/
var price = 20;
var products = [10, 15, 25, 30, 40];
for (var i = 0; i < products.length; i++) {
    if (products[i] > price) {
        console.log(products[i]);
    }
}
/*   3- Find the Oldest Admin
You have an array of user objects, where each user has the properties name, age, and isAdmin. Find and print the name of the oldest admin, without using a function.*/
var users = [
    { name: "rama", age: 28, isAdmin: true },
    { name: "ahmad", age: 25, isAdmin: false },
    { name: "omar", age: 45, isAdmin: true },
    { name: "Sarah", age: 35, isAdmin: false }
];
var oldestAdmin = null; // Initialize oldestAdmin to null
for (var i = 0; i < users.length; i++) {
    if (users[i].isAdmin && (oldestAdmin == null || users[i].age > oldestAdmin.age)) {
        oldestAdmin = users[i]; // Store the entire user object
    }
}
console.log("The oldest admin is: ", oldestAdmin ? oldestAdmin.name : "No admin found");
