        // 1. Write a program to print even numbers in the given range 1, input num)
        // input: Enter a number: 10  //output: 2 4 6 8 10

        // num = +prompt("Enter a number : ");
        let numb = 10;
        s = ""
        for (i = 1; i <= numb; i++) {
            if (i % 2 == 0) {
                s = s + i + " ";
            }
        }
        console.log(s);              //2 4 6 8 10

        // let num = 5;
        // let a = 0; let b = 1;
        // let sum = 0;
        // let count = 0;
        // let fibSeries = [a, b];
        // while (count < num - 2) {
        //     let c = a + b;
        //     fibSeries.push(c);
        //     a = b;
        //     b = c;
        //     count++;
        // }
        // for (let i = 0; i < fibSeries.length; i++) {
        //     if (fibSeries[i] % 2 !== 0) {
        //         sum += fibSeries[i];
        //     }
        // }
        // console.log(sum);

        // 2. Write a program to print sum of odd numbers in the fibonacci series
        // input: Enter no of series : 5 (0 1 1 2 3)   //output: 5

        let num = 20;
        let a = 0;
        let b = 1;
        let sum = 0;
        if (num == 0) {
            console.log("INVALID INPUT");
        }
        else if (num == 1) {
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
        }                                           //Sum of odd numbers in the fibonacci series: 7563
        console.log("Sum of odd numbers in the fibonacci series: " + sum);

        // 3. Write a program to print sum of odd numbers in the fibonacci series and number should be added only once
        // input: Enter no of series : 5   //output: 4

        num = 20;
        a = 0;
        b = 1;
        sum = 0;
        if (num == 0) {
            console.log("INVALID INPUT");
        }
        else if (num == 1) {
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
        }                                           //Sum of odd numbers in the fibonacci series: 7562
        console.log("Sum of odd numbers in the fibonacci series:(no duplicates) " + (sum - 1));

        num = 20;
        a = 0;
        b = 1;
        sum = [];
        add = 0;
        if (num == 0) {
            console.log("INVALID INPUT");
        }
        else if (num == 1) {
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
        }                                           //Sum of odd numbers in the fibonacci series: 7562
        console.log("Sum of odd numbers in the fibonacci series(no duplicates) : " + add);

        // 4. Write a program to print the below series base don input
        // Enter a number: -10   // output: -10 -9 -8 - 7 -6 - 5 - 4 -3 -2 -1

        number = -10;
        s = "";
        for (i = number; i <= -1; i++) {
            s = s + i + " ";
        }
        console.log(s);                              //-10 -9 -8 -7 -6 -5 -4 -3 -2 -1 

        // Enter a number: -10 (should not use <= operator)
        number = -10;
        s = "";
        for (i = number; !(i >= 0); i++) {
            s = s + i + " ";
        }
        console.log(s);                              //-10 -9 -8 -7 -6 -5 -4 -3 -2 -1 

        // 5. Write a program to print the below series base don input
        // Enter a number: -10   //output: -1 -2 -3 -4 -5 -6 -7 -8 -9 -10 
        number = -10;
        s = "";
        for (i = -1; i >= number; i--) {
            s = s + i + " ";
        }
        console.log(s);                              //-1 -2 -3 -4 -5 -6 -7 -8 -9 -10

        // Enter a number: -10 (should not use <= operator)
        number = -10;
        s = "";
        for (i = -1; !(i <= number - 1); i--) {
            s = s + i + " ";
        }
        console.log(s);                              //-1 -2 -3 -4 -5 -6 -7 -8 -9 -10