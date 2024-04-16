import react from "react";
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

const Homepage = () => {
  return <View></View>;
};

export default Homepage;

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
