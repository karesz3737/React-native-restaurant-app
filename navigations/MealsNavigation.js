import React from "react";
import { Platform, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Categories from "../screens/Categories";
import CategoryMeals from "../screens/CategoryMeals";
import MealDetail from "../screens/MealDetail";
import colors from "../constants/colors";
import Favorites from "../screens/Favorites";
import CustomButton from "../components/HeaderButton";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Filters from "../screens/Filters";
import { CustomHeaderButton } from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const Stack = createStackNavigator();

const MealNavigator = () => {
  return (
    <Stack.Navigator mode="card" initialRouteName="Categories">
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={({ navigation }) => ({
          headerTitle: "Meal Categories",
          headerStyle: {
            backgroundColor: Platform.OS === "ios" ? colors.primary : "#f5d314",
          },
          headerTintColor: "white",
          headerBackTitleStyle: { fontFamily: "open-sans-bold" },
          headerTitleStyle: { fontFamily: "open-sans-bold" },
          headerLeft: () => {
            return (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                  title="Menu"
                  iconName="ios-menu"
                  onPress={() => {
                    navigation.openDrawer();
                  }}
                />
              </HeaderButtons>
            );
          },
        })}
      />
      <Stack.Screen
        name="CategoryMeals"
        component={CategoryMeals}
        options={({ route }) => ({
          headerTitle: route.params.title,
          headerStyle: {
            backgroundColor: Platform.OS === "ios" ? colors.primary : "#f5d314",
          },
          headerTitleStyle: {
            fontFamily: "open-sans-bold",
          },
          headerTintColor: "white",
        })}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetail}
        options={({ route }) => ({
          headerTitle: route.params.title,
          headerRight: () => <CustomButton my={route.params} />,
          headerStyle: {
            backgroundColor: Platform.OS === "ios" ? colors.primary : "#f5d314",
          },

          headerBackTitleStyle: {
            fontFamily: "open-sans",
          },
          headerTintColor: "white",
        })}
      />
    </Stack.Navigator>
  );
};
const StackOne = createStackNavigator();
const FavoriteStackNavigator = () => {
  return (
    <StackOne.Navigator>
      <StackOne.Screen
        name="Favorites"
        component={Favorites}
        options={({ navigation }) => ({
          headerTitle: "Meal Categories",
          headerStyle: {
            backgroundColor: Platform.OS === "ios" ? colors.primary : "#f5d314",
          },
          headerTintColor: "white",
          headerLeft: () => {
            return (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                  title="Menu"
                  iconName="ios-menu"
                  onPress={() => {
                    navigation.openDrawer();
                  }}
                />
              </HeaderButtons>
            );
          },
        })}
      />
      <StackOne.Screen
        name="MealDetail"
        component={MealDetail}
        options={({ navigation }) => ({
          headerTitle: "Meal Categories",
          headerStyle: {
            backgroundColor: Platform.OS === "ios" ? colors.primary : "#f5d314",
          },
          headerTintColor: "white",
          headerLeft: () => {
            return (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                  title="Menu"
                  iconName="ios-menu"
                  onPress={() => {
                    navigation.openDrawer();
                  }}
                />
              </HeaderButtons>
            );
          },
        })}
      />
    </StackOne.Navigator>
  );
};

const Tab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

export const MealtabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Categories"
      barStyle={{ backgroundColor: "#f5d314" }}
      shifting={true}
      tabBarOptions={{
        activeTintColor: "#c9d0d1",
        labelStyle: {
          fontFamily: "open-sans-bold",
        },
      }}
    >
      <Tab.Screen
        name="Meals"
        component={MealNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="ios-restaurant"
                size={25}
                color={focused ? colors.primary : "silver"}
              />
            );
          },
          tabBarColor: "#f5d314",
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="ios-star"
                size={25}
                color={focused ? colors.primary : "silver"}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
const StackTwo = createStackNavigator();
const FilterStacknavigator = () => {
  return (
    <StackTwo.Navigator>
      <StackTwo.Screen
        name="Filters"
        component={Filters}
        options={{ headerTitle: "Filters" }}
        options={({ navigation, route }) => ({
          headerTitle: "Filters",
          headerStyle: {
            backgroundColor: Platform.OS === "ios" ? colors.primary : "#f5d314",
          },
          headerTintColor: "white",
          headerLeft: () => {
            return (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                  title="Menu"
                  iconName="ios-menu"
                  onPress={() => {
                    navigation.openDrawer();
                  }}
                />
              </HeaderButtons>
            );
          },
          headerRight: () => {
            return (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                  title="Save"
                  iconName="ios-save"
                  onPress={() => route.params["save"]}
                />
              </HeaderButtons>
            );
          },
        })}
      />
    </StackTwo.Navigator>
  );
};
const Drawer = createDrawerNavigator();
const islargeScreen = Dimensions.width >= 768;
export const MainNavigation = () => {
  return (
    <Drawer.Navigator
      drawerType={islargeScreen ? "permanent" : "back"}
      drawerStyle={islargeScreen ? null : { width: "100%" }}
      overlayColor="transparent"
      drawerStyle={{
        backgroundColor: "#edf4f5",
        width: 600,
      }}
    >
      <Drawer.Screen
        name="FavMeals"
        component={MealtabNavigator}
        title="Favorite Meals"
        headerTitle="Favorite Meals"
        options={{ drawerLabel: "Favorite Meals" }}
      />
      <Drawer.Screen
        name="filters"
        component={FilterStacknavigator}
        options={{ drawerLabel: "Filters" }}
      />
    </Drawer.Navigator>
  );
};
