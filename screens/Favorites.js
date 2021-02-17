import React from "react";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
const Favorites = (props) => {
  const myFavorites = useSelector((state) => state.meals.favoriteMeals);

  return <MealList listData={myFavorites} navigation={props.navigation} />;
};

export default Favorites;
