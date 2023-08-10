import { StatusBar } from "expo-status-bar";
import * as Updates from "expo-updates";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>EAS CHANNEL: {Updates.channel}</Text>
      <Text>EAS RELEASE CHANNEL: {Updates.releaseChannel}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
