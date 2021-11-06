class employee{
    static welcome(){
        document.write(`<h2>Company employees Record  :</h2>`);
    }

    constructor(name, age, salary, gender, address){
        this.employeeName = name;
        this.employeeAge = age;
        this.employeeSalary = salary;
        this.employeeGender = gender;
        this.employeeAddress = address;
    }

    employeeRecord(){
        document.write("<h4>Employee Class</h4>");
        document.write(`Name : ${this.employeeName} <br> Age : ${this.employeeAge} <br>  Salary : ${this.employeeSalary} <br>  Gender : ${this.employeeGender} <br>  Address : ${this.employeeAddress} <br>`);
    }
}

// ******* Inheritance ********
class manager extends employee{         //this class inherit the all properties and values of employee class.
    managerRecord(){
        let allownce = 7000;
        let bonus = 5000;
        let totalSalary = this.employeeSalary + allownce + bonus;
        document.write("<h3>Manager Class</h3>");
        document.write(`Name : ${this.employeeName} <br> Age : ${this.employeeAge} <br>  Salary : ${totalSalary} <br>  Gender : ${this.employeeGender} <br>  Address : ${this.employeeAddress} <br>`);

    }
}

// use multi level inheritance
class employee1 extends manager{    //this class inherit all properties of another two class

}

employee1.welcome();
// Objects
let a = new employee1("Usama", 24, 29000, "Male", "Peshawar");
let b = new employee1("Salman", 28, 22000, "Male", "Islamabad");
let c = new employee("Arif khan", 21, 24000, "Male", "Swat");
let d = new employee("Qadir ", 20, 15000, "Male", "Battagram");
let e = new manager("Salman", 29, 32000, "Male", "Malakand");
 
//storing data in objects and calling to employeeRecord function
a.employeeRecord();
b.employeeRecord();
c.employeeRecord();
d.employeeRecord();
e.managerRecord();


// module Example
function abc(name, university) {
    return `${name} is the brilliant Student of ${university}`;
}

export {abc, employee1, employee, manager};