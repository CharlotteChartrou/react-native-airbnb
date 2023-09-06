import { useNavigation } from "@react-navigation/core";
import { Button, Text, TextInput, View, TouchableOpacity } from "react-native";
import axios from "axios";
import { useState } from "react";


export default function SignInScreen({ setToken }) {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

const handleSignIn = async () => {

  console.log(handleSignIn)
      
  const {data} = await axios.post(
    "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/log_in",
    {
      email,
      password,
    }
  );

setToken(data.token);
console.log(token)

} 

  return (
    <View>
      <View>
        <TextInput placeholder="Email" value={email} onChangeText={(text)=> setEmail(text)}/>
        <TextInput placeholder="Password" secureTextEntry={true} value={password} onChangeText={(text)=> setPassword(text)} />
     <TouchableOpacity onPress={handleSignIn}>
      <Text>Sign In </Text>
     </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text>Create an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
