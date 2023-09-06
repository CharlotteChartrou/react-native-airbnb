import { useState, useEffect } from "react";
import { Button, Text, View, FlatList, Image } from "react-native";
import axios from "axios";
import { Entypo } from '@expo/vector-icons';

export default function HomeScreen() {


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
        <Text>Chargement...</Text>
      ) : (
    <View>
      <Text>Home</Text>
  <FlatList

data = {data}

keyExtractor={item => String(item._id)}
renderItem={({ item }) => {
console.log("ici---->", item.user.account.photo.url)

  return (
<View> 
  <Text>{item.price}€</Text>
<Text>{item.title}</Text>
<Text>{item.photos[1].url}</Text>
<Image source={item.photos[1].url}/>

{/*  <FlatList
 data = {item.photos}
 keyExtractor= {photos => String(photos.picture_id)}
 renderPhotos={({photos})=> {
console.log(photos.url[1])
return (
  <View> 
  <Text>{photos.url[1]}</Text>
  </View>
)

 }}

 /> */}
<Image />
<Entypo name="star" size={24} color="black" />
<Entypo name="star-outlined" size={24} color="black" />
<Text>{item.reviews} reviews</Text>

<Image source={item.user.account.photo.url}/>

 

</View>
  )
}}


/>  
    </View> 

  )
      }
  </>)

}

