import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Filters = (prosp) => {
  return (
    <View style={styles.screens}>
      <Text>Filters screen</Text>
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

export default Filters;
