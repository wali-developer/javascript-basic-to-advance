//focus event
document.getElementById("name").addEventListener('focus', function(){
    this.style.background = "yellow";
});

document.getElementById("class").addEventListener('focus', function(){
    this.style.background = "yellow";
});
document.getElementById("dropdown").addEventListener('focus', function(){
    this.style.background = "yellow";
});


//blur event
document.getElementById("name").addEventListener('blur',abc);
function abc(){
    this.style.background = "white";
}
document.getElementById("class").addEventListener('blur',abcd);
function abcd(){
    this.style.background = "white";
}
document.getElementById("dropdown").addEventListener('blur',abcde);
function abcde(){
   this.style.background = "white";
}

//div styling
document.getElementById("test").style.border = "1px solid blue";
document.getElementById("test").style.margin = "0 auto";


//input event
document.getElementById("name").addEventListener('input',inputFun);
document.getElementById("class").addEventListener('input',inputFun);
function inputFun(){
    var a = this.value;
    document.getElementById("test").innerHTML = a;
}

//change event
document.getElementById("dropdown").addEventListener('change',changeFun);
document.getElementById("name").addEventListener('change',changeFun);
document.getElementById("class").addEventListener('change',changeFun);

function changeFun(){
    var b = this.value;
    document.getElementById("test").innerHTML = b;
}

//submit event
document.getElementById("form1").addEventListener('submit',submitFun);

function submitFun(){
    alert("You have succesfully submitted your form");
}

//submit event
document.getElementById("email").addEventListener('invalid',invalidFun);
function invalidFun(){
    alert("Please type your correct email");
}

//set interval and clear interval methods
var c = 0
var id = setInterval(Animat, 1000);          //parameter => (function, 1000 millisecond) animated after 1 second

function Animat(){
    c = c + 2;              //start div with 2% width
    if(c == 20){            //when width is 20% the animated will stop
        clearInterval(id);
    }
    else{
        var target = document.getElementById("circle");    //targeting the circle
        /*target.style.transform = 'rotate(20deg)';*/
        target.style.width = c + '%';
    }
}

//clear time method
document.getElementById("btn").addEventListener('click', stopAnimation)
function stopAnimation(){
    clearTimeout(id);
}

//