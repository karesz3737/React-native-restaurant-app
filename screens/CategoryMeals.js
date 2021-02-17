import React from "react";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";

const Categorymeals = ({ route, navigation }) => {
  const { categoryId } = route.params;
  const mealsCurrent = useSelector((state) => state.meals.filteredMeals);

  const displayMeals = mealsCurrent.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealList navigation={navigation} listData={displayMeals} />;
};

export default Categorymeals;
