import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./components/auth/LoginScreen";
// import { initializeApp } from "firebase/app";
import RegisterScreen from "./components/auth/RegisterScreen";
import { LogBox } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";

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

// initialize auth
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// export { auth };
  
// LogBox.ignoreLogs([
//   "Warning: Async Storage has been extracted from react-native core",
// ]);

const Stack = createStackNavigator();

const App = () => {
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
};

export default App;
