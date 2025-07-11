import { Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold text-blue-500">Hello Tailwind + RN</Text>
      <TouchableOpacity className="mt-4 bg-blue-500 px-4 py-2 rounded">
        <Text className="text-white">Press Me</Text>
      </TouchableOpacity>
    </View>
  );
}