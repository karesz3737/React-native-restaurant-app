import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { enableScreens } from "react-native-screens";
import { MainNavigation } from "./navigations/MealsNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import MainReducer from "./store/reducers/index";


const reducers = combineReducers({
  meals: MainReducer,
});
const store = createStore(reducers);

enableScreens();

export default function App() {
  const [isLoded, setIsLoaded] = useState(false);
  const fetchFonts = () => {
    return Font.loadAsync({
      "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
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
      <Provider store={store}>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </Provider>
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
