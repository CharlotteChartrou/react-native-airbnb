import { useRoute } from "@react-navigation/core";
import { Text, View, Button } from "react-native";

export default function ProfileScreen() {
  const { params } = useRoute();
  return (
    <View>
      <Text>user id : </Text>
      <Button
        title="Log Out"
        onPress={() => {
          setToken(null);
        }}
      />
    </View>
  );
}
