var str = "The peoples of pakistan are very beautiful";
var str1 = str.charAt(10);              //charAt() finds the cahracter on spcified index
var str2 = str.charCodeAt(10);          //the method finds the character code
var str3 = String.fromCharCode(120);
document.write("the word on selected charactor is :" + str1 + " " + "with caharcter code is :" + str2 + "<br>");
document.write("The index that you provide from your keyboard, his character is :" + str3 + "<br>");

var str4 = "Hello ";
var str5 = "Wali Ullah";
var str6 = str4.concat(str5);       //concat() merge the strings in one variable.
document.write(str6);
//str6.repeat(3);          //repeats() repeat the words with parameter value.
document.write(str6 + "<br>");
var str7 = str6.substr(0, 5);      //substr() accessed the character from specific position.
document.write("Accessing the character from 0 to 5 in above sting :" + " " + str7 + "<br>")

var str8 = "100";
var num = Number.isInteger(str8);
var num1 = Number(str8);
document.write(num + "<br>" + (num1 + 10) + "<br>");


//===== MATH METHODS IN JAVASCRIPT ===== 
var mat = Math.round(8.7);          //round() display value on the basis of .value, .5=>1, .4=>0 
var mat1 = Math.trunc(7.4);         //trunk() gives values without point value.
var mat2 = Math.max(5, 32, 5, 76);  //max() gives max value
var mat3 = Math.min(5, 32, 5, 76);  //min() gives max value
var mat4 = Math.sqrt(64);           //sqrt() finds squar root value
var mat5 = Math.cbrt(125);          //cbrt() finds cube root value
var mat6 = Math.pow(7, 3);          // finds power of the value
var mat7 = Math.random() * 99;      //random() generate random value by default b/w 0 to 1
var mat8 = Math.abs(-7.09);         //abs() find absolute value.

document.write(mat + "<br>" + mat1  + "<br>" + "The maximum value is :"+ mat2 + "<br>" + "The minimun value is :"+ mat3  + "<br>" + "The square root value is :"+ mat4 + "<br>" + "The cube root value is :"+ mat5 + "<br>" + "The Power value is :"+ mat6  +"<br>"+ "The random value is :"+ mat7 + "<br>" + "The absolute value is :"+ mat8 + "<br>");

//===== Date methods ======
var now = new Date();
document.write(now.toDateString() + "<br>");
document.write("Date :" + " " + now.getDay() +"/" +now.getMonth() + "/" + now.getFullYear() + "<br>");
