// Homework
//1
// let variables = ["string", true, 1, , ""];
// console.log(
//     `${variables[0]} - is a ${typeof variables[0]}
//     ${variables[1]} - is a ${typeof variables[1]}
//     ${variables[2]} - is a ${typeof variables[2]}
//     ${variables[3]} - is a ${typeof variables[3]}
    // ${variables[4]} - is a ${typeof variables[4]}
//    `   
// );

//2

// let firstName = "GK"; lastName = "Rao";
// let maritalStatus = "unmarried", country = "India", age = 28;

// console.log(
//     `Name : ${firstName+lastName}
//      Marital status: ${maritalStatus}
//      Country : ${country}
//      Age : ${age}`
// );

// can also be written as

// var personlDetails ={
//     firstName: "GK",
//     lastName :"Rao",
//     maritalStatus : "unmarried",
//     country : "India", 
//     age : 28
// };
// console.log(personlDetails.firstName);
// console.log(personlDetails);
// console.table(personlDetails);

// 3. Decalre a varibale and assign value to it and change all the string characters to capital letters using toUpperCase() method.

// let letter = "abcdefg-ABCD-123456!@#$";
// console.log(letter.toLowerCase());
// let result = letter.toUpperCase();
// console.log(result);

// 4. Check if the string contains a word Script using includes() method.

// let a = "Java Script is a language of web."

// console.log(a.includes("Script"));
// console.log(a.includes("script"));

// 5. Split the string into an array using split() method

// let a = "Java Script is a language of web."

// let b = a.split('');
// console.log(b);
// console.log(b[5]);

// let d = a.split()
// console.log(d);
// console.log(d[0]);

// 6. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

// let a = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

// console.log(a.split(' '))


// 7. Use lastIndexOf to determine the position of the last occurrence of a script.

// let st = 'The quick brown fox jumps over the lazy dog diddjflkaj dog.';

// let lastindex = "dog";

// console.log(`
// The last index of the word ${lastindex} in ${st.lastIndexOf(lastindex)}
// `);
// console.log(st.indexOf("dog"))

// 8. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.

// let a = "You cannot end a sentence with because because because is a conjunction";
// console.log(a.search("because"));
// console.log(a.indexOf("because"));
// console.log(a.lastIndexOf("because"));


// 9. Use trim() to remove any trailing whitespace at the beginning and the end of a string.

// let st = '      "The quick brown fox jumps over the lazy dog diddjflkaj dog .       "    ';
// console.log(st);
// console.log(st.trimStart());
// console.log(st.trim());

// 10. Boolean value is either true or false.
    // - Write three JavaScript statement which provide truthy value.
    // - Write three JavaScript statement which provide falsy value.

// truthy values
// let a=1, b="a", c="0", d=true;
// falsy vlues
// let e= 0, f="", g=false 


// 1. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//     - 4 > 3
// let a = 4 > 3
//     - 4 >= 3
// var a=  4 >= 3
// console.log(a);
//     - 4 < 3
    // var a= 4 <= 3
    // console.log(a);
    // var a= 4 == 4
    // console.log(a);
    // var a= 4 === 4
    // console.log(a);
    // var a= 4 != 4
    // console.log(a);
    // var a= 4 !== 4
    // console.log(a);
    // var a= 4 != '4'
    // console.log(a);
    // var a= 4 == '4'
    // console.log(a);
    // var a= 4 === '4'
    // console.log(a);
//     - Find the length of python and jargon and make a falsy comparison statement.
// console.log(a);

// 12. Use the Date object to do the following activities
    // - What is the year today?
    // - What is the month today as a number?
    // - What is the date today?
    // - What is the day today as a number?
    // - What is the hours now?
    // - What is the minutes now?
    // - Find out the numbers of seconds elapsed from January 1, 1970 to now.

// let now = new Date();
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getFullYear());
// console.log(now.getHours());
// console.log(now.getTime());
// console.log(now.getTimezoneOffset());
// console.log(now);
// console.log(now.toString());

// 13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// function area(a, b) {
//     let areaOfTheTriangle = 0.5 * a * b;
//     console.log(`the area of the triangle with height ${b} and base ${a} is ${areaOfTheTriangle} sqUnits`);
// };
// area(1,1)

// 14. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

// function slope(x1,x2,y1,y2){
//     let slopeOfTheLine = (y2-y1)/(x2-x1);
//     console.log(slopeOfTheLine);
// };
// slope(2,6,2,10);

// 17. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

// let d = new Date();
// let dateInFormat = [
//     d.getFullYear(), d.getMonth() + 1, d.getDate()
// ].join("-") + " " + 
// [d.getHours(), d.getMinutes()].join(":");
// console.log(dateInFormat);


// 18. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
// let age = prompt("Enter you age:");

// if (age >=18) {
//   alert("You are old enough to drive");
// }
// else{
//     let watitingPeriod = 18-age;
//     alert(`Please waite for ${watitingPeriod} more years so that you can turn 18` )
// }

// 19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

// let numbe = 6.023;
// let result = (number %2 == 0) ? "even" : "odd";
// console.log(`The number is ${result}`);

// if (numbe %2 == 0 ) { 
//     console.log("The number is even");
// }

//  else if (numbe %2 ==1){
//     console.log("The number is odd");
// }
// else {
//     console.log("Either it is a fraction or oter data type");
// }

// 20. Write a code which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

// let marks = 81;
// if (marks>=80 && marks<=100){
//     var grade= "A"
// }
// else if(marks>=70 && marks<=79){
//     var grade= "B"
// }
// else if(marks>=60 && marks<=69){
//     var grade= "C"
// }
// else if(marks>=50 && marks<=59){
//     var grade= "D"
// }
// else if (marks==0 && marks<=49){
//     var grade= "F"
// }
// else{
//     var grade = "something went wrong"
// }
// console.log(`The grade is ${grade} `);  

// var mont = 10;
// if (mont == 1 || mont ==3 || mont ==5 || mont == 7 || mont ==10 || mont ==12 ){
//    var noOfdays = 31;
// }
// else if (mont == 2){
//    var noOfdays = 28;

// }
// else {
//    var noOfdays = 30;
// };
// console.log(`Number of days in the given month is ${noOfdays}`);

// 25. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of you shopping cart if it has not been already added
//     - remove 'Honey' if you are allergic to honey
//     - modify Tea to 'Green Tea'

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// shoppingCart.unshift("Meat");
// shoppingCart.push("sugar")
// shoppingCart.splice(4,1);
// shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea"
// console.log(shoppingCart);

// 26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

// var contries = ["India", "Americka", "Australia", "Caneda", "Japan", "Nepal", "Burkinaphaso"]

// function countyCheck(a){
//     if(contries.includes(a)){
//         console.log(`${a.toUpperCase()} exists in the arrey`);
//     }
//     else{
//         contries.push(a);
//         console.log(`${a.toUpperCase()} has been added to the arrey`);
//     };
//     console.log(a.toUpperCase());
// };

// countyCheck("Ethiopia");

// 27. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method





// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// average age
// function aveAge(a){
    
//     let sum=0;
//     for (let num of a){
//         sum +=num
//     }
//     return Math.floor(sum/a.length) 
// }

// let minAge = Math.min(...ages);
// let maxAge = Math.max(...ages);
// console.log(minAge);
// console.log(maxAge);
// console.log(aveAge(ages));
// console.log(`min max fundtin ${minMax(ages)}`);
// console.log(Math.abs(minAge));






// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// 
// function maxMinusMin(a){
//     return(Math.max(a)-Math.min(a))
// }
// console.log(maxMinusMin(ages));










// console.log(Math.max(...ages)-Math.min(...ages))
// Mean
//  function mean(a){
//     let sum = 0;
//     for (let num of a){
//         sum +=num
//     }
//     return Math.floor(sum/a.length);
// }
// console.log(`mean is ${mean(ages)}`);

// Median
// function median(a){
    // sording the arrey in accending order
    // a=a.sort((c,d) => c-d);
    // chech the lengh for odd or even 
    // for odd
//     if (a.length %2==1){
//         return a[Math.floor(a.length/2)]
//     }
//     // for even
//     else{
//         let mid1 = a[a.length/2];
//         let mid2 = a[a.length/2-1];
//         return ((mid1 + mid2)/2);
//     }
// }
// console.log(median(ages))
// Mean
// function mean(a){
//     let sum = 0;
//     for (let num of a){
//         sum +=num
//     }
//     return Math.round(sum/ages.length)
// }
// console.log(mean(ages));
// let maxAge = Math.max(...ages);
// let minAge =Math.min(...ages);



// for (let n=1 ; n<=10; n++){
//     if (n%n===1 && n%2==1){
//        console.log(n + " is a prime");
//     }
//     else{
//         console.log(n + " is not a prime");
//     }
// }

// 24. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
// const webTech = require("./webtech")
// let contries = require("./countries")
// console.log(webTech);

// console.log(contries);

// contries.push("australia")
// console.log(contries);

// 28. Use for loop to iterate from 0 to 100 and print only prime numbers
// let primeNumberList =[];
// console.log(a);
// 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

// function sumofNum(a){
//     let sumOdd=0;
//     let sumEven=0;
//     for (let i=0; i<=a; i++){

     
//     if(i%2==0){
//      sumEven = sumEven + i
//     }
//     else{
//         sumOdd = sumOdd + i
//     }
   
// }
// console.log( `Sum of Even ${sumEven} and sum of Odd ${sumOdd} upt to num ${a}`);
// }
// sumofNum(100)

// 30. Write a script which generates a random hexadecimal number.


// function hexadecimal(){
//     let h = "0123456789abcdefgh";
//     let con = "#";
//     for (let i=0; i<6; i++){
//     con = con + h[Math.floor(Math.random()*16)]
//     };
//     return con
// };

// console.log(hexadecimal()); 

// const countryList = [
// 	"Afghanistan",
// 	"Albania",
// 	"Algeria",
// 	"American Samoa",
// 	"Andorra",
// 	"Angola",
// 	"Anguilla",
// 	"Antarctica",
// 	"Antigua and Barbuda",
// 	"Argentina",
// 	"Armenia",
// 	"Aruba",
// 	"Australia",
// 	"Austria",
// 	"Azerbaijan",
// 	"Bahamas (the)",
// 	"Bahrain",
// 	"Bangladesh",
// 	"Barbados",
// 	"Belarus",
// 	"Belgium",
// 	"Belize",
// 	"Benin",
// 	"Bermuda",
// 	"Bhutan",
// 	"Bolivia (Plurinational State of)",
// 	"Bonaire, Sint Eustatius and Saba",
// 	"Bosnia and Herzegovina",
// 	"Botswana",
// 	"Bouvet Island",
// 	"Brazil",
// 	"British Indian Ocean Territory (the)",
// 	"Brunei Darussalam",
// 	"Bulgaria",
// 	"Burkina Faso",
// 	"Burundi",
// 	"Cabo Verde",
// 	"Cambodia",
// 	"Cameroon",
// 	"Canada",
// 	"Cayman Islands (the)",
// 	"Central African Republic (the)",
// 	"Chad",
// 	"Chile",
// 	"China",
// 	"Christmas Island",
// 	"Cocos (Keeling) Islands (the)",
// 	"Colombia",
// 	"Comoros (the)",
// 	"Congo (the Democratic Republic of the)",
// 	"Congo (the)",
// 	"Cook Islands (the)",
// 	"Costa Rica",
// 	"Croatia",
// 	"Cuba",
// 	"Curaçao",
// 	"Cyprus",
// 	"Czechia",
// 	"Côte d'Ivoire",
// 	"Denmark",
// 	"Djibouti",
// 	"Dominica",
// 	"Dominican Republic (the)",
// 	"Ecuador",
// 	"Egypt",
// 	"El Salvador",
// 	"Equatorial Guinea",
// 	"Eritrea",
// 	"Estonia",
// 	"Eswatini",
// 	"Ethiopia",
// 	"Falkland Islands (the) [Malvinas]",
// 	"Faroe Islands (the)",
// 	"Fiji",
// 	"Finland",
// 	"France",
// 	"French Guiana",
// 	"French Polynesia",
// 	"French Southern Territories (the)",
// 	"Gabon",
// 	"Gambia (the)",
// 	"Georgia",
// 	"Germany",
// 	"Ghana",
// 	"Gibraltar",
// 	"Greece",
// 	"Greenland",
// 	"Grenada",
// 	"Guadeloupe",
// 	"Guam",
// 	"Guatemala",
// 	"Guernsey",
// 	"Guinea",
// 	"Guinea-Bissau",
// 	"Guyana",
// 	"Haiti",
// 	"Heard Island and McDonald Islands",
// 	"Holy See (the)",
// 	"Honduras",
// 	"Hong Kong",
// 	"Hungary",
// 	"Iceland",
// 	"India",
// 	"Indonesia",
// 	"Iran (Islamic Republic of)",
// 	"Iraq",
// 	"Ireland",
// 	"Isle of Man",
// 	"Israel",
// 	"Italy",
// 	"Jamaica",
// 	"Japan",
// 	"Jersey",
// 	"Jordan",
// 	"Kazakhstan",
// 	"Kenya",
// 	"Kiribati",
// 	"Korea (the Democratic People's Republic of)",
// 	"Korea (the Republic of)",
// 	"Kuwait",
// 	"Kyrgyzstan",
// 	"Lao People's Democratic Republic (the)",
// 	"Latvia",
// 	"Lebanon",
// 	"Lesotho",
// 	"Liberia",
// 	"Libya",
// 	"Liechtenstein",
// 	"Lithuania",
// 	"Luxembourg",
// 	"Macao",
// 	"Madagascar",
// 	"Malawi",
// 	"Malaysia",
// 	"Maldives",
// 	"Mali",
// 	"Malta",
// 	"Marshall Islands (the)",
// 	"Martinique",
// 	"Mauritania",
// 	"Mauritius",
// 	"Mayotte",
// 	"Mexico",
// 	"Micronesia (Federated States of)",
// 	"Moldova (the Republic of)",
// 	"Monaco",
// 	"Mongolia",
// 	"Montenegro",
// 	"Montserrat",
// 	"Morocco",
// 	"Mozambique",
// 	"Myanmar",
// 	"Namibia",
// 	"Nauru",
// 	"Nepal",
// 	"Netherlands (the)",
// 	"New Caledonia",
// 	"New Zealand",
// 	"Nicaragua",
// 	"Niger (the)",
// 	"Nigeria",
// 	"Niue",
// 	"Norfolk Island",
// 	"Northern Mariana Islands (the)",
// 	"Norway",
// 	"Oman",
// 	"Pakistan",
// 	"Palau",
// 	"Palestine, State of",
// 	"Panama",
// 	"Papua New Guinea",
// 	"Paraguay",
// 	"Peru",
// 	"Philippines (the)",
// 	"Pitcairn",
// 	"Poland",
// 	"Portugal",
// 	"Puerto Rico",
// 	"Qatar",
// 	"Republic of North Macedonia",
// 	"Romania",
// 	"Russian Federation (the)",
// 	"Rwanda",
// 	"Réunion",
// 	"Saint Barthélemy",
// 	"Saint Helena, Ascension and Tristan da Cunha",
// 	"Saint Kitts and Nevis",
// 	"Saint Lucia",
// 	"Saint Martin (French part)",
// 	"Saint Pierre and Miquelon",
// 	"Saint Vincent and the Grenadines",
// 	"Samoa",
// 	"San Marino",
// 	"Sao Tome and Principe",
// 	"Saudi Arabia",
// 	"Senegal",
// 	"Serbia",
// 	"Seychelles",
// 	"Sierra Leone",
// 	"Singapore",
// 	"Sint Maarten (Dutch part)",
// 	"Slovakia",
// 	"Slovenia",
// 	"Solomon Islands",
// 	"Somalia",
// 	"South Africa",
// 	"South Georgia and the South Sandwich Islands",
// 	"South Sudan",
// 	"Spain",
// 	"Sri Lanka",
// 	"Sudan (the)",
// 	"Suriname",
// 	"Svalbard and Jan Mayen",
// 	"Sweden",
// 	"Switzerland",
// 	"Syrian Arab Republic",
// 	"Taiwan",
// 	"Tajikistan",
// 	"Tanzania, United Republic of",
// 	"Thailand",
// 	"Timor-Leste",
// 	"Togo",
// 	"Tokelau",
// 	"Tonga",
// 	"Trinidad and Tobago",
// 	"Tunisia",
// 	"Turkey",
// 	"Turkmenistan",
// 	"Turks and Caicos Islands (the)",
// 	"Tuvalu",
// 	"Uganda",
// 	"Ukraine",
// 	"United Arab Emirates (the)",
// 	"United Kingdom of Great Britain and Northern Ireland (the)",
// 	"United States Minor Outlying Islands (the)",
// 	"United States of America (the)",
// 	"Uruguay",
// 	"Uzbekistan",
// 	"Vanuatu",
// 	"Venezuela (Bolivarian Republic of)",
// 	"Viet Nam",
// 	"Virgin Islands (British)",
// 	"Virgin Islands (U.S.)",
// 	"Wallis and Futuna",
// 	"Western Sahara",
// 	"Yemen",
// 	"Zambia",
// 	"Zimbabwe",
// 	"Åland Islands"
// ];

// 32. Array Questions
//     - Extract all the countries contain the word 'land' from the countries array and print it as array
// let a =[];
// for (let i=0; i<countryList.length; i++){
//     if ( countryList[i].includes("land")) {
//         a.push(countryList[i])   
//     }
//     else{
//         continue
//     }
// }
// console.log(a);

//     - Extract all the countries containing only four characters from the countries array and print it as array
// let a =[]

// for (let i=0; i<countryList.length; i++){
   
//     if ( countryList[i].length==4) {
//         a.push(countryList[i])   
//     }
//     else{
//         continue
//     }
// }
// console.log(a);

//     - Extract all the countries containing two or more words from the countries array and print it as array

// let a =[]

// for (let i=0; i<countryList.length; i++){
   
//     if ( countryList[i].includes(" ")) {
//         a.push(countryList[i])   
//     }
//     else{
//         continue
//     }
// }
// console.log(a);

//     - Reverse the countries array and capitalize each country and stored it as an array

// const upper = countryList.map(element => {
//     return element.toUpperCase();
//   });


// console.log(upper.reverse());



//     - Find the country containing the hightest number of characters in the countries array


// let a =[]

// for (let i=0; i<countryList.length; i++){
//     a.push(countryList[i].length)
   
// }
// console.log(Math.max(...a));


// for (let i=0; i<countryList.length; i++){
//     if(Math.max(...a)==countryList[i].length ){
//         console.log(countryList[i]);
//     }
// }

// 33. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
    // - The same groups apply to both men and women.
    // - Underweight: BMI is less than 18.5
    // - Normal weight: BMI is 18.5 to 24.9
    // - Overweight: BMI is 25 to 29.9
    // - Obese: BMI is 30 or more


// function bmi(weight, height){
//     let x = (weight/(height*height)*10000)
//      if (x<18.5){
//         x = x + " and you are Underweight" 
//      }
//      else if ( x>=18.5 && x<=24.9){
//         x = x + " and you are Normal weight"
//      }
//      else if (x>= 25 && x <= 29.9){
//         x = x + " and you are over weight"
//      }
//      else{
//         x = x + " and you are Obase"

//      }

//     return `your bmi is ${x} `
 
// }

// console.log(bmi(70,170));
// // 35. Write a functions which checks if all items are unique in the array.
// let array = [1,2,3,4,5,6,5,6,8,8,9,7,"a",'b', "c", "a", "b", "c"]


// let repeatedElemts = []
// function uniqueCehck(){
//     let uniqueArray = [];
    
// for (let i=0; i<array.length; i++){
//     if (uniqueArray.includes(array[i])){
//         repeatedElemts.push(array[i])
//         // continue
//     }
//     else{
//         uniqueArray.push(array[i])
//     }
// }

// if (array.length==uniqueArray.length){
//     return "It the array contains only unique value"
// }
// else{
//     return " array elements are repeated"
// }

// }
 
// console.log(`${uniqueCehck()} repeated elemtnts are ${repeatedElemts}`);

// 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

let personAccount = {
    firstName: "",
    lastName: " ",
    income: 0,
    expenses: 0,
    totalIncome: 0,
    totalExpense: 0,
    accountInfo: 0123456,
    addIncome: 0,
    addExpense:0,


}
console.log(peronAccount());