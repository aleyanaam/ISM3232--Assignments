// Task 1 Variables and Data Types

let employeeName = "Benjamin Carter";
const employeeID = 2987;
var isActive = true;

console.log(employeeName, typeof(employeeName));
console.log(employeeID, typeof(employeeID));
console.log(isActive, typeof(isActive));


//Task 2 Compound Data Types

let products = ["Rings", "Watches", "Clips"]
const productDetails= {
    name: products,
    price: 450,
    inStock: "Yes",
}

console.log(products, productDetails);

//Task 3 Assignment Operators

let accountBalance = 2500;

accountBalance += 2000;
console.log("Current Account Balance:",accountBalance);

accountBalance -= 100;
console.log("Current Account Balance:",accountBalance);

accountBalance *= 100;
console.log("Current Account Balance:",accountBalance);

accountBalance /= 10;
console.log("Current Account Balance:",accountBalance);

accountBalance %= 3;
console.log("Remainder:",accountBalance);


// Task 4 Comparison Operators

let employeeScore1 = 100;
let employeeScore2 = 92;

// The scores of two employees are compared and the result of the comparison is logged to the console

employeeScore1 > employeeScore2;
console.log("The comparison is:", employeeScore1 > employeeScore2);
 
employeeScore1 < employeeScore2;
console.log("The comparison is:", employeeScore1 < employeeScore2);

employeeScore1 >= employeeScore2;
console.log("The comparison is:", employeeScore1 >= employeeScore2);

employeeScore1 <= employeeScore2;
console.log("The comparison is:", employeeScore1 <= employeeScore2);

employeeScore1 === employeeScore2;
console.log("The comparison is:", employeeScore1 === employeeScore2);

employeeScore1 !== employeeScore2;
console.log("The comparison is:", employeeScore1 !== employeeScore2);

// Task 5 Logical Operators

let hasKeyCard = true;
let hasPermission = true;
 
// An if statement is used to evaluate the the access permissions using logical operators and based on the evaluation a statement is logged to the console

if (hasKeyCard && hasPermission) {
    console.log("Access Granted");
} else {
    console.log ("Access Denied");
}

if (hasKeyCard || hasPermission) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}

if (!hasKeyCard && hasPermission) {
    console.log("Access Granted");
} else {
    console.log ("Access Denied");
}