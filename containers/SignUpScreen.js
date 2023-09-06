import { Button, TouchableOpacity, Text, TextInput, View } from "react-native";
import { useState } from "react";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

export default function SignUpScreen({ setToken }) {

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] =useState("");
  
const handleSignup = async () => {

if (email && username && description && password && confirmPassword) {
  if (password === confirmPassword) {
    try { const {data} = await axios.post(
    "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/sign_up",
    {
      email,
      username,
      description,
      password,
    }
  ); 
  
console.log(data);


AsyncStorage.setItem("user", JSON.stringify(data));
const user = await AsyncStorage.setItem("user");
console.log("newuser -->", user);

  } catch (error) { console.log(error.response.data.error);
  setErrorMessage(error.response.data.error);
  }

} else { setErrorMessage("Passwords are different");
} 
  
} else {
  console.log("Missing informations");
  setErrorMessage("Missing informations");
} 
}
  return (
    <KeyboardAwareScrollView>
      <View>
      
        <TextInput placeholder="Email" value={email} 
        onChangeText={(text)=> { setErrorMessage(""); setEmail(text)}} />
     
        <TextInput placeholder="Username" value={username} onChangeText={(text)=> { setErrorMessage("");setUsername(text)}}/>
      
        <TextInput placeholder="Description" value={description} onChangeText={(text)=>{ setErrorMessage(""); setDescription(text)}} />
   
        <TextInput placeholder="Password" secureTextEntry={true} value={password} onChangeText={(text)=>{ setErrorMessage(""); setPassword(text)}} />
       
        <TextInput placeholder="Password" secureTextEntry={true} value={confirmPassword} onChangeText={(text)=> { setErrorMessage(""); setConfirmPassword(text)}} />
      
       { errorMessage && <Text>{errorMessage}</Text>}
       
        <TouchableOpacity onPress={handleSignup}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
     
      </View>
    </KeyboardAwareScrollView>
  );
}
