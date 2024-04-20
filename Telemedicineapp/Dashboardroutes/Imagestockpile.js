import React, { useState, useEffect } from "react";
import {
  View,
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  Image,
  Alert,
  Button,
  TextInput,
} from "react-native";
import m1 from "../../assets/medik1.png";
import m2 from "../../assets/medik2.png";
import m3 from "../../assets/medik3.png";
import m4 from "../../assets/medik4.png";
const imageWidth = 100; // Adjust image width as needed
const imageGap = 10; // Adjust gap between images as needed

const ImageCarousel = () => {
  const [images] = useState([
    m1, // Replace with your image source (local file)
    m2, // Replace with your image source (local file)
    m3,
    m4, // Replace with your image source (local file)
  ]);

  const [translateX] = useState(new Animated.Value(1));

  const animate = () => {
    Animated.timing(translateX, {
      toValue: -(images.length * imageWidth + (images.length - 1) * imageGap),
      duration: 5000, // Adjust animation duration as needed
      useNativeDriver: true,
    }).start(() => translateX.setValue(0)); // Reset to beginning after animation
  };

  const move = () => {
    const interval = setInterval(animate, 1000); // Animate every 2 seconds
    return () => clearInterval(interval); // Clear interval on unmount
  };
  const imageStyle = {
    width: imageWidth,
    height: 100, // Adjust image height as needed
    marginRight: imageGap,
  };

  return (
    <View style={styles.containerStyle}>
      <AnimatedGlowText />
      <View>
        <Animated.FlatList
          data={images}
          keyExtractor={(item) => item.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Image source={item} style={styles.imageStyle} />
          )}
          contentContainerStyle={{ transform: [{ translateX }] }}
        />
      </View>
      <NotificationBoxExample />
    </View>
  );
};
const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "column",
    flex: 1,
    overflow: "hidden",
    alignContent: "center",

    backgroundColor: "#273b45",
  },
  imageStyle: {
    width: 300,
    height: 300,
    marginRight: 10,
  },
  notificationBox: {
    position: "absolute", // Position the notification box strategically (e.g., top-right corner)
    top: 20, // Adjust position
    right: 80, // Adjust position
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  notificationText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  dismissButton: {
    marginTop: 5,
    padding: 5,
  },
  TextInput: {
    width: "80%",
    height: 40,
  },
});

const AnimatedGlowText = () => {
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    const animate = () => {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(opacity, {
          toValue: 0.5,
          duration: 1000,
          useNativeDriver: true,
        }).start(animate);
      });
    };

    animate();

    return () => opacity.stopAnimation(); // Stop animation on unmount
  }, [opacity]);

  return (
    <Animated.View style={{ opacity }}>
      <Text
        style={{
          fontSize: 25,
          color: "white",
          textShadowColor: "black",
          textShadowOffset: { width: 0, height: 0 },
          textShadowRadius: 10,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        We bring You A vast enviroment of of nursing services with love and care
        to provide an serve you with the right needs of healthcare at your
        doorstep!
      </Text>
    </Animated.View>
  );
};

export default ImageCarousel;

const AlertBoxExample = () => {
  const showAlert = () => {
    Alert.alert(
      "Alert Title", // Title of the alert box
      "messages sent,Do you need of our health care services", // Message to display
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }, // Single button
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        }, // Optional cancel button
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later Pressed"),
        }, // Optional additional button
      ],
      { cancelable: false } // Disable background dismissal (optional)
    );
  };

  return <Button title="Talk to us" onPress={showAlert} />;
};
//NOTIFICATION BOX
const NotificationBoxExample = () => {
  const [showNotification, setShowNotification] = useState(false);
  const notificationText = "You have a new message!";
  const [isVisible, setIsVisible] = useState(false);
  const hideNotification = () => {
    setShowNotification(false);
    Alert.alert(
      "Alert Title", // Title of the alert box
      "messages sent,Do you need of our other health care services", // Message to display
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }, // Single button
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        }, // Optional cancel button
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later Pressed"),
        }, // Optional additional button
      ],
      { cancelable: false } // Disable background dismissal (optional)
    );
  };

  return (
    <>
      {showNotification && (
        <View style={styles.notificationBox}>
          <Text style={styles.notificationText}>{notificationText}</Text>
          <TextInput placeholder="Send Reply" style={styles.TextInput} />
          <Button
            title="Send"
            onPress={hideNotification}
            style={styles.dismissButton}
          />
        </View>
      )}

      <Button
        title="Show Notification"
        onPress={() => setShowNotification(true)}
      />
    </>
  );
};
