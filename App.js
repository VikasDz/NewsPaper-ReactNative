import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Contact from "./src/screens/Contact";
import Articles from "./src/screens/Articles";
import About from "./src/screens/About";
import ArticlesDetails from "./src/screens/ArticlesDetails";
import {
  useFonts,
  Inter_700Bold,
 
} from '@expo-google-fonts/inter';
import AppLoading from "expo-app-loading";

export default function App() {
  const Stack = createNativeStackNavigator();

  let [fontsLoaded] = useFonts({
    useFonts,
    Inter_700Bold,

  });

  if (!fontsLoaded) {
    <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Articles">
  
        <Stack.Screen
          name="Articles"
          component={Articles}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Inter_700Bold",
            },
            headerTitle: "Articles",
            headerTitleAlign: "center",
          }}
        />

  
    
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              // fontFamily: "Inter_700Bold",
            },
            headerTitleAlign: "center",
          }}
        />

         <Stack.Screen
          name="About"
          component={About}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Inter_700Bold",
            },
            headerTitleAlign: "center",
          }}
        />

      
        <Stack.Screen
          name="ArticlesDetails"
          component={ArticlesDetails}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Inter_700Bold",
            },
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
