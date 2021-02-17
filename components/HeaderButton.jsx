import React from "react";
import { Platform } from "react-native";

import {
  HeaderButtons,
  Item,
  HeaderButton,
} from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import colors from "../constants/colors";

export const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === "android" ? colors.primary : "white"}
    />
  );
};
// "ios-star"
const CustomButton = (props) => {
  return (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="favorite"
        iconName={props.my.isFavorite ? "ios-star" : "ios-star-outline"}
        onPress={() => props.my.addFavorite()}
      />
    </HeaderButtons>
  );
};
export default CustomButton;
