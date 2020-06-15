import React, { useRef } from "react";
import styled from "styled-components";
import { Animated } from "react-native";
const First = () => {
  let fadeAnim = useRef(new Animated.Value(0)).current;
  fadeAnim.setValue(1);
  const fadeOut = () => {
    console.log("fading out ");

    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
    }).start();
  };
  const fadeIn = () => {
    console.log("fading in ");
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
    }).start();
  };

  return (
    <Background
      onPress={() => (fadeAnim.__getValue() === 1 ? fadeOut() : fadeIn())}
    >
      <Animated.View style={{ opacity: fadeAnim }}>
        <Text>Click me for fade </Text>
      </Animated.View>
    </Background>
  );
};
export default First;
const Background = styled.TouchableOpacity`
  border: 2px solid purple;
`;
const Text = styled.Text``;
