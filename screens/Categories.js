import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

import CategoryGridTitle from "../components/CategoryGridTitle";

const Categories = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTitle
        title={itemData.item.title}
        id={itemData.item.id}
        navigation={props.navigation}
        color={itemData.item.color}
        image={itemData.item.image}
      />
    );
  };
  return (
    <View style={styles.screens}>
      <FlatList data={CATEGORIES} renderItem={renderGridItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  screens: {
    flex: 1,
  },
});

export default Categories;
