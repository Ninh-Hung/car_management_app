import { Text, TextInput, View } from "react-native";

const SearchBar = () => (
  <View className="p-4">
    <View className="bg-gray-200 rounded-xl p-3 flex-row items-center">
      <TextInput
        className="flex-1 text-lg text-gray-700"
        placeholder="Search vehicles..."
        placeholderTextColor="#9ca3af"
      />
    </View>
  </View>
);

export default SearchBar;