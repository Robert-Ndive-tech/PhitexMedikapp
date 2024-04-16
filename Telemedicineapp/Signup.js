import react, { useState } from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import { CheckBox } from "@rneui/themed";
import image1 from "../../assets/medik1.png";

const Dashboard = () => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isChecked, setIsChecked] = useState();
  const [visible, setVisble] = useState(true);

  handleclick = () => {
    console.log("you have successfully registered");
  };
  handlePress = () => {
    setVisble(false);
  };

  return (
    <View style={styles.Container1}>
      <View style={styles.Container2}>
        <Text style={styles.Text}>Welcome to Medik</Text>
        <Text>
          Join us now on your journey to better health, connect with health care
          proffessionals through virtualon consultations, manage your medical
          records ,track your health progress, shedule appointments and recieve
          personailized health tips
        </Text>
        <Image
          source={image1}
          alt="medik picture"
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.Text}>SIGN UP</Text>
      <Text style={styles.Text}>
        Please in the personal information details
      </Text>

      <TextInput
        style={styles.TextInput}
        ref={name}
        value={name}
        placeholder="Enter your Name"
      />
      <TextInput
        style={styles.TextInput}
        ref={name}
        value={email}
        placeholder="Enter your Email"
      />
      <TextInput
        style={styles.TextInput}
        ref={name}
        value={username}
        placeholder="Enter your Username"
      />
      <TextInput
        style={styles.TextInput}
        ref={name}
        value={password}
        placeholder="Enter your Password"
      />
      <CheckBox
        title="By clicking on the register, you agree to our terms and condtion,privacy policy and copy right policy"
        checked={isChecked}
        onPress={() => setIsChecked(!isChecked)}
      />
      <Button title="Register" onPress={handleclick()} style={styles.Button} />
    </View>
  );
};

const styles = StyleSheet.create({
  Container1: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
    color: "white",
    fontFamily: "Arial",
    display: "flex",
    fontWeight: "bolder",
  },
  Container2: {
    flex: 1,

    marginBottom: 50,
    alignItems: "center",
    color: "white",
  },
  TextInput: {
    backgroundColor: "transparent",
    color: "black",
    width: "80%",
    height: 60,
    marginBottom: 20,
    justifyContent: "center",
  },
  Text: {
    marginleft: 10,
    color: "green",
  },
  Textadjust: {
    marginLeft: "20%",
  },
  Button: {
    flex: 1,
    width: 100,
    height: 200,
    backgroundColor: "#3BFFF3",
  },
  image: {
    width: 410,
    height: 250,
  },
});

export default Dashboard;

/*const Checkbox = ({ label, isChecked, onPress }) => {
  const checkmark = isChecked ? '☑' : '☐';

  return (
    <TouchableOpacity onPress={onPress} style={styles.checkboxContainer}>
      <Text style={styles.checkboxText}>{checkmark}</Text>
      <Text style={styles.checkboxLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxText: {
    marginRight: 10,
    fontSize: 20,
  },
  checkboxLabel: {
    fontSize: 16,
  },
});*/
