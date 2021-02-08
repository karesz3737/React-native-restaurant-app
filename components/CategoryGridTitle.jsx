import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

const TitleButton =
  Platform.OS === "android" && Platform.version >= 21
    ? TouchableNativeFeedback
    : TouchableOpacity;

const CategoryGridTitle = ({ title, id, navigation, color }) => {
  return (
    <View style={styles.gridItem}>
      <TitleButton
        style={{ flex: 1 }}
        onPress={() => {
          navigation.navigate("CategoryMeals", {
            categoryId: id,
            title,
          });
        }}
      >
        <View style={{ ...styles.header, ...{ backgroundColor: `${color}` } }}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TitleButton>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    margin: 15,
    height: 150,
    width: "40%",
    overflow:
      Platform.OS === "android" && Platform.version >= 21
        ? "hidden"
        : "visible",
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    elevation: 2,
    padding: 15,
    borderRadius: 10,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    textAlign: "right",
  },
});
export default CategoryGridTitle;
