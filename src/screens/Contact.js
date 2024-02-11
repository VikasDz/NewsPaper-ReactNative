import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
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

const Contact = ({ navigation }) => {
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);

  const submit = () => {
      Alert.alert(`Thank You ${name}`);
      navigation.navigate("Home");
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Contacts Us </Text>

      <Text style={styles.description}>
        You can reach us using hiring@thebharat.news
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter your name </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={"Name"}
          value={name}
          onChangeText={(userdata) => setName(userdata)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter your Email </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={"YourEmail@gmail.com"}
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter your mobile </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={"+91223456987"}
          value={phone}
          onChangeText={(phone) => setPhone(phone)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> How can we help you? </Text>
        <TextInput
          style={[styles.inputStyle, styles.multilineStyle]}
          placeholder={"Send Us Message"}
          value={message}
          onChangeText={(msg) => setMessage(msg)}
          numberOfLines={5}
          multiline={true}
        />
      </View>

      {/* checkbox  */}

      <View style={styles.wrapper}>
        <Checkbox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "#4630EB" : undefined}
        />
        <Text style={styles.wrapperText}>
          I have read and agreed with the TC
        </Text>
      </View>

      {/* submit button  */}

      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            backgroundColor: agree ? "#4630EB" : "grey",
          },
        ]}
        disabled={!agree}
        onPress={submit}>
        <Text style={styles.buttonText}> Contact Us </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 24,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    fontFamily: "Inter_500Medium",
    textTransform: "capitalize",
  },
  description: {
    fontSize: 18,
    color: "#7d7d7d",
    paddingBottom: 20,
    fontFamily: "Inter_500Medium",
    lineHeight: 25,
  },

  inputContainer: {
    marginTop: 20,
  },
  labels: {
    // fontWeight: "bold",
    fontSize: 15,
    color: "#7d7d7d",
    paddingBottom: 5,
    fontFamily: "Inter_500Medium",
    lineHeight: 25,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.3)",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 2,
  },
  multiineStyle: {
    paddingVertical: 4,
  },
  buttonStyle: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  buttonText: {
    color: "#eee",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    fontFamily: "Inter_500Medium",
  },
  wrapperText: {
    marginLeft: 10,
    color: "#7d7d7d",
    fontFamily: "Inter_500Medium",
  },
});

export default Contact;
