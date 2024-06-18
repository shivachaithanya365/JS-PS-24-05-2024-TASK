// 1. Write a program to print even numbers in the given range (1, input num) -side by side
// input: Enter a number: 10  //output: 2 4 6 8 10
num = +prompt("Enter a number : ");
// let num = 10;
s = ""
for (i = 1; i <= num; i++) {
    if (i % 2 == 0) {
        s = s + i + " ";
    }
}
document.write(` <h2>Even numbers from 1 to given input ( ${num} ) is : ${s}<br><br></h2>`)
console.log(`Even numbers from 1 to given input ( ${num} ) is : ${s}`);              //2 4 6 8 10

// 2. Write a program to print sum of odd numbers in the fibonacci series
// input: Enter no of series : 5 (0 1 1 2 3)   //output: 5
num = +prompt("Enter a number :")
// let num = 5;
let a = 0;
let b = 1;
let sum = 0;
if (num == 0) {
    document.write(`<h2>( ${num} ) is INVALID INPUT</h2>`)
    console.log("INVALID INPUT");
}
else if (num == 1) {
    document.write(`<h2>( ${num} ) is ${a}</h2>`)
    console.log(a);
}
else {
    let i = 1;
    while (i <= num) {
        if (a % 2 !== 0) {
            sum = sum + a;
        }
        let c = a + b;
        a = b;
        b = c;
        i++
    }
}                                           //Sum of odd numbers in the fibonacci series: 5
document.write(`<h2>Sum of odd numbers in the fibonacci series ( ${num} ) is :  ${sum}<br><br></h2>`);
console.log(`Sum of odd numbers in the fibonacci series ( ${num} ):  ${sum}`);

// 3. Write a program to print sum of odd numbers in the fibonacci series and number should be added only once
// input: Enter no of series : 5   //output: 4
num = +prompt("Enter no. of series :")
// num = 5;
a = 0;
b = 1;
sum = 0;
if (num == 0) {
    document.write(`<h2> ( ${num} ) is INVALID INPUT</h2>`)
    console.log(`<h2>INVALID INPUT</h2>`);
}
else if (num == 1) {
    document.write(`<h2> ( ${num} ) is ${a}<h2>`)
    console.log(a);
}
else {
    let i = 1;
    while (i <= num) {
        if (a % 2 !== 0) {
            sum = sum + a;
        }
        let c = a + b;
        a = b;
        b = c;
        i++
    }
}                                           //Sum of odd numbers in the fibonacci series: 4
document.write(`<h2>Sum of odd numbers in the fibonacci series (without duplicates) ( ${num} ) is :  ${sum - 1}<br><br></h2>`);
console.log(`Sum of odd numbers in the fibonacci series:(without duplicates) ( ${num} ) is : + ${sum - 1}`);

//method - 2
num = +prompt("Enter no. of series :")
// num = 5;
a = 0;
b = 1;
sum = [];
add = 0;
if (num == 0) {
    document.write(`<h2> ( ${num} ) is INVALID INPUT</h2>`)
    console.log("INVALID INPUT");
}
else if (num == 1) {
    document.write(` ( ${num} ) is ${a}`)
    console.log(a);
}
else {
    let i = 1;
    while (i <= num) {
        if (a % 2 !== 0) {
            if (!sum.includes(a)) {
                sum.push(a)
            }
        }
        let c = a + b;
        a = b;
        b = c;
        i++
    }
    for (i of sum) {
        add = add + i;
    }
}                                           //Sum of odd numbers in the fibonacci series: 4
document.write(`<h2>Sum of odd numbers in the fibonacci series (without duplicates) ( ${num} ) is :  ${add}<br><br></h2>`);
console.log(`Sum of odd numbers in the fibonacci series:(without duplicates) ( ${num} ) is : + ${add}`);

// 4. Write a program to print the below series based on input
// Enter a number: -10   // output: -10 -9 -8 - 7 -6 - 5 - 4 -3 -2 -1
number = +prompt("Enter a number(negative value) :")
// number = -10;
if (number<0){
s = "";
for (i = number; i <= -1; i++) {
    s = s + i + " ";
}
console.log(`( ${number} ) is : ${s}`);                              //-10 -9 -8 -7 -6 -5 -4 -3 -2 -1 
document.write(`<h2>( ${number} ) is : ${s}<br><br></h2>`);
}
else{
    document.write(`<h2>please enter a negative value</h2><br>`);
    console.log(`please enter a negative value`);
}

// Enter a number: -10 (should not use <= operator)
number = +prompt("Enter a number(negative value) :")
// number = -10;
s = "";
for (i = number; !(i >= 0); i++) {
    s = s + i + " ";
}
document.write(`<h2>( ${number} ) is : ${s}<br><br></h2>`)
console.log(`( ${number} ) is : ${s}`);                              //-10 -9 -8 -7 -6 -5 -4 -3 -2 -1 

// 5. Write a program to print the below series based on input
// Enter a number: -10   //output: -1 -2 -3 -4 -5 -6 -7 -8 -9 -10 
number = +prompt("Enter a number(negative value) :")
// number = -10;
s = "";
for (i = -1; i >= number; i--) {
    s = s + i + " ";
}
document.write(`<h2>( ${number} ) is : ${s}<br><br></h2>`)
console.log(`( ${number} ) is : ${s}`);                              //-1 -2 -3 -4 -5 -6 -7 -8 -9 -10

// Enter a number: -10 (should not use >= operator)
number = +prompt("Enter a number(negative value) :")
// number = -10;
s = "";
for (i = -1; !(i <= number - 1); i--) {
    s = s + i + " ";
}
document.write(`<h2>( ${number} ) is : ${s}<br><br></h2>`)
console.log(`( ${number} ) is : ${s}`);                              //-1 -2 -3 -4 -5 -6 -7 -8 -9 -10