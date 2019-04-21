// var playlist =  {
//   John_Legend: 'ood morning',
//   Xavier: 'Blind man'
// };

var meals = {};

var meals = new Object ();

var meals = {
    breakfast: "oatmeal"
};

var meals = new Object ({
  breakfast: 'oatmeal'
})

var meals = {
  breakfast: 'avocado',
  lunch: 'avocado',
  dinner: 'avocado'
}

const firstMeal = 'breakfast'
var meals = {firstMeal: 'oatmeal'}

var meals = { [firstMeal]: 'oatmeal' }

meals.breakfast

meals['breakfast']

meals[firstMeal]

meals.firstMeal

var meals = {
  breakfast: 'oatmeal',
  lunch: 'burrito',
  dinner: 'steak'
}

meals.snack = 'yogurt';

meals.snack

meals['snack']

meals.lunch


meals['second breakfast'] = 'bagel'

var sweetMeal = 'dessert'

meals[sweetMeal] = 'cake';

meals.dessert

meals[sweetMeal]

meals.breakfast = 'cereal'

function dog(obj, key, value) {
  
  obj[key] = value
  
  return obj
}

const recipe = {eggs: 3}

cooking(recipe, 'flour','3 cups')

Objec.assign( {}, {foo: 'bar' })

Object.assign({ eggs: 3 }, {
  flour: '1 cup'
})

Object.assign({ eggs: 3 }, {
  chocolate: '1 cup', flour: '2 cups'
} , { flour: '1/2 cup'})

function coomar(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}

function goer(targetObject, updateObject) {
  return Object.assign({}, targetObject, updateObject)
}

var meals = { 
  breakfast: "oatmeal",
  lunch: "turkey sandwich",
  dinner: "steak and potatoes"
};

delete meals.dinner;


var meals = {
  breakfast: "oatmeal",
  lunck: "turkey sandwich",
  dinner: "steak and potatoes"
  
};

meals.breakfast = ["oatmeal", "banana"];

var meals = {
  breakfast: "oatmeal",
  lunck: "turkey sandwich",
  dinner: "steak and potatoes"
  
};

Object.assign ({}, meals, {
  breakfast: ['oatmeal', 'banana']
})








