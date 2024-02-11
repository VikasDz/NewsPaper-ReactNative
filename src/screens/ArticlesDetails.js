import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import articles from "../api/NewApi";
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import AppLoading from "expo-app-loading";

const ArticlesDetails = ({ navigation, route }) => {
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_900Black,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }

  const id = route.params.articleId;
  console.log(id);

  const selectedArticles = articles.find((element) => {
    return id === element.id;
  });

  return (
    
    <View style={styles.mainContainer}>
      <View style={styles.ArticlesContainer}>
        <View>
          <Image
            style={styles.cardImage}
            source={{ uri: selectedArticles.urlToImage }}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.mainHeader}>{selectedArticles.title}</Text>

        <Text style={styles.description}>{selectedArticles.content}</Text>

      

        <View style={styles.buttonContainer}>
          <Text style={styles.price}> {selectedArticles.author} </Text>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate("Articles")}>
            <Text style={styles.buttonText}>Author 🧑 </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor: "red",
    paddingHorizontal: 20,
  },
  ArticlesContainer: {
    // height: "50%",
    // display: "flex",
    padding: 30,
    backgroundColor: "rgba(255, 255, 255, 0.90)",
    textAlign: "center",
    borderRadius: 5,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 30,
  },

  cardImage: {
    width: "100%",
    display: "flex",
    alignSelf: "center",
    height: undefined,
    aspectRatio: 3,
  },

  mainHeader: {
    fontSize: 22,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "500",
    paddingTop: 10,
    paddingBottom: 15,
    fontFamily: "In",
    textAlign: "center",
  },

  subHeader: {
    fontSize: 18,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "500",
    paddingBottom: 15,
    fontFamily: "Inter_400Regular",
    textAlign: "center",
  },

  description: {
    textAlign: "center",
    fontSize: 16,
    color: "#7d7d7d",
    paddingBottom: 20,
    fontFamily: "Inter_400Regular",
    lineHeight: 20,
  },


  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  price: {
    backgroundColor: "#344055",
    color: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 1,
    borderTopLeftRadius: 1,
    fontSize: 20,
    fontFamily: "Inter_400Regular",
    textAlign: "center",
  },
  buttonStyle: {
    backgroundColor: "#809fff",
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#eee",
    fontFamily: "Inter_400Regular",
  },
});

export default ArticlesDetails;
