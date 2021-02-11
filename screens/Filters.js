import React, { useState, useEffect,useCallback } from "react";
import { View, Text, StyleSheet } from "react-native";
import FilterSwitch from "../components/FilterSwitch";

const Filters = (props) => {
  const { navigation } = props;
  const [isGlutenFree, setGlutenFree] = useState(false);
  const [isLactoseFree, setIslactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const saveFilters = () => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
    console.log(appliedFilters);
  };
  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters, navigation]);
  return (
    <View style={styles.screens}>
      <Text style={styles.title}>Filters And Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        value={isGlutenFree}
        onChange={(newValue) => setGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Lactose-free"
        value={isLactoseFree}
        onChange={(newValue) => setIslactoseFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        value={isVegan}
        onChange={(newValue) => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Vegetarian"
        value={isVegetarian}
        onChange={(newValue) => setIsVegetarian(newValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screens: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    margin: 20,
    fontSize: 22,
    textAlign: "center",
  },
});

export default Filters;
