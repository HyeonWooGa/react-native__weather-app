import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.city}>
          <Text style={styles.cityName}>Suwon</Text>
        </View>
        <View style={styles.weather}>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
        </View>
      </View>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black" },
  city: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: { color: "gray", fontSize: 68, fontWeight: "600" },
  weather: { flex: 3 },
  day: {
    flex: 1,
    alignItems: "center",
  },
  temp: { color: "gray", marginTop: 50, fontSize: 178 },
  description: { color: "gray", marginTop: -30, fontSize: 60 },
});
