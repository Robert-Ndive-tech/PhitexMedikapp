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

const Assistantpage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.container}>MEdik's AI Assistant</Text>
      <ChatBox />
    </View>
  );
};

export default Assistantpage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00AAAA",
    alignItems: "Top",
    justifyContent: "center",
    marginTop: "20px",
    marginBottom: 1,
    padding: 5,
    color: "white",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  container1: {
    flex: 10,
    backgroundColor: "#fff",
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

  messageList: {
    flex: 2,
    padding: 10,
  },
  message: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  senderMessage: {
    backgroundColor: "green",
    color: "white",
    marginLeft: "25%",
  },
  receiverMessage: {
    backgroundColor: "green",
    color: "#fff",
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 5,
  },
  sendButton: {
    marginLeft: 10,
  },
  sendButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
  },
});

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");

  const sendMessage = () => {
    if (messageText.trim() !== "") {
      setMessages([...messages, { text: messageText, isSender: true }]);
      setMessageText("");
    }
  };

  const handleReceiveMessage = (message) => {
    setMessages([...messages, { text: message, isSender: false }]);
  };

  return (
    <View style={styles.container1}>
      <View style={styles.messageList}>
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.message,
              message.isSender ? styles.senderMessage : styles.receiverMessage,
            ]}
          >
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Type your message..."
          value={messageText}
          onChangeText={setMessageText}
        />
        <View style={styles.sendButton}>
          <Text style={styles.sendButtonText} onPress={sendMessage}>
            Send
          </Text>
        </View>
      </View>
    </View>
  );
};
