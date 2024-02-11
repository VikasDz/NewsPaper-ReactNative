import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import articles from "../api/NewApi";
import Menu from "../component/Menu";
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

const Articles = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }

  const articleCard = ({ item }) => {
    return (
      <>
    
      <View style={styles.mainContainer}>

        <View style={styles.ArticlesContainer}>
          <View>
            <Image
              style={styles.cardImage}
              source={{ uri: item.urlToImage }} 
            />
          </View>

          <Text style={styles.mainHeader}>{item.title}</Text>
          <Text style={styles.authorData}>{item.author}</Text>
          <Text style={styles.authorData}>{item.publishedAt}</Text>

          <Text style={styles.description}>{item.description}</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() =>
                navigation.navigate("ArticlesDetails", {
                  articleId: item.id,
                })
              }>
              <Text style={styles.buttonText}> Articles Details </Text>
            </TouchableOpacity>
          </View>
        </View>     
      </View>
       
      </>
    );
  };

  return (

    <>
    <Text style={styles.aboutSubHeader}> News Paper 🗞 </Text>

     <FlatList
      keyExtractor={(item) => item.id}
      data={articles}
      renderItem={articleCard}
      
    />
    <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu />
        <View
          style={[
            styles.lineStyle,
            {
              marginVertical: 10,
            },
          ]}></View>
      </View>
    </>
   
    
  );
};

const styles = StyleSheet.create({

  cardImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  aboutSubHeader: {
    fontSize: 18,
    color: "black",
    textTransform: "uppercase",
    fontWeight: "500",
    marginVertical: 15,
    fontFamily: "Inter_500Medium",
    alignSelf: "center",
  },
  mainContainer: {
    paddingHorizontal: 20,
  },
  ArticlesContainer: {
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
  mainHeader: {
    fontSize: 22,
    color: "#344055",
    textTransform: "uppercase",
    // fontWeight: 500,
    paddingBottom: 15,
    textAlign: "center",
    fontFamily: "Inter_500Medium",
  },
  description: {
    textAlign: "left",
    fontFamily: "Inter_200ExtraLight",
    paddingBottom: 15,
    lineHeight: 20,
    fontSize: 16,
    color: "#7d7d7d",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonStyle: {
    backgroundColor: "#809fff",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#eee",
    fontFamily: "Inter_500Medium",
    textTransform: "capitalize",
  },
});

export default Articles;
