import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import DefaultTextWrapper from "../components/DeafaultTextWrapper";
import { useSelector } from "react-redux";

const ListItem = (props) => {
  return (
    <View syle={styles.listitem}>
      <DefaultTextWrapper>{props.children}</DefaultTextWrapper>
    </View>
  );
};

const MealDetail = (props) => {
  const { id, title } = props.route.params;
  const mealSelected = useSelector((state) => state.meals.meals);
  const selectedMeal = mealSelected.find((meal) => meal.id === id);
  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultTextWrapper>
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
