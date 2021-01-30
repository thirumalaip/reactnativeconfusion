import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "react-native-elements";
import HomeComponents from "./HomeComponent";
import AboutComponents from "./AboutComponent";
import MenuComponents from "./MenuComponent";
import ContactComponents from "./ContactComponent";
import DishDetailComponents from "./DishDetailComponent";

const HomeNavigator = createStackNavigator();
function HomeNavigatorScreen({ navigation }) {
  return (
    <HomeNavigator.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#512DA8" },
        headerTintColor: "#fff",
        headerTitleStyle: { color: "#fff" },
      }}
    >
      <HomeNavigator.Screen
        name="Home"
        component={HomeComponents}
        options={{
          headerTitle: "Home",
          headerLeft: () => (
            <Icon
              name="menu"
              size={24}
              color="white"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        }}
      ></HomeNavigator.Screen>
    </HomeNavigator.Navigator>
  );
}

const AboutNavigator = createStackNavigator();
function AboutNavigatorScreen({ navigation }) {
  return (
    <AboutNavigator.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#512DA8" },
        headerTintColor: "#fff",
        headerTitleStyle: { color: "#fff" },
      }}
    >
      <AboutNavigator.Screen
        name="About"
        component={AboutComponents}
        options={{
          headerTitle: "About",
          headerLeft: () => (
            <Icon
              name="menu"
              size={24}
              color="white"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        }}
      ></AboutNavigator.Screen>
    </AboutNavigator.Navigator>
  );
}

const MenuNavigator = createStackNavigator();
function MenuNavigatorScreen({ navigation }) {
  return (
    <MenuNavigator.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#512DA8" },
        headerTintColor: "#fff",
        headerTitleStyle: { color: "#fff" },
      }}
    >
      <MenuNavigator.Screen
        name="Menu"
        component={MenuComponents}
        options={{
          headerTitle: "Menu",
          headerLeft: () => (
            <Icon
              name="menu"
              size={24}
              color="white"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        }}
      ></MenuNavigator.Screen>
      <MenuNavigator.Screen
        name="Dishdetail"
        component={DishDetailComponents}
        options={{
          headerTitle: "DishDetail"
         }}/>
    </MenuNavigator.Navigator>
  );
}


const ContactNavigator = createStackNavigator();
function ContactNavigatorScreen({ navigation }) {
  return (
    <ContactNavigator.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#512DA8" },
        headerTintColor: "#fff",
        headerTitleStyle: { color: "#fff" },
      }}
    >
      <ContactNavigator.Screen
        name="Contact"
        component={ContactComponents}
        options={{
          headerTitle: "Contact",
          headerLeft: () => (
            <Icon
              name="menu"
              size={24}
              color="white"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        }}
      ></ContactNavigator.Screen>
    </ContactNavigator.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="About Us">
        <Drawer.Screen name="Home" component={HomeNavigatorScreen} />
        <Drawer.Screen name="About Us" component={AboutNavigatorScreen} />
        <Drawer.Screen name="Menu" component={MenuNavigatorScreen} />
        <Drawer.Screen name="Contact Us" component={ContactNavigatorScreen} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
