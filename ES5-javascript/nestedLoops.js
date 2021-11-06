//Print even numbers from 1 to 20
document.write("<b>Even Numbers from 1 to 20</b> <br>");
for(let i = 1; i<= 20; i++){
    if(i % 2 == 0){
        document.write(i + "<br>");
    }
} 

//Print odd numbers from 1 to 20
document.write("<b>Even Numbers from 1 to 20</b> <br>");
for(let i = 1; i<= 20; i++){
    if(i % 2 != 0){
        document.write(i + "<br>");
    }
} 

//Nested Loop 
document.write("<b>Numbers in table from 1 to 100</b> <br>");
for(let a = 1; a <= 100; a = a+10){
    for(let b = a; b < a+10; b++){
        document.write(b + " ");
    }
    document.write("<br>");
}
document.write("<br>");

//nested loop
for(let c = 1; c <= 5; c++){
    for(let j = 1; j <=c; j++){
        document.write(j + " ");
    }
    document.write("<br>");
}

for(let c = 5; c >= 1; c--){
    for(let j = c; j >=1; j--){
        document.write(j + " ");
    }
    document.write("<br>");
}
document.write("<br>")

for(let c = 1; c <= 5; c++){
    for(let j = 1; j <=c; j++){
        document.write(c + " ");
    }
    document.write("<br>");
}

for(let c = 5; c >= 1; c--){
    for(let j = c; j >=1; j--){
        document.write(c + " ");
    }
    document.write("<br>");
}

