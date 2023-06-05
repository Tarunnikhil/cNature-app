import { StyleSheet, SafeAreaView, ImageBackground, Alert } from "react-native";
import Button from "../assets/button";

const Home = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/plant.jpg")}
        style={styles.backgoundImage}
      >
        <Button
          btnLabel="lets start"
          Press={() => props.navigation.navigate("Login")}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backgoundImage: {
    flex: 1,
    // resizeMode: 'cover',
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
export default Home;
