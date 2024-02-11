import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import AppLoading from "expo-app-loading";

const About = () => {
  let [fontsLoaded] = useFonts({
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

  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}>The Bharat News</Text>
      <View>
        <Image
          style={styles.imgStyle}
          source={{
            uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          }}
        />
      </View>

      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}> About me </Text>
        <Text style={[styles.paraStyle, styles.aboutPara]}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit. Aenean commodo ligula eget dolor. Soluta quam, dolore aperiam dolor laboriosam quod nisi blanditiis in perferendis doloremque fugiat ipsum doloribus reprehenderit? Maiores nam voluptate cum fuga, unde dicta numquam dolorum dignissimos amet accusantium praesentium illum ipsum! Atque numquam libero sunt voluptatibus consequatur assumenda officia sit excepturi aspernatur eaque sint necessitatibus officiis quaerat ipsum laborum perspiciatis vitae qu 
        </Text>
      </View>

     
    </View>
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    display: "flex",
    alignItems: "center",
  },

  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  mainHeader: {
    fontSize: 18,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "500",
    // marginTop: 50,
    marginTop: 40,
    marginBottom: 10,
    fontFamily: "Inter_500Medium",
  },
  paraStyle: {
    fontSize: 18,
    color: "#7d7d7d",
    paddingBottom: 30,
    fontFamily: "Inter_500Medium",
  },
  aboutLayout: {
    backgroundColor: "#4c5dab",
    paddingHorizontal: 30,
    // marginVertical: 30,
    marginTop: 20,
  },
  aboutSubHeader: {
    fontSize: 18,
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "500",
    marginVertical: 15,
    fontFamily: "Inter_500Medium",
    alignSelf: "center",
  },
  aboutPara: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Inter_400Regular",
    lineHeight: 26,
  },
  menuContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
});

export default About;
