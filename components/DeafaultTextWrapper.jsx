import React from "react";
import { StyleSheet, View } from "react-native";
const DefaultTextWrapper = (props) => {
  return <View style={styles.textStyle}>{props.children}</View>;
};

const styles = StyleSheet.create({
  textStyle: {},
});
export default DefaultTextWrapper;
