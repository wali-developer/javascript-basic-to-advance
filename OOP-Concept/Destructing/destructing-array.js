console.log('Destructing an Array')
function destructArray(){
    const courses = ['C++', 'Java', 'Javascript', 'Python'];
    return courses;
}

// destructing array
const [course1, ,course3,course4] = destructArray();
console.log(course1);
console.log(course3);
console.log(course4);