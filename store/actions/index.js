export const TOGGLE_FAVORITE = "ADD_FAVORITE";
export const ADD_FILTERS = "ADD_FILTERS";
export const addFavorite = (id) => {
  return {
    type: TOGGLE_FAVORITE,
    id,
  };
};

export const addFilters = (filterSet) => {
  return {
    type: ADD_FILTERS,
    filters: filterSet,
  };
};
