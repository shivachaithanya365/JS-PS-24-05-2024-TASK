// print if given number is even or odd
num = 5;
if (num % 2 == 0) {
    console.log("The number is even");
}
else {
    console.log("The number is odd");
}

// print if given number is even or odd - method 2
num = 2;
if (num % 2 == 1) {
    console.log("The number is odd");
}
else {
    console.log("The number is even");
}

// print if given number is even or odd - method 3
num = 2;
if (num % 2 <= 0) {
    console.log("The number is even");
}
else {
    console.log("The number is odd");
}

//TASK

// print if given number is even or odd - method 4
num = 5;
if (num % 2 >= 1) {
    console.log("The number is odd");
}
else {
    console.log("The number is even");
}

// print if given number is even or odd - method 5
num = 5;
if (num % 2 > 0) {
    console.log("The number is odd");
}
else {
    console.log("The number is even");
}

// print if given number is even or odd - method 6
num = 12;
if (num % 2 < 1) {
    console.log("The number is even");
}
else {
    console.log("The number is odd");
}

//sum of even numbers when input in numbers
num = 2468;
sum = 0;
str = String(num)
for (i of str) {
    if (i % 2 == 0) {     //(i % 2 < 1)
        sum = sum + Number(i)
    }
}
console.log(sum);
// FIBONACCI SERIES
// The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding numbers

//print fibonacci series
// num = +prompt("enter a n0. of series")
num = 5;
a = 0; b = 1;
if (num == 0)
    console.log("INVALID INPUT");
else {
    i = 1;
    while (i <= num) {
        console.log(a);
        c = a + b;
        a = b;
        b = c;
        i++
    }
}
//print fibonacci series  output in strings-side by side
// num = +prompt("enter a n0. of series")
num = 5;
s = ""
a = 0; b = 1;
if (num == 0)
    console.log("INVALID INPUT");
else {
    i = 1;
    while (i <= num) {
        s = s + a + " ";
        c = a + b;
        a = b;
        b = c;
        i++
    }
}
console.log("The fibonacci series for given input is : " + s);
//print even fibonacci series  output in strings-side by side
// num = +prompt("enter a no. of series")
num = 5;
s = ""
a = 0; b = 1;
if (num == 0)
    console.log("INVALID INPUT");
else {
    i = 1;
    while (i <= num) {
        if (a % 2 == 0 && a != 0) {
            s = s + a + " ";
        }
        c = a + b;
        a = b;
        b = c;
        i++
    }
}
console.log("The even fibonacci series for given input is : " + s);
//reverse a number
num = "123";
s = "";
for (i = num.length - 1; i >= 0; i--) {
    s = s + num[i];
}
console.log(s);

//reverse a number - with methods
num = "123";
console.log(num.split("").reverse().join(""));
//print fibonacci series  output in strings-side by side in reverse order - method
// num = +prompt("enter a n0. of series")
num = 10;
s = ""
a = 0; b = 1;
if (num == 0)
    console.log("INVALID INPUT");
else {
    i = 1;
    while (i <= num) {
        rev = String(a).split("").reverse().join("")
        s = s + rev + " ";
        c = a + b;
        a = b;
        b = c;
        i++
    }
}
console.log("The fibonacci series for given input in reverse is : " + s);
//print even fibonacci series  output in strings-side by side in reverse order - method
num = 10;
s = ""
a = 0; b = 1;
if (num == 0)
    console.log("INVALID INPUT");
else {
    i = 1;
    while (i <= num) {
        if (a % 2 == 0 && a != 0) {
            rev = String(a).split("").reverse().join("")
            s = s + rev + " ";
        }
        c = a + b;
        a = b;
        b = c;
        i++
    }
}
console.log("The even fibonacci series for given input in reverse is : " + s);

//print fibonacci series  output in strings-side by side in reverse order p- no methods
// num = +prompt("enter a n0. of series")
num = 10;
s = ""
a = 0; b = 1;
if (num == 0)
    console.log("INVALID INPUT");
else {
    i = 1;
    while (i <= num) {
        aStr = String(a);
        rev = ""
        for (j = aStr.length - 1; j >= 0; j--) {
            rev = rev + aStr[j];
        }
        s = s + rev + " ";
        c = a + b;
        a = b;
        b = c;
        i++
    }
}
console.log("The fibonacci series for given input in reverse is : " + s);
//print numbers from 1 to 10
num = 10;
for (i = 0; i <= num; i++) {
    console.log(i);
}
num = 10;
for (i = 0; num >= i; i++) {
    console.log(i);
}
num = 10;
for (i = 0; !(i >= num); i++) {
    console.log(i);
}
num = 10;
for (i = 0; !(i >= num + 1); i++) {
    console.log(i);
}
num = 10;
for (i = 0; !(i == num + 1); i++) {
    console.log(i);
}
num = 10;
for (i = 0; i !== num + 1; i++) {
    console.log(i);
}

//print numbers from 10 to 1
num = 10;
for (i = num; i >= 0; i--) {
    console.log(i);
}
