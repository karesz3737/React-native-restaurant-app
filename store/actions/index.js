export const TOGGLE_FAVORITE = "ADD_FAVORITE";

export const addFavorite = (id) => {
  return {
    type: TOGGLE_FAVORITE,
    id,
  };
};
