console.log('Destructing an Object')
const user = {
    name: 'Azaan',
    age: '18',
    email: 'azaan@gmail.com',
    address: {
        city: 'Peshawar',
        street: 10,
        muhalla: 'Gul bahar'
    }
}

// destructing object
const {name: myname, age} = user;


function user1({name, age}){
    console.log(name);
    console.log(age);
}

// calling function and send it object user, this will destruct name and age property from user.
user1(user);
