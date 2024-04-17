import react, { useState } from "react";
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
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Research = () => {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          name="Component1"
          component={Personal_info}
          // Optional: Customize header options (e.g., title)
          options={{ title: "Component 1" }}
        />
        <Stack.Screen
          name="Component2"
          component={Treatment}
          // Optional: Customize header options
          options={{ title: "Component 2" }}
        />
        <Stack.Screen
          name="Component3"
          component={File}
          // Optional: Customize header options
          options={{ title: "Component 3" }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default Research;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#eee",
  },
  contentContainer: {
    flex: 1,
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
const HorizontalStack = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNavigation = (index) => {
    setActiveIndex(index);
    navigation.navigate(
      index === 0 ? "Personal Info" : index === 1 ? "Treatment" : "Files"
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Personal Info"
          onPress={() => handleNavigation(0)}
          disabled={activeIndex === 0}
        />
        <Button
          title="Treatment"
          onPress={() => handleNavigation(1)}
          disabled={activeIndex === 1}
        />
        <Button
          title="Files"
          onPress={() => handleNavigation(2)}
          disabled={activeIndex === 2}
        />
      </View>
      <View style={styles.contentContainer}>
        {activeIndex === 0 && <Personal_info />}
        {activeIndex === 1 && <Treatment />}
        {activeIndex === 2 && <File />}
      </View>
    </View>
  );
};
const Personal_info = () => {
  return <Text>Hi i am first component</Text>;
};
const Treatment = () => {
  return <Text>Hi i am second component</Text>;
};
const File = () => {
  return <Text>Hi i am third component</Text>;
};
