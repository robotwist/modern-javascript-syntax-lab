const nums = [13, 87, 2, 89, 12, 4, 90, 63];
const numsScan = nums.map((num) => {
  return num * 2;
});
console.log('Exercise 1:', numsScan);

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
const [firstIngredient, secondIngredient] = pizzaToppings;
console.log("Exercise 2:", firstIngredient, secondIngredient);


const car = {
  make: 'Audi',
  model: 'Q5',
};

const { make, model } = car;
console.log('Exercise 3:', make, model)


const morePizzaToppings = ['Cheese', 'Sauce'];
const uncontroversialPizzaToppings = [...morePizzaToppings];
console.log('exercise 4:', uncontroversialPizzaToppings);

const anotherCar = {
  make: 'Toyota',
  model: 'RAV4',
};
const myCar = { ...anotherCar, tires: 'Bald', interior: 'Smelly' }; 
myCar.make = 'Honda';
myCar.model = 'Civic';

console.log("exercise 5:", "anotherCar:", anotherCar); 
console.log("myCar:", myCar); 

const userProfile = {};

let propertyName = "firstName";
userProfile[propertyName] = "John";

propertyName = "lastName";
userProfile[propertyName] = "Candy";

propertyName = "age";
userProfile[propertyName] = 30;

propertyName = "email";
userProfile[propertyName] = "john.candy@unclebuck.com";

console.log("Exercise 6:", userProfile);

console.log("Exercise 7 is importing and exporting files.")

function makeSentence(noun = "cat", adjective = "orange") {
    return `Your ${noun} is ${adjective}.`;
}
console.log("Exercise 8:");
console.log(makeSentence());
console.log(makeSentence("dog", "brown"));
console.log(makeSentence("mom", "so fat"));

const pizza = 'tasty';

let taste = 'crummy' === 'tasty' ? "Yum" : "Yuck";
console.log("Exercise 9:", taste);

const localLangConfig = null;

let lang = localLangConfig || 'en';

lang = localLangConfig || 'en';

console.log("Exercise 10:", lang);

const localLangConfig2 = 'fr';
let lang2 = localLangConfig2 || 'es';
console.log("Exercise 10.1:", lang2);

const savedUserTheme = null;
let theme = savedUserTheme || 'dark';
console.log("Exercise 10.2:", theme);

const savedUserTheme3 = ''; 
let theme3 = savedUserTheme3 || 'light';
console.log("Exercise 10.3", theme3);

const adventurer = {
  name: "Alice",
};
console.log("Exercise 11:", adventurer.cat?.age);