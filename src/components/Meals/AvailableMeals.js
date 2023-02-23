import classes from "./AvailableMeals.module.css"
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
    {
      id: "m1",
      name: "FRANKIE'S CLASSIC BUFFALO",
      description: "Spicy & Tangy",
      price: 19.99,
    },
    {
      id: "m2",
      name: "KEVIN'S BACON",
      description: "Bbq sauce, thin cut, chicken wings, chili seasoning, garlic",
      price: 17.5,
    },
    {
      id: "m3",
      name: "WICKED WASABI",
      description: "Chicken wings, orange marmalade, apple cider vinegar",
      price: 16.99,
    },
    {
      id: "m4",
      name: "NAGOYA TEBASAKI",
      description: "crispy deep fried wings",
      price: 15.99,
    },
    {
      id: "m5",
      name: "Fried chicken",
      description: "Special crispy chicken.",
      price: 17.99,
    },
    {
      id: "m6",
      name: "SALT & PEPPER",
      description: "Party wings, sesame oil, garlic, green onions, pepper flakes",
      price: 10.99,
    },
    {
      id: "m7",
      name: "KOREAN",
      description: "Chicken wings, soy sauce, dark brown sugar, spring onion",
      price: 10.99,
    },
    {
      id: "m8",
      name: "SPICY CHEDDER WINGS",
      description: "Chicken wings, apple cider vinegar, pickled jalapeno",
      price: 10.99,
    },
  ];
  
  const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    ));
  
    return (
      <section className={classes.meals}>
        
          <ul>{mealsList}</ul>
        
      </section>
    );
  };
  
  export default AvailableMeals;