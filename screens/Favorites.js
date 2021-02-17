import React from "react";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import DefaultTextWrapper from "../components/DeafaultTextWrapper";
const Favorites = (props) => {
  const myFavorites = useSelector((state) => state.meals.favoriteMeals);
  if (myFavorites.length === 0 || !myFavorites) {
    return (
      <View style={styles.content}>
        <DefaultTextWrapper>
          You dont't have any Favorites,add some ....
        </DefaultTextWrapper>
      </View>
    );
  }

  return <MealList listData={myFavorites} navigation={props.navigation} />;
};
const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Favorites;
