import { useState, useEffect } from "react";
import { ActivityIndicator, Text, View, FlatList, Image, ScrollView, TouchableOpacity } from "react-native";
import axios from "axios";
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/core";

export default function HomeScreen() {
  const navigation = useNavigation();

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fecthData = async () => {
      const response = await axios.get(
        `https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms`
      );
      setData(response.data);

      setIsLoading(false);
    };
    fecthData();
  }, []);
/*   console.log("iciiiii ->", data); */





  return  (
    <>
      {isLoading ? (
          <ActivityIndicator size="large" />
      ) : (
        <>
<Image style={{width:30, height:30}} source={require("../assets/logo.png")}/>

        <ScrollView >
    
  <FlatList

data = {data}

keyExtractor={item => String(item._id)}
renderItem={({ item }) => {


  return (
<View> 
<TouchableOpacity onPress={() => navigation.push("Room", item._id)}>
  <View>   


<Image style={{height: 300, 
    width: "100%", 
    resizeMode: "contain"}} source={{uri:item.photos[1].url}}   resizeMode="contain"/> 
<Text style={{height:60, with:120, position:"absolute", color:"white", backgroundColor:"black", fontSize:30, marginTop:200, padding:10}}>{item.price}€</Text>
    </View>
<Text>{item.title}</Text>
<View style={{display:"flex", flexDirection:"row"}}>
  { Number(item.ratingValue) >= 1 ? (<Entypo name="star" size={24} color="#FFB000" />):( <Entypo name="star" size={24} color="#BBBBBB" />)}
  { Number(item.ratingValue) >=2 ? (<Entypo name="star" size={24} color="#FFB000" />):( <Entypo name="star" size={24} color="#BBBBBB" />)}
  { Number(item.ratingValue) >= 3 ? (<Entypo name="star" size={24} color="#FFB000" />):( <Entypo name="star" size={24} color="#BBBBBB" />)}
  { Number(item.ratingValue) >= 4 ? (<Entypo name="star" size={24} color="#FFB000" />):( <Entypo name="star" size={24} color="#BBBBBB" />)}
  { Number(item.ratingValue) === 5 ? (<Entypo name="star" size={24} color="#FFB000" />):( <Entypo name="star" size={24} color="#BBBBBB" />)}
<Text>{item.reviews} reviews</Text>
<Image style={{height: 70, 
    width: 70,
    borderRadius:50, 
    resizeMode: "contain"}} source={{uri:item.user.account.photo.url}}/>
</View>  
    </TouchableOpacity>
</View>
  )
}}


/>  
    </ScrollView>

  </>)
      }
  </>)

}

