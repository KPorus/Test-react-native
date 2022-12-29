import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert
} from "react-native";
import Home from "./component/Home";

export default function App() {
  const presss = () => console.log("img tapp.");
  const button = () => Alert.alert("Enter your name: ","What's your name?",[
    {text:"yes", onPress:()=>console.log(true)},
    {text:"No", onPress:()=>console.log(false)}
  ])
  // work on ios---
  // const button2 = ()=> Alert.prompt("Name","Enter your name: ", (text)=>console.log(text))
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.head}>Fardin app take 2</Text>
      <Home></Home>
      <TouchableHighlight onPress={presss}>
        <Image
          blurRadius={10}
          fadeDuration={1000}
          source={{
            uri: "https://i.ibb.co/w0FrFJ9/278854293-1179554172585001-7231110429610493486-n.jpg",
          }}
          style={styles.img}></Image>
      </TouchableHighlight>
      <Button
        title='Click me'
        onPress={button}
        color="orange">
        </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    alignItems: "center",
  },
  head: {
    fontSize: 25,
    color: "#ffff",
    paddingTop: 20,
  },
  img: {
    width: 300,
    height: 500,
  },
});
