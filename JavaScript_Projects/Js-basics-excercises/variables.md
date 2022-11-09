# JavaScript Questions
1.  Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with there type.

```
let variables = ["string", true, 1, , ""];
console.log(
    `${variables[0]} - is a ${typeof variables[0]}
    ${variables[1]} - is a ${typeof variables[1]}
    ${variables[2]} - is a ${typeof variables[2]}
    ${variables[3]} - is a ${typeof variables[3]}
    ${variables[4]} - is a ${typeof variables[4]}
   `   
);

```
#

2. Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.

```
let firstName = "GK"; lastName = "Rao";
let maritalStatus = "unmarried", country = "India", age = 28;

console.log(
    `Name : ${firstName+lastName}
     Marital status: ${maritalStatus}
     Country : ${country}
     Age : ${age}`
);
```
can also be written as

```

var personlDetails ={
    firstName: "GK",
    lastName :"Rao",
    maritalStatus : "unmarried",
    country : "India", 
    age : 28
};
console.log(personlDetails.firstName);
console.log(personlDetails);
console.table(personlDetails);
```
#

3. Decalre a varibale and assign value to it and change all the string characters to capital letters using toUpperCase() method.
```
let letter = "abcdefg-ABCD-123456!@#$";
console.log(letter.toLowerCase());
let result = letter.toUpperCase();
console.log(result);
```
result:
```
abcdefg-abcd-123456!@#$
ABCDEFG-ABCD-123456!@#$
string
```
#

4. Check if the string contains a word Script using includes() method.

```
let a = "Java Script is a language of web."

console.log(a.includes("Script"));
console.log(a.includes("script"));
```
result:
```
true
false
```

#

5. Split the string into an array using split() method

```
let a = "Java Script is a language of web."


let d = a.split()
console.log(d);
console.log(d[0]);
// no  sinverted coma convert whole string single arrey with one sting

// out put is

[ 'Java Script is a language of web.' ]
Java Script is a language of web.



let b = a.split('');
// no space conver each letter into string
console.log(b);
console.log(b[5]);

// output is 
[
    'J', 'a', 'v', 'a', ' ', 'S',
    'c', 'r', 'i', 'p', 't', ' ',
    'i', 's', ' ', 'a', ' ', 'l',
    'a', 'n', 'g', 'u', 'a', 'g',
    'e', ' ', 'o', 'f', ' ', 'w',
    'e', 'b', '.'
  ]
  S


let c = a.split('  ');
// single space convert each word into string more than 2 space give error undefined
console.log(c);
console.log(c[5]);


// out put is 
[ 'Java', 'Script', 'is', 'a', 'language', 'of', 'web.' ]
of
```
#

26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
```
var contries = ["India", "Americka", "Australia", "Caneda", "Japan", "Nepal", "Burkinaphaso"]

function countyCheck(a){
    if(contries.includes(a)){
        console.log(`${a.toUpperCase()} exists in the arrey`);
    }
    else{
        contries.push(a);
        console.log(`${a.toUpperCase()} has been added to the arrey`);
    };
    console.log(a.toUpperCase());
};

countyCheck("Ethiopia");
```
#