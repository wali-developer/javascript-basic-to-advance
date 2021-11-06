fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then((data) => {
    console.log(data);

    /*for(var x in data){
        document.write = `${data[x].name} <br>`;
    }*/
})
.catch(error => console.log(`ERROR : Can't fetch`));


// ======= Insert data into Server with fetch method ======
let obj =  {
    name: 'Wali Ullah',
    phone: 7687587998,
    address: 'Peshawar',
}

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(obj),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then((response) => response.json())
.then((data1) => console.log(data1));

console.log("Data successfully inserted in your specified server")
;

// ======= Insert form data into Server with fetch method ======

document.getElementById("save").addEventListener("click", function(e) {
    e.preventDefault();

    /*let obj1 =  {
        title: document.getElementById("name").value,
        body: document.getElementById("email").value,
        userId : document.getElementById("pass").value,
    }*/
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: new FormData(document.getElementById("newForm")),
      headers: {
        'Content-type': 'application/json',
      },
    })
});


