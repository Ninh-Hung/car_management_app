import { Text, TextInput, View } from "react-native";

const InputCustom = ({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType = 'default',
  required = false // 'required' is already here, we just need to use it
}: {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: string;
  required?: boolean;
}) => (
  <View className="mb-6">
    <Text className="text-gray-700 text-lg font-semibold mb-2">
      {label}
      {required && <Text className="text-red-500 ml-1">{" "}*</Text>} {/* Add asterisk if required */}
    </Text>
    <TextInput
      className="w-full p-4 bg-white rounded-xl border border-gray-300 text-lg text-gray-800"
      placeholder={placeholder}
      placeholderTextColor="#9ca3af"
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType as any} // Ensure keyboardType is correctly cast for TextInput
    />
  </View>
);

export default InputCustom;