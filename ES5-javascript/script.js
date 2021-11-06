var price1 = 432;
var price2 = 483;
var price1 = 0; 
var totalPrice = price1 + price2;
document.getElementById("demo").innerHTML = "The total price is: " + totalPrice;

let x = 'Wali';
let y = ' Ullah';
//let x = Ubaid;         The statement will give an error b/c variable of let keyword is not redeclared.
let z = x + y;
document.getElementById("demo1").innerHTML = "My name is : " + z;

const students = {wali: "3.4", ubaid: "3.2", hameed: "3.3"};
students.wali  = "3.6";
const teachers = ["Mansoor Nasir", "Atta Ullah", "Faisal Saeed"];
//students[0] = "3.6";
teachers.push("Haleem Farman");
document.getElementById("demo2").innerHTML = "The Students marks is : " + students.wali;
document.getElementById("demo3").innerHTML = "The Teachers is : " + teachers;

/*let x = 99;
let y = 99;
let z = 55;
document.getElementById("demo4").innerHTML =  (x == y) + "<br>" + (x==z);*/

//===Functions====
function fahToCel(fahrenheit){
    // f = fahermheit;
    // return f;
    return (5/9) * (fahrenheit-32);
}
//document.getElementById("demo5").innerHTML = fahToCel(55);
//var fn = fahToCel(88);
document.write("the temp is :" + fahToCel(55) + "<br> <br>")

/*console.table(["Asif", "Afridi", "Hassan", "jduhd"]);
console.error("The third value of the array does not give any specific idea");
console.warn("This type of Array should not use")*/

var day = "monday";
if(day == "friday"){
    console.log("Today is Friday");
}
else{
    console.log("I don't know about today");
}

var b = 10;
var c = '10';
if(b === c){
    console.log("The values are equal")
}
else{
    console.log("The values are not equal"); 
}

//Javascript conditional ternary operator
let  marks = 75;
let pass;
marks > 35 ? pass =  "Good" : "Bad";
//pass = (marks > 35 ? "Good" : "Bad");
document.write("Congratulations! You cleared the Test with" + " " + pass + " " + "Marks <br>"); 

//==== Switch Cases ======
var day = 4;
switch(day){
    case 0:
        console.log("Today is Monday");
    break;
    case 1:
        console.log("Today is Tuesday");
    break;
    case 2:
        console.log("Today is Wed");
    break;
    case 3:
        console.log("Today is Thurday");
    break;
    case 4:
        console.log("Today is Friday");
    break;
    case 5:
        console.log("Today is Saturday");
    break;
    case 6:
        console.log("Today is Sunday");
    break;
    default:
        console.log("Please Provide the valid number!");
}

var GPA = 3.5;
switch(true){
    case(GPA >= 1.7 && GPA <= 4.00):
        //document.getElementById("demo5").innerHTML = "Congarts Man! Your have been passed" + GPA;
        document.write("Congarts Man! Your have been passed <br>");
    break;

    case(GPA >= 0.00 && GPA <= 1.7):
        //document.getElementById("demo5").innerHTML = "Sorry! Your have been Failed due to less than 1.7 GPA" + GPA;
        document.write("Sorry! Your have been Failed due to less than 1.7 GPA <br>");
    break;

    default:
        //document.getElementById("demo5").innerHTML = "Please enter your correct GPA" + GPA;
        document.write("Please enter your correct GPA <br>")
}

//==== alert and confirm box ======
/*var d = confirm("Welcome to our Site");    //confirms box

if(d){
    alert("Stay there");
}
else{
    alert("Pop up Cancelled");
}*/

//== Prompt ===
var e = prompt("Enter Your Name: ");
document.write(e);
/*if(e){
    document.getElementById("demo6").innerHTML = "Your name is :" + e;
}*/

/*var body;
body = document.querySelectorAll("body").classList.add("container");
body = document.querySelectorAll("container").style.backgroundColor = "gray";
console.log(body);*/