///1. all loops
let cars = [{
    brand: "bmw",
    price: 5000000,
    color: "red"
}, {
    brand: "range rover",
    price: 30000000,
    color: "back"
}, {
    brand: "muruti ",
    price: 9000000,
    color: "yelow"
}, {
    brand: "bmw",
    price: 7000000,
    color: "blue"
}];

//////for loop
for (let i = 0; i < cars.length; i++) {
    const element = cars[i];
    console.log(element);

}
//////for in loop
for (const list in cars) {
    console.log(cars[list]);
}
////for of loop
for (const list2 of cars) {
    console.log(list2);
}
////forEach loop
cars.forEach(element => {
    console.log(element);
});
////////////////////////////////
////////////////////////////////


//2.resume in json format....
let data = {
    "resume": {
        "contact": {
            "first_name": "manish",
            "last_name": "panwar",
            "email": "manishpanwar682@gmail.com",
            "github": "https://github.com/manish2344",
            "city": "churu",
            "state": "rajasthan",
            "country": "india"
        }

    }
}
console.log(data);