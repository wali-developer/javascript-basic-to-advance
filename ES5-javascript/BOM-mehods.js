function resizeFun(){
    console.clear();
    var iheight = window.innerHeight;        //print inner height
    console.log("The inner height of window is :" + iheight);

    var oheight = window.outerHeight;
    console.log("The outer height of window is: " + oheight);    //print outer height

    var iwidth = window.innerWidth;
    console.log("The inner width of window is :" + iwidth);      //print inner width

    var owidth = window.outerWidth;
    console.log("The outer width of window is: " + owidth);      //print outer width
}

//WindowOpen() and windowClose() close method
function openFun(){          //function for open new window
    var open = window.open("http://www.google.com","","width=500px, height=300px,top=200px,left=350px");
}
function closeFun(){        //function for close the new window
    open.close();
}
/*function moveFun(){        //function for moving new window
    open.moveTo(200,200);
}*/

//BOM resizeTo() and resizeBy methods
function resizeFunc(){        //function for resize the new window
    open.resizTo(300,200);
    open.resizBy(300,200);     //function will add previous and new width
}

//BOM scrollTo() methods
function scroll(){        //function will scroll up to the top
    window.scrollTo(0,0);
}

//************  LOCATION objects   ************** */
function myfun(){
    alert("Your page URL is: " + location.href);         //print website complete url
}

function myfun1(){
    alert("Your website host is: " + location.host);    //print website host
}

//************  LOCATION methods   ************** */
function myfun2(){
    location.reload();              //the method will reloads the  page
    //location.assign("...")        //the method will assign a url to page
    //location.replace("...")       //the method will replace the current page with anotger
}
