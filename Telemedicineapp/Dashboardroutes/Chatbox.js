import React from "react";
import { useState } from 'react';
import { View, Text, StyleSheet } from "react-native";
import { View, TextInput, Button, FlatList, Message } from './Message'; 





// Replace with your component path

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage) {
      setMessages([...messages, { sender: 'You', content: newMessage, isSender: true }]);
      setNewMessage('');
    }
  };

  const renderItem = ({ item }) => <Message {...item} />;

  return (
    <View style={styles.chatbox}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        inverted // Display latest messages at the top
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Type your message..."
        />
        <Button title="Send" onPress={sendMessage} disabled={!newMessage} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    message: {
      padding: 10,
      margin: 5,
      borderRadius: 5,
    },
    sender: {
      fontWeight: "bold",
      marginBottom: 5,
    },
    messageText: {color:"green"},
    chatbox: {
      flex: 1,
    },
    inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  textInput: {
    flex: 1,
    marginRight: 10,},
  },
  
  

const Message = ({ sender, content, isSender }) => {
    const backgroundColor = isSender ? "green" : "blue";
    const messageStyle = [styles.message, { backgroundColor }];
  
    return (
      <View style={messageStyle}>
        <Text style={styles.sender}>{sender}</Text>
        <Text style={styles.messageText}>{content}</Text>
      </View>
    );


export default Chatbox;
