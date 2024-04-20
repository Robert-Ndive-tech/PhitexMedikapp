import react, { useState, useCallback } from "react";
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
import ImageCarousel from "./Imagestockpile";

const Research = () => {
  const [info, setInfo] = useState(false);
  const [treat, setTreat] = useState(false);
  const [Change, setChange] = useState(1);
  const [file, setFile] = useState(false);
  const [sfile, setSfile] = useState("");
  //Animation codes
  const [isVisible, setIsVisible] = useState(false);
  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1, // Animate to opacity 1
      duration: 1000, // Animation duration in milliseconds
      useNativeDriver: true, // Optimize for performance (optional)
    }).start();
  };

  const toggleVisibility = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (file || info) {
      setFile(false);
      setInfo(false);
    }
    setTreat(true);
  };
  const toggleVisibility1 = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (file || treat) {
      setFile(false);
      setTreat(false);
    }
    setInfo(true);
  };

  const toggleVisibility2 = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (info || treat) {
      setInfo(false);
      setTreat(false);
    }
    setFile(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <TouchableOpacity onPress={toggleVisibility1}>
          <Text style={styles.text}>Personal Info</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleVisibility}>
          <Text style={styles.text}>Treatment </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleVisibility2}>
          <Text style={styles.text}>Files</Text>
        </TouchableOpacity>
      </View>

      {info && (
        <Animated.View>
          <View style={styles.container2}>
            <Text style={styles.text1}>Height</Text>
            <TextInput style={styles.TextInput} />
          </View>
          <View style={styles.container2}>
            <Text style={styles.text1}>Weight</Text>
            <TextInput style={styles.TextInput} />
          </View>
          <View style={styles.container2}>
            <Text style={styles.text1}>Allergies</Text>
            <TextInput style={styles.TextInput} />
          </View>
          <View style={styles.container2}>
            <Text style={styles.text1}>Symptoms</Text>
            <TextInput style={styles.TextInput} />
          </View>
          <View style={styles.container2}>
            <Text style={styles.text1}>Major medical conditions</Text>
            <TextInput style={styles.TextInput} />
          </View>
        </Animated.View>
      )}
      {file && (
        <Animated.View>
          <TextInput placeholder="search" style={styles.TextInput1} />
          <Text style={styles.text1}>Files will come from backend</Text>
        </Animated.View>
      )}
      {treat && (
        <Animated.View>
          <Text style={styles.text1}>Here is Your Treatment page</Text>
        </Animated.View>
      )}
    </View>
  );
};

export default Research;

const styles = StyleSheet.create({
  container1: {
    justifyContent: "center", // Align children vertically
    alignItems: "center",
    flexDirection: "row",
    borderBottomColor: "#b5adab", // Change the color as needed
    borderBottomWidth: 1, // Adjust the thickness of the line
    marginVertical: 10,
  },
  container: {
    backgroundColor: "#273b45",
    flex: 1,
  },
  TextInput: {
    backgroundColor: "transparent",

    width: "80%",
    height: 40,
    padding: 0,
    color: "#b5adab",
  },

  TextInput1: {
    backgroundColor: "transparent",
    color: "black",
    width: "80%",
    height: 35,
    padding: 0,
    marginLeft: 20,
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 1,
    textAlign: "center",
    color: "#b5adab",
  },
  container2: {
    flexDirection: "column",
    borderBottomColor: "#b5adab", // Change the color as needed
    borderBottomWidth: 1, // Adjust the thickness of the line
    marginVertical: 10,
    paddingTop: 0,
    color: "#b5adab",
  },
  text1: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#b5adab",
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    marginRight: 40,
    fontWeight: "bold",
    color: "#b5adab",
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

//USING USECALLBACK()
/*const handlePress = useCallback(() => {
    setInfo(true);
    if (info) {
      setInfo(!info);
    }
    console.log(info);
  }, []);*/
