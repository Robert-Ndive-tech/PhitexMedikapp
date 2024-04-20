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
      <View style={styles.container2}>
        <TouchableOpacity style={styles.consult}>
          <Text style={styles.Text}>Consultation History</Text>
          <TouchableOpacity>
            <Text style={styles.consult1}>View</Text>
          </TouchableOpacity>
          <Text style={styles.Text1}>Check out Here are your detail...</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.consult}>
          <Text style={styles.Text}>Upcoming Consultations</Text>
          <TouchableOpacity>
            <Text style={styles.consult1}>View</Text>
          </TouchableOpacity>
          <Text style={styles.Text1}>
            Check out Here are your upcoming Consultations
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container1}>
        <Text style={styles.Text2}>Who do you want to consult with?</Text>
        <TouchableOpacity style={styles.consult2}>
          <Text style={styles.Text2}>Doctor</Text>
        </TouchableOpacity>
        <Text style={styles.Text3}>
          Click here to consult to consult with Doctor on Medik
        </Text>
        <TouchableOpacity style={styles.consult2}>
          <Text style={styles.Text2}>Consult AI</Text>
        </TouchableOpacity>
        <Text style={styles.Text3}>
          Click here to consult to with Medik's AI assistant
        </Text>
        <TouchableOpacity style={styles.consult3}>
          <Text style={styles.Text2}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Consultant;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#273b45",
    alignItems: "Top",
    justifyContent: "left",
  },
  container1: {
    flex: 2,
  },
  container2: {
    marginTop: "5%",
    flex: 2,
  },
  consult2: {
    backgroundColor: "transparent",
    margin: 15,
    marginLeft: 55,
    marginRight: 55,
    padding: 10,
    paddingBottom: 4,
    paddingTop: 4,
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 1,
  },

  consult3: {
    backgroundColor: "#4CAF50",
    margin: 15,
    marginLeft: 45,
    marginRight: 45,
    padding: 10,
    paddingBottom: 4,
    paddingTop: 4,
    borderRadius: 8,
  },
  title: {
    fontsize: 20,
    marginTop: 150,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  Text: {
    fontSize: 20,
    color: "#00AA00FF",
    marginLeft: "20%",
  },
  Text1: {
    alignContent: "center",
    marginLeft: "20%",
    color: "#b5adab",
  },
  Text2: {
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center",
    marginBottom: 10,
    marginTop: 0,
    padding: 0,
  },
  Text3: {
    fontSize: 11,
    textAlign: "center",
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
    padding: 5,
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
