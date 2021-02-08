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

const CustomButton = () => {
  return (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="favorite"
        iconName="ios-star"
        onPress={() => console.log("HI there")}
      />
    </HeaderButtons>
  );
};
export default CustomButton;
