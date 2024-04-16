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

const Consultant = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.consult}>
        <Text style={styles.Text}>Consultation History</Text>
        <TouchableOpacity>
          <Text style={styles.consult1}>View</Text>
        </TouchableOpacity>
        <Text style={styles.Text1}>Check out Here are your detail...</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Consultant;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "Top",
    justifyContent: "left",
  },
  title: {
    fontsize: 20,
    marginTop: 150,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#333",
    textAlign: "center",
  },
  Text: {
    fontSize: 20,
    color: "#00AA00FF",
    alignContent: "center",
    marginLeft: "20%",
  },
  Text1: {
    alignContent: "center",
    marginLeft: "20%",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginLeft: "25%", // Adjust the resizeMode as needed
  },

  button: {
    display: "flex",
    width: "10",
    marginLeft: "25%",
    borderRadius: 8,
    backgroundColor: "#9ACD32",
  },
  consult: {
    backgroundColor: "#00AA0050",
    marginTop: 10,
    padding: 10,

    justifyContent: "center",
    width: "98%",
    borderRadius: 20,
  },
  consult1: {
    backgroundColor: "#00AA00AA",
    marginRight: 20,
    width: 50,
    padding: 8,
    borderRadius: 10,
    color: "white",
    textAlign: "center",
    marginLeft: "80%",
  },
});
