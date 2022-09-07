import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { container, form } from "../styles";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignIn = () => {
    console.log("User signed In");
  };

  return (
    <View style={container.center}>
      <View style={container.formCenter}>
        <TextInput
          value={email}
          style={form.textInput}
          placeholder="email"
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          value={password}
          style={form.textInput}
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />

        <Button
          style={form.button}
          onPress={() => onSignIn()}
          title="Sign In"
        />
      </View>

      <View style={form.bottomButton}>
        <Text
          title="RegisterScreen"
          onPress={() => navigation.navigate("RegisterScreen")}
        >
          Don't have an account? SignUp.
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
