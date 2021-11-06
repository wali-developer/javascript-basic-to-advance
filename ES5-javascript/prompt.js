var name = prompt("Enter Your Name :")
var GPA = prompt("Enter your Obtained GPA :");
switch(true){
    case(GPA >= 1.7 && GPA <= 4.00):
        document.getElementById("demo5").innerHTML = "Congarts Man! Your have been passed" + GPA;
        //document.write("Congarts Man! Your have been passed");
    break;

    case(GPA >= 0.00 && GPA <= 1.7):
        document.getElementById("demo5").innerHTML = "Sorry! Your have been Failed due to less than 1.7 GPA" + GPA;
        //document.write("Sorry! Your have been Failed due to less than 1.7 GPA");
    break;

    default:
        document.getElementById("demo5").innerHTML = "Please enter your correct GPA" + GPA;
        //document.write("Please enter your correct GPA")
}