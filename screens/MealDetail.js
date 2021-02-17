import React, { useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import DefaultTextWrapper from "../components/DeafaultTextWrapper";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite } from "../store/actions/index";

const ListItem = (props) => {
  return (
    <View syle={styles.listitem}>
      <DefaultTextWrapper>{props.children}</DefaultTextWrapper>
    </View>
  );
};

const MealDetail = ({ route, navigation }) => {
  const { id } = route.params;
  const dispatch = useDispatch();
  const favoriteisCurrent = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === id)
  );
  const mealSelected = useSelector((state) => state.meals.meals);
  const selectedMeal = mealSelected.find((meal) => meal.id === id);
  const dispatchFavorite = useCallback(() => {
    dispatch(addFavorite(id));
  }, [dispatch, id]);

  useEffect(() => {
    navigation.setParams({ addFavorite: dispatchFavorite });
  }, [selectedMeal]);

  useEffect(() => {
    navigation.setParams({ isFavorite: favoriteisCurrent });
  }, [favoriteisCurrent]);
  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultTextWrapper style={styles.listitem}>
          <Text>{selectedMeal.duration}m</Text>
        </DefaultTextWrapper>
        <DefaultTextWrapper>
          <Text>{selectedMeal.complexity.toUpperCase()}</Text>
        </DefaultTextWrapper>
        <DefaultTextWrapper>
          <Text>{selectedMeal.affordability.toUpperCase()}</Text>
        </DefaultTextWrapper>
      </View>
      <Text style={styles.title}>Indredients</Text>
      <ListItem></ListItem>
      {selectedMeal.ingredients.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </ScrollView>
  );
};

const smallWidth = Dimensions.width <= 400;
const smallHeigth = Dimensions.height <= 768;
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
  },
  title: {
    fontFamily: "open-sans-bold",
    textAlign: "center",
    fontSize: smallHeigth ? 18 : 20,
  },
  listitem: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
  },
});

export default MealDetail;
