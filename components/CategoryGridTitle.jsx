import React from "react";
import colors from "../constants/colors";

import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  ImageBackground,
  Image,
} from "react-native";

const TitleButton =
  Platform.OS === "android" && Platform.version >= 21
    ? TouchableNativeFeedback
    : TouchableOpacity;

const CategoryGridTitle = ({ title, id, navigation, color, image }) => {
  // console.log(image);
  const img = "../images/breakfast.png";
  const ii = "../images/italian.png";
  return (
    <View style={[styles.gridItem]}>
      <TitleButton
        style={{ flex: 1 }}
        onPress={() => {
          navigation.navigate("CategoryMeals", {
            categoryId: id,
            title,
          });
        }}
      >
        <View style={{ backgroundColor: `${color}` }}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <ImageBackground
          source={{ uri: `${image}` }}
          style={{ width: "100%", height: "90%" }}
        />
      </TitleButton>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    marginBottom: 12,
    height: 150,
    width: "100%",
    overflow:
      Platform.OS === "android" && Platform.version >= 21
        ? "hidden"
        : "visible",
    elevation: 4,
    shadowColor: "#ccc",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    padding: 15,
    borderRadius: 10,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    textAlign: "center",
    justifyContent: "center",
    paddingVertical: 15,
  },
});
export default CategoryGridTitle;
