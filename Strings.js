var carName = "maruthi suziki"

var carfirstname = "maruthi"
var carsecondname = "suziki"


document.getElementById("carname").innerHTML = carName
console.log(carName)
// document.getElementById("carlength").innerHTML = carName.length
// console.log(carName.length)

// upper&lowercase letter

// console.log(carName.toUpperCase())
// console.log(carName.toLowerCase())

// concatmethod

console.log(carfirstname +" " + carsecondname)
console.log(carfirstname.concat (" ", carsecondname))

// trim method

var newcar = " tesla "
console.log(newcar)
// newcar = newcar.trim()
// console.log(newcar.length)
console.log(newcar.trim().length)

let newpara = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eius laudantium excepturi repellendus sed nulla distinctio exercitationem asperiores quaerat rem est provident eveniet, possimus dolor libero eum verna assumenda dolorem architecto!"
console.log(newpara.includes("verna"))

let bikename = "pulsar 180 engine 180"
console.log(bikename.replace("180",220))
console.log(bikename.replaceAll("180",220))

let myname = "aravindh kollabathula"
console.log( "my firstname is", myname.slice(0,8))
console.log("my lastname is",myname.slice(8,myname.length))
console.log(myname.slice(8))

console.log("my first letter in my name is",myname.charAt(0).toUpperCase())
console.log("my last letter in my name is",myname.charAt(myname.length -2).toUpperCase())

let courses = "html,css,js,react"
console.log(courses)
console.log(courses.split(","))