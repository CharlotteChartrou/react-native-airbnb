import { useNavigation } from "@react-navigation/core";
import { Button, Text, View } from "react-native";

export default function map() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Welcome home!</Text>
      <Button
        title="Go to Profile"
        onPress={() => {
          navigation.navigate("Profile", { userId: 123 });
        }}
      />
    </View>
  );
}