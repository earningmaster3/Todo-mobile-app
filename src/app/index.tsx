import { Link } from "expo-router";
import { Text, View } from "react-native";
export default function Index() {
  return (
    <View>
      <Text className="text-red-400">Hello world Its working fine</Text>
      <Link href="/about">Go to about</Link>
    </View>
  );
}
