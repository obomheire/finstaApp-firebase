import react, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./components/auth/LoginScreen";
import RegisterScreen from "./components/auth/RegisterScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";
import { View, Text } from "react-native";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjxBd-aLj2JQjPBzr62sMzc8KKrBM2pe8",
  authDomain: "finstaapp-a28c1.firebaseapp.com",
  projectId: "finstaapp-a28c1",
  storageBucket: "finstaapp-a28c1.appspot.com",
  messagingSenderId: "339177375378",
  appId: "1:339177375378:web:f506094c22a06439a9484b",
  measurementId: "G-RG2HB06FDV",
};
// initialize firebase app
const app = initializeApp(firebaseConfig);

// initialize asyncAuth
export const asyncAuth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// initialize auth
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
  } else {
  }
});

const Stack = createStackNavigator();

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        setLoggedIn(false);
        setLoaded(true);
      } else {
        setLoggedIn(true);
        setLoaded(true);
      }
    });
  }, []);
  
  if (!loaded) { 
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!loggedIn) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>User Logged In</Text>
    </View>
  );
};

export default App;
