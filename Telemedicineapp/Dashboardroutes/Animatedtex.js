import React, { useState, useEffect } from "react";
import {
  View,
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  Image,
} from "react-native";
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
        Welcome to Phitexmedik Hospital
      </Text>
    </Animated.View>
  );
};

export default AnimatedGlowText;
