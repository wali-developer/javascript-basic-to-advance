function sum(math, science, eng, phy, chem, bio){
    var s = math + science + eng + phy + chem + bio;
    return s;
}

function percentage(total){
    var per = (total / 550) * 100;
    document.write("The Percentage is: " + per);
}
var total = sum(45,45,85,78,35,55);
var b = percentage(total);

function display(){
    alert("Welcome");
}

function close(){
    alert("Before leaving the page, share your experiance by give us review <br>");
}
