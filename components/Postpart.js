import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  StatusBar,
  Platform,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import { posts } from "../data/posts";
const numColumns = 2;

export default function Post() {
  renderItem = ({ item, index }) => (
    <View style={styles.imgContainer} key={index}>
      <Image source={{ uri: item.img }} style={styles.postcss} />
      <View style={styles.imgTxtContainer}>
        <Text style={styles.imgTxt}>Hello</Text>
      </View>
    </View>
  );
  return (
    <View style={styles.postContainer}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        numColumns={numColumns}
        snapToAlignment="start"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  imgContainer: {
    marginTop: 15,
    // marginLeft: 30,
    margin: 10,
    marginBottom: 7,
    marginLeft: 15,
    position: "relative",
  },
  imgTxt: {
    color: "white",
    fontSize: 15,
  },
  imgTxtContainer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(28, 28, 28, 0.7)",
    width: "100%",
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  postContainer: {
    marginBottom: 250,
  },
  postcss: {
    width: 170,
    height: 170,
    borderRadius: 15,
    borderWidth: 10,
  },
});

{
  /* {
          posts.map((post, index)=>(
            <View key={index}>
              <Image source={{uri: post.img}} style={styles.postcss} />
              <Image source={{uri: post.img}} style={styles.postcss} />
            </View>
          )
          )
      } */
}
