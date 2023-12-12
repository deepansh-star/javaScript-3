const car = {
    make :"Buggati",
    color: "White",
    year: 2023
}

function carProperties (car) {
    for ( properties in car) {
        console.log(properties , car[properties]) ;
    }

}
console.log(carProperties(car)) 


