/*function onfulfil(result) {
    console.log(result);
}
function onreject(error) {
    console.log(error);
}

function prom() {
    return new Promise(function(resolve, reject) {
        console.log("Fetching data, Please wait a second...");
        setTimeout(() => {
            $.get("https://jsonplaceholder.typicode.com/users", function(data) {
                console.log(data);
            }).fail(err =>{
                reject("Sorry ! Fail to load JSON");
            })
        }, 2000)
    });
} 

prom().then(onfulfil).catch(onreject);*/

/*function prom() {
    return new Promise(function(resolve, reject) {
        document.write("Fetching data, Please wait a second...");
        setTimeout(() =>{
            $.get("https://jsonplaceholder.typicode.com/users", function (data) {
            console.log(data);
        }).fail(err =>{
            reject("Sorry ! Fail to load JSON");
        });
        },3000)
        
    });    
}
prom().then((result) =>{
    console.log(result);
}).catch((error) => {
    console.log(error);
});*/

//****** promise.all method *******
let prom1 = new Promise((resolve, reject) => {
    console.log("Fetching data, Please wait a second... <br>");

    setTimeout(() => {
        console.log("The first Promise has been resolved");
        resolve(10); 
    }, 2000);
});
let prom2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("The second Promise has been resolved");
        resolve(20); 
    }, 3000);
});
let prom3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("The third Promise has been resolved");
        resolve(30); 
    }, 4000);
});

let total = 0;
Promise.all([prom1, prom2, prom3]).then((result) =>{    

    for(var i in result){
        total += result[i];
    }

    console.log(`Result : ${result}`);
    console.log(`Total : ${total}`);

}).catch((error) =>{
    console.log(`ERROR : ${error}`);
}); 