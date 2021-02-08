import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetail = (props) => {
  const { id, title } = props.route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === id);
  return (
    <View style={styles.screens}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title="go back home"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screens: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetail;
