# JavaScript Questions
1.  Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with there type.

* Answer:

```
let a = "abc";
let b = true;
let c = 1;
let d;
let e = null;

console.log(typeof(a));  // string
console.log(typeof(b));  // Bolean
console.log(typeof(c));  // number
console.log(typeof(d));  // undefined
console.log(typeof(e));  // object
```

#

2. Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.

* Answer
```
let firstName = "GK";
let lastName = "Rao";
let maritalStatus = "unmarried"; 
let country = "India";
let age = 08;

console.log(
    `Name : ${firstName + lastName}
     Marital status: ${maritalStatus}
     Country : ${country}
     Age : ${age}`
);
```
Output:
```
     Name : GKRao
     Marital status: unmarried
     Country : India
     Age : 28
```

#

3. Decalre a varibale and assign value to it and change all the string characters to capital letters using toUpperCase() method.

* Answer:
```
let letter = "abcdefg-ABCD-123456!@#$";
let result = letter.toUpperCase();
console.log(result);
```
Output:
```
ABCDEFG-ABCD-123456!@#$

```
#

4. Check if the string contains a word Script using includes() method.
 * Answer:
```
let a = "Java Script is a language of web."

console.log(a.includes("Script"));

```
Output:
```
true
```

#

5. Split the string into an array using split() method

```
let a = "Java Script is a language of web."


let d = a.split()
console.log(d);


// out put is

[ 'Java Script is a language of web.' ]




let b = a.split('');
console.log(b);


// output is 
[
    'J', 'a', 'v', 'a', ' ', 'S',
    'c', 'r', 'i', 'p', 't', ' ',
    'i', 's', ' ', 'a', ' ', 'l',
    'a', 'n', 'g', 'u', 'a', 'g',
    'e', ' ', 'o', 'f', ' ', 'w',
    'e', 'b', '.'
  ]
  


let c = a.split('  ');
console.log(c);

// out put is 
[ 'Java', 'Script', 'is', 'a', 'language', 'of', 'web.' ]
```
#

6. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
* Answer:
```
let a = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

let array = a.split(', ');

console.log(array);

```
Output:
```
["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

```
#
7. Use lastIndexOf to determine the position of the last occurrence of a script.
 * Answer:
 ```
 let string = `It was that terrifying feeling you have as you tightly hold the covers over you with the knowledge that there is something hiding under your bed. You want to look, but you don't at the same time. You're frozen with fear and unable to act. That's where she found herself and she didn't know what to do next`;

let lastindex = "she";

console.log(`The last index of the word ${lastindex} is ${string.lastIndexOf(lastindex)}
`);
 ```
 Output:
 ```
 The last index of the word she is 274
 ```
#

8. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.
* Answer:
```
let a = "You cannot end a sentence with because because because is a conjunction";

console.log(a.search("because"));
```
* Output
```
31
```
#
9. Use trim() to remove any trailing whitespace at the beginning and the end of a string.
* Answer:
```
let st = '      The quick brown fox jumps over the lazy dog.           ';
console.log(st.trim());
```
* Output
```
The quick brown fox jumps over the lazy dog.
```
#

10. Boolean value is either true or false.
     - Write three JavaScript statement which provide truthy value.
* Answer:

```
* truthy values
let a=1; 
console.log(Boolean(a))  //true

let b="a"; 
console.log(Boolean(b))  //true

let c=true;
console.log(Boolean(c))  //true
```
 *  Write three JavaScript statement which provide falsy value.



* Answer:
```
falsy vlues

let e= 0;
console.log(Boolean(e))  // false

let f="";
console.log(Boolean(f))  // false

let g=false 
console.log(Boolean(g))  // false
```

#
11. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
    - 4 > 3
    * Output:

    ```
    console.log(4 > 3);  // true
    ```

    - 4 >= 3
    * Output:
    ```
    console.log(4 >= 3); // true
    ```
    - 4 < 3
    * Output:
    ```
    console.log(4 < 3)  // false
    ```
    - 4 <= 3
    ```
     console.log(4 <= 3)  // false
    ```
    - 4 == 4
    * Output:
    ```
     console.log(4 == 4)  // true
    ```
    - 4 === 4
    * Output:
    ```
     console.log(4 === 4)  // true
    ```
    - 4 != 4
    * Output:
    ```
     console.log(4 != 4)  // false
    ```
    - 4 !== 4
    * Output:
    ```
     console.log(4 !== 4)  // false
    ```
    - 4 != '4'
    * Output:
    ```
     console.log(4 != '4')  // false
    ```
    - 4 == '4'
    * Output:
    ```
     console.log(4 == '4')  // true
    ```
    - 4 === '4'
    * Output:
    ```
     console.log(4 === '4')  // false
    ```

- Find the length of python and jargon and make a falsy comparison statement.
* Answer:
```
let python = "python";
let jargon = "jargon";

console.log(`Length of ${python} is ${python.length}`);

// Length of python is 6

console.log(`Length of ${jargon} is ${jargon.length}`);

// Length of jargon is 6

console.log(python[0]==jargon[0]);  //false
```

#
12. Use the Date object to do the following activities

    - What is the year today?

        * Answer:
    ```
    console.log(new Date().getFullYear());
    ```



    - What is the month today as a number?
        * Answer:
    ```
    console.log(new Date().getMonth()+1);
    ```


    - What is the date today?
        * Answer:
    ```
    console.log(new Date().getDate());
    ```
    - What is the day today as a number?
        * Answer:
    ```
    console.log(new Date().getDay());
    ```
    - What is the hours now?
        * Answer:
    ```
    console.log(new Date().getHours());
    ```
    - What is the minutes now?
        * Answer:
    ```
    console.log(new Date().getMinutes());
    ```
    - Find out the numbers of seconds elapsed from January 1, 1970 to now.

* Answer:
```
let currentTimestamp = Date.now() / 1000;

let startTimestamp = new Date('January 1, 1970').getTime() / 1000;

let secondsElapsed = Math.floor(currentTimestamp - startTimestamp);
    
console.log(secondsElapsed);
```

#
13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
* Answer:
```
function area(b, h) {
    console.log(`The area of the triangle is ${0.5*b*h} sqUnits`);
};


area(1,5)
  //  The area of the triangle is 2.5 sqUnits

```

#
14. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
* Answer:
```
const slope = (x1,x2,y1,y2)=>{
    let slopeOfTheLine = ((y2-y1)/(x2-x1));
    
    console.log(slopeOfTheLine);
};


slope(2,6,2,10);  //Output 2
```

#
15. Calculate the slope, x-intercept and y-intercept of y = 2x -2
* Answer:
```
let slope = 2;
let yIntercept = -2;

// Calculate x-intercept by setting y = 0
let xIntercept = -yIntercept / slope;

console.log('Slope:', slope);
console.log('Y-intercept:', yIntercept);
console.log('X-intercept:', xIntercept);

```
* Output
```
Slope: 2
Y-intercept: -2
X-intercept: 1

```
#
16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
* Answer:
```
const calculate = (r)=>{
    const area=(Math.PI*r*r);

    const circumference=(2*Math.PI*r)

    console.log(`Area of Circle is ${area.toFixed(2)} units`);

    console.log(`Circumference of Circle is ${circumference.toFixed(2)} units`);
}



calculate(2)

// Area of Circle is 12.57 units
// Circumference of Circle is 12.57 units
```

#
17. Create a human readable time format using the Date time object

- YYYY-MM-DD HH:mm

    * Answer:
    ```
    let currentDate = new Date();

    let day = String(currentDate.getDate()).padStart(2, '0');
    let month = String(currentDate.getMonth() + 1).padStart(2, '0');
    let year = currentDate.getFullYear();
    let hours = String(currentDate.getHours()).padStart(2, '0');
    let minutes = String(currentDate.getMinutes()).padStart(2, '0');

    let formattedDate = year + '-' + month + '-' + day  + ' ' + hours + ':' + minutes;

    console.log(formattedDate);
    ```
    * Output
    ```
    2022-09-10 10:46
    ```
    - DD-MM-YYYY HH:mm
    * Answer:
    ```
    let currentDate = new Date();

    let day = String(currentDate.getDate()).padStart(2, '0');
    let month = String(currentDate.getMonth() + 1).padStart(2, '0');
    let year = currentDate.getFullYear();
    let hours = String(currentDate.getHours()).padStart(2, '0');
    let minutes = String(currentDate.getMinutes()).padStart(2, '0');

    let formattedDate = day + '-' + month + '-' + year + ' ' + hours + ':' + minutes;

    console.log(formattedDate);
    ```
    * Output:
    ```
    10-09-2022 10:50
    ```
    - DD/MM/YYYY HH:mm
    * Answer:
    ```
    let currentDate = new Date();
    let day = String(currentDate.getDate()).padStart(2, '0');
    let month = String(currentDate.getMonth() + 1).padStart(2, '0');
    let year = currentDate.getFullYear();
    let hours = String(currentDate.getHours()).padStart(2, '0');
    let minutes = String(currentDate.getMinutes()).padStart(2, '0');

    let formattedDate = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes;

    console.log(formattedDate);

    ```
    * Output:
    ```
    10/9/2022 11:04
    ```
#
18. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

* Answer:
```
let age = prompt("Enter you age:");

if (age >=18) {
 alert("You are old enough to drive");
// console.log("You are old enough to drive");
}
else{
    alert(`Please waite for ${18-age} more years so that you can turn 18` )
}

```

#
19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

* Answer:
```
let number = 4;

if (number %2 == 0 ) { 
    console.log("The number is even");
}

 else if (number %2 ==1){
    console.log("The number is odd");
}
else {
    console.log("Either it is a fraction or oter data type");
}
```
* Output
``` 
The number is even
```
#
20. Write a code which can give grades to students according to theirs scores:
    - 80-100, A
    - 70-89, B
    - 60-69, C
    - 50-59, D
    - 0-49, F

* Answer:
```
let marks = 80;
let grade;

if (marks>=80 && marks<=100){
     grade= "A"
}
else if(marks>=70 && marks<=79){
    grade= "B"
}
else if(marks>=60 && marks<=69){
     grade= "C"
}
else if(marks>=50 && marks<=59){
     grade= "D"
}
else if (marks>=0 && marks<=49){
     grade= "F"
}
else{
     grade = "Invalied "
}
console.log(`The grade is ${grade} `);   
```
* Output
``` 
The grade is A
```
#
21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer

* Answer:
```
let month = "May";
let season;
if (month == "September" || month =="October" || month =="November"){
        season = "Autumn";
    }
    else if (month == "December" || month =="January" || month =="February"){
        season = "Winter";
    }
    else if (month == "March" || month =="April" || month =="May"){
        season = "Spring";
    }
    else{
        season="Summer";
    };
    console.log(`It is  ${season} `);

```
* Output
```
It is  Spring 
```
#
22. Write a program which tells the number of days in a month.
* Answer:
```
let mont = 10;
let noOfdays
if (mont == 1 || mont ==3 || mont ==5 || mont == 7 || mont ==10 || mont ==12 ){
    noOfdays = 31;
}
else if (mont == 2){
    noOfdays = 28;

}
else {
    noOfdays = 30;
};
console.log(`Number of days in the given month is ${noOfdays}`);
```
* Output
```
Number of days in the given month is 31
```
#
23. Write a program which tells the number of days in a month, now consider leap year.
* Answer:
```
let mont = 02;
let noOfdays
if (mont == 1 || mont ==3 || mont ==5 || mont == 7 || mont ==10 || mont ==12 ){
    noOfdays = 31;
}
else if (mont == 2){
    noOfdays = 29;

}
else {
    noOfdays = 30;
};

 console.log(`Number of days in the given month is ${noOfdays}`);
```
* Output
```
Number of days in the given month is 29
```
#
24. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file



* Answer:
    * File webtech.js
    ```
    let webTech = ["Java",  "C", "C++", "Python"]

    module.exports = webTech;
    ```

    * File countries.js
    ```
    let countries = ["India", "Americka", "Australia", "Canada", "Japan", "Nepal", "Burkinaphaso"]

    module.exports = countries;
    ```

    * File variable.js
    ```
    const countries = require('./countries');

    const webTech = require('./webtech');

    console.log(countries); // Access the countries array
    console.log(webTech);  // Access the webTechs array

    ```

#
25. In the following shopping cart add, remove, edit items

```
  const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
```

- add 'Meat' in the beginning of your shopping cart if it has not been already added
* Answer:
```
if(shoppingCart.includes("Meat")){
    console.log(shoppingCart);
}
else{
    shoppingCart.unshift("Meat");
    console.log(shoppingCart);
}
```
* Output
```
[ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey' ]
```

 - add Sugar at the end of you shopping cart if it has not been already added
 * Answer:
```
if(shoppingCart.includes("Sugar")){
    console.log(shoppingCart);
}
else{
    shoppingCart.push("Sugar");
    console.log(shoppingCart);
}
```
* Output
```
[ 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar' ]
```

- remove 'Honey' if you are allergic to honey

* Answer:
```
const allergicToHoney = 'yes';

if(allergicToHoney=='yes'){

   const index = shoppingCart.indexOf('Honey');

   shoppingCart.splice(index, 1);
}
    console.log(shoppingCart);
```
* Output
```
[ 'Milk', 'Sugar', 'Coffee', 'Tea' ]
```

 - modify Tea to 'Green Tea'
* Answer:
```
shoppingCart[shoppingCart.indexOf('Tea')]='Green Tea';
console.log(shoppingCart);
```
* Output
```
[ 'Milk', 'Sugar', 'Coffee', 'Green Tea', 'Honey' ]
```

#
26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

* Answer:
```
const countries = require('./countries');


function countyCheck(a){
    if(contries.includes(a)){
        console.log(`${a.toUpperCase()} exists in the arrey`);
    }
    else{
        contries.push(a);
    };
   
    console.log(a.toUpperCase());
};

countyCheck("Ethiopia");
```
#
27. The following is an array of 10 students ages:

    ```
     const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    ```
    - Sort the array and find the min and max age

        * Answer:
        ```
        ages.sort(function(a, b) {
        return a - b;
        });

        const minAge = ages[0];
        const maxAge = ages[ages.length - 1];

        console.log('Sorted Ages:', ages);
        console.log('Minimum Age:', minAge);
        console.log('Maximum Age:', maxAge);
        ```
        * Output
        ```
        Sorted Ages: [19, 19, 20, 22, 24, 24, 24, 25, 25, 26]
        Minimum Age: 19
        Maximum Age: 26
        ```


    - Find the median age(one middle item or two middle items divided by two)

        * Answer:
        ```
        const median = (e) => {
        e.sort((a, b) => a - b); // Sorting the array in ascending order
  
        if (e.length % 2 === 0) {
        // For even-length arrays, average the two middle values
        const middleIndex = e.length / 2;
        return (e[middleIndex - 1] + e[middleIndex]) / 2;
        } else {
        // For odd-length arrays, return the middle value
        const middleIndex = Math.floor(e.length / 2);
        return e[middleIndex];
        }
        };
  
        console.log(median(ages));

        ```
        * Output
        ```
        24
        ```
    - Find the average age(all items divided by number of items)
        * Answer:
        ```
        const averageAge = (e)=>{
        let sum=0
         for(i=0; i<e.length; i++ ){
        sum+= e[i]
        }
        return (sum/e.length)
        }

        console.log(averageAge(ages));
        ```
        * Output
        ```
        22.8
        ```

    
    - Find the range of the ages(max minus min)

        * Answer:
        ```
         const rangeOfAges = (e)=>{e.sort((a, b) => a - b)
        return (e[e.length-1]-e[0])
        }
        console.log(rangeOfAges(ages));
        ```
        * Output
        ```
        7
        ```

    - Compare the value of (min- average) and (max - average), use abs() method
        * Answer:
        ```
        const compare = (e)=>{
        e.sort((a, b) => a - b)
        const minValue = e[0]
        const maxValue = e[e.length-1]

        const averageAge = (e)=>{
            let sum=0
            for(i=0; i<e.length; i++ ){
                sum+= e[i]
            }
            return (sum/e.length)
        }

        const averageValue = averageAge(e)
   
        return (`(min - average) is ${Math.abs(minValue-averageValue).toFixed(2)} (max - average) is ${Math.abs(maxValue-averageValue).toFixed(2)}`);
        }

        console.log(compare (ages));
        ```
        * Output
        ```
        (min - average) is 3.80 
        (max - average) is 3.20
        ```
#
28. Use for loop to iterate from 0 to 100 and print only prime numbers
* Answer:
```
const pirntPrime = (number)=>{
    // looping from 0 to higherNumber
for (let i = 0; i <= number; i++) {
    let flag = false;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = true;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == false) {
        console.log(i);
    }
}
}
pirntPrime(100);
```
* Output
```
2
3 
5 
7 
11
13
17
19
23
29
31
37
41
43
53
59
61
67
71
73
79
83
89
97
```
#
29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
* Answer:
```
function sumOfNum(a){
    let sumOdd=0;
    let sumEven=0;
    for (let i=0; i<=a; i++){
    if(i%2==0){
     sumEven +=  i
    }
    else{
        sumOdd +=  i
    }
}
console.log( `Sum of Even ${sumEven}`)
console.log(`Sum of Odd ${sumOdd}`);
}


 sumOfNum(100)
```
* Output
```
Sum of Even 2550
Sum of Odd 2500
```
#
30. Write a script which generates a random hexadecimal number.
* Answer:
```

function hexadecimal(){
    let h = "0123456789ABCDEFGH";
    let con = "#";
    for (let i=0; i<6; i++){
    con = con + h[Math.floor(Math.random()*16)]
    };
    return con
};

console.log(hexadecimal()); 
```
* Output
```
#F74C33
```
#
32. Array Questions

    - Extract all the countries contain the word 'land' from the countries array and print it as array

    * Answer:
    ```
    let a =[];
    for (let i=0; i<countryList.length; i++){
        if ( countryList[i].includes("land")) {
        a.push(countryList[i])   
    }
    }
    console.log(a);
    ```
    - Find the country containing the hightest number of characters in the countries array
    * Answer:
    ```
    let longestName =""

    for (let i=0; i<countryList.length; i++){
        if(longestName.length<=countryList[i].length){
        longestName=countryList[i]
    }
    }
    console.log(longestName);
    ```
  
   
    - Extract all the countries containing only four characters from the countries array and print it as array
    * Answer:
    ```
    let a =[]
    for (let i=0; i<countryList.length; i++){
        if ( countryList[i].    length==4) {
        a.push(countryList[i])   
        }
    }
    console.log(a);
    ```
    - Extract all the countries containing two or more words from the countries array and print it as array
    * Answer:
    ```
    let a =[]

    for (let i=0; i<countryList.length; i++){
   
        if ( countryList[i].includes(" ")) {
         a.push(countryList[i])   
        }
    }
    console.log(a);
    ```
    - Reverse the countries array and capitalize each country and stored it as an array
    * Answer:
    ```
    let a=[];
    for(let i=0; i<countryList.length; i++){
        a.push(countryList[i].toUpperCase())
    }
    console.log(a.reverse());
    ```

   

#
33. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

 - The same groups apply to both men and women.
 - Underweight: BMI is less than 18.5
- Normal weight: BMI is 18.5 to 24.9
- Overweight: BMI is 25 to 29.9
- Obese: BMI is 30 or more


* Answer:
```
// w = weight in kg
// h= height in m
const bmiCalculate =(w,h)=>{
    let bmi;
    bmi= (w/(h*h)).toFixed(2);
    
    if(bmi<=18.5){
        return `Your BMI is ${bmi} and your are Underweight`
    }
    else if(bmi>18.5 && bmi<=24.9){
        return `Your BMI is ${bmi} and your are Normal weight`
    }
    else if(bmi>25 && bmi<=29.9){
        return `Your BMI is ${bmi} and your are Overweight`
    }
    else if(bmi>30 ){
        return `Your BMI is ${bmi} and your are Obase`
    }
    
}
console.log(bmiCalculate(78,1.78));
```
* Output
```
Your BMI is 24.62 and your are Normal weight
```
#

34. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

* Answer:
```
```
* Output
```
```
#
35. Write a functions which checks if all items are unique in the array.

* Answer:
```
let array = [1,2,3,4,5,6,5,6,8,8,9,7,"a",'b', "c", "a", "b", "c"];

 let newArray = new Set(array);

 if(newArray.length===array.length){
    console.log(`All items are array are unique`); 
 }else{
    console.log('Some items in array are repeted'); 
 }
```
* Output
```
Some items in array are repeted
```