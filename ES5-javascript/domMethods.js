// createElement, createTextNode and createComment
var e = document.createElement("h2");
var f = document.createTextNode("Welcome to DOM in javascript");
var g = document.createComment("this is comment");

e.appendChild(f);

//text append to test
document.getElementById("test").appendChild(e);
//comment append to text
document.getElementById("test").appendChild(g);

var test = document.getElementById("test");
//append the h2 on the top in <div id = "test"></div>.
test.insertBefore(e, test.childNodes[0]);

console.log(e);
console.log(f);
console.log(g);

var test = document.getElementById("test");
//create an html element
var newElement = "<h3>This is Example of insert adjacent HTML </h3>";
//insert in test
test.insertAdjacentHTML("beforeend", newElement);       //the method insert an html in sepecific area with parameters (beforeend, beforebegin, afterbegin and afterend)

var btn = "<button>insertAdjacentHTML</button>";
test.insertAdjacentHTML("beforeend", btn);
document.getElementById("test").style.textAlign = "center";


//Replace the button in test div.
var h = document.createElement("button");
var i = document.createTextNode("Replace Button");
h.appendChild(i);
//console.log(h);
//var btn1 = "<button>Replace Button</button>";
var old = test.children[2];        //test button child
test.replaceChild(h, old);         //replaceChild test 2nd child with button
//test.removeChild(old);             //removeChild will romove test 2nd child with button


//clone / copy method
var target = document.getElementById("list").children[0];    //target the element
var copy = target.cloneNode(true);          //copy that targeted element
console.log(copy);

test.appendChild(copy);     //append the copy in test
test.appendChild(copy).style.textAlign = "left";        //alignment 
//test.style.textAlign = "left";


//contains method / result will be true or false
var j = document.getElementById("test");         //targeting the test element / parent element
var k = document.getElementById("listitem");     //targeting the element that going to search
var l = j.contains(k);                           //search
console.log(l);

//hasAttribute and hasChildNodes method / result will be true or false
var m = k.hasAttribute("class");        //checks / finds the class attribute
var n = j.hasChildNodes();              //checks / finds the childs elememts
console.log(m + n);


//Is equal node method in dom
var o = document.getElementById("ul").lastElementChild;    //target the first li in list element
var p = document.getElementById("ul-1").lastElementChild;    //target the first li in list element

var q = o.isEqualNode(p);             //checks for equal elements / comparison b/w two nodes or elements.
console.log(q);

