import { Text, View, ActivityIndicator, FlatList, Image } from "react-native";
import { useRoute } from "@react-navigation/core";
import { useState, useEffect } from "react";
import axios from "axios";
import { Entypo } from '@expo/vector-icons';

export default function RoomScreen() {
    const { params } = useRoute();
    console.log(params)

 
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      const fecthData = async () => {
        const response = await axios.get(
          `https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms/${params}`
        );
        setData(response.data);
        setIsLoading(false);
     console.log(response.data)
      };
      fecthData();
    }, []);

    return  (
      <>
        {isLoading ? (
            <ActivityIndicator size="large" />
        ) : (<View>



<View> 
   <View>   
<Image style={{height: 300, 
    width: "100%", 
    resizeMode: "contain"}} source={{uri:data.photos[1].url}}   resizeMode="contain"/> 
<Text style={{height:60, with:120, position:"absolute", color:"white", backgroundColor:"black", fontSize:30, marginTop:200, padding:10}}>{data.price}€</Text>
    </View> 
    <Text>{data.title}</Text>

 <View style={{display:"flex", flexDirection:"row"}}>
  { Number(data.ratingValue) >= 1 ? (<Entypo name="star" size={24} color="#FFB000" />):( <Entypo name="star" size={24} color="#BBBBBB" />)}
  { Number(data.ratingValue) >=2 ? (<Entypo name="star" size={24} color="#FFB000" />):( <Entypo name="star" size={24} color="#BBBBBB" />)}
  { Number(data.ratingValue) >= 3 ? (<Entypo name="star" size={24} color="#FFB000" />):( <Entypo name="star" size={24} color="#BBBBBB" />)}
  { Number(data.ratingValue) >= 4 ? (<Entypo name="star" size={24} color="#FFB000" />):( <Entypo name="star" size={24} color="#BBBBBB" />)}
  { Number(data.ratingValue) === 5 ? (<Entypo name="star" size={24} color="#FFB000" />):( <Entypo name="star" size={24} color="#BBBBBB" />)}
<Text>{data.reviews} reviews</Text>
<Image style={{height: 70, 
    width: 70,
    borderRadius:50, 
    resizeMode: "contain"}} source={{uri:data.user.account.photo.url}}/>
  
</View>  
<Text numberOfLines={3}>{data.description}</Text>
<View>
    <Text>{data.user.account.username}</Text>
    <Text>{data.user.account.description}</Text>
</View>
</View>     
 </View>
  )
    
}</>)

}
