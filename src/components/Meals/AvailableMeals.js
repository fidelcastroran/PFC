import classes from "./AvailableMeals.module.css"
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Double cheese",
      description: "The Classic Burger",
      price: 19.99,
    },
    {
      id: "m2",
      name: "Fried chicken",
      description: "Special crispy chicken.",
      price: 17.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, bbq, meaty",
      price: 16.99,
    },
    {
      id: "m4",
      name: "Beet Burger",
      description: "Red beet, brown rice and green...",
      price: 15.99,
    },
    {
      id: "m5",
      name: "Vegan BBQ Burger",
      description: "Toasted sesame oil, wild arugula,srircha...",
      price: 17.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Fresh...and green...",
      price: 10.99,
    },
    {
      id: "m4",
      name: "Fruit delight",
      description: "Refeshing...and Tropical Fruits...",
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