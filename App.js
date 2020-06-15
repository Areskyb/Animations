import * as React from "react";
import { StyleSheet, View } from "react-native";
import First from "./src/First";

export default function App() {
  return (
    <View style={styles.container}>
      <First />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});
