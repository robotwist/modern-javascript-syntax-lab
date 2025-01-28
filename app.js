const flavors = ['vanilla', 'chocolate', 'strawberry'];

const iceCreamFlavors = flavors.map((flavor) => {
  return `${flavor} ice cream`;
});

console.log(iceCreamFlavors); 
// Prints: ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']
// ---------------------
// ! Exercise 1:
// a. Use the `map()` method to iterate over the provided `nums` array
//
// b. Use the callback function of the `map()` method you wrote to
//    create a new array where each value is multiplied by 2.
//    Name the new array `numsTimesTwo`.
//
// c. Console log the new array.
//
// Starting code (don't modify this):
// Your code here:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];
  const numsScan = nums.map((num) => {
    return numsTimesTwo = num * 2;
  });

  console.log(numsScan);
  console.log(numsTimesTwo);
//------------------------------------

//ex 2 example - positional destructuring
const petsArray = ['Rover', 'Snuffles', 'Toto', 'Spot'];

const [firstPet, secondPet] = petsArray;

console.log(firstPet);
// Prints: 'Rover'
console.log(secondPet);
// Prints: 'Snuffles'

// Equivalent in traditional bracket notation:
console.log(petsArray[0]);
// Prints: 'Rover'
console.log(petsArray[1]);
// Prints: 'Snuffles'

// ! Exercise 2:
// a. Given the provided `pizzaToppings` array, use destructuring to extract 
//    the first and second values and place them into variables. Name the 
//    variable that corresponds to the first value `firstIngredient`. Name the 
//    variable that corresponds to the second value `secondIngredient`.
//
// b. Console log the `firstIngredient` and `secondIngredient` variables.
//
// Starting code (don't modify this):

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const [firstIngredient, secondIngredient] = pizzaToppings;

console.log(firstIngredient);

console.log(secondIngredient);

//example 3
const person = {
  name: 'Alex',
  role: 'Software Engineer',
};

// Object destructuring:
const { name, role } = person;

console.log(name);
// Prints: 'Alex'
console.log(role);
// Prints: 'Software Engineer'

// Equivalent in traditional dot notation:
console.log(person.name); 
// Prints: 'Alex'
console.log(person.role); 
// Prints: 'Software Engineer'
//------------------------------------------------
// ! Exercise 3:
// a. Given the provided `car` object, use destructuring to create two
//    variables: `make` and `model` that will hold the respective values.
//
// b. Console log the `make` and `model` variables.
//
// Starting code (don't modify this):

const car = {
  make: 'Audi',
  model: 'Q5',
};
// Your code here:
//exercise 3
const { make, model } = car;
console.log(make);
console.log(model);

//--------------------------------
//example 4
// const originalArray = [1, 2, 3];
// const duplicateArray = [...originalArray];

// console.log(duplicateArray); 
// // Prints: [1, 2, 3]

// duplicateArray.push(4); 
// // Using spread created a *copy* of the `originalArray`
// // Changing it doesn't also change `originalArray`

// console.log(duplicateArray); 
// // Prints: [1, 2, 3, 4]
// console.log(originalArray); 
// // Prints: [1, 2, 3]
const originalArray = [1, 2, 3];
const referenceArray = originalArray; 
// referenceArray a reference to originalArray (not a copy)

referenceArray.push(4); 
// This means modifying `referenceArray` also modifies `originalArray`

console.log(referenceArray); 
// Prints: [1, 2, 3, 4]
console.log(originalArray);
// Prints: [1, 2, 3, 4]
const fruits = ['apple', 'orange', 'banana'];
const vegetables = ['broccoli', 'carrot', 'spinach'];

const fruitsAndVegetables = [...fruits, ...vegetables];

console.log(fruitsAndVegetables); 
// Prints: ['apple', 'orange', 'banana', 'broccoli', 'carrot', 'spinach']
// ! Exercise 4: 
// a. Duplicate the provided `morePizzaToppings` array using the spread 
//    operator and assign it to a variable named `uncontroversialPizzaToppings`.
// 
// b. Console log the `uncontroversialPizzaToppings` variable.
//
// Starting code (don't modify this):

const morePizzaToppings = ['Cheese', 'Sauce'];

// Your code here:

