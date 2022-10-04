import { StatusBar } from "expo-status-bar";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.city}>
          <Text style={styles.cityName}>Suwon</Text>
        </View>
        <ScrollView
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.weather}
        >
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
        </ScrollView>
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
  weather: {},
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temp: { color: "gray", marginTop: 50, fontSize: 178 },
  description: { color: "gray", marginTop: -30, fontSize: 60 },
});
