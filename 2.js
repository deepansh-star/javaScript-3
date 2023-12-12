const student = {
    name: "Rahul",
    age: 20,
    grade: "A+"
}

function upgrade (newgrade) {
    student.grade = newgrade  ;
}

upgrade("B") ;
console.log(student);



