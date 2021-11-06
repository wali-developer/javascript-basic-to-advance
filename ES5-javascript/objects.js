//====== OBJECTS ======
var obj = {
    name : "Asif",
    fname : "Khalid",
    city : "Peshawar",
    gender : "Male",
    email : "contact@gmail.com",
    salary : function(){
        return 40,000;
    },
    /*array : ["item", "item1", "item2"],
    subobject : {
        "studentName" : "Farman",
        "dept" : "CS",
        "semester" : "7th"
    }*/
}
console.log(obj);
document.write(obj.gender + "<br>");

var staff = new Object();
staff.name = "Ahmad";
staff.id = "34325";
staff.address = "peshawar";
console.log(staff);
document.write(staff.id + "<br>");
document.write(staff['address']);

document.write("<br> <br>");
//====== Array of OBJECTS ======
var database = [
    {name: "Ali", RollNo: 43554, Dept: "SE", age: 23},
    {name: "Saad", RollNo: 43555, Dept: "SE", age: 21},
    {name: "azhar", RollNo: 43556, Dept: "SE", age: 22},
    {name: "Ayaan", RollNo: 43557, Dept: "SE", age: 24}
];
console.log(database);

for(var l = 0; l <= database.length; l++){
    document.write("STUDENT DATABASE <br>" + database[l].name + " " + database[l].RollNo + " " + database[l].Dept + " " +  database[l].age); 
}

//====== array and objects with constant variable   ======
const ary = ["amjid", 4554, 'CS', 25];
ary[1] = "Asad";
console.log(ary);

const obj1 = {
    name: "Umar",
    rollNo: 5433,
    dept : "SE",
    age : 22
};
obj1.name = "Zulfiaq";
console.log(obj1);

//==== map method ====
var ary2 = [450, 455, 476, 334, 377];
var ary3  = ary2.map(percentage);        // map() is used for calculation with array elementns
document.write("Percentage is : <br>" + ary3);
function percentage(smarks){
    return (smarks / 550) * 100;

}