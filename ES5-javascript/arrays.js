document.write("<b>ARRAY EXAMPLE</b>");
sum = 0;
document.write("<ul>");
var arr = [50, 44, 11, 23, 20];
for(var j = 0; j < 5; j++){
  document.write("<li>" + arr[j] + "</li>");
  sum = sum + arr[j];
}
document.write("</ul>");
document.write("The sum is :" + sum + "<br>");

/*console.log("<b>User input in Array</b>"); 
var arr = new Array(3);
for(var i = 0; i < 3; i++){
    arr1[i] = prompt("Enter the value of Array :");
}
console.log("<ul>");
for(var g = 0; g < 3; g++){
    console.log("<li>" + arr[g] + "</li>");
  }
console.log("</ul>");*/