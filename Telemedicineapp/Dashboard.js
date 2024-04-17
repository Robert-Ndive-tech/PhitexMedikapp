import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Icon from "react-native-vector-icons/FontAwesome";
import Icon1 from "react-native-vector-icons/MaterialIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "react-native-vector-icons";
import {
  StyleSheet,
  TextInput,
  Image,
  Text,
  View,
  Button,
  TouchableOpacity,
  Alert,
  Animated,
  LayoutAnimation,
} from "react-native";

import Homepage from "./Dashboardroutes/Homepage";
import Consultant from "./Dashboardroutes/Consultpage";
import Research from "./Dashboardroutes/Researchpage";
import Facilities from "./Dashboardroutes/Facilitiespage";
import Assistantpage from "./Dashboardroutes/Asssitantpage";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Dashboard() {
  const opacity = new Animated.Value(0); // Initial opacity 0
  const [isVisible, setIsVisible] = useState(false);
  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1, // Animate to opacity 1
      duration: 1000, // Animation duration in milliseconds
      useNativeDriver: true, // Optimize for performance (optional)
    }).start();
  };

  const [imagePosition, setImagePosition] = useState("flex-start");

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home"; // Adjust icon names based on your icon library
            } else if (route.name === "Consult") {
              iconName = focused ? "settings" : "settings"; // Adjust icon names based on your icon library
            } else if (route.name === "Record") {
              iconName = focused ? "edit" : "edit";
            } else if (route.name === "Facilities") {
              iconName = focused ? "search" : "search";
            } else if (route.name === "Assistant") {
              iconName = focused ? "person" : "person";
            }
            // Return the icon component
            return (
              <MaterialIcons name={iconName} size={size} color={color} /> // Use Ionicons or other icon library
            );
          },
        })}
      >
        <Tab.Screen name="Home" component={Homepage} />
        <Tab.Screen name="Consult" component={Consultant} />
        <Tab.Screen name="Record" component={Research} />
        <Tab.Screen name="Facilities" component={Facilities} />
        <Tab.Screen name="Assistant" component={Assistantpage} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00007500",
    alignItems: "Top",
    justifyContent: "left",
    marginTop: "20px",
  },
  title: {
    fontsize: 20,
    marginTop: 150,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#333",
    textAlign: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginLeft: "25%", // Adjust the resizeMode as needed
  },
  input: {
    width: "50%",
    height: "20em",
    backgroundColor: "#00AAAA",
    marginLeft: 10,
    textAlign: "center",
    marginTop: "50%",
    marginLeft: "25%",
  },
  button: {
    display: "flex",
    width: "10",
    marginLeft: "25%",
    borderRadius: 8,
    backgroundColor: "#9ACD32",
  },
});
