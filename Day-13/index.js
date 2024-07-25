// // Activity 1: Creating and Exporting Modules

// // Task 1:

// const add=require('./Module File/module')
// console.log(add(2,3))

// // Task 2:

// const person=require('../Day-13/Module File/module')
// console.log(person.name)
// console.log(person.age)
// person.great()

// // Activity 2: Named and Default Exports

// // Task 3:

// const {add,subtract}=require('../Day-13/Module File/module')
// console.log(add(5,5))
// console.log(subtract(10,5))

// // Task 4:

// const multiply=require('../Day-13/Module File/module')
// console.log(multiply(5,5))

// // Activity 3: Importing Entire Modules

// // Task 5:

// const constants=require('../Day-13/Module File/module')
// console.log(constants.PI)
// console.log(constants.circumference(5))
// console.log(constants.area(5))


// // Activity 4: Using Third-Party Modules

// // Task 6:

// const lodash=require('lodash')
// const array=[1,2,3,4,5]
// console.log(lodash.shuffle(array))

// // Task 7:

// const axios=require('axios')
// axios.get('https://api.github.com/users/codewithsuzan')
// .then(responce=>{
//     console.log(responce.data)
// }).catch(error=>{
//     console.log("Error fetching data:",error)
// })

