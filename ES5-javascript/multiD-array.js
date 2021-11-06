document.write("<b>Multidimensional Array</b> <br>");
var arr2 = [
    [12, "Ali", true, "Amir"],
    ["Rohail", 55, "usama", 56],
    [33, "Umair", true, 87],
    ["Baber", "Rizwan", "Shaheen", "Hassan"]
];
arr2[0][2] = false;

document.write("<table border='1px' cellspacing='6'>")
for(var h = 0; h < arr2.length; h++){
    document.write("<tr>");
    for(var k = 0; k < arr2[h].length; k++){
        document.write("<td>" + arr2[h][k] + "</td>");
    }
    document.write("</tr>");
    document.write("<br>");
}
document.write("</table>");

document.write("<br>");

//Array Functions
document.write("<b>Array sort method</b> <br>");
arr3 = ["zubair", "Qasim", "Baber", "Luqman", "Don", "Farah"];
arr4 = [12, 34, 65];
arr5 = arr3.concat(arr4);  //merging two arrays
arr5.sort();
arr5.pop();               //Remove last element from array
arr5.push("Sarah");       //adding element in array start
arr5.shift();             //
arr5.unshift("Zahid");    //
for(var l = 0; l < arr5.length; l++){
    document.write(arr5[l] + "<br>");
}

document.write("<br>");
var arr6 = ["Noman", "Basheer", "Bilal", "Hamza", "Gahlib"];
var arr7 = arr6.join(" - ");       //adding something between array elements or array converting to one element.
document.write(arr7 + "<br>");

var arr8 = arr6.slice(2, 4);   
document.write("Array = " + arr8 + "<br>");    //creating another from existing array with some specific elemets, start, end index.

arr9 = [2, 34, 6, 19, 60];
arr9.splice(2, 0, "Fatima", "Muneeba");     //adding some elements b/w in array
document.write(arr9 + "<br>");
var arr10 = Array.isArray(arr9);           //isArray() checks either a var is array or not.
document.write(arr10 + "<br>");
var arr11 = arr9.indexOf("Fatima");
document.write("The index of arr9 is :" + arr11 + "<br>");    //indexOf() is used for searching index of array element.

var arr12 = arr9.includes("Muneeba");            //Searching an item from array
document.write(arr12 + "<br>");

var arr13 = arr9.find(checkAdults);         //the function find() search for the specific condition that given in other function.
document.write("The first adult person in array with age is : " + arr13 + "<br>");

function checkAdults(age){
    return age >= 18;
}

var arr13 = arr9.findIndex(checkAdults);         //the function findIndex() search index of specific item in array
document.write("The first adult person index in array is  : " + arr13 + "<br>");

var arr14 = arr9.filter(result);
document.write("The students passed the test with marks :"+ arr14 + "<br> <br>");
function result(marks){
    return marks >= 33;
}

arr15 = ["Abid", "Wazir", "Raja", "Aslam", "Salam"];
document.write("The Array with index is : <br>" );
arr15.forEach(printArray);

function printArray(value, index){
    document.write(index + " " + value + "<br>");
}