import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { collection, addDoc } from "firebase/firestore";
import { container, form } from "../styles";
import { db } from "../../App";

const RegisterScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [isValid, setIsValid] = useState(true);

  const onRegister = async () => {
    const auth = getAuth();

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (result) {
        const docRef = await addDoc(collection(db, "users"), {
          name,
          email,
        });
        console.log("Document written with ID: ", docRef.id);
      }
    } catch (error) {
      console.log(error.message);
    }
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <View style={container.center}>
      <View style={container.formCenter}>
        {/* <TextInput
                    style={form.textInput}
                    placeholder="Username"
                    value={username}
                    keyboardType="twitter"
                    onChangeText={(username) => setUsername(username)}
                /> */}
        <TextInput
          value={name}
          style={form.textInput}
          placeholder="name"
          onChangeText={(name) => setName(name)}
        />
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
          onPress={() => onRegister()}
          title="Register"
        />
      </View>

      {/* <View style={form.bottomButton} >
                <Text
                    onPress={() => props.navigation.navigate("LoginScreen")} >
                    Already have an account? SignIn.
                </Text>
            </View> */}
      {/* <Snackbar
                visible={isValid.boolSnack}
                duration={2000}
                onDismiss={() => { setIsValid({ boolSnack: false }) }}>
                {isValid.message}
            </Snackbar> */}
    </View>
  );
};

export default RegisterScreen;
