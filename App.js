import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { enableScreens } from "react-native-screens";
import { MainNavigation } from "./navigations/MealsNavigation";
import { MealtabNavigator } from "./navigations/MealsNavigation";
import { NavigationContainer } from "@react-navigation/native";
enableScreens();

export default function App() {
  const [isLoded, setIsLoaded] = useState(false);
  const fetchFonts = () => {
    return Font.loadAsync({
      "oppen-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
      "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    });
  };
  if (!isLoded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setIsLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <NavigationContainer>
        {/* <MealtabNavigator /> */}
        <MainNavigation />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
