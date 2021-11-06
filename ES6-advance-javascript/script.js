//Template string 
let firstname = "Wali";
let lastname = "Ullah";
function name(fname, lname){
    return ` Hello ${firstname} ${lastname}`;
}
console.log(name(firstname, lastname));

let user = "Aslam";
let user1 = "Kashif";
let user2 = "Akram";

let users = `Welcome to our all users :  ${user} ${user1} ${user2}`;
console.log(users);


//Arrow functions
let fun = (name, version) => {
    return `<h2><b>Welcome to ${name} , this is the ${version}</b></h2>`;
}
document.write(fun("ES6 - JAVASCRIPT", "6th version of Javascript"));

//arrow function to sum to sum two values.
const sum = (value1, value2, value3) =>{
    return value1 + value2 + value3;
}
let a = sum(359,937,5);
console.log("your sum is : " + a);

//ES6 Arrow operator in function
let students = (name, course, ...args) => {     //...args is arrow operator
    //console.log(arguments);
    document.write(`Greeting ${name} ! you got admission in ${course}, your marks is : `)
    let sum = 0;
    for(let i in args){
        sum += args[i];
    }
    
    document.write(sum + "<br>");
}
students("Wali Ullah", "BSSE", 76,88,90,79,67,87);
students("Irfan", "BA", 46,68,70,69,57,47);
students("Nawaz", "BCom", 46,58,60,49,57,77);
document.write("<br>");

//Function to calcualte student Marks Percentage
let percentage = (sname, ...numbers) => {        //...args is arrow operator
    let totalMarks = 1100;
    document.write(`The Student ${sname} has got : `);
    let per = 0;
    let sum1 = 0;

    for(let j in numbers){
        sum1 += numbers[j];
    }
    per = (sum1 / totalMarks ) * 100;
    document.write(per);
    document.write(" % Marks <br>")
}

let arr1 = [165,173,145,165];
let arr2 = [122,111];
let arr3 = [...arr1, ...arr2];      //arr1 and arr2 are concatenated with spread operator

let arr4 = [145,123];
let arr5 = [135,95,122];
arr5.push(111);             //adding new number in array
let arr6 = [...arr4, ...arr5];

percentage("Abdullah", ...arr3);       //array passed to the function with spread opererator
percentage("Shafiq", ...arr6);         //spread opererator
document.write("<br>");

console.log(arr3,arr6);;


//Object Literals (ES6)
var name = "Wali ullah";
var age = "twenty";

obj = {
    name,
    age,
};
let b = obj['name'] + ", his age is " + obj['age'];
console.log(b);

//Object Literals
let n = "student";
let obj2 = {
    [n +"name"] : "Wali Ullah",
    course : "Software Engineering",
    detail (){
        return `${this.studentname} is the student of ${this.course}`;
    }
};
console.log(obj2.detail())

//Object Literals
var name = "Wali";
lname = " Ullah"
var age = "twenty";

function stud(name, lname, age){
    let fullname = name + lname;
    return {fullname, age};
}
console.log(stud(name, lname, age));


//Destructing Array
let ary = ["khan", 25, 25000, ["Battagram", "Male"]];
let [name1, age1, salary, [city, gender]] = ary;
console.log(name1);
console.log(age1);
console.log(salary);
console.log(city);
console.log(gender);

let [...args] = ary;         //arrow operator is used to store all the array elements.
console.log(...args);        // print array.

//destruct array with fuction
function destruct() {
    return ["Farooq", 23, "Atd"]; 
}
let [name2, age2, city2] = destruct();
console.log(destruct());


//Destructing Object
let employee = {
    name3 : "Babar",
    //age3 : 27,
    gender3 : "male",
    city3 : "peshawar"
};
let {name3 = "Ali", age3 = 25, gender3 = "male", city3 = "peshawar"} = employee;      //object values assign to varaiables also set default values to variables.
console.log(age3);
console.log(name3);
console.log(city3);