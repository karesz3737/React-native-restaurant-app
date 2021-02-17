import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE, ADD_FILTERS } from "../actions/index";
const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingId = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.id
      );

      if (existingId >= 0) {
        const favoriteArray = [...state.favoriteMeals];
        favoriteArray.splice(existingId, 1);
        return {
          ...state,
          favoriteMeals: favoriteArray,
        };
      } else {
        const mealExist = state.meals.find((meal) => meal.id === action.id);
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.concat(mealExist),
        };
      }
    case ADD_FILTERS:
      const filterdmeals = action.filters;
      const mealsFiltered = state.filteredMeals.filter((item) => {
        if (filterdmeals.isGlutenFree && !item.isGlutenFree) {
          return false;
        } else if (filterdmeals.isLactoseFree && !item.isLactoseFree) {
          return false;
        } else if (filterdmeals.isVegetarian && !item.isVegetarian) {
          return false;
        } else if (filterdmeals.isVegan && !item.isVegan) {
          return false;
        }
        return true;
      });
      return {
        ...state,
        filteredMeals: mealsFiltered,
      };

    default:
      return state;
  }
};

export default MainReducer;
