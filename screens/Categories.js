import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import colors from "../constants/colors";
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
