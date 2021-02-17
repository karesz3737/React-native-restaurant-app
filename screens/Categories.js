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
      />
    );
  };
  return (
    <View style={styles.screens}>
      <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
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

export default Categories;
