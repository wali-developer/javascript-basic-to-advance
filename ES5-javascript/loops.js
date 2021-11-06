//---While Loop---
document.write("<b>While Loop </b>");
let a = 1;
document.write("<ul>");
while(a <= 5){
    document.write("<li> This is while loop </li>");
    a = a + 1;
}
document.write("</ul>");

//---Do While Loop---
/*document.write("<b>Do While Loop </b>");
let b = 2;
do{
    document.write(b + " Do while Loop example <br>");
    b++;
}while(b >= 6)*/

let text = ""
let i = 0;

do {
  text += "<br>The number is " + i;
  i++;
}
while (i < 10);  

document.getElementById("demo").innerHTML = text;

//for loop
document.write("<b>For loop Example</b><br>");
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
let txt = ""
for(let i = 0; i < cars.length; i++){
  if(cars[i] == "Fiat"){
    break;

  }
  txt += "The car is: " + cars[i] + "<br>";
}
document.write(txt + "<br>");

//==== For in loop ==== use for objects
document.write("<b>For in Loop</b><br>")
var obj2 = {
  name: "Umar",
  rollNo: 5433,
  dept : "SE",
  age : 22
};
for(key in obj2){
  document.write(key + " : " + obj2[key] + "<br>");
}