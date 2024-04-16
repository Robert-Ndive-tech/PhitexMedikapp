import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { NavigationContainer } from "@react-navigation/native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
} from "react-native-vector-icons";
import Dashboard from "./Dashboard";
import MyCircularTouchableOpacity from "../Animation";

const Drawer = createDrawerNavigator();

function Medikdrawer() {
  return (
    <View style={styles.container}>
      <Text>Hi</Text>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen
            name="!Welcome to the Medik Hospital!"
            component={Dashboard}
            options={{
              drawerIcon: () => (
                <MaterialCommunityIcons
                  name="newspaper"
                  size={24}
                  color="black"
                />
              ),
            }}
          />
          <Drawer.Screen name="Article" component={SettingsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AA007500",
    alignItems: "Top",
    justifyContent: "left",
    marginTop: "20px",
    flexDirection: "row",
  },
  Text: {
    fontSize: 15,
    paddingTop: 15,
  },
  Text1: {
    fontSize: 22,
    paddingTop: 25,
    marginLeft: 45,
  },
  Text2: {
    fontSize: 18,
    paddingTop: 20,
    textDecorationLine: "underline",
    fontWeight: "bold",
  },

  touchable: {
    backgroundColor: "green", // Customize color
    width: 70, // Customize size
    height: 70, // Customize size
    borderRadius: 35, // Make it circular (optional)
    alignItems: "center", // Centers content within the touchable area
    justifyContent: "center", // Centers content within the touchable area
    marginLeft: "15%",

    // Transform properties for positioning
    transform: [
      { translateX: 50 }, // Move 50 pixels to the right on the X-axis
      { translateY: 30 }, // Move 100 pixels down on the Y-axis
    ],
  },
  marginO: {
    marginLeft: 20,
  },
});

const CustomDrawerContent = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "column",
          paddingLeft: 5,
        }}
      >
        {/* Your desired icon layout */}
        <TouchableOpacity style={styles.touchable}>
          <Text styles={{ fontSize: 10 }}>T</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Text1}>Tabot Jacob</Text>
        </TouchableOpacity>
        <Text style={styles.Text2}>Profile</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.Text}>
            <MaterialCommunityIcons name="home" size={20} color="black" />
            Edit profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Text style={styles.Text}>My appointments</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Text style={styles.Text}> History</Text>
        </TouchableOpacity>
        <Text style={styles.Text2}>Payments and Billings</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Text style={styles.Text}> Payment History</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Text style={styles.Text}> Medik Packages</Text>
        </TouchableOpacity>
        <Text style={styles.Text2}>Contact & Support</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Text style={styles.Text}> Language</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Text style={styles.Text}> Faqs</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Text style={styles.Text}> Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Text style={styles.Text}> Help/Support</Text>
        </TouchableOpacity>
        <Text style={styles.Text2}>App info</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Text style={styles.Text}> About</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Text style={styles.Text}> Terms and conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Text style={styles.Text}>Share App</Text>
        </TouchableOpacity>
        {/* Add more icons as needed */}
      </View>
      {/* Rest of your drawer content (optional) */}
    </View>
  );
};
export default Medikdrawer;

function Article() {}
const SettingsScreen = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        style={{ padding: 10 }}
        onPress={() => navigation.navigate("AccountSettings")} // Route to Account Settings
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialCommunityIcons name="account" size={24} color="black" />
          <Text style={{ marginLeft: 10 }}>Account Settings</Text>
        </View>
      </TouchableOpacity>
      {/* Add more TouchableOpacity components for other settings options */}
    </View>
  );
};
const CustomDrawerItem = ({ label, icons }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {icons.map((icon) => (
        <icon.type
          name={icon.name}
          size={20}
          color="black"
          key={icon.name}
          style={{ marginRight: 5 }}
        />
      ))}
      <Text>{label}</Text>
    </View>
  );
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome To the Hospital" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      {/* Add other screens for your stack navigation */}
    </Stack.Navigator>
  );
};
