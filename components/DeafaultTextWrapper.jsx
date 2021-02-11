import React from "react";
import { StyleSheet, View, Text } from "react-native";
const DefaultTextWrapper = (props) => {
  return (
    <View style={styles.textStyle}>
      <Text>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "open-sans",
  },
});
export default DefaultTextWrapper;
