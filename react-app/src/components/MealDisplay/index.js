import React from "react";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllMeals } from "../../store/meal";
import { deleteFromGroceryList, addToGroceryList } from "../../store/grocerylist";
import { getAllIngredients } from "../../store/ingredient";
import MealIngredientsForm from "../MealIngredientsForm";

const MealDisplay = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { mealId } = useParams();
    const meal = useSelector(state => state?.meal[mealId])
    const ingredients = useSelector((state) => state?.ingredient?.ingredients);
    console.log('HERE IT IS', meal?.meal_ingredients.forEach(ingredient => ingredient.ingredient['name']))
    console.log("THE NEXT ONE", meal?.meal_ingredients[0].ingredient.name);

     useEffect(() => {
       dispatch(getAllMeals());
     }, []);

    // useEffect(() => {
    //     dispatch(getAllIngredients())
    // }, [])

    if (!meal){
        history.push('/meals')
    }
    return (
      <div>
        <div className="meal-display-container">
          <div>{meal?.name}</div>
          <div>Cuisine: {meal?.cuisine}</div>
          <div>INGREDIENTS</div>
          {/* <div>{meal?.meal_ingredients[0].ingredient.name}</div> */}
          <div>{meal?.meal_ingredients.map((ingredient) => {
              return (
                  <div>{ingredient.ingredient.name}</div>
              )
          })}</div>
          <div> RECIPE</div>
          <div>{meal?.recipe}</div>
          <button> Edit Meal</button>
          <button> Add ingredients to meal </button>
        </div>
        <MealIngredientsForm mealId={mealId} />
      </div>
    );

}

export default MealDisplay