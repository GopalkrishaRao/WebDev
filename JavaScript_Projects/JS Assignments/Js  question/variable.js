
//1 Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with there type.

// let a = "abc";
// let b = true;
// let c = 1;
// let d;
// let e = null;

// console.log( typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
// console.log(typeof(d));
// console.log(typeof(e));

//2 Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.

// let firstName = "GK";
// let lastName = "Rao";
// let maritalStatus = "unmarried"; 
// let country = "India";
// let age = 08;

// console.log(
//     `Name : ${firstName + lastName}
//      Marital status: ${maritalStatus}
//      Country : ${country}
//      Age : ${age}`
// );


// 3. Decalre a varibale and assign value to it and change all the string characters to capital letters using toUpperCase() method.

// let letter = "abcdefg-ABCD-123456!@#$";
// let result = letter.toUpperCase();
// console.log(result);

// 4. Check if the string contains a word Script using includes() method.

// let a = "Java Script is a language of web."

// console.log(a.includes("Script"));

// 5. Split the string into an array using split() method

// let a = "Java Script is a language of web."

// let d = a.split()
// console.log(d);
// let b = a.split('');
// console.log(b);
// console.log(b[5]);
// let c = a.split('  ');
// console.log(c);


// 6. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

// let a = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// let array = a.split(', ');

// console.log(array);


// 7. Use lastIndexOf to determine the position of the last occurrence of a script.

// let string = `It was that terrifying feeling you have as you tightly hold the covers over you with the knowledge that there is something hiding under your bed. You want to look, but you don't at the same time. You're frozen with fear and unable to act. That's where she found herself and she didn't know what to do next`;

// let lastindex = "she";

// console.log(`The last index of the word ${lastindex} in ${string.lastIndexOf(lastindex)}
// `);

// 8. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.

// let a = "You cannot end a sentence with because because because is a conjunction";
// console.log(a.search("because"));
// or
// console.log(a.indexOf("because"));


// 9. Use trim() to remove any trailing whitespace at the beginning and the end of a string.

// let st = '      The quick brown fox jumps over the lazy dog.           ';
// console.log(st.trim());

// 10. Boolean value is either true or false.
    // - Write three JavaScript statement which provide truthy value.
    // - Write three JavaScript statement which provide falsy value.

// truthy values
// let a=1; 
// console.log(Boolean(a))

// let b="a"; 
// console.log(Boolean(b))

// let c=true;
// console.log(Boolean(c))

// falsy vlues
// let e= 0;
// console.log(Boolean(e))

// let f="";
// console.log(Boolean(f))

// let g=false 
// console.log(Boolean(g))

// 11. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//     - 4 > 3
// console.log(4 > 3);

//     - 4 >= 3
// console.log(4 >= 3);

//     - 4 < 3
// console.log(4 < 3);
//     - 4 <= 3
// console.log(4 <= 3);
//     - 4 == 4
// console.log(4 == 4);
//     - 4 === 4
// console.log(4 === 4);
//     - 4 != 4
// console.log(4 != 4);
//     - 4 !== 4
// console.log(4 !== 4);
//     - 4 != '4'
// console.log(4 != '4');
//     - 4 == '4'
// console.log(4 == '4');
//     - 4 === '4'
// console.log(4 === '4');
//     - Find the length of python and jargon and make a falsy comparison statement.

// let python = "python";
// let jargon = "jargon";

// console.log(`Length of ${python} is ${python.length}`);
// console.log(`Length of ${jargon} is ${jargon.length}`);

// console.log(python[0]==jargon[0]);  // Output: false


// 12. Use the Date object to do the following activities
    // - What is the year today?
    // console.log(new Date().getFullYear());

    // - What is the month today as a number?
    // console.log(new Date().getMonth()+1);
    
    // - What is the date today?
    // console.log(new Date().getDate());

    // - What is the day today as a number?
    // console.log(new Date().getDay());

    // - What is the hours now?
    // console.log(new Date().getHours());

    // - What is the minutes now?
    // console.log(new Date().getMinutes());

    // - Find out the numbers of seconds elapsed from January 1, 1970 to now.

    // let currentTimestamp = Date.now() / 1000;
    // let startTimestamp = new Date('January 1, 1970').getTime() / 1000;
    // let secondsElapsed = Math.floor(currentTimestamp - startTimestamp);
    
    // console.log(secondsElapsed);
    



// 13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// function area(b, h) {
//     console.log(`The area of the triangle with height ${h} and base ${b} is ${0.5*b*h} sqUnits`);
// };
// area(1,5)

// 14. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

// const slope = (x1,x2,y1,y2)=>{
//     let slopeOfTheLine = ((y2-y1)/(x2-x1));
//     console.log(slopeOfTheLine);
// };
// slope(2,6,2,10);  //Output 2


// 15. Calculate the slope, x-intercept and y-intercept of y = 2x -2

// let slope = 2;
// let yIntercept = -2;

// Calculate x-intercept by setting y = 0
// let xIntercept = -yIntercept / slope;

// console.log('Slope:', slope);
// console.log('Y-intercept:', yIntercept);
// console.log('X-intercept:', xIntercept);



// 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// const calculate = (r)=>{
//     const area=(Math.PI*r*r);
//     const circumference=(2*Math.PI*r)
//     console.log(`Area of Circle is ${area.toFixed(2)} units`);
//     console.log(`Circumference of Circle is ${circumference.toFixed(2)} units`);
// }

// calculate(2)

// 17. Create a human readable time format using the Date time object
    // - YYYY-MM-DD HH:mm

    // let currentDate = new Date();
    // let day = String(currentDate.getDate()).padStart(2, '0');
    // let month = String(currentDate.getMonth() + 1).padStart(2, '0');
    // let year = currentDate.getFullYear();
    // let hours = String(currentDate.getHours()).padStart(2, '0');
    // let minutes = String(currentDate.getMinutes()).padStart(2, '0');

    // let formattedDate = year + '-' + month + '-' + day  + ' ' + hours + ':' + minutes;

    // console.log(formattedDate);

//     - DD-MM-YYYY HH:mm
// let currentDate = new Date();

// let day = String(currentDate.getDate()).padStart(2, '0');
// let month = String(currentDate.getMonth() + 1).padStart(2, '0');
// let year = currentDate.getFullYear();
// let hours = String(currentDate.getHours()).padStart(2, '0');
// let minutes = String(currentDate.getMinutes()).padStart(2, '0');

// let formattedDate = day + '-' + month + '-' + year + ' ' + hours + ':' + minutes;

// console.log(formattedDate);

//     - DD/MM/YYYY HH:mm

// let currentDate = new Date();
//     let day = String(currentDate.getDate()).padStart(2, '0');
//     let month = String(currentDate.getMonth() + 1).padStart(2, '0');
//     let year = currentDate.getFullYear();
//     let hours = String(currentDate.getHours()).padStart(2, '0');
//     let minutes = String(currentDate.getMinutes()).padStart(2, '0');

//     let formattedDate = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes;

//     console.log(formattedDate);



// 18. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// let age = prompt("Enter you age:");

// let age=16
// if (age >=18) {
//   alert("You are old enough to drive");
// console.log("You are old enough to drive");
// }
// else{
    // alert(`Please waite for ${18-age} more years so that you can turn 18` )
    // console.log(`Please waite for ${18-age} more years so that you can turn 18`);
// }

// 19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

// let number = -4;
// let result = (number %2 == 0) ? "even" : "odd";
// console.log(`The number is ${result}`);

// if (number %2 == 0 ) { 
//     console.log("The number is even");
// }

//  else if (number %2 ==1){
//     console.log("The number is odd");
// }
// else {
//     console.log("Either it is a fraction or oter data type");
// }

// 20. Write a code which can give grades to students according to theirs scores:
    // - 80-100, A
    // - 70-89, B
    // - 60-69, C
    // - 50-59, D
    // - 0-49, F

// let marks = 80;
// let grade;

// if (marks>=80 && marks<=100){
//      grade= "A"
// }
// else if(marks>=70 && marks<=79){
//     grade= "B"
// }
// else if(marks>=60 && marks<=69){
//      grade= "C"
// }
// else if(marks>=50 && marks<=59){
//      grade= "D"
// }
// else if (marks>=0 && marks<=49){
//      grade= "F"
// }
// else{
//      grade = "Invalied "
// }
// console.log(`The grade is ${grade} `);  

// 21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

// let month = "May";
// let season;
// if (month == "September" || month =="October" || month =="November"){
//         season = "Autumn";
//     }
//     else if (month == "December" || month =="January" || month =="February"){
//         season = "Winter";
//     }
//     else if (month == "March" || month =="April" || month =="May"){
//         season = "Spring";
//     }
//     else{
//         season="Summer";
//     };
//     console.log(`It is  ${season} `);


// 22. Write a program which tells the number of days in a month.

// let mont = 10;
// let noOfdays
// if (mont == 1 || mont ==3 || mont ==5 || mont == 7 || mont ==10 || mont ==12 ){
//     noOfdays = 31;
// }
// else if (mont == 2){
//     noOfdays = 28;

// }
// else {
//     noOfdays = 30;
// };
// console.log(`Number of days in the given month is ${noOfdays}`);

// 23. Write a program which tells the number of days in a month, now consider leap year.
// let mont = 10;
// let noOfdays
// if (mont == 1 || mont ==3 || mont ==5 || mont == 7 || mont ==10 || mont ==12 ){
//     noOfdays = 31;
// }
// else if (mont == 2){
//     noOfdays = 29;

// }
// else {
//     noOfdays = 30;
// };
// console.log(`Number of days in the given month is ${noOfdays}`);

// 24. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

// const countries = require('./countries');
// const webTech = require('./webtech');
// console.log(countries); // Access the countries array
// console.log(webTech);  // Access the webTechs array


// 25. In the following shopping cart add, remove, edit items
//     const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
    // if(shoppingCart.includes("Meat")){
    //     console.log(shoppingCart);
    // }
    // else{
    //     shoppingCart.unshift("Meat");
    //     console.log(shoppingCart);
    // }



//     - add Sugar at the end of you shopping cart if it has not been already added
    // if(shoppingCart.includes("Sugar")){
    //     console.log(shoppingCart);
    // }
    // else{
    //     shoppingCart.push("Sugar");
    //     console.log(shoppingCart);
    // }



//     - remove 'Honey' if you are allergic to honey

    // const allergicToHoney = 'yes';
    // if(allergicToHoney=='yes'){
    //    const index = shoppingCart.indexOf('Honey');
    //    shoppingCart.splice(index, 1);
    // }
    //     console.log(shoppingCart);


//     - modify Tea to 'Green Tea'
        // shoppingCart[shoppingCart.indexOf('Tea')]='Green Tea';
        // console.log(shoppingCart);



// shoppingCart[shoppingCart.indexOf('Tea')]='Green Tea';
// console.log(shoppingCart);

// 26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

// const countries = require('./countries');


// function countyCheck(a){
//     if(countries.includes(a)){
//         console.log(`${a.toUpperCase()} exists in the arrey`);
//     }
//     else{
//         countries.push(a);
//     };
//     console.log(a.toUpperCase());
// };

// countyCheck("Ethiopia");

// 27. The following is an array of 10 students ages:
    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
// ages.sort(function(a, b) {
//     return a - b;
//     });

//     const minAge = ages[0];
//     const maxAge = ages[ages.length - 1];

//     console.log('Sorted Ages:', ages);
//     console.log('Minimum Age:', minAge);
//     console.log('Maximum Age:', maxAge);
//     - Find the median age(one middle item or two middle items divided by two)

// const median = (e) => {
//     e.sort((a, b) => a - b); // Sorting the array in ascending order
  
//     if (e.length % 2 === 0) {
//       // For even-length arrays, average the two middle values
//       const middleIndex = e.length / 2;
//       return (e[middleIndex - 1] + e[middleIndex]) / 2;
//     } else {
//       // For odd-length arrays, return the middle value
//       const middleIndex = Math.floor(e.length / 2);
//       return e[middleIndex];
//     }
//   };
  
//   console.log(median(ages));

//     - Find the average age(all items divided by number of items)

// const averageAge = (e)=>{
//     let sum=0
//     for(i=0; i<e.length; i++ ){
//         sum+= e[i]
//     }
//     return (sum/e.length)
// }

// console.log(averageAge(ages));

//     - Find the range of the ages(max minus min)

//  const rangeOfAges = (e)=>{
//     e.sort((a, b) => a - b)
//     return (e[e.length-1]-e[0])
//  }
//  console.log(rangeOfAges(ages));

//     - Compare the value of (min - average) and (max - average), use abs() method

// const compare = (e)=>{
//     e.sort((a, b) => a - b)
//     const minValue = e[0]
//     const maxValue = e[e.length-1]

//     const averageAge = (e)=>{
//             let sum=0
//             for(i=0; i<e.length; i++ ){
//                 sum+= e[i]
//             }
//             return (sum/e.length)
//         }

//     const averageValue = averageAge(e)
   
//     return (`(min - average) is ${Math.abs(minValue-averageValue).toFixed(2)} (max - average) is ${Math.abs(maxValue-averageValue).toFixed(2)}`);
// }

// console.log(compare (ages));

// 28. Use for loop to iterate from 0 to 100 and print only prime numbers
// const pirntPrime = (number)=>{
//     // looping from 0 to higherNumber
// for (let i = 0; i <= number; i++) {
//     let flag = false;

//     // looping through 2 to user input number
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = true;
//             break;
//         }
//     }

//     // if number greater than 1 and not divisible by other numbers
//     if (i > 1 && flag == false) {
//         console.log(i);
//     }
// }
// }
// pirntPrime(2);



// 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

// function sumOfNum(a){
//     let sumOdd=0;
//     let sumEven=0;
//     for (let i=0; i<=a; i++){
//     if(i%2==0){
//      sumEven +=  i
//     }
//     else{
//         sumOdd +=  i
//     }
// }
// console.log( `Sum of Even ${sumEven}`)
// console.log(`Sum of Odd ${sumOdd}`);
// }
//  sumOfNum(100)

// 30. Write a script which generates a random hexadecimal number.


// function hexadecimal(){
//     let h = "0123456789ABCDEFGH";
//     let con = "#";
//     for (let i=0; i<6; i++){
//     con = con + h[Math.floor(Math.random()*16)]
//     };
//     return con
// };

// console.log(hexadecimal()); 


const countryList = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas (the)",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia (Plurinational State of)",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory (the)",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands (the)",
	"Central African Republic (the)",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands (the)",
	"Colombia",
	"Comoros (the)",
	"Congo (the Democratic Republic of the)",
	"Congo (the)",
	"Cook Islands (the)",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic (the)",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands (the) [Malvinas]",
	"Faroe Islands (the)",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories (the)",
	"Gabon",
	"Gambia (the)",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See (the)",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran (Islamic Republic of)",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (the Democratic People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic (the)",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands (the)",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands (the)",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger (the)",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands (the)",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines (the)",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation (the)",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan (the)",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands (the)",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates (the)",
	"United Kingdom of Great Britain and Northern Ireland (the)",
	"United States Minor Outlying Islands (the)",
	"United States of America (the)",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela (Bolivarian Republic of)",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
];

// 32. Array Questions
//     - Extract all the countries contain the word 'land' from the countries array and print it as array

// let a =[];
// for (let i=0; i<countryList.length; i++){
//     if ( countryList[i].includes("land")) {
//         a.push(countryList[i])   
//     }
// }
// console.log(a);

//     - Find the country containing the hightest number of characters in the countries array

// let longestName =""

// for (let i=0; i<countryList.length; i++){
//     if(longestName.length<=countryList[i].length){
//         longestName=countryList[i]
//     }
// }
// console.log(longestName);


//     - Extract all the countries containing only four characters from the countries array and print it as array
// let a =[]
// for (let i=0; i<countryList.length; i++){
//     if ( countryList[i].length==4) {
//         a.push(countryList[i])   
//     }
// }
// console.log(a);

//     - Extract all the countries containing two or more words from the countries array and print it as array

// let a =[]

// for (let i=0; i<countryList.length; i++){
   
//     if ( countryList[i].includes(" ")) {
//         a.push(countryList[i])   
//     }
// }
// console.log(a);

//     - Reverse the countries array and capitalize each country and stored it as an array

// let a=[];
// for(let i=0; i<countryList.length; i++){
//     a.push(countryList[i].toUpperCase())
// }
// console.log(a.reverse());





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

// // w = weight in kg
// // h= height in m
// const bmiCalculate =(w,h)=>{
//     let bmi;
//     bmi= (w/(h*h)).toFixed(2);
    
//     if(bmi<=18.5){
//         return `Your BMI is ${bmi} and your are Underweight`
//     }
//     else if(bmi>18.5 && bmi<=24.9){
//         return `Your BMI is ${bmi} and your are Normal weight`
//     }
//     else if(bmi>25 && bmi<=29.9){
//         return `Your BMI is ${bmi} and your are Overweight`
//     }
//     else if(bmi>30 ){
//         return `Your BMI is ${bmi} and your are Obase`
//     }
    
// }
// console.log(bmiCalculate(78,1.78));

// 34. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.






// // 35. Write a functions which checks if all items are unique in the array.
// let array = [1,2,3,4,5,6,5,6,8,8,9,7,"a",'b', "c", "a", "b", "c"]
// Method 1
// let repeatedElemts = []

// function uniqueCehck(){
//     let uniqueArray = [];
    
//     for (let i=0; i<array.length; i++){
//         if (uniqueArray.includes(array[i])){
//             repeatedElemts.push(array[i])
//         }      
//         else{
//         uniqueArray.push(array[i])
//         }
//     }

//         if (array.length==uniqueArray.length){
//             return "It the array contains only unique value"
//         }
//         else{
//             return " array elements are repeated"
//         }
// }
 
// console.log(`${uniqueCehck()} repeated elemtnts are ${repeatedElemts}`);

 // Method 2
//  let newArray = new Set(array);

//  if(newArray.length===array.length){
//     console.log(`All items are array are unique`); 
//  }else{
//     console.log('Some items in array are repeted'); 
//  };