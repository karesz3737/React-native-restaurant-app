import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import colors from "../constants/colors";

const FilterSwitch = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.label}</Text>
      <Switch
        value={props.value}
        onValueChange={props.onChange}
        trackColor={{
          true: Platform.OS === "android" ? "#ccc" : colors.primary,
        }}
        thumbColor={Platform.OS === "android" ? colors.secondary : "white"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 20,
  },
});

export default FilterSwitch;
